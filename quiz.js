/**
 * Close The Opening - Entry Point Assessment
 */

// ConvertKit Form ID
const CONVERTKIT_FORM_ID = '9000393';
const CONVERTKIT_API_KEY = 'wJjLcl2cYB67ezCEj1a1LQ';

// Entry Point definitions
const ENTRY_POINTS = {
  explainer: {
    name: 'Explainer',
    summary: 'You feel compelled to justify, clarify, and make yourself understood—especially when questioned. This creates an opening because others learn that challenging your reasoning pulls you into longer explanations, buying them time, wearing you down, or making you doubt positions you were certain about.',
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
    ]
  },
  fixer: {
    name: 'Fixer',
    summary: 'You feel pulled to solve problems, intervene in struggles, and take responsibility for outcomes—even when you were not asked. This creates an opening because others learn that presenting a problem activates your need to help, which they can use to offload work, responsibility, or emotional labor onto you.',
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
    ]
  },
  peacemaker: {
    name: 'Peacemaker',
    summary: 'You feel uncomfortable with tension and often move to reduce it—conceding, softening, or redirecting to restore calm. This creates an opening because others learn that introducing conflict or discomfort makes you more likely to back down, agree, or let things go that you should not.',
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
    ]
  },
  niceOne: {
    name: 'Nice One',
    summary: 'You worry about being perceived as harsh, selfish, or unkind—and you adjust your behavior to avoid that judgment. This creates an opening because others learn that framing their requests as tests of your character makes you more likely to comply, even at cost to yourself.',
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
    ]
  },
  loyalist: {
    name: 'Loyalist',
    summary: 'You give weight to history, shared experience, and past investment—sometimes more weight than present behavior deserves. This creates an opening because others learn that invoking your shared past, or reminding you of what you have been through together, makes you tolerate things you otherwise would not.',
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
    ]
  },
  achiever: {
    name: 'Achiever',
    summary: 'You feel a pull to prove your capability—especially when it is questioned or implied that you might not be up to something. This creates an opening because others learn that challenging your competence gets you to take on more, work harder, or say yes to things you should decline.',
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
    ]
  },
  selfDoubter: {
    name: 'Self-Doubter',
    summary: 'You tend to defer to others\' certainty, second-guess your own judgment, and assume that confident people probably know something you do not. This creates an opening because others learn that speaking with conviction—even without substance—makes you yield ground you should not.',
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
    ]
  }
};

// All 28 questions
const QUESTIONS = [
  { text: "When someone questions my reasoning, I feel compelled to explain myself more thoroughly than I intended.", category: "explainer" },
  { text: "When someone describes a problem they are having, my mind immediately goes to how I could help solve it.", category: "fixer" },
  { text: "When a conversation becomes tense, I often say something conciliatory just to reduce the discomfort.", category: "peacemaker" },
  { text: "When someone asks me for something, I often say yes before fully considering whether I want to.", category: "niceOne" },
  { text: "I have stayed in situations longer than I should have because of shared history or what we have been through together.", category: "loyalist" },
  { text: "When someone implies I might not be able to handle something, I feel a strong pull to prove them wrong.", category: "achiever" },
  { text: "When someone speaks with more certainty than I feel, I tend to defer to their position.", category: "selfDoubter" },
  { text: "If I sense someone does not fully understand my point, I will keep rephrasing until I am sure they get it.", category: "explainer" },
  { text: "I often find myself taking responsibility for resolving situations that are not really mine to fix.", category: "fixer" },
  { text: "I have agreed to things I did not fully support because the discomfort of continuing to disagree felt worse than letting it go.", category: "peacemaker" },
  { text: "I find myself softening honest opinions because I do not want to seem harsh or unkind.", category: "niceOne" },
  { text: "When someone reminds me how long we have known each other or what they have done for me, it makes me more likely to comply.", category: "loyalist" },
  { text: "I take on more than I should because saying \"I cannot\" feels like admitting a limitation.", category: "achiever" },
  { text: "If someone contradicts my memory of events with confidence, I start to question whether I am remembering correctly.", category: "selfDoubter" },
  { text: "When I make a decision, I often find myself providing reasons for it even when no one asked.", category: "explainer" },
  { text: "If someone I care about is struggling, I have difficulty not stepping in—even when they have not asked.", category: "fixer" },
  { text: "Unresolved tension in a relationship creates a low-level discomfort I find hard to tolerate.", category: "peacemaker" },
  { text: "If saying no would disappoint someone, I sometimes agree even when it costs me.", category: "niceOne" },
  { text: "The thought of ending a long-term relationship—even a difficult one—feels like a kind of betrayal.", category: "loyalist" },
  { text: "If my competence is questioned, I find it hard to walk away without demonstrating what I can do.", category: "achiever" },
  { text: "I often assume other people have better judgment about situations than I do.", category: "selfDoubter" },
  { text: "If someone mischaracterizes something I said, it is hard for me to let it go without correcting the record.", category: "explainer" },
  { text: "I sometimes realize I have spent significant time or energy on someone else's problem while my own needs waited.", category: "fixer" },
  { text: "In disagreements, I sometimes back down not because I changed my mind, but because the conflict itself became exhausting.", category: "peacemaker" },
  { text: "I worry about being perceived as difficult or selfish more than I would like to admit.", category: "niceOne" },
  { text: "I sometimes tolerate treatment I would not accept from someone newer in my life because of how far back we go.", category: "loyalist" },
  { text: "I have agreed to tasks or challenges mostly to show that I was capable of them.", category: "achiever" },
  { text: "When I disagree with someone but they seem very sure, I usually assume I am missing something.", category: "selfDoubter" }
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
  explainer: 0,
  fixer: 0,
  peacemaker: 0,
  niceOne: 0,
  loyalist: 0,
  achiever: 0,
  selfDoubter: 0
};

// Analytics stubs
function trackEvent(eventName, eventData) {
  console.log('[Analytics] ' + eventName, eventData || {});
}

function trackQuizStart() {
  trackEvent('quiz_start');
}

function trackQuizComplete(primary, secondary, isDual) {
  trackEvent('quiz_complete', {
    primary_entry_point: primary,
    secondary_entry_point: secondary,
    is_dual_profile: isDual
  });
}

function trackPrimaryResult(primary) {
  trackEvent('primary_result', { entry_point: primary });
}

function trackEmailSubmitted(primary, secondary) {
  trackEvent('email_submitted', {
    primary_entry_point: primary,
    secondary_entry_point: secondary
  });
}

function trackBookClick(source) {
  trackEvent('book_click', { source: source });
}

// Quiz logic
function initQuiz() {
  var startBtn = document.getElementById('start-quiz');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  
  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', prevQuestion);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }
  
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
    
    var html = '<p class="question-number">' + (i + 1) + ' / 28</p>';
    html += '<p class="question-text">' + question.text + '</p>';
    html += '<div class="likert-scale">';
    
    for (var j = 0; j < LIKERT_OPTIONS.length; j++) {
      var option = LIKERT_OPTIONS[j];
      html += '<div class="likert-option">';
      html += '<input type="radio" name="q' + i + '" id="q' + i + '-' + option.value + '" value="' + option.value + '" data-question="' + i + '">';
      html += '<label for="q' + i + '-' + option.value + '">';
      html += '<span class="likert-number">' + option.value + '</span>';
      html += '<span class="likert-label">' + option.label + '</span>';
      html += '</label>';
      html += '</div>';
    }
    
    html += '</div>';
    questionEl.innerHTML = html;
    container.appendChild(questionEl);
  }
  
  var radios = container.querySelectorAll('input[type="radio"]');
  for (var k = 0; k < radios.length; k++) {
    radios[k].addEventListener('change', handleAnswer);
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
  if (question) {
    question.classList.add('active');
  }
  
  currentQuestion = index;
  var progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = ((index + 1) / QUESTIONS.length * 100) + '%';
  }
  
  updateNavButtons();
}

function handleAnswer(e) {
  var questionIndex = parseInt(e.target.getAttribute('data-question'));
  var value = parseInt(e.target.value);
  
  answers[questionIndex] = value;
  updateNavButtons();
  
  if (currentQuestion < QUESTIONS.length - 1) {
    setTimeout(function() {
      nextQuestion();
    }, 250);
  }
}

function updateNavButtons() {
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  
  if (prevBtn) {
    prevBtn.disabled = currentQuestion === 0;
  }
  
  var isAnswered = answers[currentQuestion] !== undefined;
  if (nextBtn) {
    nextBtn.disabled = !isAnswered;
    nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? 'See Results' : 'Next';
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  if (currentQuestion < QUESTIONS.length - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    calculateResults();
  }
}

function calculateResults() {
  scores = {
    explainer: 0,
    fixer: 0,
    peacemaker: 0,
    niceOne: 0,
    loyalist: 0,
    achiever: 0,
    selfDoubter: 0
  };
  
  for (var key in answers) {
    var questionIndex = parseInt(key);
    var question = QUESTIONS[questionIndex];
    var value = answers[key];
    scores[question.category] += value;
  }
  
  var sortedScores = [];
  for (var cat in scores) {
    sortedScores.push([cat, scores[cat]]);
  }
  sortedScores.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  var primary = sortedScores[0][0];
  var primaryScore = sortedScores[0][1];
  var secondary = sortedScores[1][0];
  var secondaryScore = sortedScores[1][1];
  
  var isDualProfile = (primaryScore - secondaryScore) <= 2;
  
  trackQuizComplete(primary, secondary, isDualProfile);
  trackPrimaryResult(primary);
  
  displayResults(primary, secondary, isDualProfile);
}

function displayResults(primary, secondary, isDualProfile) {
  document.getElementById('quiz-questions').style.display = 'none';
  
  var primaryData = ENTRY_POINTS[primary];
  var secondaryData = ENTRY_POINTS[secondary];
  
  var resultsContainer = document.getElementById('quiz-results');
  
  var html = '<div class="results-header">';
  html += '<h2>Your Primary Entry Point</h2>';
  html += '<span class="result-type">' + primaryData.name + '</span>';
  if (isDualProfile) {
    html += '<span class="dual-profile-badge">Dual Entry Profile</span>';
  }
  html += '<p class="result-secondary">Secondary: <strong>' + secondaryData.name + '</strong></p>';
  html += '</div>';
  
  html += '<div class="result-summary">';
  html += '<p>' + primaryData.summary + '</p>';
  html += '</div>';
  
  html += '<div class="email-gate" id="email-gate">';
  html += '<h3>Your full breakdown.</h3>';
  html += '<p>Interrupts, tactics, and what to watch for—delivered once.</p>';
  html += '<form class="email-form" id="email-form">';
  html += '<input type="email" class="form-input" id="email-input" placeholder="your@email.com" required>';
  html += '<input type="hidden" name="primary" value="' + primary + '">';
  html += '<input type="hidden" name="secondary" value="' + secondary + '">';
  html += '<input type="hidden" name="score_explainer" value="' + scores.explainer + '">';
  html += '<input type="hidden" name="score_fixer" value="' + scores.fixer + '">';
  html += '<input type="hidden" name="score_peacemaker" value="' + scores.peacemaker + '">';
  html += '<input type="hidden" name="score_niceone" value="' + scores.niceOne + '">';
  html += '<input type="hidden" name="score_loyalist" value="' + scores.loyalist + '">';
  html += '<input type="hidden" name="score_achiever" value="' + scores.achiever + '">';
  html += '<input type="hidden" name="score_selfdoubter" value="' + scores.selfDoubter + '">';
  html += '<button type="submit" class="btn btn--primary">Send My Results</button>';
  html += '</form>';
  html += '<p class="email-disclaimer">No spam. Unsubscribe anytime.</p>';
  html += '</div>';
  
  html += '<div class="full-results" id="full-results">';
  html += '<h3>What Others Pull From You</h3>';
  html += '<p>' + primaryData.whatOthersPull + '</p>';
  html += '<h3>What It Costs Over Time</h3>';
  html += '<p>' + primaryData.costOverTime + '</p>';
  html += '<h3>Your Interrupts</h3>';
  html += '<ul class="interrupts-list">';
  for (var i = 0; i < primaryData.interrupts.length; i++) {
    html += '<li>' + primaryData.interrupts[i] + '</li>';
  }
  html += '</ul>';
  html += '<h3>Tactics to Watch</h3>';
  html += '<ul class="tactics-list">';
  for (var j = 0; j < primaryData.tactics.length; j++) {
    html += '<li>' + primaryData.tactics[j] + '</li>';
  }
  html += '</ul>';
  html += '<h3>Secondary: ' + secondaryData.name + '</h3>';
  html += '<p>' + secondaryData.summary + '</p>';
  html += '<div class="book-cta">';
  html += '<h3>Go Deeper</h3>';
  html += '<p>All 27 tactics. What they look like. How to respond.</p>';
  html += '<a href="book.html" class="btn btn--primary" id="results-book-link">See the Book</a>';
  html += '</div>';
  html += '</div>';
  
  resultsContainer.innerHTML = html;
  resultsContainer.classList.add('active');
  
  document.getElementById('email-form').addEventListener('submit', handleEmailSubmit);
  
  var bookLink = document.getElementById('results-book-link');
  if (bookLink) {
    bookLink.addEventListener('click', function() {
      trackBookClick('results_page');
    });
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  
  // Submit to ConvertKit
  var formData = {
    api_key: CONVERTKIT_API_KEY,
    email: email,
    fields: {
      primary_entry_point: form.querySelector('input[name="primary"]').value,
      secondary_entry_point: form.querySelector('input[name="secondary"]').value,
      score_explainer: form.querySelector('input[name="score_explainer"]').value,
      score_fixer: form.querySelector('input[name="score_fixer"]').value,
      score_peacemaker: form.querySelector('input[name="score_peacemaker"]').value,
      score_niceone: form.querySelector('input[name="score_niceone"]').value,
      score_loyalist: form.querySelector('input[name="score_loyalist"]').value,
      score_achiever: form.querySelector('input[name="score_achiever"]').value,
      score_selfdoubter: form.querySelector('input[name="score_selfdoubter"]').value
    }
  };
  
  fetch('https://api.convertkit.com/v3/forms/' + CONVERTKIT_FORM_ID + '/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('ConvertKit submission failed');
    }
    return response.json();
  })
  .then(function(data) {
    trackEmailSubmitted(primary, secondary);
    document.getElementById('email-gate').style.display = 'none';
    document.getElementById('full-results').classList.add('active');
  })
  .catch(function(error) {
    console.error('Email submission error:', error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send My Results';
    alert('There was an error. Please try again.');
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}
