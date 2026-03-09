/**
 * Close The Opening - Entry Point Assessment
 * v2.0 — Social sharing, score visualization, email gate
 */

// ConvertKit Config
const CONVERTKIT_FORM_ID = '9000393';
const CONVERTKIT_API_KEY = 'wJjLcl2cYB67ezCEj1a1LQ';

const AMAZON_BOOK_URL = 'https://www.amazon.com/dp/B0GLDXFYY5';

// Site URL for sharing
const SITE_URL = 'https://closetheopening.com';
const ASSESSMENT_URL = 'https://closetheopening.com/test.html';

// Entry Point definitions
const ENTRY_POINTS = {
  explainer: {
    name: 'The Explainer',
    shortName: 'Explainer',
    emoji: '🔍',
    summary: 'You feel compelled to justify, clarify, and make yourself understood—especially when questioned. This creates an opening because others learn that challenging your reasoning pulls you into longer explanations, buying them time, wearing you down, or making you doubt positions you were certain about.',
    costOneLiner: 'Every time you re-explain, you hand over a little more certainty. Over years, that adds up to a person who doesn\'t trust their own decisions anymore.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: 'But why though? I just don\'t understand your reasoning.' },
      { speaker: 'you', text: 'Okay, so what I meant was... let me put it another way...' },
      { speaker: 'them', text: 'That still doesn\'t make sense to me.' },
      { speaker: 'you', text: '(20 minutes later, you\'re doubting a decision you were certain about)' }
    ],
    whatOthersPull: 'Extended justification, doubt, time',
    costOverTime: 'Exhaustion from over-explaining, erosion of confidence, giving ground through clarification rather than holding a clear position',
    interrupts: [
      '"I have explained my position."',
      '"I am not going to keep clarifying."',
      '"You can disagree without me re-explaining."'
    ],
    tactics: [
      'The Clarification Trap',
      'The Misquote',
      'The Demand for Proof',
      'The Exhaustion Play',
      'The Moving Target'
    ],
    tacticPreviews: [
      { name: 'The Clarification Trap', preview: '"Can you explain that again?" They understood you. They\'re keeping you in defense mode until your confidence erodes.' },
      { name: 'The Moving Target', preview: 'You address their concern. They raise a new one. You\'re not making progress—you\'re running on a treadmill while they watch.' }
    ],
    bookCTA: 'The Explainer is targeted by 5 specific tactics—each designed to keep you talking past the point where your position was already clear. The book breaks down exactly what they sound like and the responses that end them in one sentence.',
    shareText: 'My Entry Point is: The Explainer. I over-explain when challenged—and people use that opening.'
  },
  fixer: {
    name: 'The Fixer',
    shortName: 'Fixer',
    emoji: '🔧',
    summary: 'You feel pulled to solve problems, intervene in struggles, and take responsibility for outcomes—even when you were not asked. This creates an opening because others learn that presenting a problem activates your need to help, which they can use to offload work, responsibility, or emotional labor onto you.',
    costOneLiner: 'You\'ve spent years solving everyone else\'s problems. Your own have been sitting in the corner, waiting. They\'re still waiting.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: '"I just don\'t know what to do. It\'s such a mess."' },
      { speaker: 'you', text: '"OK, so what if you tried—"' },
      { speaker: 'them', text: '(They never asked. You volunteered.)' },
      { speaker: 'you', text: '(Now it\'s Tuesday and their problem is running your week.)' }
    ],
    whatOthersPull: 'Labor, responsibility, solutions',
    costOverTime: 'Burnout from carrying others\' problems, resentment, neglecting your own needs while managing everyone else\'s',
    interrupts: [
      '"That sounds hard. What are you going to do?"',
      '"I am not the right person to solve this."',
      '"I trust you will figure it out."'
    ],
    tactics: [
      'The Helpless Display',
      'The Slow Handoff',
      'The Guilt Trip',
      'The Manufactured Crisis',
      'The Learned Helplessness'
    ],
    tacticPreviews: [
      { name: 'The Helpless Display', preview: 'They don\'t ask for help—they perform helplessness. The sigh. The "I just don\'t know." It activates your need to intervene without ever giving you a clean chance to decline.' },
      { name: 'The Slow Handoff', preview: '"Can you just help with this one small thing?" Then another. Then another. Zoom out and you\'re managing an entire responsibility that was never yours.' }
    ],
    bookCTA: 'The Fixer is targeted by 5 tactics that disguise requests as crises and helplessness as need. The book shows you exactly how the handoff happens—and the one-line responses that send the problem back where it belongs.',
    shareText: 'My Entry Point is: The Fixer. I take on problems that aren\'t mine—and people use that opening.'
  },
  avoider: {
    name: 'The Avoider',
    shortName: 'Avoider',
    emoji: '🕊️',
    summary: 'You feel uncomfortable with tension and often move to reduce it—conceding, softening, or redirecting to restore calm. This creates an opening because others learn that introducing conflict or discomfort makes you more likely to back down, agree, or let things go that you should not.',
    costOneLiner: 'You\'ve kept the peace in every relationship you\'ve been in. The cost is that no one in those relationships actually knows where you stand.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: '"Fine. Forget I said anything."' },
      { speaker: 'you', text: '"No — wait. It\'s fine. We can do it your way."' },
      { speaker: 'them', text: '(Got exactly what they wanted without raising their voice.)' },
      { speaker: 'you', text: '(You didn\'t agree. You just needed the tension to stop.)' }
    ],
    whatOthersPull: 'Concessions, agreement, silence',
    costOverTime: 'Accumulated resentment, unresolved issues that fester, loss of voice in relationships where you have trained others that tension gets them what they want',
    interrupts: [
      '"I am okay with this being uncomfortable."',
      '"We do not have to agree right now."',
      '"I am not backing down just to end this."'
    ],
    tactics: [
      'The Tension Escalation',
      'The Silent Treatment',
      'The Dramatic Exit',
      'The Public Confrontation',
      'The Mood Shift'
    ],
    tacticPreviews: [
      { name: 'The Silent Treatment', preview: 'Withdrawal isn\'t about needing space. It\'s about creating enough anxiety that you come back, soften, and apologize for something that wasn\'t your fault.' },
      { name: 'The Tension Escalation', preview: 'They don\'t argue with logic—they argue with intensity. The volume, the tone, the energy. They\'re not trying to convince you. They\'re making it uncomfortable enough that you stop pushing.' }
    ],
    bookCTA: 'The Avoider is targeted by 5 tactics that weaponize discomfort. They don\'t need to be right—they just need to make it unpleasant enough that you fold. The book shows you how to hold your position when every instinct tells you to back down.',
    shareText: 'My Entry Point is: The Avoider. I back down to end tension—and people use that opening.'
  },
  niceone: {
    name: 'The Nice One',
    shortName: 'Nice One',
    emoji: '😊',
    summary: 'You worry about being perceived as harsh, selfish, or unkind—and you adjust your behavior to avoid that judgment. This creates an opening because others learn that framing their requests as tests of your character makes you more likely to comply, even at cost to yourself.',
    costOneLiner: 'You\'ve been so focused on not being the bad guy that you forgot to ask what you actually want. Somewhere along the way, your needs became invisible—to everyone, including you.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: '"Hey, could you take this on? I know it\'s last minute."' },
      { speaker: 'you', text: '"Yeah, sure. Of course."' },
      { speaker: 'them', text: '(You hadn\'t even finished reading the message.)' },
      { speaker: 'you', text: '(You\'re up at midnight doing their thing. Yours isn\'t done.)' }
    ],
    whatOthersPull: 'Compliance, self-sacrifice, silence about your needs',
    costOverTime: 'Chronic over-giving, difficulty identifying what you actually want, relationships where your needs are invisible because you have never voiced them',
    interrupts: [
      '"I can be kind and still say no."',
      '"I am not going to feel guilty for this."',
      '"You can be disappointed. That is allowed."'
    ],
    tactics: [
      'The Generosity Test',
      'The Comparison Guilt',
      'The Disappointment Display',
      'The Sainthood Setup',
      'The Public Expectation'
    ],
    tacticPreviews: [
      { name: 'The Disappointment Display', preview: 'They don\'t argue. They look hurt. Pain is harder to push back on than anger—because it makes you feel like your boundary caused damage.' },
      { name: 'The Comparison Guilt', preview: '"Your sister would have helped." "Nobody else has a problem with this." They\'re not informing you. They\'re positioning you as the selfish one so you\'ll comply to escape the label.' }
    ],
    bookCTA: 'The Nice One is targeted by 5 tactics that turn your kindness into a lever. They don\'t ask you to be less kind—they frame their requests so that kindness requires compliance. The book shows you how to separate the two.',
    shareText: 'My Entry Point is: The Nice One. I say yes to avoid being the bad guy—and people use that opening.'
  },
  loyalone: {
    name: 'The Loyal One',
    shortName: 'Loyal One',
    emoji: '🤝',
    summary: 'You give weight to history, shared experience, and past investment—sometimes more weight than present behavior deserves. This creates an opening because others learn that invoking your shared past, or reminding you of what you have been through together, makes you tolerate things you otherwise would not.',
    costOneLiner: 'You\'ve been honoring a version of this relationship that no longer exists. The person in front of you is not the person you\'re staying for.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: '"After everything I\'ve done for you, this is how you respond?"' },
      { speaker: 'you', text: '(Silence. Guilt. You already know you\'re going to fold.)' },
      { speaker: 'them', text: '"I guess loyalty doesn\'t mean what it used to."' },
      { speaker: 'you', text: '(The relationship changed years ago. You\'re still honoring the version that earned your loyalty.)' }
    ],
    whatOthersPull: 'Tolerance, continued access, second chances',
    costOverTime: 'Staying too long in situations that have changed, being exploited by people who no longer treat you well but know you will stay because of history',
    interrupts: [
      '"Our history does not mean I accept this."',
      '"What you have done before does not erase what is happening now."',
      '"I can value what we had and still walk away."'
    ],
    tactics: [
      'The History Invocation',
      'The Debt Reminder',
      'The Nostalgia Play',
      'The Loyalty Test',
      'The "After All I Have Done"'
    ],
    tacticPreviews: [
      { name: 'The History Invocation', preview: '"After everything we\'ve been through." Six words that have nothing to do with the current situation—and everything to do with keeping you in place.' },
      { name: 'The Debt Reminder', preview: '"Remember when I helped you move? When I was there for you during the divorce?" Past generosity becomes a present invoice. The unspoken message: you owe me compliance.' }
    ],
    bookCTA: 'The Loyal One is targeted by 5 tactics that weaponize history and shared experience. They use the past to override your present judgment. The book shows you how to honor what was without tolerating what is.',
    shareText: 'My Entry Point is: The Loyal One. I stay too long because of history—and people use that opening.'
  },
  performer: {
    name: 'The Performer',
    shortName: 'Performer',
    emoji: '🎯',
    summary: 'You feel a pull to prove your capability—especially when it is questioned or implied that you might not be up to something. This creates an opening because others learn that challenging your competence gets you to take on more, work harder, or say yes to things you should decline.',
    costOneLiner: 'You\'ve said yes to things you didn\'t want—not because you couldn\'t say no, but because "I can\'t" felt like "I\'m not enough." That\'s the trap.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: 'I actually asked Jordan to handle it. Figured it might be a lot.' },
      { speaker: 'you', text: 'I can do it.' },
      { speaker: 'them', text: '(Didn\'t have to push. The doubt did the work.)' },
      { speaker: 'you', text: '(You didn\'t even want it. But the implication that you couldn\'t handle it rewired the whole conversation.)' }
    ],
    whatOthersPull: 'Extra effort, overcommitment, proof of value',
    costOverTime: 'Exhaustion from constantly proving yourself, difficulty setting limits because "I cannot" feels like failure, being exploited through strategic doubt',
    interrupts: [
      '"I do not need to prove this."',
      '"My capabilities are not in question here."',
      '"I am choosing not to—not unable to."'
    ],
    tactics: [
      'The Competence Challenge',
      'The Subtle Doubt',
      'The Flattering Setup',
      'The Reverse Psychology',
      'The Impossible Standard'
    ],
    tacticPreviews: [
      { name: 'The Competence Challenge', preview: '"Are you sure you can handle this?" They\'re not concerned. They\'re deploying the one question they know you can\'t leave unanswered.' },
      { name: 'The Flattering Setup', preview: '"You\'re the only person I trust with this." The flattery makes declining feel like letting someone down. That\'s the point.' }
    ],
    bookCTA: 'The Performer is targeted by 5 tactics that exploit your need to prove yourself. They don\'t need to convince you—they just need to doubt you. Once. The book shows you how to recognize the challenge for what it is and walk away clean.',
    shareText: 'My Entry Point is: The Performer. I say yes to prove I can—and people use that opening.'
  },
  rationalizer: {
    name: 'The Rationalizer',
    shortName: 'Rationalizer',
    emoji: '🤔',
    summary: 'You tend to defer to others\' certainty, second-guess your own judgment, and assume that confident people probably know something you do not. This creates an opening because others learn that speaking with conviction—even without substance—makes you yield ground you should not.',
    costOneLiner: 'You have good judgment. You just don\'t trust it when someone else seems more sure. And "seeming sure" is the cheapest trick in the book.',
    dialogueLabel: 'What this sounds like in real life:',
    dialogue: [
      { speaker: 'them', text: 'That\'s not how it happened. I was there. I remember clearly.' },
      { speaker: 'you', text: '(You also remember clearly. But their certainty makes you wonder...)' },
      { speaker: 'them', text: 'Trust me on this.' },
      { speaker: 'you', text: '...Maybe you\'re right. (You weren\'t wrong. They were just more confident.)' }
    ],
    whatOthersPull: 'Deference, acquiescence, your position',
    costOverTime: 'Chronic underselling of your own judgment, being steamrolled by people who are simply more certain (not more correct), loss of trust in your own perceptions',
    interrupts: [
      '"I trust my read on this."',
      '"Your certainty does not change my position."',
      '"I do not need to be sure to hold my ground."'
    ],
    tactics: [
      'The Confidence Bluff',
      'The Gaslighting Lite',
      'The Expert Invocation',
      'The Memory Challenge',
      'The Consensus Claim'
    ],
    tacticPreviews: [
      { name: 'The Confidence Bluff', preview: 'They\'re not more informed. They\'re more certain. And certainty is convincing—even when it\'s completely empty.' },
      { name: 'The Memory Challenge', preview: '"That\'s not what happened." They contradict your memory with total confidence. You start questioning yourself. You were right. They were just louder.' }
    ],
    bookCTA: 'The Rationalizer is targeted by 5 tactics that substitute confidence for evidence. They don\'t need to be right—they just need to seem more sure than you. The book shows you how to hold your ground when someone else\'s certainty feels more real than your own.',
    shareText: 'My Entry Point is: The Rationalizer. I defer to others\' certainty—and people use that opening.'
  }
};

// Display order for score bars
const DISPLAY_ORDER = ['explainer', 'fixer', 'avoider', 'niceone', 'loyalone', 'performer', 'rationalizer'];

// All 28 questions
const QUESTIONS = [
  { text: "When someone questions my reasoning, I feel compelled to explain myself more thoroughly than I intended.", category: "explainer" },
  { text: "When someone describes a problem they are having, my mind immediately goes to how I could help solve it.", category: "fixer" },
  { text: "When a conversation becomes tense, I often say something conciliatory just to reduce the discomfort.", category: "avoider" },
  { text: "When someone asks me for something, I often say yes before fully considering whether I want to.", category: "niceone" },
  { text: "I have stayed in situations longer than I should have because of shared history or what we have been through together.", category: "loyalone" },
  { text: "When someone implies I might not be able to handle something, I feel a strong pull to prove them wrong.", category: "performer" },
  { text: "When someone speaks with more certainty than I feel, I tend to defer to their position.", category: "rationalizer" },
  { text: "If I sense someone does not fully understand my point, I will keep rephrasing until I am sure they get it.", category: "explainer" },
  { text: "I often find myself taking responsibility for resolving situations that are not really mine to fix.", category: "fixer" },
  { text: "I have agreed to things I did not fully support because the discomfort of continuing to disagree felt worse than letting it go.", category: "avoider" },
  { text: "I find myself softening honest opinions because I do not want to seem harsh or unkind.", category: "niceone" },
  { text: "When someone reminds me how long we have known each other or what they have done for me, it makes me more likely to comply.", category: "loyalone" },
  { text: "I take on more than I should because saying \"I cannot\" feels like admitting a limitation.", category: "performer" },
  { text: "If someone contradicts my memory of events with confidence, I start to question whether I am remembering correctly.", category: "rationalizer" },
  { text: "When I make a decision, I often find myself providing reasons for it even when no one asked.", category: "explainer" },
  { text: "If someone I care about is struggling, I have difficulty not stepping in—even when they have not asked.", category: "fixer" },
  { text: "Unresolved tension in a relationship creates a low-level discomfort I find hard to tolerate.", category: "avoider" },
  { text: "If saying no would disappoint someone, I sometimes agree even when it costs me.", category: "niceone" },
  { text: "The thought of ending a long-term relationship—even a difficult one—feels like a kind of betrayal.", category: "loyalone" },
  { text: "If my competence is questioned, I find it hard to walk away without demonstrating what I can do.", category: "performer" },
  { text: "I often assume other people have better judgment about situations than I do.", category: "rationalizer" },
  { text: "If someone mischaracterizes something I said, it is hard for me to let it go without correcting the record.", category: "explainer" },
  { text: "I sometimes realize I have spent significant time or energy on someone else's problem while my own needs waited.", category: "fixer" },
  { text: "In disagreements, I sometimes back down not because I changed my mind, but because the conflict itself became exhausting.", category: "avoider" },
  { text: "I worry about being perceived as difficult or selfish more than I would like to admit.", category: "niceone" },
  { text: "I sometimes tolerate treatment I would not accept from someone newer in my life because of how far back we go.", category: "loyalone" },
  { text: "I have agreed to tasks or challenges mostly to show that I was capable of them.", category: "performer" },
  { text: "When I disagree with someone but they seem very sure, I usually assume I am missing something.", category: "rationalizer" }
];

// Likert scale options
const LIKERT_OPTIONS = [
  { value: 1, label: "Not like me" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Very much" }
];

// State
let currentQuestion = 0;
let answers = {};
let scores = {
  explainer: 0, fixer: 0, avoider: 0, niceone: 0,
  loyalone: 0, performer: 0, rationalizer: 0
};

// Analytics — GA4 events
function trackEvent(eventName, eventData) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData || {});
  }
}
function trackQuizStart() { trackEvent('assessment_start'); }
function trackQuizComplete(primary, secondary, isDual) {
  trackEvent('assessment_complete', { primary_entry_point: primary, secondary_entry_point: secondary, is_dual_profile: isDual });
}
function trackPrimaryResult(primary) { trackEvent('primary_result', { entry_point: primary }); }
function trackEmailSubmitted(primary, secondary) { trackEvent('email_signup', { primary_entry_point: primary, secondary_entry_point: secondary }); }
function trackBookClick(source) { trackEvent('book_click', { click_location: source }); }
function trackShare(platform, primary) { trackEvent('share_click', { platform: platform, entry_point: primary }); }

// Quiz logic
function initQuiz() {
  var startBtn = document.getElementById('start-quiz');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  
  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  
  buildQuestions();
}

function buildQuestions() {
  var container = document.getElementById('questions-container');
  if (!container) return;
  
  for (var i = 0; i < QUESTIONS.length; i++) {
    var question = QUESTIONS[i];
    var questionEl = document.createElement('div');
    questionEl.className = 'quiz-question';
    questionEl.id = 'question-' + i;
    questionEl.setAttribute('data-question', i);
    
    var html = '<div class="question-card">';
    html += '<p class="question-text">' + question.text + '</p>';
    html += '<div class="answer-options">';
    
    for (var j = 0; j < LIKERT_OPTIONS.length; j++) {
      var option = LIKERT_OPTIONS[j];
      html += '<label class="answer-option" for="q' + i + '-' + option.value + '">';
      html += '<input type="radio" name="q' + i + '" id="q' + i + '-' + option.value + '" value="' + option.value + '" data-question="' + i + '">';
      html += '<span class="answer-dot"></span>';
      html += '<span>' + option.label + '</span>';
      html += '</label>';
    }
    
    html += '</div>';
    html += '</div>';
    questionEl.innerHTML = html;
    container.appendChild(questionEl);
  }
  
  // Bind radio changes
  var radios = container.querySelectorAll('input[type="radio"]');
  for (var k = 0; k < radios.length; k++) {
    radios[k].addEventListener('change', handleAnswer);
  }
  
  // Add click handler for answer-option labels to add .selected class
  var options = container.querySelectorAll('.answer-option');
  for (var m = 0; m < options.length; m++) {
    options[m].addEventListener('click', function() {
      var siblings = this.parentElement.querySelectorAll('.answer-option');
      for (var s = 0; s < siblings.length; s++) siblings[s].classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

function startQuiz() {
  document.getElementById('quiz-intro').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  showQuestion(0);
  trackQuizStart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuestion(index) {
  var questions = document.querySelectorAll('.quiz-question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].classList.remove('active');
  }
  var question = document.getElementById('question-' + index);
  if (question) question.classList.add('active');
  
  currentQuestion = index;
  var progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = ((index + 1) / QUESTIONS.length * 100) + '%';
  
  var progressText = document.getElementById('progress-text');
  if (progressText) progressText.textContent = 'Question ' + (index + 1) + ' of ' + QUESTIONS.length;
  
  updateNavButtons();
}

function handleAnswer(e) {
  var questionIndex = parseInt(e.target.getAttribute('data-question'));
  answers[questionIndex] = parseInt(e.target.value);
  updateNavButtons();
  
  if (currentQuestion < QUESTIONS.length - 1) {
    setTimeout(function() { nextQuestion(); }, 250);
  }
}

function updateNavButtons() {
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = currentQuestion === 0;
  var isAnswered = answers[currentQuestion] !== undefined;
  if (nextBtn) {
    nextBtn.disabled = !isAnswered;
    nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? 'See Results' : 'Next';
  }
}

function prevQuestion() {
  if (currentQuestion > 0) showQuestion(currentQuestion - 1);
}

function nextQuestion() {
  if (currentQuestion < QUESTIONS.length - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    calculateResults();
  }
}

function calculateResults() {
  scores = { explainer: 0, fixer: 0, avoider: 0, niceone: 0, loyalone: 0, performer: 0, rationalizer: 0 };
  
  for (var key in answers) {
    var questionIndex = parseInt(key);
    var question = QUESTIONS[questionIndex];
    scores[question.category] += answers[key];
  }
  
  var sortedScores = [];
  for (var cat in scores) {
    sortedScores.push([cat, scores[cat]]);
  }
  sortedScores.sort(function(a, b) { return b[1] - a[1]; });
  
  var primary = sortedScores[0][0];
  var primaryScore = sortedScores[0][1];
  var secondary = sortedScores[1][0];
  var secondaryScore = sortedScores[1][1];
  var isDualProfile = (primaryScore - secondaryScore) <= 2;
  
  trackQuizComplete(primary, secondary, isDualProfile);
  trackPrimaryResult(primary);
  displayResults(primary, secondary, isDualProfile);
}

function getScorePercent(score) {
  // Max possible per category is 20 (4 questions × 5 max)
  return Math.round((score / 20) * 100);
}

function displayResults(primary, secondary, isDualProfile) {
  document.getElementById('quiz-questions').style.display = 'none';
  
  var primaryData = ENTRY_POINTS[primary];
  var secondaryData = ENTRY_POINTS[secondary];
  var resultsContainer = document.getElementById('quiz-results');
  var maxScore = 20; // 4 questions × 5 max each
  
  // --- BUILD RESULTS HTML ---
  var html = '';
  
  // Result Header
  html += '<div class="results-header">';
  html += '<p class="results-label">Your Primary Entry Point</p>';
  html += '<h2 class="result-type">' + primaryData.name + '</h2>';
  if (isDualProfile) {
    html += '<span class="dual-profile-badge">Dual Entry Profile</span>';
  }
  html += '<p class="result-secondary">Secondary: <strong>' + secondaryData.name + '</strong></p>';
  html += '</div>';
  
  // Summary (the hook — just enough to create need)
  html += '<div class="result-summary">';
  html += '<p>' + primaryData.summary + '</p>';
  html += '</div>';
  
  // Cost One-Liner (the sting)
  html += '<div class="result-cost-liner">';
  html += '<p>' + primaryData.costOneLiner + '</p>';
  html += '</div>';
  
  // Email Gate (RIGHT HERE — while curiosity is at peak)
  html += '<div class="email-gate" id="email-gate">';
  html += '<h3>See your full breakdown — free.</h3>';
  html += '<p>What this looks like in real conversations. The 5 tactics that target your entry point. The phrases that close it. What it costs you over time.</p>';
  html += '<form class="email-form" id="email-form">';
  html += '<input type="email" class="form-input" id="email-input" placeholder="your@email.com" required>';
  html += '<input type="hidden" name="primary" value="' + primary + '">';
  html += '<input type="hidden" name="secondary" value="' + secondary + '">';
  html += '<input type="hidden" name="score_explainer" value="' + scores.explainer + '">';
  html += '<input type="hidden" name="score_fixer" value="' + scores.fixer + '">';
  html += '<input type="hidden" name="score_avoider" value="' + scores.avoider + '">';
  html += '<input type="hidden" name="score_niceone" value="' + scores.niceone + '">';
  html += '<input type="hidden" name="score_loyalone" value="' + scores.loyalone + '">';
  html += '<input type="hidden" name="score_performer" value="' + scores.performer + '">';
  html += '<input type="hidden" name="score_rationalizer" value="' + scores.rationalizer + '">';
  html += '<button type="submit" class="btn btn--primary">Unlock My Full Results</button>';
  html += '</form>';
  html += '<p class="email-disclaimer">One email with your results. No spam. Unsubscribe anytime.</p>';
  html += '</div>';
  
  // Everything below here is gated — hidden until email submitted
  html += '<div class="gated-results" id="gated-results" style="display:none;">';
  
  // Dialogue Example (the recognition moment)
  html += '<div class="result-dialogue">';
  html += '<p class="result-dialogue-label">' + primaryData.dialogueLabel + '</p>';
  html += '<div class="dialogue-box">';
  for (var d = 0; d < primaryData.dialogue.length; d++) {
    var line = primaryData.dialogue[d];
    html += '<div class="dialogue-line dialogue-line--' + line.speaker + '">';
    html += '<span class="dialogue-speaker">' + (line.speaker === 'them' ? 'Them' : 'You') + '</span>';
    html += '<span class="dialogue-text">' + line.text + '</span>';
    html += '</div>';
  }
  html += '</div>';
  html += '</div>';
  
  // Score Bars
  html += '<div class="score-bars">';
  html += '<h3 class="score-bars-title">Your Full Profile</h3>';
  for (var i = 0; i < DISPLAY_ORDER.length; i++) {
    var cat = DISPLAY_ORDER[i];
    var ep = ENTRY_POINTS[cat];
    var score = scores[cat];
    var pct = getScorePercent(score);
    var isPrimary = cat === primary;
    var isSecondary = cat === secondary;
    
    html += '<div class="score-bar-row' + (isPrimary ? ' is-primary' : '') + (isSecondary ? ' is-secondary' : '') + '">';
    html += '<div class="score-bar-label">';
    html += '<span class="score-bar-name">' + ep.shortName + '</span>';
    html += '<span class="score-bar-value">' + score + '/20</span>';
    html += '</div>';
    html += '<div class="score-bar-track">';
    html += '<div class="score-bar-fill" style="width: 0%" data-width="' + pct + '%"></div>';
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  
  // Tactic Previews
  html += '<div class="result-tactic-previews">';
  html += '<h3>Tactics that target ' + primaryData.name + '</h3>';
  html += '<p class="tactic-previews-intro">These are the pressure tactics specifically designed to exploit your entry point:</p>';
  for (var t = 0; t < primaryData.tacticPreviews.length; t++) {
    var tp = primaryData.tacticPreviews[t];
    html += '<div class="tactic-preview-card">';
    html += '<p class="tactic-preview-name">' + tp.name + '</p>';
    html += '<p class="tactic-preview-text">' + tp.preview + '</p>';
    html += '</div>';
  }
  html += '<div class="tactic-preview-locked">';
  html += '<p class="tactic-locked-names">';
  for (var u = 2; u < primaryData.tactics.length; u++) {
    html += primaryData.tactics[u];
    if (u < primaryData.tactics.length - 1) html += ' · ';
  }
  html += '</p>';
  html += '<p class="tactic-locked-text">+ ' + (primaryData.tactics.length - 2) + ' more tactics covered in the book →</p>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>'; // close gated-results
  
  // Book CTA (always visible — below email gate)
  html += '<div class="result-book-cta">';
  html += '<p class="result-book-pitch">' + primaryData.bookCTA + '</p>';
  html += '<a href="' + AMAZON_BOOK_URL + '" class="btn btn--primary" target="_blank" rel="noopener" onclick="trackBookClick(\'results_top\')">Get the Book on Amazon</a>';
  html += '</div>';
  
  // Share Section
  html += '<div class="share-section">';
  html += '<h3>Share your result</h3>';
  html += '<div class="share-buttons">';
  
  var tweetText = encodeURIComponent(primaryData.shareText + '\n\nFind yours:');
  var tweetUrl = encodeURIComponent(ASSESSMENT_URL);
  html += '<a href="https://twitter.com/intent/tweet?text=' + tweetText + '&url=' + tweetUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--x" onclick="trackShare(\'twitter\',\'' + primary + '\')">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  html += '<span>Post on X</span>';
  html += '</a>';
  
  html += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + tweetUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--fb" onclick="trackShare(\'facebook\',\'' + primary + '\')">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
  html += '<span>Share</span>';
  html += '</a>';
  
  var linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + tweetUrl;
  html += '<a href="' + linkedInUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--li" onclick="trackShare(\'linkedin\',\'' + primary + '\')">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  html += '<span>LinkedIn</span>';
  html += '</a>';
  
  html += '<button class="share-btn share-btn--copy" onclick="copyResultLink(\'' + primary + '\')" id="copy-btn">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
  html += '<span>Copy Link</span>';
  html += '</button>';
  
  html += '</div>';
  html += '</div>';
  
  // Full Results (hidden until email submitted)
  html += '<div class="full-results" id="full-results">';
  html += '<h3>What Others Pull From You</h3>';
  html += '<p>' + primaryData.whatOthersPull + '</p>';
  html += '<h3>What It Costs Over Time</h3>';
  html += '<p>' + primaryData.costOverTime + '</p>';
  html += '<h3>Your Interrupts</h3>';
  html += '<p class="interrupts-intro">Phrases that close the opening when you feel it being tested:</p>';
  html += '<ul class="interrupts-list">';
  for (var j = 0; j < primaryData.interrupts.length; j++) {
    html += '<li>' + primaryData.interrupts[j] + '</li>';
  }
  html += '</ul>';
  html += '<h3>Tactics That Target You</h3>';
  html += '<p class="tactics-intro">From the book — the 5 tactics most likely to use your entry point:</p>';
  html += '<ul class="tactics-list">';
  for (var k = 0; k < primaryData.tactics.length; k++) {
    html += '<li>' + primaryData.tactics[k] + '</li>';
  }
  html += '</ul>';
  html += '<h3>Your Secondary: ' + secondaryData.name + '</h3>';
  html += '<p>' + secondaryData.summary + '</p>';
  
  // Book CTA (bottom — second push, after they've seen everything)
  html += '<div class="book-cta">';
  html += '<h3>See All 27 Tactics</h3>';
  html += '<p>You\'ve seen your entry point and the tactics that target it. The book covers all 27—what they sound like in real conversation, why they work, and the exact responses that end them. No filler. No therapy language. Just the mechanics and the closes.</p>';
  html += '<a href="' + AMAZON_BOOK_URL + '" class="btn btn--primary" id="results-book-link" target="_blank" rel="noopener">Get the Book on Amazon</a>';
  html += '</div>';
  html += '</div>'; // .full-results
  
  resultsContainer.innerHTML = html;
  resultsContainer.classList.add('active');
  
  // Animate score bars after render
  setTimeout(function() {
    var bars = document.querySelectorAll('.score-bar-fill');
    for (var b = 0; b < bars.length; b++) {
      bars[b].style.width = bars[b].getAttribute('data-width');
    }
  }, 100);
  
  // Bind email form
  document.getElementById('email-form').addEventListener('submit', handleEmailSubmit);
  
  // Bind book click
  var bookLink = document.getElementById('results-book-link');
  if (bookLink) {
    bookLink.addEventListener('click', function() { trackBookClick('results_page'); });
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyResultLink(primary) {
  var text = ENTRY_POINTS[primary].shareText + '\n\nFind yours: ' + ASSESSMENT_URL;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showCopyConfirm();
    }).catch(function() {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
  trackShare('copy', primary);
}

function fallbackCopy(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyConfirm();
  } catch (e) {
    alert('Copy this:\n\n' + text);
  }
  document.body.removeChild(textarea);
}

function showCopyConfirm() {
  var btn = document.getElementById('copy-btn');
  if (btn) {
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Copied!</span>';
    btn.classList.add('copied');
    setTimeout(function() {
      btn.innerHTML = originalHTML;
      btn.classList.remove('copied');
    }, 2000);
  }
}

function handleEmailSubmit(e) {
  e.preventDefault();
  
  var form = e.target;
  var email = document.getElementById('email-input').value;
  var primary = form.querySelector('input[name="primary"]').value;
  var secondary = form.querySelector('input[name="secondary"]').value;
  
  var submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  var formData = {
    api_key: CONVERTKIT_API_KEY,
    email: email,
    fields: {
      primary_entry_point: form.querySelector('input[name="primary"]').value,
      secondary_entry_point: form.querySelector('input[name="secondary"]').value,
      score_explainer: form.querySelector('input[name="score_explainer"]').value,
      score_fixer: form.querySelector('input[name="score_fixer"]').value,
      score_avoider: form.querySelector('input[name="score_avoider"]').value,
      score_niceone: form.querySelector('input[name="score_niceone"]').value,
      score_loyalone: form.querySelector('input[name="score_loyalone"]').value,
      score_performer: form.querySelector('input[name="score_performer"]').value,
      score_rationalizer: form.querySelector('input[name="score_rationalizer"]').value
    }
  };
  
  fetch('https://api.convertkit.com/v3/forms/' + CONVERTKIT_FORM_ID + '/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(function(response) {
    if (!response.ok) throw new Error('ConvertKit submission failed');
    return response.json();
  })
  .then(function(data) {
    trackEmailSubmitted(primary, secondary);
    document.getElementById('email-gate').style.display = 'none';
    document.getElementById('gated-results').style.display = 'block';
    document.getElementById('full-results').classList.add('active');
    // Smooth scroll to gated content
    document.getElementById('gated-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  .catch(function(error) {
    console.error('Email submission error:', error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Unlock My Full Results';
    alert('There was an error. Please try again.');
  });
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}
