const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// OpenClaw gateway
const OPENCLAW_URL = 'http://127.0.0.1:18789/v1/chat/completions';
const OPENCLAW_TOKEN = 'bn-hetzner-475d14cb04f183172bb8a3851c05a521';

// Telegram notification config
const TELEGRAM_BOT_TOKEN = '8277540847:AAE6ScDbEzpLCFrwjZvgD9OCWW66Z26g_0I'; // VPS1Master bot
const DANIEL_CHAT_ID = '7954435842';

// Persistent sessions directory
const SESSIONS_DIR = path.join(__dirname, 'sessions');
if (!fs.existsSync(SESSIONS_DIR)) fs.mkdirSync(SESSIONS_DIR, { recursive: true });

const TRIAL_DATA = `
## ARTIVA BIOTHERAPEUTICS (77 sites, 9 countries)
- AB-101 + B-Cell Depleting mAb (Lupus) [P1] | NCT06265220 | ACTIVE NOT RECRUITING | 9 sites in US | Conditions: Lupus Nephritis WHO Class III/IV, Refractory SLE
- AB-201 HER2 (Withdrawn) [P1/2] | NCT05678205 | WITHDRAWN | 2 sites (US, South Korea) | Conditions: Breast Cancer, Gastric Cancer
- AB-101 Mono/Combo NHL [P1/2] | NCT04673617 | ACTIVE NOT RECRUITING | 21 sites in US | Conditions: Non Hodgkin Lymphoma
- AB-101 Safety Study [P1] | NCT06581562 | RECRUITING | 1 site in US | Conditions: RA, Pemphigus Vulgaris, Granulomatosis, SLE
- AB-101 Korea Autoimmune [P1] | NCT06699771 | RECRUITING | 3 sites in South Korea | Conditions: T-Cell Lymphoma
- AFM13 + AB-101 (Terminated) [P2] | NCT05883449 | TERMINATED | 15 sites in US | Conditions: Hodgkin Lymphoma, Peripheral T Cell Lymphoma
- AlloNK Autoimmune [P2] | NCT06991114 | RECRUITING | 26 sites in 8 countries (US, Bulgaria, France, Germany, Italy, Portugal, Romania, Spain) | Conditions: RA, IIMs, Systemic Sclerosis, Myositis, Scleroderma, Sjögren

## CULLINAN ONCOLOGY (25 sites, 6 countries)
- CLN-978 Sjögren's [P1] | NCT07041099 | RECRUITING | 3 sites (US, Germany) | Conditions: Sjögren's Syndrome
- CLN-978 SLE [P1] | NCT06613360 | RECRUITING | 14 sites in 4 countries (US, Australia, Georgia, Moldova) | Conditions: SLE
- CLN-978 B-NHL [P1] | NCT05879744 | ACTIVE NOT RECRUITING | 6 sites in US | Conditions: NHL
- CLN-978 RA [P1] | NCT06994143 | RECRUITING | 2 sites (Germany, Italy) | Conditions: RA

## CANDID THERAPEUTICS (10 sites, 7 countries)
- Cizutamig gMG [P1] | NCT07215650 | RECRUITING | 1 site in China | Conditions: Generalized Myasthenia Gravis
- Cizutamig Bioavailability [P1] | NCT07236411 | RECRUITING | 1 site in Australia | Conditions: Healthy Participants
- Cizutamig IgE diseases [P1] | NCT07408869 | NOT YET RECRUITING | 1 site in Australia | Conditions: IgE-Mediated Hypersensitivity, Food Allergy
- Cizutamig SLE [P1] | NCT07215663 | RECRUITING | 1 site in China | Conditions: SLE
- CND261 RA [P1] | NCT07052032 | RECRUITING | 6 sites in 5 countries (Georgia, Moldova, New Zealand, Romania, Ukraine) | Conditions: RA

## AMGEN - BLINATUMOMAB (690 sites, 37 countries)
- Blinatumomab Ph-neg ALL elderly [P3] | NCT04994717 | RECRUITING | 183 sites in 32 countries | Conditions: Ph-Negative B-cell ALL
- Blinatumomab Pediatric R/R ALL [P2] | NCT06054113 | ACTIVE NOT RECRUITING | 7 sites in US | Conditions: B Precursor ALL
- Blinatumomab Autoimmune (SLE+RA) [P2] | NCT06570798 | RECRUITING | 44 sites in 9 countries | Conditions: SLE, RA
- Blinatumomab SC Pediatric [P1/2] | NCT07134088 | RECRUITING | 1 site in US | Conditions: R/R B-Cell ALL, MRD+ ALL
- Blinatumomab ALL [P1] | NCT00560794 | COMPLETED | 6 sites in US
- Blinatumomab ALL [P2] | NCT01207388 | COMPLETED | 74 sites in 11 countries
- Blinatumomab Pediatric ALL [P1/2] | NCT01471782 | COMPLETED | 30 sites in 7 countries
- Blinatumomab MRD+ ALL [P2] | NCT01741792 | COMPLETED | 6 sites in US
- Blinatumomab ALL R/R [P3] | NCT02393859 | COMPLETED | 101 sites in 23 countries
- Blinatumomab Ph+ ALL [P2] | NCT02910063 | COMPLETED | 31 sites in 8 countries
- Blinatumomab ALL 1st-line [P2] | NCT03023878 | COMPLETED | 24 sites in 6 countries
- Blinatumomab ALL MRD+ [P3] | NCT03117621 | COMPLETED | 80 sites in 13 countries
- Blinatumomab ALL consolidation [P2] | NCT03298412 | COMPLETED | 32 sites in 7 countries
- Blinatumomab ALL China [P3] | NCT03476239 | COMPLETED | 23 sites in China
- Blinatumomab ALL elderly [P2] | NCT04506086 | COMPLETED | 12 sites in US
- Blinatumomab ALL Ph-like [P2] | NCT04524455 | RECRUITING | 19 sites in 9 countries
- Blinatumomab ALL [P3] | NCT06649006 | RECRUITING | 5 sites in US
`;

const SYSTEM_PROMPT = `You are Claw 🦞, an AI assistant embedded in the Artiva Biotherapeutics Clinical Trial Sites dashboard. This dashboard was built entirely by AI (Claude) under direction from Daniel Branco.

You help users explore the clinical trial data on the dashboard. You have FULL knowledge of all trials on the platform:

${TRIAL_DATA}

You can answer specific questions about:
- Which sites are in which countries/cities
- What conditions each trial targets
- NCT numbers and trial phases
- Recruiting status
- How drugs compare across companies
- How to use the dashboard (filters, map, table view, clickable stats)

You can also take feature requests and change requests for the dashboard. When users ask for changes or new features, acknowledge the request enthusiastically, note it down, and let them know Daniel and the AI team will review it. Feature requests are automatically forwarded to the team.

When a user requests a feature or change, tell them something like: "Great idea! 🔧 I'm forwarding this to our AI dev team right now. They typically implement changes within 5-10 minutes. Reload the page after that to see your changes live! 🦞"

IMPORTANT — Insights: When you share an analytical insight about the data (trends, comparisons, notable findings), wrap it in [INSIGHT]...[/INSIGHT] tags so it gets saved to the Insights view. Only use this for substantive analytical observations, not for greetings or simple answers. Example:
[INSIGHT]Artiva's AlloNK Autoimmune program (Phase 2) has the largest international footprint among their trials, spanning 8 countries with 26 sites — signaling significant investment in autoimmune expansion.[/INSIGHT]

Keep responses concise but informative. Use emoji occasionally. Be friendly but professional.
If asked about data beyond what's on the dashboard (e.g. efficacy results, patient outcomes), be honest that you only have publicly sourced site/trial data from clinicaltrials.gov.

This is NOT an official Artiva platform. All data was publicly sourced.`;

// --- Persistent session storage ---
function loadSession(sessionId) {
  const file = path.join(SESSIONS_DIR, sessionId + '.json');
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return [];
  }
}

function saveSession(sessionId, messages) {
  const file = path.join(SESSIONS_DIR, sessionId + '.json');
  fs.writeFileSync(file, JSON.stringify(messages.slice(-50))); // keep last 50
}

// --- Telegram notification ---
async function notifyDaniel(text) {
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: DANIEL_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_notification: false,
      }),
    });
  } catch (err) {
    console.error('Telegram notify error:', err.message);
  }
}

// Notify VPS1Master by sending a Telegram message that will route to its session
async function notifyVPS1Master(userMsg, sessionId) {
  try {
    // Send as a Telegram message from the bot to Daniel's chat
    // OpenClaw will route it to vps1master since it's bound to this bot
    const text = `🦞 Artiva Web Chat — Feature Request\n\nFrom: Web visitor (session ${sessionId.slice(0,8)})\nMessage: ${userMsg.slice(0, 500)}\n\nPlease implement this and broadcast to the user when done.`;
    
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: DANIEL_CHAT_ID,
        text,
      }),
    });
    console.error(`[Notify] Sent feature request to VPS1Master via Telegram`);
  } catch (err) {
    console.error('VPS1Master notify error:', err.message);
  }
}

// Detect if a message is a feature request / change request
function isFeatureRequest(msg) {
  const lower = msg.toLowerCase();
  const keywords = ['add ', 'change ', 'could you ', 'can you ', 'would be nice', 'feature', 'request',
    'would love', 'i want', 'i\'d like', 'please make', 'it would be', 'suggestion', 'improve',
    'modify', 'update ', 'new ', 'remove ', 'delete ', 'fix ', 'bug ', 'broken', 'doesn\'t work',
    'should ', 'wish ', 'need '];
  return keywords.some(k => lower.includes(k));
}

// --- SSE parser ---
async function* parseSSE(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6).trim();
        if (data === '[DONE]') return;
        try { yield JSON.parse(data); } catch {}
      }
    }
  }
}

// --- Active WS connections ---
const activeConnections = new Map();

wss.on('connection', (ws, req) => {
  // Extract sessionId from query string for persistence
  const url = new URL(req.url, 'http://localhost');
  let sessionId = url.searchParams.get('sid') || '';
  
  // Validate/generate session ID
  if (!sessionId || sessionId.length < 8) {
    sessionId = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }
  
  // Load persisted messages
  const messages = loadSession(sessionId);
  const session = { ws, messages, sessionId };
  activeConnections.set(sessionId, session);

  // Send session ID to client (for persistence)
  console.error(`[WS] New connection: ${sessionId}, history: ${messages.length} msgs`);
  
  ws.send(JSON.stringify({ type: 'session', sessionId }));

  // Send greeting
  ws.send(JSON.stringify({
    type: 'assistant',
    content: "Hey! I'm Claw 🦞 — the AI behind this dashboard. Ask me anything about the clinical trial sites, or request changes to the dashboard. How can I help?",
  }));

  // If there's history, send it
  if (messages.length > 0) {
    ws.send(JSON.stringify({ type: 'history', messages }));
  }

  ws.on('message', async (raw) => {
    let data;
    try { data = JSON.parse(raw); } catch { return; }
    if (data.type !== 'user' || !data.content?.trim()) return;

    const userMsg = data.content.trim();
    console.error(`[WS] User msg (${sessionId}): ${userMsg.slice(0,80)}`);
    session.messages.push({ role: 'user', content: userMsg });

    // Check for feature request — log it and notify Daniel
    if (isFeatureRequest(userMsg)) {
      // Save to pending requests file for VPS1Master to pick up
      const requestsFile = path.join(__dirname, 'pending-requests.json');
      let pending = [];
      try { pending = JSON.parse(fs.readFileSync(requestsFile, 'utf8')); } catch {}
      pending.push({
        id: Date.now().toString(36),
        sessionId,
        message: userMsg,
        timestamp: new Date().toISOString(),
        status: 'pending',
      });
      fs.writeFileSync(requestsFile, JSON.stringify(pending, null, 2));
      console.error(`[Request] New feature request from ${sessionId.slice(0,8)}: ${userMsg.slice(0,80)}`);
      
      // Notify Daniel on Telegram
      notifyDaniel(
        `🦞 <b>Artiva Dashboard — Feature Request</b>\n\n` +
        `<b>From:</b> Web visitor (session ${sessionId.slice(0, 8)})\n` +
        `<b>Message:</b> ${userMsg.slice(0, 500)}`
      );
    }

    const contextMessages = session.messages.slice(-20);

    ws.send(JSON.stringify({ type: 'stream_start' }));

    try {
      const res = await fetch(OPENCLAW_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENCLAW_TOKEN}`,
        },
        body: JSON.stringify({
          model: 'openclaw',
          stream: true,
          user: 'artiva-webchat-' + sessionId,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...contextMessages,
          ],
        }),
      });

      console.error(`[WS] Gateway response status: ${res.status}`);
      if (!res.ok) throw new Error(`Gateway error ${res.status}`);

      let fullResponse = '';

      for await (const chunk of parseSSE(res.body)) {
        const delta = chunk.choices?.[0]?.delta?.content;
        if (delta) {
          fullResponse += delta;
          ws.send(JSON.stringify({ type: 'stream', content: delta }));
        }
      }

      ws.send(JSON.stringify({ type: 'stream_end' }));
      session.messages.push({ role: 'assistant', content: fullResponse });
      saveSession(sessionId, session.messages);

    } catch (err) {
      console.error('Error:', err.message);
      ws.send(JSON.stringify({ type: 'stream_end' }));
      ws.send(JSON.stringify({
        type: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please try again! 🦞",
      }));
    }
  });

  // Keep-alive ping every 20 seconds
  const pingInterval = setInterval(() => {
    if (ws.readyState === 1) ws.ping();
  }, 20000);

  ws.on('close', (code, reason) => {
    console.error(`[WS] Closed: ${sessionId} code=${code} reason=${reason}`);
    clearInterval(pingInterval);
    activeConnections.delete(sessionId);
  });
  ws.on('error', (err) => { console.error(`[WS] Error (${sessionId}):`, err.message); });
});

app.get('/health', (req, res) => res.json({ ok: true, sessions: activeConnections.size }));

// Broadcast a message to all chat sessions (connected + offline via pending messages)
app.post('/broadcast', (req, res) => {
  const { message, secret, sessionId: targetSession } = req.body;
  if (secret !== OPENCLAW_TOKEN) return res.status(401).json({ error: 'unauthorized' });
  if (!message) return res.status(400).json({ error: 'message required' });
  
  let sent = 0;
  
  // Send to connected sessions
  activeConnections.forEach((session) => {
    if (targetSession && session.sessionId !== targetSession) return;
    try {
      session.ws.send(JSON.stringify({ type: 'assistant', content: message }));
      session.messages.push({ role: 'assistant', content: message });
      saveSession(session.sessionId, session.messages);
      sent++;
    } catch {}
  });
  
  // Also save as pending message for offline sessions
  const sessionsDir = SESSIONS_DIR;
  const files = fs.readdirSync(sessionsDir).filter(f => f.endsWith('.json'));
  files.forEach(f => {
    const sid = f.replace('.json', '');
    if (targetSession && sid !== targetSession) return;
    if (activeConnections.has(sid)) return; // already sent live
    try {
      const msgs = JSON.parse(fs.readFileSync(path.join(sessionsDir, f), 'utf8'));
      msgs.push({ role: 'assistant', content: message });
      fs.writeFileSync(path.join(sessionsDir, f), JSON.stringify(msgs.slice(-50)));
      sent++;
    } catch {}
  });
  
  res.json({ ok: true, sent });
});

const PORT = 8082;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Artiva Chat Server running on port ${PORT}`);
});
