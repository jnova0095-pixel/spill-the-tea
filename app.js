const QUESTIONS = {
  sweet: [
    "What's a memory with someone you care about that always makes you smile?",
    "What's something you've never told anyone but always wanted to?",
    "What's your love language, and is there one you struggle to receive — and why?",
    "What's a dream you've quietly given up on, and do you think you ever will again?",
    "What's the best piece of advice you've ever received?",
    "What's the most spontaneous thing you've ever done, and what did it reveal about you?",
    "If you could live anywhere for a year, where would it be, and what would you do there?",
    "What's a small thing that makes you irrationally happy?",
    "What's the most meaningful compliment someone has ever given you?",
    "What's something you're currently working on becoming better at?",
    "What's a movie or book that genuinely changed how you see the world?",
    "If you could go back and give your 16-year-old self one piece of advice, what would it be?",
    "What's the most beautiful place you've ever been, and why did it stay with you?",
    "What's something you do just for yourself that recharges you?",
    "What's a boundary you've set recently that you're proud of?",
    "What's a question you've always wanted someone to ask you?",
    "What's something on your bucket list that feels almost too big to say out loud?",
    "What's something you spend money on that most people would find surprising?",
    "What's a ritual or routine that you do that actually makes a real difference in your day?",
    "What's a version of yourself you've left behind but still think about?",
    "What's something you're currently unlearning?",
    "If your life were a film, what genre would it be right now?",
    "What's your relationship with your body like right now — honestly?",
    "What's something you're good at that surprised you?",
    "What's a choice you made that felt small at the time but turned out to be enormous?",
    "What's something you make or cook that you're genuinely proud of?",
    "What's something you've learned about what you actually want versus what you thought you wanted?",
    "What's a grief you've carried that nobody knows about?",
    "What's something you admire in other people that you wish you had more of?",
    "What's a version of success that's uniquely yours — not the one you were sold?",
    "What's something you collect, keep, or hold onto that says something about you?",
    "What's something about getting older that's actually better than you expected?",
    "What's a mistake you're grateful you made?",
    "What's a skill or interest that saved you during a hard time?",
    "What's something you've forgiven yourself for that you thought you never would?",
    "What's a moment when you realized you were becoming the person you wanted to be?",
    "What's something you think about when you're alone?",
    "What's a lie you told yourself that took you years to see through?",
    "What's the difference between who you are and who people think you are?",
    "What's something that scared you but you did it anyway?",
    "What's a quality in someone else that made you want to be better?",
    "What's something you've learned that you wish everyone knew?",
    "What's a sensory thing (taste, smell, texture, sound) that you need in your life?",
    "What's a pattern you've noticed about yourself that you're trying to break?",
    "What's something you're learning to accept about yourself?",
    "What's something you do that feels transgressive in your own quiet way?",
    "What's a skill you picked up randomly that you ended up loving?",
    "What do you actually spend more time on than anyone would guess?",
    "What's your real morning or evening routine — the unglamorous version?",
    "What's something about your taste (in music, aesthetics, food, anything) that you're low key embarrassed about?",
    "What's something you do when you're home alone that you'd probably never do in front of anyone?",
    "What's a small decision you make differently than most people?",
    "What's something you have strong opinions about that feels kind of random?",
    "What would your ideal day off actually look like?",
    "What does “home” mean to you — is it a place, a person, a feeling, or something else?",
    "What's the most impulsive trip or adventure you've taken?",
    "What's a romantic or thoughtful thing someone's done for you that meant more than they probably realized?",
    "What do you think is the most annoying quality a person can have?",
    "What's your Roman Empire? (Something you can't stop thinking about.)",
    "What's your guilty pleasure movie or TV show?",
    "What's the last lie you told?",
    "What do you consider the ultimate comfort food?",
    "If you could only have three things on your life bucket list, what would they be?",
    "What's the most loved you've ever felt?",
    "Have you ever experienced a friendship breakup?",
    "Are you going through anything the person across from you doesn't know about?",
    "What's the first thing that comes to mind when you think of success?",
    "Who is someone you wish was still around?",
    "What's your worst tendency?",
    "What's your best quality?",
    "How do you handle anger?",
    "What do you need most right now?",
    "What life lesson have you learned the hard way?",
    "What's a green flag about you?",
    "What's your biggest pet peeve?",
    "What's the best decision you've ever made in your life?",
    "Who's the most influential person in your life?",
    "What kind of parent do you think you will be?",
    "Can you remember a time in your life you felt the most alive? Tell me everything about that memory.",
    "When have you felt the lowest in your life?",
    "Are you a religious or spiritual person? Tell me why and tell me how.",
    "Where do you find meaning in your life?",
    "Why did you cry the last time you did so?",
    "Think about the people you love the most in your life, what do you do for them?",
    "Have you ever questioned your sanity and why?",
    "Do you believe in extraterrestrial life? Elaborate on why or why not.",
    "Do you believe more in fate or that we are the creators of our own destinies because we are governed by free will?",
    "How do you define art?",
    "If you could have the option of eradicating pain from your life would you choose to do so? Why or why not?",
    "Presented with the opportunity to be immortal would you take it?",
    "How do you define beauty?",
    "Where does happiness come from? Define what happiness means to you.",
    "Tell me a really, really stupid joke that made you laugh.",
    "Pick two out of physical chemistry, lifestyle compatibility, emotional compatibility and intellectual compatibility.",
    "Show me a music track or a scene from a film that made you tear up.",
    "If you were given a chance to explore the oceans, go to outer space or visit 50 different countries, which one you choose and why?",
    "Out of the negative emotions of greed, anger, jealousy and hate, which one would you say affects you the most?",
    "Describe your best first kiss.",
    "Name the one bad quality you wouldn't mind in a partner.",
    "Name the one worst quality you cannot tolerate in a partner.",
    "If you got a free cheque for $5,000 right this second, how would you use it?",
    "What is the most romantic and loving thing you have ever done for somebody?",
    "What's your day-to-day mantra?",
    "What trait do you envy in others?",
    "What skill do you wish you had?",
    "How would your best friend describe you in five words?"
  ],
  saucy: [
    "What's the hottest/most public place you've had sex?",
    "Have you ever had a crush on a friend — and did you ever act on it?",
    "What's a sexual fantasy you've never actually told anyone?",
    "What's the most sexually daring outfit you've ever worn in public?",
    "Do you ever feel pressure to perform during sex? In what ways?",
    "What constitutes cheating for you? Where's your boundary?",
    "Do you dirty talk during sex? Why or why not? What do you actually say?",
    "How do you flirt? What's your style and what are you actually signaling when you do it?",
    "Have you ever had a situationship that was purely sexual — are you over it?",
    "What are some turn-offs that make you feel disconnected from sex?",
    "Have you ever had angry sex?",
    "Is there anything that you would like to explore that might be considered kinky?",
    "Have you ever had serious sexual chemistry with someone “wrong” for you?",
    "What are your sex red flags? What behavior or dynamic immediately turns you off?",
    "Have you ever been the “other woman/man” in someone's sex life?",
    "What's the most honest thing you've said during sex or right after?",
    "Do you make a lot of noise in the bedroom?",
    "Have you ever ghosted someone after sex? Do you regret it?",
    "Have you ever fucked a friend's ex or current partner? Would you?",
    "Would you be open to an open relationship or non-monogamy? Under what conditions?",
    "What's a sexual boundary you set, then immediately broke?",
    "Have you ever fantasized about a threesome? Would you actually do it?",
    "Have you ever been sexually interested in two people at the same time?",
    "Which of your body parts do you find the most sexy?",
    "Have you ever visited a sex store?",
    "If you had one lesson to share with other people about sex, what would it be?",
    "Do you prefer giving or receiving?",
    "Have you ever taken someone's virginity?",
    "What was your first time like?",
    "What is the sexiest thing anyone's ever done to or for you?",
    "Have you ever wanted someone more because they were unavailable or forbidden?",
    "Have you ever done something sexually you didn't actually want to do because you were afraid of losing them?",
    "Have you ever had an insecurity about sex that a partner helped you work through?",
    "Have you ever been shocked by what someone wanted to do sexually with you?",
    "Do you normally orgasm during sex? How easily and under what conditions?",
    "What's your favorite position and why — is it the one that makes you come most reliably?",
    "What dirty text or sexual request have you drafted a hundred times but never sent?",
    "Have you ever wanted sex more than your partner did in a relationship?",
    "How important is foreplay for you to actually enjoy sex?",
    "What sexual thing have you pretended to be innocent about?",
    "What's an ex you can't explain to friends — like, why the hell were you sleeping with them?",
    "Do you prefer giving or receiving oral sex, and what actually gets you off?",
    "How do you like to be touched or stimulated to actually feel good — what reliably works for you?",
    "What compliment about your body or sexual performance actually made you feel truly seen?",
    "Have you ever been surprised by what physically turns someone on about you?",
    "Have you ever caught yourself becoming someone you didn't recognize sexually — in a hot or concerning way?",
    "Have you ever fucked someone you definitely shouldn't have?",
    "What sexual boundary have you pushed, and would you do it again?",
    "What's one thing an ex taught you about what you actually want sexually?",
    "What's a sexual fantasy involving a specific person you know that you'd never tell them?",
    "What sexual desire have you never fully expressed to a partner because you were afraid?",
    "What's the most honest thing you'd say about your sexual “type” — not the clean version?",
    "Have you ever fantasized about fucking someone you see regularly?",
    "What's something sexually that turned you on that surprised or concerned you?",
    "Have you ever wanted to try a specific sexual act but been too ashamed to ask for it?",
    "What's a sexual scenario you masturbate to that you'd never actually do?",
    "What sexual act, fetish, or interest do you have that you think would make people judge you?",
    "What's the filthiest/most explicit sexual thing you've actually done?",
    "Have you ever been tempted to cheat or act on sexual attraction outside your relationship?",
    "What sexual role (dom, sub, top, bottom) have you wanted to explore?",
    "Have you ever sent nudes or sexually explicit videos? Any regrets or hot memories?",
    "Have you ever seduced someone — or been seduced — in a way that felt risky, wrong, or thrilling?",
    "Have you ever watched porn that actually turned you on? What kind?",
    "Do you use toys, lube, or anything else to make sex better for you?",
    "What were you taught about sex growing up, and how did that shape you?",
    "How do you feel about your parents' sexuality or knowing they masturbate?",
    "How do you feel about porn — is it part of your sex life or a boundary?",
    "How comfortable are you actually communicating about sex with partners?",
    "Have you ever experienced sexual dysfunction or difficulty, and how did you handle it?",
    "What sexual myths did you grow up believing that you've had to unlearn?",
    "What's your understanding of consent, and has it changed or evolved over time?",
    "How do you feel discussing sexual health or concerns with a doctor?",
    "What do you wish someone had told you about sex before you became sexually active?",
    "Have you ever had sex without really knowing what you wanted or didn't want?",
    "Have you ever had sex in front of someone or watched others have sex?",
    "Have you ever been jealous during sex or wanted to make someone jealous by fucking someone else?",
    "How often do you want to have sex? What's your ideal frequency?",
    "What does good sex actually mean to you? What makes it good?",
    "How do you keep passion and sex alive in a long-term relationship or partnership?",
    "What's something you want to try sexually that you haven't asked for yet?",
    "What's your relationship with your own body during sex — do you feel confident or self-conscious?",
    "Do you experience stress or pressure around any part of your sexual functioning?",
    "What's the largest age gap between you and your sexual partners?",
    "Does size really matter?",
    "What is your maddest one-night stand story?",
    "Have you ever filmed a sex tape?"
  ]
};

let deck = [];
let idx = 0;
let mode = '';

// Tracks answered questions per deck — persists across stack switches within a session
const answered = { sweet: new Set(), saucy: new Set() };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const TAGLINES = {
  sweet: 'soft confessions, served warm ✦',
  saucy: 'spicy, no filter, no regrets ✦'
};

function startGame(m) {
  mode = m;
  // Filter out already-answered questions
  const pool = QUESTIONS[m].filter(q => !answered[m].has(q));
  // If all done, reset that deck
  deck = shuffle(pool.length > 0 ? pool : (answered[m].clear(), QUESTIONS[m]));
  idx = 0;

  const card = document.getElementById('q-card');
  card.className = 'q-card' + (m === 'saucy' ? ' saucy-q' : '');
  document.getElementById('q-stack').classList.toggle('saucy-stack', m === 'saucy');
  document.getElementById('q-mode').textContent = m;
  document.getElementById('q-tagline').textContent = TAGLINES[m];
  show('screen-game');
  renderCard();
}

function renderCard() {
  const card = document.getElementById('q-card');
  const text = document.getElementById('q-text');
  const counter = document.getElementById('card-counter');
  const bar = document.getElementById('prog-bar');
  const btn = document.querySelector('.done-btn');

  text.textContent = deck[idx];
  counter.textContent = (idx + 1) + ' / ' + deck.length;
  bar.style.width = ((idx + 1) / deck.length * 100) + '%';
  if (btn) { btn.textContent = '✓ done'; btn.style.opacity = ''; }

  card.classList.remove('in');
  void card.offsetWidth;
  card.classList.add('in');
}

function nextCard() {
  idx++;
  if (idx >= deck.length) { show('screen-end'); return; }
  renderCard();
}

function prevCard() {
  if (idx > 0) { idx--; renderCard(); }
}

function markDone(e) {
  e.stopPropagation();
  answered[mode].add(deck[idx]);
  const btn = e.currentTarget;
  btn.textContent = '✓ noted';
  btn.style.opacity = '0.5';
  setTimeout(() => {
    idx++;
    if (idx >= deck.length) { show('screen-end'); return; }
    renderCard();
  }, 380);
}

function goToDecks() {
  show('screen-home');
}

function goHome() {
  show('screen-home');
}

function goWelcome() {
  show('screen-welcome');
}

function newSession() {
  answered.sweet.clear();
  answered.saucy.clear();
  show('screen-home');
}

/* ── JS cursor: follows mouse on desktop, finger on mobile ── */
(function () {
  const el = document.getElementById('custom-cursor');
  if (!el) return;

  const half = 39; // half of 78px cursor size

  function move(x, y) {
    el.style.transform = 'translate(' + (x - half) + 'px,' + (y - half) + 'px)';
  }

  // Show cursor at screen center on load — visible before first interaction
  move(window.innerWidth / 2, window.innerHeight / 2);

  document.addEventListener('mousemove',  e => move(e.clientX, e.clientY));
  document.addEventListener('touchstart', e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  document.addEventListener('touchmove',  e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
})();
