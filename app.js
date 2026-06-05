const QUESTIONS = {
  sweet: [
    "What's something you've never said out loud but have thought about a lot lately?",
    "What's a belief you held five years ago that you've completely changed your mind on?",
    "When did you last feel truly, deeply seen by someone?",
    "What's something you're grieving right now — even if it's not a person?",
    "What does love mean to you, and has that definition changed?",
    "What's the most important thing you've learned about yourself in the last year?",
    "Is there something you've been meaning to say to someone in this group but haven't?",
    "What's a version of yourself you've had to let go of?",
    "What's something you're secretly afraid you'll never have?",
    "What do you think is the most misunderstood thing about you?",
    "When was the last time you felt lonely?",
    "Is there a moment that you think might have changed the course of your life?",
    "What does your inner critic say to you most often?",
    "What's something you want desperately but feel guilty for wanting?",
    "What's the kindest thing you've ever done that no one knows about?",
    "What's a question you're afraid to ask the people you love?",
    "What do you think happens when we die — honestly?",
    "What's something about your childhood that still lives in you today?",
    "When was the last time you changed because of someone else — and was it good or bad?",
    "What's something you've forgiven someone for but haven't told them?",
    "What are you most proud of?",
    "If you could go back in time to one day in your life, what day would it be?",
    "What's a feeling you have no word for?",
    "What's the difference between the life you're living and the life you imagined?",
    "What do you need more of right now that you're not asking for?",
    "What's your boldest dream?",
    "What's something that broke you a little but made you more yourself?",
    "How do you know when you're in a safe space with someone?",
    "What's something the world taught you about yourself that turned out to be wrong?",
    "What's the most honest thing you could say right now about how you're doing?",
    "What's something you've never done alone but are afraid to try?",
    "What part of yourself do you hide most in new relationships?",
    "Could you fall in love with someone who doesn't make a lot of money?",
    "If the people who love you most could see inside your head right now, what would surprise them?",
    "Have you ever been in a fight?",
    "What's the most stupid thing you've ever done?",
    "Do you think you're a funny person?",
    "Do you see yourself as a mum?",
    "What's a relationship in your life that changed the way you love people?",
    "Have you ever hated anyone?",
    "What do you think friendship is supposed to feel like at its best?",
    "What are you holding on to that you know you should let go?",
    "What's one question you would ask God — if you believed she existed?",
    "What does it mean to live a good life — and are you living it?",
    "What's a choice you made that nobody agreed with but you'd make again?",
    "Do you believe in the supernatural?",
    "What's your biggest fear?",
    "What part of you feels like it hasn't grown up yet — and do you love it or resent it?",
    "If you could say one thing to everyone in this group, what would it be?",
    "What's one thing you hope this group never forgets about tonight?"
  ],
  saucy: [
    "What's the most unusual place you've had sex?",
    "What's a sexual fantasy you've never acted on — would you?",
    "What's the most attractive quality someone can have in bed?",
    "Have you ever faked it — and did they know?",
    "What's the most spontaneous sexual decision you've ever made?",
    "What's a kink or fantasy you'd be embarrassed to Google?",
    "Have you ever hooked up with someone you knew you shouldn't have?",
    "Have you ever regretted sleeping with someone?",
    "What turns you on visually?",
    "What's the best sex of your life — what made it that way?",
    "Have you ever had a friends-with-benefits situation — how did it end?",
    "What's something an ex introduced you to that you're lowkey grateful for?",
    "What's the most daring thing you've ever done on a date?",
    "Have you ever slept with someone on the first date — do you regret it?",
    "Have you ever had a threesome — would you?",
    "Do you look at other men when you're in a relationship?",
    "What's your biggest turn on?",
    "Do you watch porn?",
    "What's the most honest thing you'd say about what you need in bed?",
    "If you were doing a roleplay, what would it be?",
    "What's something you've learned about sex or bodies that genuinely surprised you?",
    "What body part do you find most attractive?",
    "What's the most intimate non-sexual thing someone has done for you?",
    "What's something you've always wanted to try but haven't found the right person for?",
    "Have you ever initiated sex in a way that was completely out of character for you?",
    "What's the boldest move you've ever made on someone you wanted?",
    "What's something you find irresistible about a person that has nothing to do with looks?",
    "Have you ever ended something good because the sex wasn't working?",
    "What's your body count — and how do you actually feel about it?",
    "Have you ever been with someone just because the chemistry was too strong to ignore?",
    "How do you feel about your body?",
    "Can you imagine having sex with the same person — your partner — for the rest of your life?",
    "Could you stay with someone who has cheated on you?",
    "Have you ever cheated or been cheated on?",
    "Have you ever sent nudes, a risky text, or a voice note — and regretted it?",
    "Have you ever had phone sex?",
    "What's something that happened on a night out that you've never told anyone?",
    "What's your favourite position?",
    "Do you consider kissing cheating?",
    "What's something your friends would be shocked to know you're into?",
    "What's the most memorable compliment you've ever received in bed?",
    "Have you ever wanted someone who was completely off limits — did anything happen?",
    "Which celebrity would you sleep with, no questions asked?",
    "Have you ever been truly, unexpectedly seduced — what happened?",
    "What's the most emotionally intense sexual experience you've had?",
    "How do you keep things spicy in a long-term relationship?",
    "How important is sex to you in a relationship?",
    "What's your biggest turn off?",
    "What do you actually think makes someone unforgettable — in bed and in love?",
    "If you could have one completely honest, no-consequences conversation about sex with someone in your life, who would it be and what would you ask?"
  ]
};

let currentDeck = [];
let currentIndex = 0;
let currentMode = 'sweet';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame(mode) {
  currentMode = mode;
  currentDeck = shuffle(QUESTIONS[mode]);
  currentIndex = 0;
  const card = document.getElementById('card');
  const label = document.getElementById('card-mode-label');
  label.textContent = mode;
  if (mode === 'saucy') {
    card.classList.add('saucy-mode');
  } else {
    card.classList.remove('saucy-mode');
  }
  showScreen('screen-game');
  renderCard();
}

function renderCard() {
  const card = document.getElementById('card');
  const text = document.getElementById('card-text');
  const counter = document.getElementById('card-counter');
  const progress = document.getElementById('progress-bar');
  text.textContent = currentDeck[currentIndex];
  counter.textContent = `${currentIndex + 1} / ${currentDeck.length}`;
  progress.style.width = `${((currentIndex + 1) / currentDeck.length) * 100}%`;
  card.classList.remove('animate-in');
  void card.offsetWidth;
  card.classList.add('animate-in');
}

function nextCard() {
  currentIndex++;
  if (currentIndex >= currentDeck.length) {
    showScreen('screen-end');
    return;
  }
  renderCard();
}

function goHome() {
  showScreen('screen-home');
}
