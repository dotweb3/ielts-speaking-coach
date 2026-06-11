const BANK = {
  warmup: [
    { part: "Part 1", q: "Do you prefer studying alone or with other people?" },
    { part: "Part 1", q: "What kind of place do you usually choose when you need to focus?" },
    { part: "Part 1", q: "Do you like making plans before you study?" },
    { part: "Part 1", q: "What do you usually do when you feel nervous before an exam?" },
    { part: "Part 1", q: "Do you prefer reading on paper or on a screen?" },
    { part: "Part 1", q: "Is there a subject you would like to learn more about?" },
    { part: "Part 1", q: "How often do you use English outside school?" },
    { part: "Part 1", q: "Do you like talking to new people?" },
    { part: "Part 1", q: "What kind of teacher do you learn best from?" },
    { part: "Part 1", q: "Do you think music helps people concentrate?" },
    { part: "Part 1", q: "What do you usually do during a short break?" },
    { part: "Part 1", q: "Do you prefer a quiet room or a room with some background noise?" },
    { part: "Part 1", q: "What is one app you use almost every day?" },
    { part: "Part 1", q: "Do you enjoy doing difficult tasks?" },
    { part: "Part 1", q: "How do you usually remember new words?" },
    { part: "Part 1", q: "Do you like working under time pressure?" },
    { part: "Part 1", q: "What kind of weather makes you feel productive?" },
    { part: "Part 1", q: "Do you prefer asking questions in class or after class?" },
    { part: "Part 1", q: "Is it easy for you to sleep before an important day?" },
    { part: "Part 1", q: "Do you prefer short videos or long articles?" },
    { part: "Part 1", q: "What kind of food do you usually eat before an exam?" },
    { part: "Part 1", q: "Do you enjoy competitions?" },
    { part: "Part 1", q: "What is a skill you learned recently?" },
    { part: "Part 1", q: "Do you usually arrive early for appointments?" }
  ],
  part2: [
    {
      part: "Part 2",
      q: "Describe a time when you solved a difficult problem.",
      cues: ["what the problem was", "why it was difficult", "what you did", "how you felt afterwards"]
    },
    {
      part: "Part 2",
      q: "Describe a person who encouraged you to do something important.",
      cues: ["who this person is", "what they encouraged you to do", "how they helped", "why you remember it"]
    },
    {
      part: "Part 2",
      q: "Describe a useful skill you learned outside school.",
      cues: ["what the skill was", "how you learned it", "when you use it", "why it is useful"]
    },
    {
      part: "Part 2",
      q: "Describe a place where you can concentrate well.",
      cues: ["where it is", "what it looks like", "what you do there", "why it helps you focus"]
    },
    {
      part: "Part 2",
      q: "Describe a time when you had to speak in front of others.",
      cues: ["where it happened", "who was there", "what you talked about", "how you handled it"]
    },
    {
      part: "Part 2",
      q: "Describe a book, article, or video that changed your opinion.",
      cues: ["what it was about", "when you read or watched it", "what changed", "why it affected you"]
    },
    {
      part: "Part 2",
      q: "Describe a goal you want to achieve in the next few years.",
      cues: ["what the goal is", "why it matters", "what you have done", "what might be difficult"]
    },
    {
      part: "Part 2",
      q: "Describe a time when you learned from a mistake.",
      cues: ["what the mistake was", "how it happened", "what you learned", "what you would do differently"]
    },
    {
      part: "Part 2",
      q: "Describe a conversation that was important to you.",
      cues: ["who you talked to", "what you discussed", "why it mattered", "how you felt afterwards"]
    },
    {
      part: "Part 2",
      q: "Describe an activity that helps you relax.",
      cues: ["what it is", "how often you do it", "who you do it with", "why it works for you"]
    }
  ],
  part3: [
    { part: "Part 3", q: "Why do some students perform worse in exams than in practice?" },
    { part: "Part 3", q: "Do you think schools should teach students how to manage stress?" },
    { part: "Part 3", q: "How has technology changed the way young people learn?" },
    { part: "Part 3", q: "Why do some people prefer face-to-face communication?" },
    { part: "Part 3", q: "What are the advantages of learning from mistakes?" },
    { part: "Part 3", q: "Do young people today have more pressure than previous generations?" },
    { part: "Part 3", q: "Why is it difficult for some people to speak in public?" },
    { part: "Part 3", q: "Should students be encouraged to compete with each other?" },
    { part: "Part 3", q: "What makes a teacher effective?" },
    { part: "Part 3", q: "How important is discipline when learning a language?" },
    { part: "Part 3", q: "Do people rely too much on short videos for information?" },
    { part: "Part 3", q: "Why do some people find it hard to ask for help?" },
    { part: "Part 3", q: "How can parents help teenagers become more confident?" },
    { part: "Part 3", q: "Is it better to specialize early or explore many subjects?" },
    { part: "Part 3", q: "What kinds of jobs require strong communication skills?" },
    { part: "Part 3", q: "Can online classes replace traditional classrooms?" },
    { part: "Part 3", q: "Why do people sometimes remember negative experiences more clearly?" },
    { part: "Part 3", q: "Should exams be the main way to judge students?" },
    { part: "Part 3", q: "How can people stay calm when they are being judged?" },
    { part: "Part 3", q: "What is the difference between confidence and preparation?" }
  ]
};

const PLAN_ITEMS = [
  { id: "quick", text: "3秒开口 10 题" },
  { id: "part2", text: "Part 2 录音 3 条" },
  { id: "part3", text: "Part 3 抽象题 5 题" },
  { id: "mock", text: "考场模式完整模拟 1 次" },
  { id: "review", text: "回听并写 3 条复盘" }
];

const DAILY_DEFAULT = {
  attempts: 0,
  recordings: 0,
  reviews: 0,
  notedReviews: 0,
  warmup: 0,
  part2: 0,
  part2Recordings: 0,
  part3: 0,
  mock: 0
};

const STEMS = {
  warmup: [
    ["立场", "Generally speaking, I would say..."],
    ["细节", "It usually depends on..."],
    ["例子", "For example, when I..."],
    ["回扣", "So for me, it is mainly about..."]
  ],
  part2: [
    ["起点", "I'm going to talk about..."],
    ["记忆点", "The reason I remember it is..."],
    ["过程", "At first... then..."],
    ["收束", "Looking back, I think..."]
  ],
  part3: [
    ["观点", "I think it depends on..."],
    ["原因", "The main reason is that..."],
    ["例子", "A simple example would be..."],
    ["对比", "That said, some people may..."]
  ]
};

const MODE_META = {
  warmup: { title: "3 秒开口训练", kicker: "Warm-up", source: "warmup" },
  part2: { title: "Part 2 稳定输出", kicker: "Cue card", source: "part2" },
  part3: { title: "Part 3 抽象展开", kicker: "Discussion", source: "part3" },
  mock: { title: "完整模拟", kicker: "Mock test", source: "mock" }
};

const $ = (id) => document.getElementById(id);

const els = {
  modeTabs: [...document.querySelectorAll(".mode-tab")],
  serverBadge: $("serverBadge"),
  micBadge: $("micBadge"),
  strictBadge: $("strictBadge"),
  planProgress: $("planProgress"),
  planList: $("planList"),
  resetPlanBtn: $("resetPlanBtn"),
  strictToggle: $("strictToggle"),
  voiceToggle: $("voiceToggle"),
  autoRecordToggle: $("autoRecordToggle"),
  quickPrepInput: $("quickPrepInput"),
  shortSpeakInput: $("shortSpeakInput"),
  modeKicker: $("modeKicker"),
  modeTitle: $("modeTitle"),
  attemptTag: $("attemptTag"),
  mockStrip: $("mockStrip"),
  mockSteps: [...document.querySelectorAll(".mock-step")],
  partLabel: $("partLabel"),
  timingLabel: $("timingLabel"),
  questionText: $("questionText"),
  cueList: $("cueList"),
  phaseLabel: $("phaseLabel"),
  timerText: $("timerText"),
  timebarFill: $("timebarFill"),
  micBtn: $("micBtn"),
  newBtn: $("newBtn"),
  startBtn: $("startBtn"),
  repeatBtn: $("repeatBtn"),
  stopBtn: $("stopBtn"),
  resetBrainBtn: $("resetBrainBtn"),
  coachStatus: $("coachStatus"),
  stemGrid: $("stemGrid"),
  audioPlayer: $("audioPlayer"),
  recordingNote: $("recordingNote"),
  micDiagnostics: $("micDiagnostics"),
  meterFill: $("meterFill"),
  downloadBtn: $("downloadBtn"),
  saveBtn: $("saveBtn"),
  clearHistoryBtn: $("clearHistoryBtn"),
  exportBtn: $("exportBtn"),
  importBtn: $("importBtn"),
  importInput: $("importInput"),
  noteInput: $("noteInput"),
  noteChips: [...document.querySelectorAll("[data-note]")],
  historyList: $("historyList"),
  rubricInputs: [...document.querySelectorAll("[data-rubric]")],
  todayAttempts: $("todayAttempts"),
  todayRecordings: $("todayRecordings"),
  todayReviews: $("todayReviews"),
  stabilityScore: $("stabilityScore")
};

const state = {
  mode: "warmup",
  current: null,
  phase: "idle",
  phaseTotal: 0,
  remaining: 0,
  timerId: null,
  attempts: Number(localStorage.getItem("ieltsAttempts") || "0"),
  plan: loadPlan(),
  daily: loadDaily(),
  history: loadHistory(),
  mockSequence: [],
  mockIndex: 0,
  mockCompletionCounted: false,
  mediaStream: null,
  recorder: null,
  chunks: [],
  lastBlob: null,
  lastUrl: "",
  lastStartedAt: 0,
  recordingCounted: false,
  selectedNotes: new Set(),
  audioContext: null,
  analyser: null,
  meterId: null
};

function todayKey() {
  return dateKey(new Date());
}

function dateKey(value) {
  const now = value instanceof Date ? value : new Date(value);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadPlan() {
  try {
    return JSON.parse(localStorage.getItem(`ieltsPlan:${todayKey()}`)) || {};
  } catch {
    return {};
  }
}

function savePlan() {
  localStorage.setItem(`ieltsPlan:${todayKey()}`, JSON.stringify(state.plan));
}

function loadDaily() {
  try {
    return {
      ...DAILY_DEFAULT,
      ...(JSON.parse(localStorage.getItem(`ieltsDaily:${todayKey()}`)) || {})
    };
  } catch {
    return { ...DAILY_DEFAULT };
  }
}

function saveDaily() {
  localStorage.setItem(`ieltsDaily:${todayKey()}`, JSON.stringify(state.daily));
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem("ieltsSpeakingHistory")) || [];
  } catch {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem("ieltsSpeakingHistory", JSON.stringify(state.history.slice(0, 40)));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clampNumber(input, fallback, min, max) {
  const value = Number(input.value);
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, Math.round(value)));
}

function getTiming(item = state.current) {
  const source = item?.source || state.mode;
  if (source === "part2") return { prep: 60, speak: 120 };
  if (source === "part3") return { prep: 5, speak: 75 };
  return {
    prep: clampNumber(els.quickPrepInput, 3, 0, 15),
    speak: clampNumber(els.shortSpeakInput, 45, 20, 90)
  };
}

function getModeLabel(mode) {
  return MODE_META[mode]?.title || mode;
}

function makeQuestion(source) {
  return { ...randomItem(BANK[source]), source };
}

function buildMock() {
  return [
    ...shuffled(BANK.warmup).slice(0, 4).map((item) => ({ ...item, source: "warmup" })),
    { ...randomItem(BANK.part2), source: "part2" },
    ...shuffled(BANK.part3).slice(0, 5).map((item) => ({ ...item, source: "part3" }))
  ];
}

function setStatus(text) {
  els.coachStatus.textContent = text;
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.ceil(seconds));
  const mins = String(Math.floor(safe / 60)).padStart(2, "0");
  const secs = String(safe % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function phaseName(phase) {
  if (phase === "prep") return "Prepare";
  if (phase === "speak") return "Speak";
  if (phase === "reset") return "Reset";
  if (phase === "done") return "Done";
  return "Ready";
}

function getPlanProgress(id) {
  const daily = state.daily;
  if (id === "quick") return `${Math.min(daily.warmup, 10)}/10`;
  if (id === "part2") return `${Math.min(daily.part2Recordings, 3)}/3`;
  if (id === "part3") return `${Math.min(daily.part3, 5)}/5`;
  if (id === "mock") return `${Math.min(daily.mock, 1)}/1`;
  if (id === "review") return `${Math.min(daily.notedReviews, 3)}/3`;
  return "";
}

function isPlanAutoDone(id) {
  const daily = state.daily;
  if (id === "quick") return daily.warmup >= 10;
  if (id === "part2") return daily.part2Recordings >= 3;
  if (id === "part3") return daily.part3 >= 5;
  if (id === "mock") return daily.mock >= 1;
  if (id === "review") return daily.notedReviews >= 3;
  return false;
}

function getTodayReviews() {
  const key = todayKey();
  return state.history.filter((entry) => entry.time && dateKey(entry.time) === key);
}

function getStabilityScore() {
  const reviews = getTodayReviews();
  if (!reviews.length) return "--";
  const latest = reviews.slice(0, 8);
  const total = latest.reduce((sum, entry) => {
    const scores = entry.scores || {};
    const language = (Number(scores.fluency || 0) + Number(scores.relevance || 0) + Number(scores.depth || 0) + Number(scores.clarity || 0)) / 4;
    const calm = 6 - Number(scores.panic || 3);
    return sum + (language * 0.72 + calm * 0.28);
  }, 0);
  return total ? total / latest.length : "--";
}

function renderStats() {
  els.todayAttempts.textContent = state.daily.attempts;
  els.todayRecordings.textContent = state.daily.recordings;
  els.todayReviews.textContent = state.daily.reviews;
  const stability = getStabilityScore();
  els.stabilityScore.textContent = stability === "--" ? "--" : stability.toFixed(1);
}

function renderServerBadge() {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    els.serverBadge.textContent = "本机页面";
    return;
  }
  els.serverBadge.textContent = window.location.host;
}

function isLocalhostPage() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

function isHttpsPage() {
  return window.location.protocol === "https:";
}

function canAskForMic() {
  return Boolean(window.isSecureContext && navigator.mediaDevices?.getUserMedia);
}

function micHelpHtml(kind) {
  const localUrl = `${window.location.protocol === "https:" ? "https" : "http"}://localhost:${window.location.port || "8080"}`;
  if (kind === "insecure") {
    return [
      "<strong>当前地址不能录音。</strong>",
      "浏览器只允许安全页面调用麦克风。电脑请用 ",
      `<a href="http://localhost:8080">http://localhost:8080</a> 打开；`,
      "手机通过局域网 http 地址打开时通常只能计时，不能录音。"
    ].join("");
  }
  if (kind === "unsupported") {
    return [
      "<strong>这个浏览器没有开放网页录音接口。</strong>",
      `电脑建议用 Chrome 或 Safari 打开 <a href="${localUrl}">${localUrl}</a>。`
    ].join("");
  }
  if (kind === "denied") {
    return [
      "<strong>麦克风权限被拒绝了。</strong>",
      "请在浏览器地址栏左侧的网站设置里允许麦克风，然后刷新页面。"
    ].join("");
  }
  if (kind === "device") {
    return [
      "<strong>没有拿到麦克风设备。</strong>",
      "请确认系统设置允许浏览器使用麦克风，并且没有被其它软件独占。"
    ].join("");
  }
  return "当前页面可以请求麦克风。点击“启用麦克风”后，浏览器应该弹出授权。";
}

function setMicDiagnostics(kind, message) {
  els.micDiagnostics.className = `mic-diagnostics ${kind}`;
  els.micDiagnostics.innerHTML = message;
}

async function refreshMicDiagnostics() {
  if (!window.isSecureContext) {
    els.micBadge.textContent = "麦克风被浏览器拦截";
    els.micBadge.classList.add("muted");
    els.micBtn.textContent = isLocalhostPage() ? "启用麦克风" : "此地址不能录音";
    setMicDiagnostics("warn", micHelpHtml("insecure"));
    els.recordingNote.textContent = "计时训练可用；录音需要在安全地址打开。";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    els.micBadge.textContent = "浏览器不支持录音";
    els.micBadge.classList.add("muted");
    els.micBtn.textContent = "无法录音";
    setMicDiagnostics("bad", micHelpHtml("unsupported"));
    els.recordingNote.textContent = "可以继续使用计时训练。";
    return;
  }

  let permissionText = "";
  try {
    if (navigator.permissions?.query) {
      const permission = await navigator.permissions.query({ name: "microphone" });
      permissionText = `当前权限：${permission.state}`;
      permission.onchange = refreshMicDiagnostics;
      if (permission.state === "denied") {
        els.micBadge.textContent = "麦克风已被拒绝";
        els.micBadge.classList.add("muted");
        setMicDiagnostics("bad", `${micHelpHtml("denied")}<span>${permissionText}</span>`);
        els.recordingNote.textContent = "权限恢复后刷新页面，再点击启用麦克风。";
        return;
      }
    }
  } catch {
    permissionText = "";
  }

  if (!state.mediaStream) {
    els.micBadge.textContent = "麦克风未启用";
    els.micBadge.classList.add("muted");
    els.micBtn.textContent = "启用麦克风";
    setMicDiagnostics("ok", `${micHelpHtml("ok")}${permissionText ? `<span>${permissionText}</span>` : ""}`);
    els.recordingNote.textContent = "点击启用后，开口阶段会自动录音。";
  }
}

function renderPlan() {
  const done = PLAN_ITEMS.filter((item) => state.plan[item.id] || isPlanAutoDone(item.id)).length;
  const percent = (done / PLAN_ITEMS.length) * 100;
  els.planProgress.style.width = `${percent}%`;
  els.planList.innerHTML = "";

  PLAN_ITEMS.forEach((item) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.plan[item.id] || isPlanAutoDone(item.id));
    checkbox.disabled = isPlanAutoDone(item.id);
    checkbox.addEventListener("change", () => {
      state.plan[item.id] = checkbox.checked;
      savePlan();
      renderPlan();
    });
    text.textContent = `${item.text} · ${getPlanProgress(item.id)}`;
    label.append(checkbox, text);
    li.append(label);
    els.planList.append(li);
  });
}

function renderRubrics() {
  els.rubricInputs.forEach((input) => {
    const valueEl = $(`${input.dataset.rubric}Value`);
    valueEl.textContent = input.value;
  });
}

function renderMode() {
  const meta = MODE_META[state.mode];
  const timing = getTiming();
  els.modeKicker.textContent = meta.kicker;
  els.modeTitle.textContent = meta.title;
  els.attemptTag.textContent = `Attempt ${state.attempts}`;
  els.partLabel.textContent = state.current.part;
  els.timingLabel.textContent = `${timing.prep}s prep / ${timing.speak}s speak`;
  els.mockStrip.classList.toggle("hidden", state.mode !== "mock");
  els.strictBadge.textContent = els.strictToggle.checked ? "考场模式" : "普通模式";
  els.strictBadge.classList.toggle("muted", !els.strictToggle.checked);
  document.body.classList.toggle("strict", els.strictToggle.checked);
  renderMockStrip();
  renderQuestion();
  renderStems();
  renderTimer();
  renderStats();
  updateButtons();
}

function renderMockStrip() {
  const part = state.current?.source || "warmup";
  els.mockSteps.forEach((step) => step.classList.remove("active"));
  if (part === "warmup") els.mockSteps[0].classList.add("active");
  if (part === "part2") els.mockSteps[1].classList.add("active");
  if (part === "part3") els.mockSteps[2].classList.add("active");
}

function renderQuestion() {
  const shouldHide =
    els.strictToggle.checked &&
    els.voiceToggle.checked &&
    (state.phase === "prep" || state.phase === "speak");

  if (shouldHide) {
    els.questionText.textContent = "题目已隐藏，抓关键词后开口。";
    els.questionText.classList.add("hidden-question");
  } else {
    els.questionText.textContent = state.current.q;
    els.questionText.classList.remove("hidden-question");
  }

  els.cueList.innerHTML = "";
  if (state.current.cues && !shouldHide) {
    state.current.cues.forEach((cue) => {
      const li = document.createElement("li");
      li.textContent = cue;
      els.cueList.append(li);
    });
    els.cueList.classList.remove("hidden");
  } else {
    els.cueList.classList.add("hidden");
  }
}

function renderStems() {
  const source = state.current?.source || state.mode;
  const stems = STEMS[source] || STEMS.warmup;
  els.stemGrid.innerHTML = "";

  stems.forEach(([label, text]) => {
    const item = document.createElement("div");
    const title = document.createElement("b");
    const body = document.createElement("span");
    item.className = "stem-item";
    title.textContent = label;
    body.textContent = text;
    item.append(title, body);
    els.stemGrid.append(item);
  });
}

function renderTimer() {
  els.phaseLabel.textContent = phaseName(state.phase);
  els.timerText.textContent = formatTime(state.remaining);
  const width = state.phaseTotal ? (state.remaining / state.phaseTotal) * 100 : 0;
  els.timebarFill.style.width = `${Math.max(0, Math.min(100, width))}%`;
}

function renderHistory() {
  els.historyList.innerHTML = "";
  if (!state.history.length) {
    const empty = document.createElement("p");
    empty.className = "small-note";
    empty.textContent = "暂无记录。";
    els.historyList.append(empty);
    return;
  }

  state.history.slice(0, 20).forEach((entry) => {
    const item = document.createElement("article");
    const title = document.createElement("strong");
    const time = document.createElement("span");
    const question = document.createElement("p");
    const note = document.createElement("p");
    const scores = entry.scores || {};
    const avg = (
      (Number(scores.fluency || 0) +
        Number(scores.relevance || 0) +
        Number(scores.depth || 0) +
        Number(scores.clarity || 0)) /
      4
    ).toFixed(1);
    const seconds = entry.seconds ? `${Math.round(entry.seconds)}s` : "未计时";
    const recording = entry.recorded ? "有录音" : "无录音";
    const panic = scores.panic || "-";

    item.className = "history-item";
    title.textContent = `${entry.mode} · ${avg}/5 · 紧张 ${panic}/5`;
    time.textContent = `${new Date(entry.time).toLocaleString()} · ${seconds} · ${recording}`;
    question.textContent = entry.question;
    note.textContent = entry.note ? `复盘：${entry.note}` : "复盘：未填写";
    item.append(title, time, question, note);
    els.historyList.append(item);
  });
}

function updateButtons() {
  const running = state.phase === "prep" || state.phase === "speak" || state.phase === "reset";
  const mockHasNext =
    state.mode === "mock" &&
    state.phase === "done" &&
    state.mockIndex < state.mockSequence.length - 1;
  els.stopBtn.disabled = !running;
  els.newBtn.disabled = running;
  els.startBtn.disabled = running;
  els.micBtn.disabled = Boolean(state.mediaStream);
  els.resetBrainBtn.disabled = running;
  els.repeatBtn.disabled = running || (els.strictToggle.checked && state.phase !== "idle");
  els.startBtn.textContent = mockHasNext ? "下一题" : "开始本题";
}

function selectMode(mode) {
  stopTimer();
  stopRecording();
  state.mode = mode;
  state.phase = "idle";
  state.remaining = 0;
  state.phaseTotal = 0;
  els.modeTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));

  if (mode === "mock") {
    state.mockSequence = buildMock();
    state.mockIndex = 0;
    state.mockCompletionCounted = false;
    state.current = state.mockSequence[0];
    setStatus("完整模拟已就绪。");
  } else {
    state.current = makeQuestion(MODE_META[mode].source);
    setStatus("选一个模式，点击开始。");
  }
  renderMode();
}

function nextQuestion() {
  if (state.mode === "mock") {
    state.mockSequence = buildMock();
    state.mockIndex = 0;
    state.mockCompletionCounted = false;
    state.current = state.mockSequence[0];
    state.phase = "idle";
    setStatus("已换一套模拟题。");
  } else {
    state.current = makeQuestion(MODE_META[state.mode].source);
    state.phase = "idle";
    state.remaining = 0;
    state.phaseTotal = 0;
    setStatus("已换题。");
  }
  renderMode();
}

function advanceMock() {
  if (state.mockIndex < state.mockSequence.length - 1) {
    state.mockIndex += 1;
    state.current = state.mockSequence[state.mockIndex];
    state.phase = "idle";
    state.remaining = 0;
    state.phaseTotal = 0;
    setStatus(`模拟第 ${state.mockIndex + 1} 题，共 ${state.mockSequence.length} 题。`);
    renderMode();
  } else {
    state.phase = "idle";
    setStatus("完整模拟结束。保存复盘后可以换一套题。");
    els.startBtn.textContent = "开始本题";
    updateButtons();
  }
}

function speakQuestion() {
  if (!els.voiceToggle.checked || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const text = state.current.cues
    ? `${state.current.q} You should say: ${state.current.cues.join(", ")}.`
    : state.current.q;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startDrill() {
  if (
    state.mode === "mock" &&
    state.phase === "done" &&
    state.mockIndex < state.mockSequence.length - 1
  ) {
    advanceMock();
    return;
  }

  stopTimer();
  state.phase = "prep";
  state.attempts += 1;
  state.daily.attempts += 1;
  if (state.current.source === "warmup") state.daily.warmup += 1;
  if (state.current.source === "part2") state.daily.part2 += 1;
  if (state.current.source === "part3") state.daily.part3 += 1;
  saveDaily();
  state.lastStartedAt = Date.now();
  state.recordingCounted = false;
  localStorage.setItem("ieltsAttempts", String(state.attempts));
  clearRecording();
  speakQuestion();
  renderMode();

  const timing = getTiming();
  if (timing.prep > 0) {
    setStatus("听题，抓一个关键词，准备开口。");
    startPhase("prep", timing.prep, startSpeaking);
  } else {
    startSpeaking();
  }
}

function startSpeaking() {
  state.phase = "speak";
  renderMode();
  updateLiveStatus();
  if (els.autoRecordToggle.checked) startRecording();
  startPhase("speak", getTiming().speak, finishAttempt);
}

function startPhase(phase, seconds, onDone) {
  stopTimer();
  state.phase = phase;
  state.phaseTotal = seconds;
  state.remaining = seconds;
  renderMode();

  state.timerId = window.setInterval(() => {
    state.remaining -= 1;
    updateLiveStatus();
    renderTimer();
    if (state.remaining <= 0) {
      stopTimer();
      onDone();
    }
  }, 1000);
}

function finishAttempt() {
  state.phase = "done";
  state.remaining = 0;
  state.phaseTotal = 0;
  stopRecording();

  if (
    state.mode === "mock" &&
    state.mockIndex === state.mockSequence.length - 1 &&
    !state.mockCompletionCounted
  ) {
    state.daily.mock += 1;
    state.mockCompletionCounted = true;
    saveDaily();
  }

  renderMode();

  if (state.mode === "mock" && state.mockIndex < state.mockSequence.length - 1) {
    setStatus("本题结束。简单打分后进入下一题。");
  } else if (state.mode === "mock") {
    setStatus("完整模拟结束。保存复盘，重点看哪一段空白最长。");
  } else {
    setStatus("本题结束。回听录音，保存一次复盘。");
  }
}

function updateLiveStatus() {
  if (state.phase === "reset") {
    if (state.remaining > 12) setStatus("吸气，肩膀放低。");
    else if (state.remaining > 6) setStatus("吐气，把第一句说短。");
    else setStatus("只抓关键词，先开口。");
    return;
  }

  if (state.phase === "prep") {
    if (state.remaining <= 3) setStatus("准备结束，第一句要短。");
    return;
  }

  if (state.phase !== "speak" || !state.phaseTotal) return;
  const elapsedRatio = (state.phaseTotal - state.remaining) / state.phaseTotal;
  const source = state.current?.source;

  if (source === "part2") {
    if (elapsedRatio < 0.25) setStatus("开头交代对象和背景。");
    else if (elapsedRatio < 0.58) setStatus("现在进入过程和细节。");
    else if (elapsedRatio < 0.85) setStatus("补感受、变化或原因。");
    else setStatus("收束一句，不要突然停。");
    return;
  }

  if (source === "part3") {
    if (elapsedRatio < 0.28) setStatus("先给观点，别绕。");
    else if (elapsedRatio < 0.58) setStatus("补原因，别只重复题目。");
    else if (elapsedRatio < 0.82) setStatus("给一个具体例子。");
    else setStatus("加对比或让步，收住答案。");
    return;
  }

  if (elapsedRatio < 0.45) setStatus("第一句先活下来。");
  else if (elapsedRatio < 0.8) setStatus("加一个小例子。");
  else setStatus("回扣题目，完整结束。");
}

function startBrainReset() {
  stopTimer();
  stopRecording();
  window.speechSynthesis?.cancel();
  state.phase = "reset";
  state.phaseTotal = 18;
  state.remaining = 18;
  renderMode();
  updateLiveStatus();
  startPhase("reset", 18, () => {
    state.phase = "idle";
    state.remaining = 0;
    state.phaseTotal = 0;
    renderMode();
    setStatus("重启完成。下一题只要求第一句短、清楚、立刻出来。");
  });
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function stopDrill() {
  stopTimer();
  stopRecording();
  state.phase = "done";
  state.remaining = 0;
  state.phaseTotal = 0;
  renderMode();
  setStatus("已停止。先保存复盘，再继续下一题。");
}

async function requestMic() {
  await refreshMicDiagnostics();

  if (!window.isSecureContext) {
    setStatus("当前地址不是安全环境，浏览器不会弹麦克风授权。电脑请改用 http://localhost:8080。");
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    els.micBadge.textContent = "浏览器不支持录音";
    setMicDiagnostics("bad", micHelpHtml("unsupported"));
    setStatus("当前浏览器没有开放网页录音接口，可以继续使用计时训练。");
    return;
  }

  try {
    state.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    els.micBadge.textContent = "麦克风已启用";
    els.micBadge.classList.remove("muted");
    els.micBtn.textContent = "麦克风已启用";
    setMicDiagnostics("ok", "麦克风已启用。音量条有波动就说明浏览器正在收到声音。");
    startMeter();
    setStatus("麦克风已启用。开口阶段会自动录音。");
  } catch (error) {
    const name = error?.name || "UnknownError";
    els.micBadge.textContent = name === "NotAllowedError" ? "麦克风已被拒绝" : "麦克风未开放";
    els.micBadge.classList.add("muted");
    if (name === "NotAllowedError" || name === "SecurityError") {
      setMicDiagnostics("bad", micHelpHtml("denied"));
      setStatus("浏览器或系统拒绝了麦克风权限。请在浏览器网站设置和系统隐私设置里允许。");
    } else if (name === "NotFoundError" || name === "DevicesNotFoundError") {
      setMicDiagnostics("bad", micHelpHtml("device"));
      setStatus("没有找到可用麦克风。请检查系统麦克风和浏览器权限。");
    } else {
      setMicDiagnostics("bad", `<strong>麦克风启动失败。</strong><span>${name}</span>`);
      setStatus(`麦克风启动失败：${name}`);
    }
  }
  updateButtons();
}

function startRecording() {
  if (!state.mediaStream || state.recorder?.state === "recording") return;

  try {
    state.chunks = [];
    state.recorder = new MediaRecorder(state.mediaStream);
    state.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) state.chunks.push(event.data);
    });
    state.recorder.addEventListener("stop", () => {
      state.lastBlob = new Blob(state.chunks, { type: state.recorder.mimeType || "audio/webm" });
      if (state.lastUrl) URL.revokeObjectURL(state.lastUrl);
      state.lastUrl = URL.createObjectURL(state.lastBlob);
      els.audioPlayer.src = state.lastUrl;
      els.downloadBtn.disabled = false;
      els.recordingNote.textContent = "录音已就绪。";
      if (!state.recordingCounted) {
        state.daily.recordings += 1;
        if (state.current?.source === "part2") state.daily.part2Recordings += 1;
        state.recordingCounted = true;
        saveDaily();
        renderStats();
        renderPlan();
      }
    });
    state.recorder.start();
    els.recordingNote.textContent = "录音中。";
  } catch {
    setStatus("录音没有启动，但计时训练仍可继续。");
  }
}

function stopRecording() {
  if (state.recorder?.state === "recording") {
    state.recorder.stop();
  }
}

function clearRecording() {
  state.lastBlob = null;
  state.chunks = [];
  if (state.lastUrl) {
    URL.revokeObjectURL(state.lastUrl);
    state.lastUrl = "";
  }
  els.audioPlayer.removeAttribute("src");
  els.downloadBtn.disabled = true;
  els.recordingNote.textContent = state.mediaStream ? "本次开口后会出现回放。" : "启用麦克风后可录音。";
}

function startMeter() {
  if (!state.mediaStream || state.meterId) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    state.audioContext = new AudioContext();
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 256;
    const source = state.audioContext.createMediaStreamSource(state.mediaStream);
    source.connect(state.analyser);
    const data = new Uint8Array(state.analyser.frequencyBinCount);

    const tick = () => {
      state.analyser.getByteFrequencyData(data);
      const average = data.reduce((sum, value) => sum + value, 0) / data.length;
      const width = Math.min(100, Math.round(average * 1.8));
      els.meterFill.style.width = `${width}%`;
      state.meterId = requestAnimationFrame(tick);
    };

    tick();
  } catch {
    els.meterFill.style.width = "0%";
  }
}

function exportHistory() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "IELTS Speaking Coach",
    history: state.history,
    daily: state.daily,
    plan: state.plan
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `ielts-speaking-review-${stamp}.json`;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importHistoryFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const imported = Array.isArray(payload) ? payload : payload.history;
      if (!Array.isArray(imported)) throw new Error("Invalid history");
      state.history = [...imported, ...state.history].slice(0, 80);
      saveHistory();
      renderHistory();
      renderStats();
      setStatus("复盘记录已导入。");
    } catch {
      setStatus("导入失败：请选择这个工具导出的 JSON 文件。");
    } finally {
      els.importInput.value = "";
    }
  });
  reader.readAsText(file);
}

function downloadRecording() {
  if (!state.lastBlob) return;
  const a = document.createElement("a");
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  a.href = state.lastUrl;
  a.download = `ielts-speaking-${stamp}.webm`;
  document.body.append(a);
  a.click();
  a.remove();
}

function collectScores() {
  return els.rubricInputs.reduce((scores, input) => {
    scores[input.dataset.rubric] = Number(input.value);
    return scores;
  }, {});
}

function saveReview() {
  const noteTags = [...state.selectedNotes];
  const typedNote = els.noteInput.value.trim();
  const combinedNote = [noteTags.join("、"), typedNote].filter(Boolean).join("；");
  const entry = {
    time: new Date().toISOString(),
    mode: getModeLabel(state.mode),
    part: state.current.part,
    question: state.current.q,
    note: combinedNote,
    tags: noteTags,
    scores: collectScores(),
    seconds: state.lastStartedAt ? Math.round((Date.now() - state.lastStartedAt) / 1000) : 0,
    recorded: Boolean(state.lastBlob)
  };

  state.history.unshift(entry);
  state.history = state.history.slice(0, 40);
  state.daily.reviews += 1;
  if (combinedNote) state.daily.notedReviews += 1;
  saveDaily();
  saveHistory();
  els.noteInput.value = "";
  state.selectedNotes.clear();
  renderNoteChips();
  renderHistory();
  renderStats();
  renderPlan();
  setStatus("复盘已保存。下一题继续练稳定输出。");
}

function renderNoteChips() {
  els.noteChips.forEach((button) => {
    button.classList.toggle("active", state.selectedNotes.has(button.dataset.note));
  });
}

function toggleNoteTag(tag) {
  if (state.selectedNotes.has(tag)) state.selectedNotes.delete(tag);
  else state.selectedNotes.add(tag);
  renderNoteChips();
}

function clearHistory() {
  if (!window.confirm("清空所有复盘记录？")) return;
  state.history = [];
  saveHistory();
  renderHistory();
  setStatus("记录已清空。");
}

function bindEvents() {
  els.modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => selectMode(tab.dataset.mode));
  });

  els.resetPlanBtn.addEventListener("click", () => {
    state.plan = {};
    savePlan();
    renderPlan();
  });

  els.strictToggle.addEventListener("change", renderMode);
  els.voiceToggle.addEventListener("change", renderMode);
  els.autoRecordToggle.addEventListener("change", renderMode);
  els.quickPrepInput.addEventListener("change", renderMode);
  els.shortSpeakInput.addEventListener("change", renderMode);
  els.micBtn.addEventListener("click", requestMic);
  els.newBtn.addEventListener("click", nextQuestion);
  els.startBtn.addEventListener("click", startDrill);
  els.resetBrainBtn.addEventListener("click", startBrainReset);
  els.repeatBtn.addEventListener("click", speakQuestion);
  els.stopBtn.addEventListener("click", stopDrill);
  els.downloadBtn.addEventListener("click", downloadRecording);
  els.saveBtn.addEventListener("click", saveReview);
  els.clearHistoryBtn.addEventListener("click", clearHistory);
  els.exportBtn.addEventListener("click", exportHistory);
  els.importBtn.addEventListener("click", () => els.importInput.click());
  els.importInput.addEventListener("change", () => importHistoryFile(els.importInput.files[0]));

  els.noteChips.forEach((button) => {
    button.addEventListener("click", () => toggleNoteTag(button.dataset.note));
  });

  els.rubricInputs.forEach((input) => {
    input.addEventListener("input", renderRubrics);
  });
}

function init() {
  state.current = makeQuestion("warmup");
  bindEvents();
  renderServerBadge();
  refreshMicDiagnostics();
  renderPlan();
  renderRubrics();
  renderNoteChips();
  renderHistory();
  renderStats();
  renderMode();
}

init();
