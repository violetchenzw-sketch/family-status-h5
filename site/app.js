const config = window.FAMILY_APP_CONFIG || {};

const STATUS_CATALOG = [
  { id: "safe", label: "一切都好", shortLabel: "今天挺好的", emoji: "🏮" },
  { id: "busy", label: "今天很忙", shortLabel: "今天很忙", emoji: "💼" },
  { id: "home", label: "已经到家", shortLabel: "已经到家", emoji: "🏠" },
  { id: "rest", label: "准备休息", shortLabel: "准备休息", emoji: "🌙" },
  { id: "meal", label: "吃完饭了", shortLabel: "吃完饭了", emoji: "🍚" },
  { id: "road", label: "正在路上", shortLabel: "正在路上", emoji: "🚇" }
];

const REPLY_PRESETS = {
  tv: "收到！担心频道已切换成追剧频道 📺",
  call: "准奏！今晚免除夺命连环 Call ☎️"
};

const statusById = Object.fromEntries(STATUS_CATALOG.map((status) => [status.id, status]));
const members = Array.isArray(config.members) ? config.members : [];
const memberById = Object.fromEntries(members.map((member) => [member.id, member]));
const ownerPersonId = config.ownerPersonId || "me";

const elements = {
  siteName: document.querySelector("#site-name"),
  greeting: document.querySelector("#greeting"),
  familyGrid: document.querySelector("#family-grid"),
  statusGrid: document.querySelector("#status-grid"),
  activityList: document.querySelector("#activity-list"),
  activityCount: document.querySelector("#activity-count"),
  syncLine: document.querySelector(".sync-line"),
  syncIcon: document.querySelector("#sync-icon"),
  syncCopy: document.querySelector("#sync-copy"),
  openEditor: document.querySelector("#open-editor"),
  closeEditor: document.querySelector("#close-editor"),
  backdrop: document.querySelector("#sheet-backdrop"),
  sheet: document.querySelector("#edit-sheet"),
  memberPicker: document.querySelector("#member-picker"),
  sheetStatusGrid: document.querySelector("#sheet-status-grid"),
  form: document.querySelector("#status-form"),
  code: document.querySelector("#family-code"),
  submit: document.querySelector("#submit-status"),
  quickSafe: document.querySelector("#quick-safe"),
  toast: document.querySelector("#toast"),
  replyPanel: document.querySelector(".reply-panel"),
  replyForm: document.querySelector("#reply-form"),
  replyInput: document.querySelector("#reply-input"),
  sendReply: document.querySelector("#send-reply"),
  replyList: document.querySelector("#reply-list"),
  latestRepliesSection: document.querySelector("#latest-replies-section")
};

let state = null;
let selectedPersonId = ownerPersonId;
let selectedStatusId = "safe";
let storageMode = "live";
let toastTimer = null;
let selectedReplyPersonId = "mom";

function createFallbackState() {
  const now = Date.now();
  return {
    version: 1,
    people: {
      me: { statusId: "home", updatedAt: new Date(now - 12 * 60 * 1000).toISOString() },
      mom: { statusId: "safe", updatedAt: new Date(now - 55 * 60 * 1000).toISOString() },
      dad: { statusId: "meal", updatedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString() }
    },
    activity: [
      { personId: "me", statusId: "home", updatedAt: new Date(now - 12 * 60 * 1000).toISOString() },
      { personId: "mom", statusId: "safe", updatedAt: new Date(now - 55 * 60 * 1000).toISOString() },
      { personId: "dad", statusId: "meal", updatedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString() }
    ],
    replies: []
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getStatus(statusId) {
  return statusById[statusId] || statusById.safe;
}

function getMember(personId) {
  return memberById[personId] || {
    id: personId,
    name: "家人",
    shortName: "家",
    color: "olive"
  };
}

function formatClock(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function formatDay(value) {
  const date = new Date(value);
  const now = new Date();
  if (Number.isNaN(date.getTime())) return "今天";

  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const days = Math.round((start - target) / 86400000);

  if (days <= 0) return "今天";
  if (days === 1) return "昨天";
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatRelative(value) {
  const time = new Date(value).getTime();
  if (Number.isNaN(time)) return "刚刚更新";
  const seconds = Math.max(0, Math.floor((Date.now() - time) / 1000));
  if (seconds < 60) return "刚刚更新";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} 分钟前更新`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} 小时前更新`;
  return `${formatDay(value)}更新`;
}

function renderPeople() {
  elements.familyGrid.innerHTML = members.map((member) => {
    const personState = state?.people?.[member.id] || { statusId: "safe", updatedAt: new Date().toISOString() };
    const status = getStatus(personState.statusId);
    const featured = member.featured ? " featured" : "";

    return `
      <article class="person-card${featured}">
        <div class="person-top">
          <div class="person-avatar ${escapeHtml(member.color || "olive")}" aria-hidden="true">${escapeHtml(member.shortName || member.name.slice(0, 1))}</div>
          <h3 class="person-name">${escapeHtml(member.name)}</h3>
        </div>
        <p class="person-status"><span class="status-dot" aria-hidden="true"></span>${escapeHtml(status.shortLabel)}</p>
        <p class="person-time">${escapeHtml(formatRelative(personState.updatedAt))} · ${escapeHtml(formatClock(personState.updatedAt))}</p>
        <span class="person-emoji" aria-hidden="true">${status.emoji}</span>
      </article>
    `;
  }).join("");
}

function renderStatusOptions() {
  elements.statusGrid.innerHTML = STATUS_CATALOG.map((status) => `
    <button class="status-option" type="button" data-status-id="${status.id}">
      <span aria-hidden="true">${status.emoji}</span>
      <span>${escapeHtml(status.label)}</span>
    </button>
  `).join("");

  elements.sheetStatusGrid.innerHTML = STATUS_CATALOG.map((status) => `
    <button class="sheet-status-option${status.id === selectedStatusId ? " selected" : ""}" type="button" data-sheet-status-id="${status.id}" aria-pressed="${status.id === selectedStatusId}">
      <span aria-hidden="true">${status.emoji}</span>
      <span>${escapeHtml(status.label)}</span>
    </button>
  `).join("");
}

function renderMemberPicker() {
  elements.memberPicker.innerHTML = members.map((member) => `
    <button class="member-choice${member.id === selectedPersonId ? " selected" : ""}" type="button" data-person-id="${member.id}" aria-pressed="${member.id === selectedPersonId}">
      ${escapeHtml(member.name)}
    </button>
  `).join("");
}

function renderActivity() {
  const activities = Array.isArray(state?.activity) ? state.activity.slice(0, 8) : [];
  elements.activityCount.textContent = activities.length ? `最近 ${activities.length} 条` : "";

  if (!activities.length) {
    elements.activityList.innerHTML = '<div class="activity-row"><p class="activity-title">还没有打卡记录</p></div>';
    return;
  }

  elements.activityList.innerHTML = activities.map((item) => {
    const member = getMember(item.personId);
    const status = getStatus(item.statusId);
    return `
      <div class="activity-row">
        <div class="activity-icon" aria-hidden="true">${status.emoji}</div>
        <div class="activity-main">
          <p class="activity-title">${escapeHtml(member.name)} · ${escapeHtml(status.shortLabel)}</p>
          <p class="activity-subtitle">${escapeHtml(formatDay(item.updatedAt))}打卡</p>
        </div>
        <time class="activity-clock" datetime="${escapeHtml(item.updatedAt)}">${escapeHtml(formatClock(item.updatedAt))}</time>
      </div>
    `;
  }).join("");
}

function renderReplies() {
  const replies = Array.isArray(state?.replies) ? state.replies.slice(0, 5) : [];
  elements.latestRepliesSection.hidden = replies.length === 0;
  if (!replies.length) {
    elements.replyList.innerHTML = "";
    return;
  }

  elements.replyList.innerHTML = replies.map((reply) => {
    const member = getMember(reply.fromPersonId);
    return `
      <article class="reply-bubble">
        <div class="reply-bubble-avatar ${escapeHtml(member.color || "olive")}" aria-hidden="true">${escapeHtml(member.shortName || member.name.slice(0, 1))}</div>
        <div>
          <p><strong>${escapeHtml(member.name)}</strong><time datetime="${escapeHtml(reply.createdAt)}">${escapeHtml(formatRelative(reply.createdAt))}</time></p>
          <blockquote>${escapeHtml(reply.message)}</blockquote>
        </div>
      </article>
    `;
  }).join("");
}

function renderAll() {
  renderPeople();
  renderActivity();
  renderReplies();
}

function currentOwnerStatusLabel() {
  const ownerState = state?.people?.[ownerPersonId];
  return getStatus(ownerState?.statusId || "safe").shortLabel;
}

function setReplyPerson(personId) {
  selectedReplyPersonId = personId;
  document.querySelectorAll("[data-reply-person]").forEach((button) => {
    const selected = button.dataset.replyPerson === personId;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

async function sendFamilyReply({ presetId = "", message = "" } = {}) {
  if (storageMode === "local") {
    const replyMessage = REPLY_PRESETS[presetId] || message;
    const reply = {
      id: `local-${Date.now()}`,
      fromPersonId: selectedReplyPersonId,
      message: replyMessage,
      presetId: presetId || null,
      replyingTo: currentOwnerStatusLabel(),
      createdAt: new Date().toISOString()
    };
    state = {
      ...(state || getLocalState()),
      replies: [reply, ...(state?.replies || [])].slice(0, 12)
    };
    setLocalState(state);
    renderReplies();
    return false;
  }

  const response = await fetch("/api/reply", {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      fromPersonId: selectedReplyPersonId,
      presetId,
      message,
      replyingTo: currentOwnerStatusLabel()
    })
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || "回复暂时没送出去");
  state = body.state;
  renderReplies();
  return body.notificationSent;
}

function updateSyncLine(mode, message) {
  storageMode = mode;
  elements.syncLine.dataset.mode = mode;
  elements.syncIcon.classList.toggle("loading", mode === "loading");
  elements.syncIcon.textContent = mode === "local" ? "⌁" : mode === "live" ? "●" : "↻";
  elements.syncCopy.textContent = message;
}

function getLocalState() {
  try {
    const saved = window.localStorage.getItem("family-status-preview-v1");
    return saved ? JSON.parse(saved) : createFallbackState();
  } catch {
    return createFallbackState();
  }
}

function setLocalState(nextState) {
  try {
    window.localStorage.setItem("family-status-preview-v1", JSON.stringify(nextState));
  } catch {
    // The visual preview still works when storage is unavailable.
  }
}

async function loadState({ quiet = false } = {}) {
  if (!quiet) updateSyncLine("loading", "正在看看大家的近况…");

  try {
    const response = await fetch("/api/status", {
      headers: { accept: "application/json" },
      cache: "no-store"
    });
    if (!response.ok) throw new Error("sync unavailable");
    state = await response.json();
    updateSyncLine("live", `已同步 · ${formatClock(new Date())}`);
  } catch {
    if (!state) state = getLocalState();
    updateSyncLine("local", "本机预览 · 部署后会跨手机同步");
  }

  renderAll();
}

function openEditor({ personId = ownerPersonId, statusId = "safe" } = {}) {
  selectedPersonId = personId;
  selectedStatusId = statusId;
  renderMemberPicker();
  renderStatusOptions();
  elements.sheet.hidden = false;
  elements.backdrop.hidden = false;
  document.body.classList.add("sheet-open");
  window.setTimeout(() => elements.code.focus(), 160);
}

function closeEditor() {
  elements.sheet.hidden = true;
  elements.backdrop.hidden = true;
  document.body.classList.remove("sheet-open");
  elements.openEditor.focus();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 2600);
}

function applyLocalUpdate(personId, statusId) {
  const updatedAt = new Date().toISOString();
  const current = state || getLocalState();
  const nextState = {
    ...current,
    people: {
      ...current.people,
      [personId]: { statusId, updatedAt }
    },
    activity: [
      { personId, statusId, updatedAt },
      ...(current.activity || [])
    ].slice(0, 20)
  };
  state = nextState;
  setLocalState(nextState);
  return nextState;
}

async function submitStatus({ personId, statusId, code }) {
  if (storageMode === "local") {
    if (String(code) !== "5200") {
      throw new Error("家庭口令不对，再试一次");
    }
    applyLocalUpdate(personId, statusId);
    renderAll();
    return;
  }

  const response = await fetch("/api/status", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ personId, statusId, code })
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.message || "暂时没同步成功，请稍后再试");
  }

  state = body;
  renderAll();
  updateSyncLine("live", `刚刚同步 · ${formatClock(new Date())}`);
}

elements.openEditor.addEventListener("click", () => openEditor());
elements.closeEditor.addEventListener("click", closeEditor);
elements.backdrop.addEventListener("click", closeEditor);

elements.quickSafe.addEventListener("click", () => {
  openEditor({ personId: ownerPersonId, statusId: "safe" });
});

elements.statusGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-status-id]");
  if (!button) return;
  openEditor({ personId: ownerPersonId, statusId: button.dataset.statusId });
});

elements.replyPanel.addEventListener("click", async (event) => {
  const personButton = event.target.closest("[data-reply-person]");
  if (personButton) {
    setReplyPerson(personButton.dataset.replyPerson);
    return;
  }

  const presetButton = event.target.closest("[data-preset-id]");
  if (!presetButton) return;
  presetButton.disabled = true;
  try {
    const sent = await sendFamilyReply({ presetId: presetButton.dataset.presetId });
    showToast(sent ? "回话已送达，还给你发了提醒 🔔" : "回话已留在页面，提醒通道待配置");
  } catch (error) {
    showToast(error.message || "回复暂时没送出去");
  } finally {
    presetButton.disabled = false;
  }
});

elements.replyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = elements.replyInput.value.trim();
  if (!message) {
    showToast("先写一句话再发送");
    return;
  }

  elements.sendReply.disabled = true;
  elements.sendReply.textContent = "发送中";
  try {
    const sent = await sendFamilyReply({ message });
    elements.replyInput.value = "";
    showToast(sent ? "你的话已送达，还给你发了提醒 🔔" : "回复已留在页面，提醒通道待配置");
  } catch (error) {
    showToast(error.message || "回复暂时没送出去");
  } finally {
    elements.sendReply.disabled = false;
    elements.sendReply.textContent = "发送";
  }
});

elements.memberPicker.addEventListener("click", (event) => {
  const button = event.target.closest("[data-person-id]");
  if (!button) return;
  selectedPersonId = button.dataset.personId;
  renderMemberPicker();
});

elements.sheetStatusGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sheet-status-id]");
  if (!button) return;
  selectedStatusId = button.dataset.sheetStatusId;
  renderStatusOptions();
});

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const code = elements.code.value.trim();
  if (!code) {
    showToast("先输入家庭口令");
    return;
  }

  elements.submit.disabled = true;
  elements.submit.textContent = "正在给家里亮灯…";

  try {
    await submitStatus({ personId: selectedPersonId, statusId: selectedStatusId, code });
    const member = getMember(selectedPersonId);
    const status = getStatus(selectedStatusId);
    closeEditor();
    showToast(`${member.name}已更新：${status.emoji} ${status.shortLabel}`);
  } catch (error) {
    showToast(error.message || "暂时没同步成功");
  } finally {
    elements.submit.disabled = false;
    elements.submit.textContent = "点亮给家人看";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.sheet.hidden) closeEditor();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") loadState({ quiet: true });
});

elements.siteName.textContent = config.siteName || "家里亮着灯";
if (Array.isArray(config.greetingLines) && config.greetingLines.length) {
  const greetingHtml = config.greetingLines
    .slice(0, 2)
    .map((line) => escapeHtml(line))
    .join("<br />");
  elements.greeting.innerHTML = `${greetingHtml} <span aria-hidden="true">🧡</span>`;
} else if (config.greeting) {
  elements.greeting.innerHTML = `${escapeHtml(config.greeting)} <span aria-hidden="true">🧡</span>`;
}

renderStatusOptions();
renderMemberPicker();
loadState();
window.setInterval(() => loadState({ quiet: true }), 20000);
