/**
 * Close The Opening - Entry Point Assessment
 */

// ConvertKit Form ID
const CONVERTKIT_FORM_ID = '9000393';
const CONVERTKIT_API_KEY = 'wJjLcl2cYB67ezCEj1a1LQ';

// Entry Point definitions - aligned with book
const ENTRY_POINTS = {
  explainer: {
    name: 'Explainer',
    summary: 'You feel compelled to justify yourself. When questioned, you explain. When misunderstood, you clarify. When accused, you defend with logic. This creates an opening because you can be kept explaining indefinitely—and others learn that challenging your reasoning pulls you into longer explanations, buying them time, wearing you down, or making you doubt positions you were certain about.',
    whatOthersPull: 'Extended justification, doubt, time',
    costOverTime: 'Exhaustion from over-explaining, erosion of confidence, giving ground through clarification rather than holding a clear position',
    interrupts: [
      '"I\'ve explained it as clearly as I can."',
      '"That\'s not what I said."',
      '"I don\'t agree with where this is going."'
    ],
    tactics: [
      'Forced Clarification',
      '"Just Curious" Questioning',
      'Intentional Misunderstanding',
      'Logic Traps'
    ]
  },
  niceOne: {
    name: 'Nice One',
    summary: 'You value being kind and hate being the cause of someone\'s pain. You\'ll go along with things to keep the peace. You\'ll absorb discomfort to prevent conflict. This creates an opening because guilt and disappointment can move you—and others learn that framing their requests as tests of your character makes you more likely to comply, even at cost to yourself.',
    whatOthersPull: 'Compliance, self-sacrifice, silence about your needs',
    costOverTime: 'Chronic over-giving, difficulty identifying what you actually want, relationships where your needs are invisible because you have never voiced them',
    interrupts: [
      '"I can see you\'re disappointed. My answer is still no."',
      '"Can you tell me specifically what you\'d like me to change?"',
      '"I appreciate what you\'ve done for me. That doesn\'t change my answer."',
      '"I see it differently."'
    ],
    tactics: [
      'Guilt Framing',
      'Selective Disappointment',
      '"After All I\'ve Done"',
      'Moral High-Grounding'
    ]
  },
  fixer: {
    name: 'Fixer',
    summary: 'You\'re the capable one. When someone has a problem, you solve it. When someone struggles, you step in. You derive identity from being needed. This creates an opening because you can be given endless problems to solve—and others learn that presenting a problem activates your need to help, which they can use to offload work, responsibility, or emotional labor onto you.',
    whatOthersPull: 'Labor, responsibility, solutions',
    costOverTime: 'Burnout from carrying others\' problems, resentment, neglecting your own needs while managing everyone else\'s',
    interrupts: [
      '"I think you can figure this out."',
      '"That sounds stressful. What\'s your plan?"',
      '"Sounds like you\'re making progress."',
      '"I want to make sure I\'m prioritizing correctly. Is this part of my role, or occasional support?"'
    ],
    tactics: [
      'Helplessness Theater',
      'Crisis Manufacturing',
      'Partial Effort Displays',
      'Responsibility Drift'
    ]
  },
  performer: {
    name: 'Performer',
    summary: 'You need to know how you\'re doing. Validation matters. Approval fuels you. You work harder when the finish line seems close. This creates an opening because approval can be withheld to keep you performing—and others learn that challenging your competence gets you to take on more, work harder, or say yes to things you should decline.',
    whatOthersPull: 'Extra effort, overcommitment, proof of value',
    costOverTime: 'Exhaustion from constantly proving yourself, difficulty setting limits because "I can\'t" feels like failure, being exploited through strategic doubt',
    interrupts: [
      '"Can you be specific about what would have made it stronger?"',
      '"We agreed on X for this period. Can we close that out before expanding the scope?"',
      '"I\'m not interested in comparisons."',
      '"I\'m going to consider this closed unless I hear otherwise."'
    ],
    tactics: [
      'Conditional Validation',
      'Quietly Raising the Bar',
      'Comparison Seeding',
      'Withholding Closure'
    ]
  },
  avoider: {
    name: 'Avoider',
    summary: 'You hate confrontation. You\'d rather let something slide than address it directly. You tolerate small encroachments to avoid big conflicts. This creates an opening because silence and inaction can pressure you—and others learn that introducing discomfort makes you more likely to back down, agree, or let things go that you shouldn\'t.',
    whatOthersPull: 'Concessions, agreement, silence',
    costOverTime: 'Accumulated resentment, unresolved issues that fester, loss of voice in relationships where you have trained others that tension gets them what they want',
    interrupts: [
      'Let the silence stand.',
      '"I need a response by [time]. After that, I\'ll proceed with my decision."',
      '"I need something concrete. A yes, a no, or a timeline."',
      '"This is your responsibility. I\'m not going to take it over."'
    ],
    tactics: [
      'Strategic Silence',
      'Delayed Responses',
      'Vagueness as Control',
      'Escalation by Inaction'
    ]
  },
  loyalOne: {
    name: 'Loyal One',
    summary: 'You honor your commitments fiercely. Past relationships carry weight. You feel bound by history and obligation. This creates an opening because past kindness can be converted into current demands—and others learn that invoking your shared past makes you tolerate things you otherwise wouldn\'t.',
    whatOthersPull: 'Tolerance, continued access, second chances',
    costOverTime: 'Staying too long in situations that have changed, being exploited by people who no longer treat you well but know you will stay because of history',
    interrupts: [
      '"I appreciate what you\'ve done for me, but I\'m feeling pressured right now, and I don\'t want to make a decision from that place."',
      '"Our history doesn\'t mean I accept this."',
      '"I can value what we had and still walk away."'
    ],
    tactics: [
      '"After All I\'ve Done"',
      'Guilt Framing',
      'Moral High-Grounding'
    ]
  },
  rationalizer: {
    name: 'Rationalizer',
    summary: 'You can see every angle. You understand why people behave the way they do. You can construct charitable explanations for almost anything. This creates an opening because you can be led through logic chains that end somewhere you\'d never go directly—and others learn that showing you glimpses of their reasoning lets you explain away their behavior.',
    whatOthersPull: 'Deference, acquiescence, charitable interpretation',
    costOverTime: 'Chronic underselling of your own judgment, being steamrolled by people who are simply more certain (not more correct), loss of trust in your own perceptions',
    interrupts: [
      '"I don\'t agree with where this is going."',
      '"That\'s not how I remember it."',
      '"I don\'t see it that way."',
      '"I appreciate you sharing that. It doesn\'t change my answer."'
    ],
    tactics: [
      'Logic Traps',
      'Gaslighting Lite',
      'Identity Reframing',
      'Controlled Vulnerability'
    ]
  }
};

// All 28 questions - updated categories
const QUESTIONS = [
  { text: "When someone questions my reasoning, I feel compelled to explain myself more thoroughly than I intended.", category: "explainer" },
  { text: "When someone describes a problem they are having, my mind immediately goes to how I could help solve it.", category: "fixer" },
  { text: "When a conversation becomes tense, I often say something conciliatory just to reduce the discomfort.", category: "avoider" },
  { text: "When someone asks me for something, I often say yes before fully considering whether I want to.", category: "niceOne" },
  { text: "I have stayed in situations longer than I should have because of shared history or what we have been through together.", category: "loyalOne" },
  { text: "When someone implies I might not be able to handle something, I feel a strong pull to prove them wrong.", category: "performer" },
  { text: "When someone speaks with more certainty than I feel, I tend to construct explanations for why they might be right.", category: "rationalizer" },
  { text: "If I sense someone does not fully understand my point, I will keep rephrasing until I am sure they get it.", category: "explainer" },
  { text: "I often find myself taking responsibility for resolving situations that are not really mine to fix.", category: "fixer" },
  { text: "I have agreed to things I did not fully support because the discomfort of continuing to disagree felt worse than letting it go.", category: "avoider" },
  { text: "I find myself softening honest opinions because I do not want to seem harsh or unkind.", category: "niceOne" },
  { text: "When someone reminds me how long we have known each other or what they have done for me, it makes me more likely to comply.", category: "loyalOne" },
  { text: "I take on more than I should because saying \"I cannot\" feels like admitting a limitation.", category: "performer" },
  { text: "If someone behaves poorly toward me, I usually find myself constructing explanations for why they might have done it.", category: "rationalizer" },
  { text: "When I make a decision, I often find myself providing reasons for it even when no one asked.", category: "explainer" },
  { text: "If someone I care about is struggling, I have difficulty not stepping in—even when they have not asked.", category: "fixer" },
  { text: "Unresolved tension in a relationship creates a low-level discomfort I find hard to tolerate.", category: "avoider" },
  { text: "If saying no would disappoint someone, I sometimes agree even when it costs me.", category: "niceOne" },
  { text: "The thought of ending a long-term relationship—even a difficult one—feels like a kind of betrayal.", category: "loyalOne" },
  { text: "If my competence is questioned, I find it hard to walk away without demonstrating what I can do.", category: "performer" },
  { text: "I can usually understand why someone acted the way they did, even when their behavior hurt me.", category: "rationalizer" },
  { text: "If someone mischaracterizes something I said, it is hard for me to let it go without correcting the record.", category: "explainer" },
  { text: "I sometimes realize I have spent significant time or energy on someone else's problem while my own needs waited.", category: "fixer" },
  { text: "In disagreements, I sometimes back down not because I changed my mind, but because the conflict itself became exhausting.", category: "avoider" },
  { text: "I worry about being perceived as difficult or selfish more than I would like to admit.", category: "niceOne" },
  { text: "I sometimes tolerate treatment I would not accept from someone newer in my life because of how far back we go.", category: "loyalOne" },
  { text: "I have agreed to tasks or challenges mostly to show that I was capable of them.", category: "performer" },
  { text: "When I disagree with someone but they seem very sure, I often look for reasons why I might be missing something.", category: "rationalizer" }
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
  niceOne: 0,
  fixer: 0,
  performer: 0,
  avoider: 0,
  loyalOne: 0,
  rationalizer: 0
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
    niceOne: 0,
    fixer: 0,
    performer: 0,
    avoider: 0,
    loyalOne: 0,
    rationalizer: 0
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
  html += '<input type="hidden" name="score_avoider" value="' + scores.avoider + '">';
  html += '<input type="hidden" name="score_niceone" value="' + scores.niceOne + '">';
  html += '<input type="hidden" name="score_loyalone" value="' + scores.loyalOne + '">';
  html += '<input type="hidden" name="score_performer" value="' + scores.performer + '">';
  html += '<input type="hidden" name="score_rationalizer" value="' + scores.rationalizer + '">';
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
      primary_entry_point: primary,
      secondary_entry_point: secondary,
      score_explainer: form.querySelector('input[name="score_explainer"]').value,
      score_fixer: form.querySelector('input[name="score_fixer"]').value,
      score_avoider: form.querySelector('input[name="score_avoider"]').value,
      score_niceone: form.querySelector('input[name="score_niceone"]').value,
      score_loyalone: form.querySelector('input[name="score_loyalone"]').value,
      score_performer: form.querySelector('input[name="score_performer"]').value,
      score_rationalizer: form.querySelector('input[name="score_rationalizer"]').value
    }
  };
  
  console.log('Submitting to ConvertKit:', formData);
  
  fetch('https://api.convertkit.com/v3/forms/' + CONVERTKIT_FORM_ID + '/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(function(response) {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(function(data) {
    console.log('ConvertKit response:', data);
    if (data.subscription) {
      trackEmailSubmitted(primary, secondary);
      document.getElementById('email-gate').style.display = 'none';
      document.getElementById('full-results').classList.add('active');
    } else {
      console.error('No subscription in response:', data);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send My Results';
      alert('Submission failed: ' + (data.message || 'Unknown error'));
    }
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
