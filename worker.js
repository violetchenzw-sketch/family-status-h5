const STATE_KEY = "family-state-v1";
const ALLOWED_STATUS_IDS = new Set(["safe", "busy", "home", "rest", "meal", "road"]);
const ALLOWED_PERSON_IDS = new Set(["me", "mom", "dad"]);
const ALLOWED_SENDERS = new Set(["mom", "dad"]);
const REPLY_PRESETS = {
  tv: "收到！担心频道已切换成追剧频道 📺",
  call: "准奏！今晚免除夺命连环 Call ☎️"
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff"
    }
  });
}

function createInitialState() {
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

async function readState(env) {
  const existing = await env.FAMILY_STATUS_KV.get(STATE_KEY, "json");
  if (existing) return existing;
  const initial = createInitialState();
  await env.FAMILY_STATUS_KV.put(STATE_KEY, JSON.stringify(initial));
  return initial;
}

async function writeState(env, state) {
  await env.FAMILY_STATUS_KV.put(STATE_KEY, JSON.stringify(state));
}

function cleanOneLine(value) {
  return String(value || "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, 40);
}

function senderName(personId) {
  return personId === "dad" ? "爸爸" : "妈妈";
}

async function sendNotification(env, { fromPersonId, message, statusLabel }) {
  const title = `${senderName(fromPersonId)}回复了你的近况`;
  const content = `你刚刚的状态：${statusLabel || "已更新近况"}\n\n${senderName(fromPersonId)}：${message}`;
  let sent = false;

  if (env.PUSHPLUS_TOKEN) {
    const response = await fetch("https://www.pushplus.plus/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token: env.PUSHPLUS_TOKEN,
        title,
        content: content.replace(/\n/g, "<br>"),
        template: "html"
      })
    });
    sent = sent || response.ok;
  }

  if (env.BARK_URL) {
    const response = await fetch(env.BARK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, body: content, group: "家里亮着灯" })
    });
    sent = sent || response.ok;
  }

  if (env.NOTIFY_WEBHOOK_URL) {
    const response = await fetch(env.NOTIFY_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, content, fromPersonId, message })
    });
    sent = sent || response.ok;
  }

  return sent;
}

async function handleStatus(request, env) {
  if (request.method === "GET") return json(await readState(env));
  if (request.method !== "POST") return json({ message: "不支持这个操作" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: "提交内容格式不正确" }, 400);
  }

  const configuredCode = env.FAMILY_EDIT_CODE || "5200";
  if (String(body.code || "") !== configuredCode) {
    return json({ message: "家庭口令不对，再试一次" }, 401);
  }

  const personId = String(body.personId || "");
  const statusId = String(body.statusId || "");
  if (!ALLOWED_PERSON_IDS.has(personId) || !ALLOWED_STATUS_IDS.has(statusId)) {
    return json({ message: "请选择有效的家人和近况" }, 400);
  }

  const state = await readState(env);
  const updatedAt = new Date().toISOString();
  const nextState = {
    version: 1,
    people: { ...state.people, [personId]: { statusId, updatedAt } },
    activity: [
      { personId, statusId, updatedAt },
      ...(Array.isArray(state.activity) ? state.activity : [])
    ].slice(0, 20),
    replies: Array.isArray(state.replies) ? state.replies : []
  };
  await writeState(env, nextState);
  return json(nextState);
}

async function handleReply(request, env) {
  if (request.method !== "POST") return json({ message: "不支持这个操作" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: "回复内容格式不正确" }, 400);
  }

  const fromPersonId = String(body.fromPersonId || "");
  if (!ALLOWED_SENDERS.has(fromPersonId)) {
    return json({ message: "请先选择是妈妈还是爸爸" }, 400);
  }

  const presetMessage = REPLY_PRESETS[String(body.presetId || "")];
  const message = cleanOneLine(presetMessage || body.message);
  if (!message) return json({ message: "先写一句话再发送" }, 400);

  const state = await readState(env);
  const latestReply = Array.isArray(state.replies) ? state.replies[0] : null;
  if (latestReply && Date.now() - new Date(latestReply.createdAt).getTime() < 8000) {
    return json({ message: "刚刚已经回过啦，等几秒再发" }, 429);
  }

  const reply = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    fromPersonId,
    message,
    presetId: presetMessage ? String(body.presetId) : null,
    replyingTo: cleanOneLine(body.replyingTo),
    createdAt: new Date().toISOString()
  };
  const nextState = {
    ...state,
    replies: [reply, ...(Array.isArray(state.replies) ? state.replies : [])].slice(0, 12)
  };
  await writeState(env, nextState);

  let notificationSent = false;
  try {
    notificationSent = await sendNotification(env, {
      fromPersonId,
      message,
      statusLabel: reply.replyingTo
    });
  } catch (error) {
    console.error("notification failed", error);
  }

  return json({ state: nextState, reply, notificationSent });
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/status") return await handleStatus(request, env);
      if (url.pathname === "/api/reply") return await handleReply(request, env);

      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      headers.set("x-content-type-options", "nosniff");
      headers.set("referrer-policy", "strict-origin-when-cross-origin");
      headers.set("permissions-policy", "geolocation=(), camera=(), microphone=()");
      return new Response(response.body, { status: response.status, headers });
    } catch (error) {
      console.error("worker failed", error);
      return json({ message: "服务暂时不可用，请稍后再试" }, 500);
    }
  }
};
