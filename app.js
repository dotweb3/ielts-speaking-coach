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

const IELTSBRO_SEASON = {
  api: "https://hcp-server.ieltsbro.com/hcp/qsBank/topicChange/getDataV2/1",
  page: "https://next.ieltsbro.com/oral_season/",
  label: "IELTSbro 2026年5-8月题库"
};

const SEASON_CACHE_KEY = "ieltsbroSeason2026";

const QUICK_PART_META = {
  part1: { label: "Part 1", source: "warmup", speak: 45 },
  part2: { label: "Part 2", source: "part2", speak: 90 },
  part3: { label: "Part 3", source: "part3", speak: 75 }
};

const PART1_TOPIC_QUESTIONS = {
  Art: [
    "Do you like art?",
    "Did you enjoy drawing or painting when you were younger?",
    "Would you like to visit an art exhibition?"
  ],
  "Sports programs": [
    "Do you like watching sports programs?",
    "What kinds of sports programs are popular in your country?",
    "Did you watch sports programs when you were a child?"
  ],
  "Morning routines": [
    "Do you usually have a fixed morning routine?",
    "What do you normally do after you get up?",
    "Do you prefer mornings or evenings?"
  ],
  "Evening time": [
    "What do you usually do in the evening?",
    "Do you prefer to study in the evening?",
    "Has your evening routine changed recently?"
  ],
  "Old buildings": [
    "Are there many old buildings in your city?",
    "Do you like visiting old buildings?",
    "Should old buildings be protected?"
  ],
  "Films/cinemas": [
    "Do you like watching films in a cinema?",
    "What kinds of films do you usually watch?",
    "Who do you normally watch films with?"
  ],
  History: [
    "Do you like learning history?",
    "How did you learn history when you were younger?",
    "Do you think history is useful?"
  ],
  Headphones: [
    "Do you often use headphones?",
    "When do you usually use headphones?",
    "Do you prefer headphones or speakers?"
  ],
  "Jokes & Comedies": [
    "Do you like watching comedies?",
    "Do you often tell jokes to other people?",
    "What kind of humour do people your age like?"
  ],
  Clothing: [
    "What kind of clothes do you usually wear?",
    "Do you care much about fashion?",
    "Have your clothing preferences changed over time?"
  ],
  Singing: [
    "Do you like singing?",
    "Did you sing much when you were a child?",
    "Would you like to learn to sing better?"
  ],
  "Outer space and stars": [
    "Are you interested in outer space and stars?",
    "Did you learn about space when you were at school?",
    "Would you like to travel to space?"
  ],
  Science: [
    "Do you like science?",
    "What science subject did you find interesting at school?",
    "Do you think science is important in daily life?"
  ],
  "Public gardens and parks": [
    "Do you often go to public gardens or parks?",
    "What do people usually do in parks in your city?",
    "Did you go to parks when you were a child?"
  ],
  Cars: [
    "Do you like cars?",
    "Do people in your city use cars a lot?",
    "Would you like to drive in the future?"
  ],
  Shopping: [
    "Do you like shopping?",
    "What do you usually buy when you go shopping?",
    "Do you prefer shopping online or in stores?"
  ],
  Watch: [
    "Do you often wear a watch?",
    "Did you wear a watch when you were younger?",
    "Do you think watches are still useful?"
  ],
  Websites: [
    "What kinds of websites do you often visit?",
    "Do you prefer websites or mobile apps?",
    "Have you ever learned something useful from a website?"
  ],
  Tidiness: [
    "Are you a tidy person?",
    "How do you keep your room tidy?",
    "Were you tidy when you were a child?"
  ],
  Mirrors: [
    "Do you often look in the mirror?",
    "Do you use mirrors when buying clothes?",
    "Do you think mirrors are important at home?"
  ],
  Teachers: [
    "Do you have a favourite teacher?",
    "What kind of teacher do you learn best from?",
    "Did you want to be a teacher when you were younger?"
  ],
  "Social media": [
    "Do you often use social media?",
    "What do you usually do on social media?",
    "Do you think social media is useful?"
  ],
  "Dream and ambition": [
    "What was your dream when you were a child?",
    "Do you think ambition is important?",
    "Has your dream changed in recent years?"
  ],
  Music: [
    "Do you like listening to music?",
    "What kind of music do you usually listen to?",
    "Did you learn music when you were younger?"
  ]
};

const P23_TOPIC_MAP = {
  近期改变: {
    cue: "a recent change in your life",
    discussion: "change in people's lives"
  },
  当地新闻: {
    cue: "a piece of local news you heard recently",
    discussion: "local news"
  },
  想要颁布的环保法律: {
    cue: "an environmental law you would like to introduce",
    discussion: "environmental laws"
  },
  改变重要想法: {
    cue: "a time when you changed an important opinion",
    discussion: "changing opinions"
  },
  遇到困难终成功的人: {
    cue: "a person who succeeded after facing difficulties",
    discussion: "success after difficulties"
  },
  交通拥堵: {
    cue: "a time when you were caught in a traffic jam",
    discussion: "traffic problems"
  },
  "长久目标/抱负": {
    cue: "a long-term goal or ambition you have",
    discussion: "long-term goals"
  },
  组织快乐活动: {
    cue: "an enjoyable activity you organised",
    discussion: "organising activities"
  },
  很久没收到回复的信息: {
    cue: "a message you sent that did not get a reply for a long time",
    discussion: "digital communication"
  },
  保护环境的法律: {
    cue: "a law that helps protect the environment",
    discussion: "environmental protection"
  },
  花费甚少的外出日: {
    cue: "a day out that did not cost much",
    discussion: "low-cost leisure activities"
  },
  别人帮助解决问题: {
    cue: "a time when someone helped you solve a problem",
    discussion: "helping others"
  },
  包含动物的故事或书: {
    cue: "a story or book that includes animals",
    discussion: "stories about animals"
  },
  "重要河流/湖泊": {
    cue: "an important river or lake",
    discussion: "rivers and lakes"
  },
  语言学习: {
    cue: "a language you learned or would like to learn",
    discussion: "language learning"
  },
  喜欢拜访但不想住的家: {
    cue: "a home you like visiting but would not want to live in",
    discussion: "different kinds of homes"
  },
  推荐旅行过的地方: {
    cue: "a place you have travelled to and would recommend",
    discussion: "travel recommendations"
  },
  名人出演的广告: {
    cue: "an advertisement featuring a famous person",
    discussion: "celebrity advertising"
  },
  遇到的科技问题: {
    cue: "a technology problem you had",
    discussion: "technology problems"
  },
  擅长学习和说语言的人: {
    cue: "a person who is good at learning and speaking languages",
    discussion: "people with strong language skills"
  },
  特别场合的食物: {
    cue: "some food people eat on a special occasion",
    discussion: "food for special occasions"
  },
  喜欢的现场体育赛事: {
    cue: "a live sports event you enjoyed watching",
    discussion: "live sports events"
  },
  重要决定: {
    cue: "an important decision you made",
    discussion: "making important decisions"
  },
  在团队中工作: {
    cue: "a time when you worked in a team",
    discussion: "teamwork"
  },
  近期改变的计划: {
    cue: "a plan you changed recently",
    discussion: "changing plans"
  },
  拥有成功商业的人: {
    cue: "a person who runs a successful business",
    discussion: "successful businesses"
  },
  在成功公司工作的人: {
    cue: "a person who works for a successful company",
    discussion: "successful companies"
  },
  想从事医疗行业的人: {
    cue: "a person who wants to work in healthcare",
    discussion: "healthcare jobs"
  },
  发小: {
    cue: "a childhood friend",
    discussion: "childhood friendships"
  },
  想颁布的新法律: {
    cue: "a new law you would like to introduce",
    discussion: "new laws"
  },
  "喜欢在家/花园种植物的人": {
    cue: "a person who likes growing plants at home or in a garden",
    discussion: "growing plants"
  },
  早起经历: {
    cue: "a time when you got up early",
    discussion: "getting up early"
  },
  去过的无聊地方: {
    cue: "a boring place you have visited",
    discussion: "places people visit"
  },
  有趣视频: {
    cue: "an interesting video you watched",
    discussion: "online videos"
  },
  喜欢或不喜欢的高建筑: {
    cue: "a tall building you like or dislike",
    discussion: "tall buildings"
  },
  收到特殊蛋糕: {
    cue: "a special cake you received",
    discussion: "cakes and celebrations"
  },
  想有空时去旅游的地方: {
    cue: "a place you would like to travel to when you have free time",
    discussion: "places people want to visit"
  },
  商店: {
    cue: "a shop you like",
    discussion: "shops and shopping habits"
  },
  想见的名人: {
    cue: "a famous person you would like to meet",
    discussion: "famous people"
  },
  有趣的建筑: {
    cue: "an interesting building",
    discussion: "interesting buildings"
  },
  近期看过且享受的电影: {
    cue: "a film you watched recently and enjoyed",
    discussion: "films"
  },
  喜欢的电视网络节目: {
    cue: "a TV or online programme you like",
    discussion: "TV and online programmes"
  },
  安静的地方: {
    cue: "a quiet place you like",
    discussion: "quiet places"
  }
};

const PART2_CUE_SETS = [
  ["what it was", "when it happened", "what you did", "and explain why you remember it"],
  ["who or what was involved", "where it happened", "what happened next", "and explain how you felt about it"],
  ["when you first noticed it", "why it was important", "what details you remember", "and explain what you learned from it"]
];

const PART3_TEMPLATES = [
  (topic) => `Why do people care about ${topic} in modern life?`,
  (topic) => `Do young people and older people think differently about ${topic}?`,
  (topic) => `How has technology changed people's attitude towards ${topic}?`,
  (topic) => `What problems can people face with ${topic}?`,
  (topic) => `Do you think ${topic} will become more important in the future?`
];

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

const REFERENCE_PATTERNS = [
  {
    key: "studying alone",
    answers: [
      "Generally speaking, I prefer studying alone, especially when I need to understand something difficult. It is easier for me to control the pace and avoid small distractions. That said, if I am preparing for a speaking test or a presentation, studying with another person can be useful because I get immediate feedback.",
      "I would say it depends on the task. For memorising vocabulary or reading, I work better alone. But for solving problems or practising English speaking, I prefer working with someone else, because the interaction forces me to explain my ideas more clearly."
    ]
  },
  {
    key: "place do you usually choose",
    answers: [
      "I usually choose a quiet corner in a library or at home. I do not need a perfect environment, but I need a place where I can sit for a long time without being interrupted. If my phone is out of reach, I can usually focus much better.",
      "I tend to choose a place with some background noise, like a cafe, as long as it is not too crowded. A completely silent room sometimes makes me too aware of small sounds, while a mild level of noise helps me settle into the work."
    ]
  },
  {
    key: "making plans",
    answers: [
      "Yes, I like making a simple plan before studying. I do not write a very detailed schedule, but I usually decide what I need to finish first. It makes the task feel smaller and stops me from wasting time deciding what to do next.",
      "Not always. If the task is small, I just start directly. But before an exam, planning is important for me, because it helps me balance review, practice questions, and rest. Without a plan, I tend to spend too much time on the easiest part."
    ]
  },
  {
    key: "feel nervous before an exam",
    answers: [
      "When I feel nervous before an exam, I try to do something very concrete, like checking my materials or reviewing a short list of common mistakes. It gives my brain a task to focus on instead of just worrying about the result.",
      "I usually slow down my breathing and remind myself that I only need to answer the next question, not the whole exam at once. That sounds simple, but it helps me stop imagining the worst possible outcome."
    ]
  },
  {
    key: "paper or on a screen",
    answers: [
      "For serious reading, I still prefer paper because it is easier to underline and I get less distracted. Screens are convenient, but notifications and other tabs can easily break my concentration.",
      "I prefer reading on a screen for daily information because it is fast and searchable. But if I need to remember details, paper feels better. I think the physical layout of a page helps me recall where the information was."
    ]
  },
  {
    key: "subject you would like",
    answers: [
      "I would like to learn more about psychology, especially how people handle stress and pressure. It feels useful because students face a lot of competition, and understanding the mind can help with both study and daily life.",
      "I would like to learn more about computer science. Even if I do not become a programmer, technology affects almost every field now, so understanding how software works would give me more choices in the future."
    ]
  },
  {
    key: "English outside school",
    answers: [
      "I use English almost every day, mostly through videos, articles, and apps. However, using English passively is much easier than speaking it. That is why I am trying to create more chances to answer questions out loud.",
      "Outside school, I use English mainly when I search for information online. Many useful resources are in English, so it has become part of my daily routine, even though I still need more practice in real conversations."
    ]
  },
  {
    key: "talking to new people",
    answers: [
      "I like it when the situation is relaxed, but I can feel nervous if I have to make a good impression quickly. Once the conversation starts, I usually become more comfortable, especially if we find a shared topic.",
      "Not particularly. I am not afraid of new people, but I prefer to observe first. I think I communicate better after I understand the other person's style and what kind of topics they are interested in."
    ]
  },
  {
    key: "kind of teacher",
    answers: [
      "I learn best from teachers who are clear and structured. I do not need them to be entertaining all the time, but I need to understand what the goal is and how each step connects to the next one.",
      "For me, a good teacher is someone who can point out my specific problem instead of giving general comments. Encouragement is useful, but precise feedback is what actually helps me improve."
    ]
  },
  {
    key: "music helps people concentrate",
    answers: [
      "I think music can help, but it depends on the type of music and the task. Instrumental music may help people relax, while songs with lyrics can be distracting when they need to read or write.",
      "For some people, yes. Music creates a comfortable atmosphere and blocks out random noise. But for difficult subjects, I think silence is still better because the brain needs more space to process information."
    ]
  },
  {
    key: "short break",
    answers: [
      "During a short break, I usually stand up, drink some water, or walk around for a few minutes. I try not to open social media, because a five-minute break can easily become half an hour.",
      "I like doing something physical during a break, even if it is just stretching. It helps reset my attention. If I stay in the same chair and keep looking at a screen, I do not really feel refreshed."
    ]
  },
  {
    key: "quiet room",
    answers: [
      "I prefer a quiet room when I need to think deeply, because background noise makes it harder for me to hold information in my head. For light tasks, though, a bit of noise is fine.",
      "I actually prefer some background noise. Total silence sometimes makes me tense, especially before exams. A soft level of noise makes the environment feel more natural and less stressful."
    ]
  },
  {
    key: "app you use",
    answers: [
      "One app I use almost every day is a notes app. I use it to collect vocabulary, reminders, and random ideas. It is simple, but it keeps my thoughts organised and stops me from forgetting small tasks.",
      "I use a dictionary app very often. It is not just for checking meanings; I also look at example sentences and pronunciation. That helps me understand how a word is used naturally, not just what it means in Chinese."
    ]
  },
  {
    key: "difficult tasks",
    answers: [
      "I enjoy difficult tasks when I can see progress. The beginning can be frustrating, but once I understand the pattern, it feels satisfying. Difficult tasks also show me what I really need to improve.",
      "To be honest, I do not always enjoy them, especially under time pressure. But I know they are useful. If I avoid every difficult task, I may feel comfortable for a while, but I will not grow much."
    ]
  },
  {
    key: "remember new words",
    answers: [
      "I usually remember new words by putting them into sentences. A single translation is easy to forget, but a sentence gives me context. I also review them several times instead of trying to memorise everything at once.",
      "For me, pronunciation helps a lot. If I can say a word naturally, I remember it better. I also try to connect new words with topics, because topic groups are easier to recall in speaking."
    ]
  },
  {
    key: "working under time pressure",
    answers: [
      "I can work under time pressure, but I do not always enjoy it. A small amount of pressure makes me focus, while too much pressure makes me rush and make careless mistakes.",
      "It depends on the task. If I have practised it many times, time pressure can make me more efficient. But for creative or complex work, I prefer having enough time to think and revise."
    ]
  },
  {
    key: "weather makes you feel productive",
    answers: [
      "Cool and bright weather makes me feel most productive. If it is too hot or too dark, I become tired more easily. A clear morning usually gives me the feeling that I can get things done.",
      "I work better on rainy days, as long as I can stay indoors. The sound of rain makes the environment calmer, and I feel less tempted to go outside or do something unrelated."
    ]
  },
  {
    key: "asking questions in class",
    answers: [
      "I usually prefer asking questions after class, because I have more time to organise my thoughts. In class, I sometimes worry that my question is too basic or will interrupt the flow.",
      "I think asking in class is better if the question is important, because other students may have the same confusion. But personally, I still feel more comfortable asking the teacher privately."
    ]
  },
  {
    key: "sleep before an important day",
    answers: [
      "It is not always easy for me. Before an important day, I tend to replay possible situations in my head. To sleep better, I try to prepare everything early and stop studying right before bed.",
      "Usually I can sleep, but only if I feel prepared. If I leave too many things unfinished, my mind keeps working at night. So preparation is actually the best way for me to relax."
    ]
  },
  {
    key: "short videos or long articles",
    answers: [
      "For quick information, I prefer short videos because they are easy to understand and save time. But for serious topics, long articles are better because they explain the background and details more clearly.",
      "I prefer long articles when I really want to learn something. Short videos are convenient, but they often simplify things too much. Articles force me to slow down and think more carefully."
    ]
  },
  {
    key: "food do you usually eat",
    answers: [
      "Before an exam, I usually eat something light, like bread, eggs, or fruit. I avoid anything too oily or heavy because I do not want to feel sleepy or uncomfortable during the test.",
      "I try to eat familiar food before an exam. It is not the time to experiment with something new. The goal is simply to keep my energy stable and avoid any stomach problems."
    ]
  },
  {
    key: "enjoy competitions",
    answers: [
      "I enjoy competitions when they are healthy and fair. They can push me to work harder and show me where I stand. But if the pressure becomes too strong, competition can also make people anxious.",
      "Not always. I like improving myself, but I do not want every activity to become a comparison. Sometimes competition helps, but sometimes cooperation is more useful, especially when people can learn from each other."
    ]
  },
  {
    key: "skill you learned recently",
    answers: [
      "A skill I learned recently is organising my notes more efficiently. I used to collect too much information, but now I try to summarise ideas in my own words. It makes review much faster.",
      "Recently I have been practising how to speak more fluently in English. The key skill is not using difficult words, but keeping the answer moving even when I cannot think of a perfect sentence."
    ]
  },
  {
    key: "arrive early",
    answers: [
      "Yes, I usually arrive early, especially for exams or important appointments. Being early gives me time to calm down and check the environment. If I arrive at the last minute, I feel rushed.",
      "I try to, but I am not always successful. For important events, I plan to arrive early because delays are stressful. For casual meetings, I may be more relaxed about time."
    ]
  },
  {
    key: "solved a difficult problem",
    answers: [
      "I would talk about a time when I was stuck on a maths problem before an exam. At first I kept repeating the same method, which did not work. Then I asked a classmate to explain the idea behind it, not just the answer. After that I realised I had misunderstood one condition. What made it meaningful was that I learned to step back instead of panicking.",
      "A good example is when I had too many assignments in the same week. The problem was not one single task, but the feeling that everything was urgent. I wrote down all the deadlines, divided the work into small parts, and finished the easiest part first to build momentum. Looking back, it taught me that planning can reduce anxiety."
    ]
  },
  {
    key: "person who encouraged",
    answers: [
      "I would describe one of my teachers, who encouraged me to speak more in English. I used to worry too much about making mistakes, so I stayed quiet even when I had ideas. The teacher did not just say 'be confident'; she gave me small speaking tasks and corrected only the most important errors. That made the process less scary.",
      "The person I would talk about is a friend who encouraged me to apply for a competition. I was unsure because I thought other students were stronger. He helped me prepare and reminded me that the experience mattered more than the result. Even though I was nervous, I ended up learning a lot from it."
    ]
  },
  {
    key: "useful skill you learned",
    answers: [
      "I learned how to edit short videos outside school. At first I only wanted to make simple clips, but gradually I learned about timing, subtitles, and background music. It is useful because video is now a common way to present ideas, and the skill also teaches me to communicate more visually.",
      "A useful skill I learned is cooking a few simple meals. I learned it from my family and online videos. It may not sound impressive, but it makes me more independent. When I am busy or studying late, being able to prepare food for myself is genuinely helpful."
    ]
  },
  {
    key: "place where you can concentrate",
    answers: [
      "I would describe a quiet study room at home. It is not large, but the desk is clean and there are not many distractions around. I usually study English or do homework there. The reason it helps me focus is that my brain connects that place with work, so once I sit down, it is easier to enter study mode.",
      "A place where I concentrate well is the library. The atmosphere there affects me in a positive way because everyone else is also reading or studying. Even if I feel lazy at first, seeing other people focus makes me more disciplined. It is especially useful before exams."
    ]
  },
  {
    key: "speak in front of others",
    answers: [
      "I remember giving a short presentation in class. There were only my classmates and teacher, but I still felt nervous because everyone was looking at me. I prepared a simple structure and practised the opening several times. During the presentation, I made a few small mistakes, but I kept going. Afterwards I felt relieved and more confident.",
      "I once had to introduce a group project to other students. The hardest part was not the content, but controlling my voice and speed. I tried to look at different people instead of staring at my notes. It was a useful experience because it showed me that preparation can reduce fear, but it cannot remove it completely."
    ]
  },
  {
    key: "changed your opinion",
    answers: [
      "I would talk about an article on sleep and learning. Before reading it, I thought sleeping less before exams was a sign of hard work. The article explained that memory and attention become worse without enough sleep. It changed my opinion because I realised rest is part of preparation, not the opposite of it.",
      "A video about social media changed my opinion. I used to think short videos were just entertainment, but it showed how algorithms can shape people's attention. After watching it, I became more careful about how much time I spend scrolling."
    ]
  },
  {
    key: "goal you want",
    answers: [
      "One goal I want to achieve is to speak English more naturally. It matters because I do not just want a test score; I want to use English in real classes and conversations. I have already started recording myself and practising timed answers. The difficult part is staying calm when I am judged.",
      "A goal I have is to study abroad in the next few years. To reach it, I need strong academic results and a good English score. I have made some progress, but the challenge is balancing schoolwork, exams, and personal pressure. I think the process will train my independence."
    ]
  },
  {
    key: "learned from a mistake",
    answers: [
      "I once prepared for a test by only reading notes instead of doing practice questions. I felt familiar with the content, but in the exam I could not apply it quickly. After that, I learned that understanding and performance are not the same. Now I include timed practice in my preparation.",
      "A mistake I learned from was leaving a group task too late. I thought it would be easy, but communication took longer than expected. The final result was rushed. Since then, I try to confirm roles and deadlines early, even for small projects."
    ]
  },
  {
    key: "conversation that was important",
    answers: [
      "I would describe a conversation with a teacher after a disappointing result. I expected simple encouragement, but the teacher helped me identify the exact problem. That conversation was important because it changed my focus from blaming myself to changing my method.",
      "An important conversation I had was with my parents about future plans. I was worried they would only care about results, but they actually listened to my concerns. It made me feel more supported, and I became more willing to discuss pressure instead of hiding it."
    ]
  },
  {
    key: "activity that helps you relax",
    answers: [
      "An activity that helps me relax is walking alone while listening to music. I do it when I feel mentally tired. It does not require much planning, but it gives me space to slow down and organise my thoughts. After walking, I usually feel less tense.",
      "I relax by watching light videos or doing simple exercise. The key is choosing something that does not require too much thinking. When I am stressed, I do not need more information; I need a short break that lets my body calm down."
    ]
  },
  {
    key: "perform worse in exams",
    answers: [
      "Some students perform worse in exams because pressure uses up their attention. In practice, they can think calmly, but in the exam they worry about the result and lose working memory. Another reason is that practice is often untimed, while real exams require speed and decision-making.",
      "I think the gap comes from both psychology and training. A student may know the material, but if they have not practised under exam conditions, they may freeze when time is limited. So preparation should include not only knowledge, but also simulation."
    ]
  },
  {
    key: "manage stress",
    answers: [
      "Yes, schools should teach stress management because academic pressure is part of student life. If students only learn subjects but not how to handle pressure, they may burn out. Simple skills like planning, breathing, and asking for help can make a big difference.",
      "I agree, but it should be practical rather than just a lecture. Students need routines they can actually use before exams or presentations. For example, schools could teach how to break a task into steps and how to recover after a bad result."
    ]
  },
  {
    key: "technology changed",
    answers: [
      "Technology has made learning much more flexible. Young people can watch explanations, use dictionaries, and take online courses anytime. However, it also creates distractions, because the same device used for study is also full of entertainment.",
      "The biggest change is access to information. In the past, students relied mainly on teachers and textbooks. Now they can compare different explanations online. But this also means they need better judgement, because not all information is accurate or useful."
    ]
  },
  {
    key: "face-to-face communication",
    answers: [
      "Some people prefer face-to-face communication because it feels more personal and reliable. They can see facial expressions and hear tone, which helps avoid misunderstanding. This is especially important when discussing sensitive or complicated topics.",
      "I think face-to-face communication gives people a stronger sense of connection. Online messages are convenient, but they can feel cold or unclear. In person, people can respond immediately and adjust their words based on the other person's reaction."
    ]
  },
  {
    key: "advantages of learning from mistakes",
    answers: [
      "Learning from mistakes is valuable because mistakes show the exact gap between what we think we know and what we can actually do. A mistake can be uncomfortable, but it gives clearer feedback than success.",
      "One advantage is that the lesson is often memorable. If a student loses marks because of a specific error, they are more likely to remember it next time. Mistakes also build resilience, because people learn that failure is not final."
    ]
  },
  {
    key: "more pressure than previous generations",
    answers: [
      "In some ways, yes. Young people today face strong competition, constant comparison on social media, and uncertainty about the future. Even when they are doing well, they may feel that someone else is doing better.",
      "I think the type of pressure has changed. Previous generations also had difficulties, but young people today are exposed to comparison all the time. The pressure is not only from school or family, but also from online images of success."
    ]
  },
  {
    key: "speak in public",
    answers: [
      "Public speaking is difficult because people feel judged. Even if the content is prepared, the speaker may worry about voice, pronunciation, or making mistakes. This fear can make the body tense and the mind go blank.",
      "Another reason is lack of practice. Speaking to a group is a performance skill, not just a language skill. If people only practise alone, they may not be ready for the feeling of being watched."
    ]
  },
  {
    key: "compete with each other",
    answers: [
      "Students should be encouraged to compete in a healthy way. Competition can motivate people and give them a clear goal. But schools should avoid making students feel that their value depends only on ranking.",
      "I think cooperation should be more important than competition. Some competition is useful, but too much comparison can damage confidence. Students should learn to improve themselves and also learn from others."
    ]
  },
  {
    key: "teacher effective",
    answers: [
      "An effective teacher explains clearly and understands students' problems. It is not enough to know the subject well; the teacher must know how to break ideas into steps and give useful feedback.",
      "I think patience is very important. Students do not always understand something the first time. A good teacher can change the explanation instead of simply repeating the same words."
    ]
  },
  {
    key: "discipline when learning",
    answers: [
      "Discipline is extremely important when learning a language because progress comes from repeated practice. Talent may help at the beginning, but without regular exposure and speaking, improvement will be slow.",
      "I would say discipline is more important than motivation. Motivation changes from day to day, but discipline keeps the habit going. For language learning, small daily actions are usually better than occasional intense study."
    ]
  },
  {
    key: "short videos for information",
    answers: [
      "Yes, some people rely too much on short videos. They are convenient, but they can make complex topics look simple. People may feel informed after watching a minute-long clip, even though they only know the surface.",
      "I think short videos are useful as an introduction, but they should not be the only source of information. For serious decisions, people still need longer explanations, evidence, and different viewpoints."
    ]
  },
  {
    key: "ask for help",
    answers: [
      "Some people find it hard to ask for help because they do not want to look weak. They may think asking a question means they are not capable, even though everyone needs help sometimes.",
      "Another reason is fear of judgement. If someone has been criticised before, they may prefer to struggle alone. A supportive environment makes a big difference because people feel safer admitting confusion."
    ]
  },
  {
    key: "parents help teenagers",
    answers: [
      "Parents can help teenagers become more confident by giving specific support instead of only focusing on results. If parents notice effort and progress, teenagers are more likely to take risks and try new things.",
      "I think parents should listen before giving advice. Teenagers often know they need to improve, but they also need to feel understood. Confidence grows when they feel trusted, not controlled all the time."
    ]
  },
  {
    key: "specialize early",
    answers: [
      "I think young people should explore first and specialise later. Early exploration helps them understand their interests and strengths. If they specialise too early, they may miss other possibilities.",
      "It depends on the field. For music or sports, early specialisation can be important. But for most academic and career choices, exploring different subjects is safer because teenagers are still changing."
    ]
  },
  {
    key: "jobs require strong communication",
    answers: [
      "Many jobs require strong communication, especially teaching, management, sales, and medicine. In these jobs, knowledge alone is not enough; people need to explain ideas, understand others, and build trust.",
      "I think almost every job needs communication now. Even technical workers have to discuss problems with teammates or clients. Clear communication saves time and prevents mistakes."
    ]
  },
  {
    key: "online classes replace",
    answers: [
      "Online classes can replace some traditional lessons, especially for simple lectures or revision. They are flexible and convenient. But for discussion, supervision, and emotional support, traditional classrooms still have advantages.",
      "I do not think online classes can fully replace classrooms. Learning is also social. Students need interaction, routine, and sometimes pressure from the environment. Online learning works best when students are already disciplined."
    ]
  },
  {
    key: "negative experiences",
    answers: [
      "People remember negative experiences more clearly because the brain treats them as warnings. If something painful or embarrassing happens, we want to avoid repeating it, so the memory becomes stronger.",
      "Another reason is that negative experiences often involve strong emotions. A normal day may pass without much attention, but a stressful event makes people analyse what happened again and again."
    ]
  },
  {
    key: "exams be the main way",
    answers: [
      "Exams should be one important way to judge students, but not the only way. They are useful because they are standardised and efficient. However, they cannot fully measure creativity, teamwork, or long-term effort.",
      "I think relying mainly on exams can be unfair. Some students are knowledgeable but perform badly under pressure. Schools should combine exams with projects, participation, and practical tasks."
    ]
  },
  {
    key: "stay calm when they are being judged",
    answers: [
      "People can stay calm by focusing on the task instead of the judgement. For example, in a speaking test, thinking about the next sentence is more useful than thinking about the score. Practice under realistic conditions also helps.",
      "I think preparation and self-talk are both important. If people know they have practised enough, they feel safer. They can also remind themselves that being judged does not mean being attacked; it is just feedback."
    ]
  },
  {
    key: "confidence and preparation",
    answers: [
      "Confidence is the feeling that you can handle a situation, while preparation is the work that creates that feeling. Confidence without preparation can be empty, but preparation without confidence may still lead to nervous performance.",
      "I would say preparation is the foundation and confidence is the result. If someone practises many times, they are more likely to trust themselves. However, confidence also needs experience, because people must prove to themselves that they can perform under pressure."
    ]
  }
];

const $ = (id) => document.getElementById(id);

const els = {
  modeTabs: [...document.querySelectorAll(".mode-tab")],
  serverBadge: $("serverBadge"),
  seasonBadge: $("seasonBadge"),
  micBadge: $("micBadge"),
  strictBadge: $("strictBadge"),
  quickPartControl: $("quickPartControl"),
  quickPartTabs: [...document.querySelectorAll(".quick-part-tab")],
  planProgress: $("planProgress"),
  planList: $("planList"),
  resetPlanBtn: $("resetPlanBtn"),
  strictToggle: $("strictToggle"),
  voiceToggle: $("voiceToggle"),
  voiceSelect: $("voiceSelect"),
  previewVoiceBtn: $("previewVoiceBtn"),
  voiceNote: $("voiceNote"),
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
  topicSource: $("topicSource"),
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
  toggleAnswersBtn: $("toggleAnswersBtn"),
  answerGrid: $("answerGrid"),
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
  quickPart: localStorage.getItem("ieltsQuickPart") || "part1",
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
  voices: [],
  answerOpen: false,
  season: {
    status: "loading",
    part1: [],
    part23: [],
    updatedAt: "",
    fetchedAt: "",
    fromCache: false,
    error: ""
  },
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

function cleanTopic(topic) {
  return String(topic || "").replace(/\s+/g, " ").trim();
}

function toSentenceTopic(topic) {
  return cleanTopic(topic).replace(/&/g, "and").toLowerCase();
}

function topicDate(value) {
  if (!value) return "";
  const text = String(value);
  return text.includes("T") ? text.slice(0, 10) : text.slice(0, 10);
}

function normalizeSeasonItem(item, index) {
  const topic = cleanTopic(item?.oralTopicName);
  return {
    topic,
    code: item?.oralTopicCode || "",
    questionPic: item?.questionPic || "",
    createdAt: topicDate(item?.topicCreateDate || item?.createDate),
    updatedAt: topicDate(item?.updateDate),
    index
  };
}

function normalizeSeasonData(content) {
  const part1 = (content?.p1List || [])
    .map(normalizeSeasonItem)
    .filter((item) => item.topic);
  const part23 = (content?.p23List || [])
    .map(normalizeSeasonItem)
    .filter((item) => item.topic);

  return {
    status: "ready",
    part1,
    part23,
    updatedAt: topicDate(content?.p23UpdateDate || content?.p1UpdateDate),
    fetchedAt: new Date().toISOString(),
    fromCache: false,
    error: ""
  };
}

function applySeason(season, options = {}) {
  state.season = { ...season, ...options };
  renderSeasonBadge();
  if (state.phase === "idle" && ["warmup", "part2", "part3"].includes(state.mode)) {
    state.current = makeQuestion(MODE_META[state.mode].source);
    renderMode();
  }
}

function loadCachedSeason() {
  try {
    const cached = JSON.parse(localStorage.getItem(SEASON_CACHE_KEY));
    if (cached?.part1?.length || cached?.part23?.length) {
      applySeason({ ...cached, status: "ready", fromCache: true, error: "" });
      return true;
    }
  } catch {
    localStorage.removeItem(SEASON_CACHE_KEY);
  }
  return false;
}

async function loadSeasonBank() {
  renderSeasonBadge();
  loadCachedSeason();

  try {
    const response = await fetch(IELTSBRO_SEASON.api, { mode: "cors", credentials: "omit" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.status !== 0 || !payload.content) throw new Error(payload.message || "题库接口返回异常");

    const season = normalizeSeasonData(payload.content);
    localStorage.setItem(SEASON_CACHE_KEY, JSON.stringify(season));
    applySeason(season);
    if (state.phase === "idle") setStatus(`已同步 ${IELTSBRO_SEASON.label}。`);
  } catch (error) {
    state.season.status = state.season.part1.length || state.season.part23.length ? "ready" : "error";
    state.season.error = error instanceof Error ? error.message : String(error);
    renderSeasonBadge();
    if (state.phase === "idle" && state.season.status === "error") {
      setStatus("暂时同步不到 IELTSbro 题库，已使用本地备用题。");
    }
  }
}

function pickPart1Question(topic) {
  const questions = PART1_TOPIC_QUESTIONS[topic];
  if (questions?.length) return randomItem(questions);

  const subject = toSentenceTopic(topic);
  return randomItem([
    `Do you like ${subject}?`,
    `How often do you think about ${subject}?`,
    `Did you pay much attention to ${subject} when you were younger?`,
    `What do people your age usually think about ${subject}?`
  ]);
}

function getP23TopicInfo(topic) {
  const key = cleanTopic(topic);
  return P23_TOPIC_MAP[key] || {
    cue: toSentenceTopic(key),
    discussion: toSentenceTopic(key)
  };
}

function makeSeasonQuestion(partKey, sourceOverride) {
  if (state.season.status !== "ready") return null;

  if (partKey === "part1" && state.season.part1.length) {
    const topic = randomItem(state.season.part1);
    return {
      part: "Part 1",
      q: pickPart1Question(topic.topic),
      source: sourceOverride || "warmup",
      seasonTopic: topic.topic,
      seasonSource: IELTSBRO_SEASON.label,
      seasonUpdatedAt: state.season.updatedAt,
      questionPic: topic.questionPic
    };
  }

  if ((partKey === "part2" || partKey === "part3") && state.season.part23.length) {
    const topic = randomItem(state.season.part23);
    const info = getP23TopicInfo(topic.topic);

    if (partKey === "part2") {
      return {
        part: "Part 2",
        q: `Describe ${info.cue}.`,
        cues: randomItem(PART2_CUE_SETS),
        source: sourceOverride || "part2",
        seasonTopic: topic.topic,
        seasonSource: IELTSBRO_SEASON.label,
        seasonUpdatedAt: state.season.updatedAt,
        questionPic: topic.questionPic
      };
    }

    return {
      part: "Part 3",
      q: randomItem(PART3_TEMPLATES)(info.discussion),
      source: sourceOverride || "part3",
      seasonTopic: topic.topic,
      seasonSource: IELTSBRO_SEASON.label,
      seasonUpdatedAt: state.season.updatedAt,
      questionPic: topic.questionPic
    };
  }

  return null;
}

function makeFallbackQuickQuestion(partKey) {
  if (partKey === "part2") return { ...randomItem(BANK.part2), source: "part2" };
  if (partKey === "part3") return { ...randomItem(BANK.part3), source: "part3" };
  return { ...randomItem(BANK.warmup), source: "warmup" };
}

function getTiming(item = state.current) {
  if (state.mode === "warmup") {
    return {
      prep: clampNumber(els.quickPrepInput, 3, 0, 15),
      speak: clampNumber(els.shortSpeakInput, QUICK_PART_META[state.quickPart]?.speak || 45, 20, 120)
    };
  }

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
  if (source === "warmup") {
    const partKey = state.quickPart || "part1";
    return makeSeasonQuestion(partKey, QUICK_PART_META[partKey]?.source) || makeFallbackQuickQuestion(partKey);
  }

  if (source === "part2") return makeSeasonQuestion("part2", "part2") || { ...randomItem(BANK.part2), source };
  if (source === "part3") return makeSeasonQuestion("part3", "part3") || { ...randomItem(BANK.part3), source };

  return { ...randomItem(BANK[source]), source };
}

function buildMock() {
  return [
    ...Array.from({ length: 4 }, () => makeSeasonQuestion("part1", "warmup") || { ...randomItem(BANK.warmup), source: "warmup" }),
    makeSeasonQuestion("part2", "part2") || { ...randomItem(BANK.part2), source: "part2" },
    ...Array.from({ length: 5 }, () => makeSeasonQuestion("part3", "part3") || { ...randomItem(BANK.part3), source: "part3" })
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

function renderSeasonBadge() {
  if (state.season.status === "ready") {
    const count = state.season.part1.length + state.season.part23.length;
    els.seasonBadge.textContent = state.season.fromCache ? `题库缓存 ${count} 题` : `2026题库 ${count} 题`;
    els.seasonBadge.classList.remove("muted");
    return;
  }

  if (state.season.status === "error") {
    els.seasonBadge.textContent = "题库备用";
    els.seasonBadge.classList.add("muted");
    return;
  }

  els.seasonBadge.textContent = "题库同步中";
  els.seasonBadge.classList.add("muted");
}

function renderQuickPartControl() {
  els.quickPartControl.classList.toggle("hidden", state.mode !== "warmup");
  els.quickPartTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.quickPart === state.quickPart);
  });
}

function renderTopicSource(shouldHide) {
  els.topicSource.innerHTML = "";
  const current = state.current || {};

  const source = document.createElement("span");
  if (current.seasonSource) {
    const topic = shouldHide ? "题目已隐藏" : `话题：${current.seasonTopic}`;
    const updated = current.seasonUpdatedAt ? ` · 更新：${current.seasonUpdatedAt}` : "";
    source.textContent = `${current.seasonSource} · ${topic}${updated}`;
  } else {
    source.textContent = "本地备用题";
  }
  els.topicSource.append(source);

  if (current.questionPic && !shouldHide) {
    const cardLink = document.createElement("a");
    cardLink.href = current.questionPic;
    cardLink.target = "_blank";
    cardLink.rel = "noopener";
    cardLink.textContent = "查看题卡图";
    els.topicSource.append(cardLink);
  }

  if (current.seasonSource) {
    const pageLink = document.createElement("a");
    pageLink.href = IELTSBRO_SEASON.page;
    pageLink.target = "_blank";
    pageLink.rel = "noopener";
    pageLink.textContent = "来源页";
    els.topicSource.append(pageLink);
  }
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
  renderSeasonBadge();
  renderQuickPartControl();
  renderMockStrip();
  renderQuestion();
  renderStems();
  renderAnswers();
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

  renderTopicSource(shouldHide);
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

function getReferenceAnswers(item) {
  const question = (item?.q || "").toLowerCase();
  const match = REFERENCE_PATTERNS.find((entry) => question.includes(entry.key));
  if (match) return match.answers;

  if (item?.source === "part2") {
    return [
      "I would start by choosing a simple real experience, then explain the background, what happened, and why I still remember it. The key is not to make the story dramatic, but to add clear details and a short reflection at the end.",
      "Another way to answer is to focus on change: what I thought at first, what I did next, and what I learned afterwards. This structure gives the answer a clear beginning, middle, and ending."
    ];
  }

  if (item?.source === "part3") {
    return [
      "I think the answer depends on the situation. One clear reason is that people have different needs and habits. For example, younger people may prefer speed and convenience, while older people may value reliability more.",
      "There are two sides to this. On the one hand, it can bring clear benefits, such as saving time or reducing pressure. On the other hand, if people rely on it too much, it may create new problems."
    ];
  }

  return [
    "Generally speaking, I would give a direct answer first, then add one reason and a small example from my own life. That keeps the answer natural and stops it from becoming too abstract.",
    "It depends on the situation, but my usual preference is simple. I would explain what I normally do, why it works for me, and then add a contrast to show a bit more flexibility."
  ];
}

function renderAnswers() {
  const answers = getReferenceAnswers(state.current);
  els.answerGrid.innerHTML = "";
  els.answerGrid.classList.toggle("hidden", !state.answerOpen);
  els.toggleAnswersBtn.textContent = state.answerOpen ? "收起" : "展开";

  answers.slice(0, 2).forEach((answer, index) => {
    const card = document.createElement("article");
    const title = document.createElement("b");
    const text = document.createElement("p");
    card.className = "answer-card";
    title.textContent = `参考 ${index + 1}`;
    text.textContent = answer;
    card.append(title, text);
    els.answerGrid.append(card);
  });
}

function toggleAnswers() {
  state.answerOpen = !state.answerOpen;
  renderAnswers();
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

function selectQuickPart(part) {
  if (!QUICK_PART_META[part]) return;
  stopTimer();
  stopRecording();
  state.quickPart = part;
  localStorage.setItem("ieltsQuickPart", part);
  els.shortSpeakInput.value = QUICK_PART_META[part].speak;

  if (state.mode === "warmup") {
    state.phase = "idle";
    state.current = makeQuestion("warmup");
    setStatus(`3秒开口已切到 ${QUICK_PART_META[part].label} 随机题。`);
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

function scoreVoice(voice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;

  if (lang.startsWith("en-us")) score += 35;
  else if (lang.startsWith("en-gb")) score += 32;
  else if (lang.startsWith("en-au") || lang.startsWith("en-ca") || lang.startsWith("en-ie")) score += 26;
  else if (lang.startsWith("en")) score += 18;

  [
    "natural",
    "premium",
    "enhanced",
    "samantha",
    "daniel",
    "serena",
    "arthur",
    "martha",
    "moira",
    "karen",
    "tessa",
    "ava",
    "allison",
    "google",
    "microsoft",
    "siri"
  ].forEach((token, index) => {
    if (name.includes(token)) score += 24 - Math.min(index, 12);
  });

  if (name.includes("compact") || name.includes("novelty") || name.includes("robot")) score -= 30;
  if (voice.localService) score += 2;
  return score;
}

function sortVoices(voices) {
  return [...voices].sort((a, b) => {
    const scoreDelta = scoreVoice(b) - scoreVoice(a);
    if (scoreDelta) return scoreDelta;
    return a.name.localeCompare(b.name);
  });
}

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    els.voiceSelect.disabled = true;
    els.previewVoiceBtn.disabled = true;
    els.voiceNote.textContent = "当前浏览器不支持网页读题。";
    return;
  }

  const voices = sortVoices(window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("en")));
  state.voices = voices;
  const savedVoice = localStorage.getItem("ieltsVoiceName") || "";
  const currentValue = els.voiceSelect.value || savedVoice;
  els.voiceSelect.innerHTML = "";

  const auto = document.createElement("option");
  auto.value = "";
  auto.textContent = voices[0] ? `自动选择：${voices[0].name} (${voices[0].lang})` : "自动选择";
  els.voiceSelect.append(auto);

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    els.voiceSelect.append(option);
  });

  els.voiceSelect.disabled = !voices.length;
  els.previewVoiceBtn.disabled = !voices.length;

  if (voices.some((voice) => voice.name === currentValue)) {
    els.voiceSelect.value = currentValue;
  }

  const selected = getSelectedVoice();
  if (selected) {
    els.voiceNote.textContent = `当前读题音色：${selected.name} (${selected.lang})`;
  } else {
    els.voiceNote.textContent = "还没有加载到英语音色；可刷新页面或换 Chrome/Safari。";
  }
}

function getSelectedVoice() {
  if (!state.voices.length && "speechSynthesis" in window) {
    state.voices = sortVoices(window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("en")));
  }
  const selectedName = els.voiceSelect.value || localStorage.getItem("ieltsVoiceName") || "";
  return state.voices.find((voice) => voice.name === selectedName) || state.voices[0] || null;
}

function speakText(text, options = {}) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getSelectedVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-US";
  }
  utterance.rate = options.rate || 0.84;
  utterance.pitch = options.pitch || 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

function previewVoice() {
  speakText("Do you prefer studying alone or with other people? Let me think about that for a second.", {
    rate: 0.84
  });
}

function speakQuestion() {
  if (!els.voiceToggle.checked || !("speechSynthesis" in window)) return;
  const text = state.current.cues
    ? `${state.current.q}. You should say: ${state.current.cues.join(". ")}.`
    : state.current.q;
  speakText(text, { rate: state.current.source === "part2" ? 0.82 : 0.86 });
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
  if (state.mode === "warmup") state.daily.warmup += 1;
  else if (state.current.source === "part2") state.daily.part2 += 1;
  else if (state.current.source === "part3") state.daily.part3 += 1;
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

  els.quickPartTabs.forEach((tab) => {
    tab.addEventListener("click", () => selectQuickPart(tab.dataset.quickPart));
  });

  els.resetPlanBtn.addEventListener("click", () => {
    state.plan = {};
    savePlan();
    renderPlan();
  });

  els.strictToggle.addEventListener("change", renderMode);
  els.voiceToggle.addEventListener("change", renderMode);
  els.voiceSelect.addEventListener("change", () => {
    localStorage.setItem("ieltsVoiceName", els.voiceSelect.value);
    loadVoices();
  });
  els.previewVoiceBtn.addEventListener("click", previewVoice);
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

  els.toggleAnswersBtn.addEventListener("click", toggleAnswers);

  els.rubricInputs.forEach((input) => {
    input.addEventListener("input", renderRubrics);
  });
}

function init() {
  if (!QUICK_PART_META[state.quickPart]) state.quickPart = "part1";
  els.shortSpeakInput.value = QUICK_PART_META[state.quickPart].speak;
  state.current = makeQuestion("warmup");
  bindEvents();
  if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }
  renderServerBadge();
  refreshMicDiagnostics();
  renderPlan();
  renderRubrics();
  renderNoteChips();
  renderHistory();
  renderStats();
  renderMode();
  loadSeasonBank();
}

init();
