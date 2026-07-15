const cloudbase = require("@cloudbase/node-sdk");

const app = cloudbase.init({ env: cloudbase.SYMBOL_CURRENT_ENV });
const db = app.database();
const collection = db.collection("family_state");
const STATE_ID = "main";

const ALLOWED_STATUS_IDS = new Set([
  "safe",
  "work_way",
  "working",
  "off_work_way",
  "home",
  "meal",
  "busy",
  "rest",
  "road"
]);
const ALLOWED_PERSON_IDS = new Set(["me", "mom", "dad"]);
const ALLOWED_SENDERS = new Set(["mom", "dad"]);
const REPLY_PRESETS = {
  tv: "收到！担心频道已切换成追剧频道 📺",
  call: "准奏！今晚免除夺命连环 Call ☎️"
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "content-type",
      "access-control-allow-methods": "GET,POST,OPTIONS"
    },
    body: JSON.stringify(body),
    isBase64Encoded: false
  };
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

async function readState() {
  const result = await collection.doc(STATE_ID).get();
  if (result.data && result.data[0]) {
    const { _id, ...state } = result.data[0];
    return state;
  }
  const initial = createInitialState();
  await collection.doc(STATE_ID).set(initial);
  return initial;
}

async function writeState(state) {
  await collection.doc(STATE_ID).set(state);
}

function parseBody(event) {
  if (!event.body) return {};
  if (typeof event.body === "object") return event.body;
  try {
    return JSON.parse(event.body);
  } catch {
    return {};
  }
}

function cleanOneLine(value, maxLength = 40) {
  return String(value || "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, maxLength);
}

function senderName(personId) {
  return personId === "dad" ? "爸爸" : "妈妈";
}

async function sendNotification({ fromPersonId, message, statusLabel }) {
  const title = `${senderName(fromPersonId)}回复了你的近况`;
  const content = `你刚刚的状态：${statusLabel || "已更新近况"}\n\n${senderName(fromPersonId)}：${message}`;
  let sent = false;

  if (process.env.PUSHPLUS_TOKEN) {
    const result = await fetch("https://www.pushplus.plus/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token: process.env.PUSHPLUS_TOKEN,
        title,
        content: content.replace(/\n/g, "<br>"),
        template: "html"
      })
    });
    sent = sent || result.ok;
  }

  if (process.env.BARK_URL) {
    const result = await fetch(process.env.BARK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, body: content, group: "家里亮着灯" })
    });
    sent = sent || result.ok;
  }

  return sent;
}

async function handleStatus(method, body) {
  if (method === "GET") return response(200, await readState());
  if (method !== "POST") return response(405, { message: "不支持这个操作" });

  const configuredCode = process.env.FAMILY_EDIT_CODE || "520520";
  if (String(body.code || "") !== configuredCode) {
    return response(401, { message: "家庭口令不对，再试一次" });
  }

  const personId = String(body.personId || "");
  const statusId = String(body.statusId || "");
  if (!ALLOWED_PERSON_IDS.has(personId) || !ALLOWED_STATUS_IDS.has(statusId)) {
    return response(400, { message: "请选择有效的家人和近况" });
  }

  const note = personId === "me" ? cleanOneLine(body.note, 60) : "";

  const state = await readState();
  const updatedAt = new Date().toISOString();
  const nextState = {
    version: 2,
    people: { ...state.people, [personId]: { statusId, note, updatedAt } },
    activity: [
      { personId, statusId, note, updatedAt },
      ...(Array.isArray(state.activity) ? state.activity : [])
    ].slice(0, 20),
    replies: Array.isArray(state.replies) ? state.replies : []
  };
  await writeState(nextState);
  return response(200, nextState);
}

async function handleReply(method, body) {
  if (method !== "POST") return response(405, { message: "不支持这个操作" });

  const fromPersonId = String(body.fromPersonId || "");
  if (!ALLOWED_SENDERS.has(fromPersonId)) {
    return response(400, { message: "请先选择是妈妈还是爸爸" });
  }

  const presetMessage = REPLY_PRESETS[String(body.presetId || "")];
  const message = cleanOneLine(presetMessage || body.message);
  if (!message) return response(400, { message: "先写一句话再发送" });

  const state = await readState();
  const latestReply = Array.isArray(state.replies) ? state.replies[0] : null;
  if (latestReply && Date.now() - new Date(latestReply.createdAt).getTime() < 8000) {
    return response(429, { message: "刚刚已经回过啦，等几秒再发" });
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
  await writeState(nextState);

  let notificationSent = false;
  try {
    notificationSent = await sendNotification({
      fromPersonId,
      message,
      statusLabel: reply.replyingTo
    });
  } catch (error) {
    console.error("notification failed", error);
  }

  return response(200, { state: nextState, reply, notificationSent });
}

exports.main = async (event) => {
  try {
    const method = String(event.httpMethod || event.requestContext?.httpMethod || "GET").toUpperCase();
    if (method === "OPTIONS") return response(204, {});

    const path = String(event.path || event.requestContext?.path || "");
    const body = parseBody(event);
    const action = String(body.action || event.queryStringParameters?.action || "");

    if (path.endsWith("/reply") || action === "reply") return await handleReply(method, body);
    return await handleStatus(method, body);
  } catch (error) {
    console.error("family api failed", error);
    return response(500, { message: "服务暂时不可用，请稍后再试" });
  }
};
