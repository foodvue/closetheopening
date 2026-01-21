/**
 * Close The Opening - Entry Point Assessment
 * 
 * Quiz logic including:
 * - 28 questions mapped to 7 Entry Points
 * - Likert scale (1-5) scoring
 * - Primary + Secondary calculation
 * - Dual Profile detection
 * - Email capture integration (ConvertKit ready)
 * - Analytics event stubs
 */

// ===========================================
// CONFIGURATION
// ===========================================

// ConvertKit Form ID - Replace with your actual form ID
const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID_HERE';

// Entry Point definitions
const ENTRY_POINTS = {
  explainer: {
    name: 'Explainer',
    summary: 'You feel compelled to justify, clarify, and make yourself understood—especially when questioned. This creates an opening because others learn that challenging your reasoning pulls you into longer explanations, buying them time, wearing you down, or making you doubt positions you were certain about.',
    whatOthersPull: 'Extended justification, doubt, time',
    costOverTime: 'Exhaustion from over-explaining, erosion of confidence, giving ground through clarification rather than holding a clear position',
    interrupts: [
      '"I've explained my position."',
      '"I'm not going to keep clarifying."',
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
    summary: 'You feel pulled to solve problems, intervene in struggles, and take responsibility for outcomes—even when you weren\'t asked. This creates an opening because others learn that presenting a problem activates your need to help, which they can use to offload work, responsibility, or emotional labor onto you.',
    whatOthersPull: 'Labor, responsibility, solutions',
    costOverTime: 'Burnout from carrying others\' problems, resentment, neglecting your own needs while managing everyone else\'s',
    interrupts: [
      '"That sounds hard. What are you going to do?"',
      '"I\'m not the right person to solve this."',
      '"I trust you\'ll figure it out."'
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
    summary: 'You feel uncomfortable with tension and often move to reduce it—conceding, softening, or redirecting to restore calm. This creates an opening because others learn that introducing conflict or discomfort makes you more likely to back down, agree, or let things go that you shouldn\'t.',
    whatOthersPull: 'Concessions, agreement, silence',
    costOverTime: 'Accumulated resentment, unresolved issues that fester, loss of voice in relationships where you\'ve trained others that tension gets them what they want',
    interrupts: [
      '"I\'m okay with this being uncomfortable."',
      '"We don\'t have to agree right now."',
      '"I\'m not backing down just to end this."'
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
    costOverTime: 'Chronic over-giving, difficulty identifying what you actually want, relationships where your needs are invisible because you\'ve never voiced them',
    interrupts: [
      '"I can be kind and still say no."',
      '"I\'m not going to feel guilty for this."',
      '"You can be disappointed. That\'s allowed."'
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
    summary: 'You give weight to history, shared experience, and past investment—sometimes more weight than present behavior deserves. This creates an opening because others learn that invoking your shared past, or reminding you of what you\'ve been through together, makes you tolerate things you otherwise wouldn\'t.',
    whatOthersPull: 'Tolerance, continued access, second chances',
    costOverTime: 'Staying too long in situations that have changed, being exploited by people who no longer treat you well but know you\'ll stay because of history',
    interrupts: [
      '"Our history doesn\'t mean I accept this."',
      '"What you\'ve done before doesn\'t erase what\'s happening now."',
      '"I can value what we had and still walk away."'
    ],
    tactics: [
      'The History Invocation',
      'The Debt Reminder',
      'The Nostalgia Play',
      'The Loyalty Test',
      'The "After All I\'ve Done"'
    ]
  },
  achiever: {
    name: 'Achiever',
    summary: 'You feel a pull to prove your capability—especially when it\'s questioned or implied that you might not be up to something. This creates an opening because others learn that challenging your competence gets you to take on more, work harder, or say yes to things you should decline.',
    whatOthersPull: 'Extra effort, overcommitment, proof of value',
    costOverTime: 'Exhaustion from constantly proving yourself, difficulty setting limits because "I can\'t" feels like failure, being exploited through strategic doubt',
    interrupts: [
      '"I don\'t need to prove this."',
      '"My capabilities aren\'t in question here."',
      '"I\'m choosing not to—not unable to."'
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
    summary: 'You tend to defer to others\' certainty, second-guess your own judgment, and assume that confident people probably know something you don\'t. This creates an opening because others learn that speaking with conviction—even without substance—makes you yield ground you shouldn\'t.',
    whatOthersPull: 'Deference, acquiescence, your position',
    costOverTime: 'Chronic underselling of your own judgment, being steamrolled by people who are simply more certain (not more correct), loss of trust in your own perceptions',
    interrupts: [
      '"I trust my read on this."',
      '"Your certainty doesn\'t change my position."',
      '"I don\'t need to be sure to hold my ground."'
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

// All 28 questions with their Entry Point mapping
const QUESTIONS = [
  { text: "When someone questions my reasoning, I feel compelled to explain myself more thoroughly than I intended.", category: "explainer" },
  { text: "When someone describes a problem they're having, my mind immediately goes to how I could help solve it.", category: "fixer" },
  { text: "When a conversation becomes tense, I often say something conciliatory just to reduce the discomfort.", category: "peacemaker" },
  { text: "When someone asks me for something, I often say yes before fully considering whether I want to.", category: "niceOne" },
  { text: "I've stayed in situations longer than I should have because of shared history or what we've been through together.", category: "loyalist" },
  { text: "When someone implies I might not be able to handle something, I feel a strong pull to prove them wrong.", category: "achiever" },
  { text: "When someone speaks with more certainty than I feel, I tend to defer to their position.", category: "selfDoubter" },
  { text: "If I sense someone doesn't fully understand my point, I'll keep rephrasing until I'm sure they get it.", category: "explainer" },
  { text: "I often find myself taking responsibility for resolving situations that aren't really mine to fix.", category: "fixer" },
  { text: "I've agreed to things I didn't fully support because the discomfort of continuing to disagree felt worse than letting it go.", category: "peacemaker" },
  { text: "I find myself softening honest opinions because I don't want to seem harsh or unkind.", category: "niceOne" },
  { text: "When someone reminds me how long we've known each other or what they've done for me, it makes me more likely to comply.", category: "loyalist" },
  { text: "I take on more than I should because saying \"I can't\" feels like admitting a limitation.", category: "achiever" },
  { text: "If someone contradicts my memory of events with confidence, I start to question whether I'm remembering correctly.", category: "selfDoubter" },
  { text: "When I make a decision, I often find myself providing reasons for it even when no one asked.", category: "explainer" },
  { text: "If someone I care about is struggling, I have difficulty not stepping in—even when they haven't asked.", category: "fixer" },
  { text: "Unresolved tension in a relationship creates a low-level discomfort I find hard to tolerate.", category: "peacemaker" },
  { text: "If saying no would disappoint someone, I sometimes agree even when it costs me.", category: "niceOne" },
  { text: "The thought of ending a long-term relationship—even a difficult one—feels like a kind of betrayal.", category: "loyalist" },
  { text: "If my competence is questioned, I find it hard to walk away without demonstrating what I can do.", category: "achiever" },
  { text: "I often assume other people have better judgment about situations than I do.", category: "selfDoubter" },
  { text: "If someone mischaracterizes something I said, it's hard for me to let it go without correcting the record.", category: "explainer" },
  { text: "I sometimes realize I've spent significant time or energy on someone else's problem while my own needs waited.", category: "fixer" },
  { text: "In disagreements, I sometimes back down not because I changed my mind, but because the conflict itself became exhausting.", category: "peacemaker" },
  { text: "I worry about being perceived as difficult or selfish more than I'd like to admit.", category: "niceOne" },
  { text: "I sometimes tolerate treatment I wouldn't accept from someone newer in my life because of how far back we go.", category: "loyalist" },
  { text: "I've agreed to tasks or challenges mostly to show that I was capable of them.", category: "achiever" },
  { text: "When I disagree with someone but they seem very sure, I usually assume I'm missing something.", category: "selfDoubter" }
];

// Likert scale options
const LIKERT_OPTIONS = [
  { value: 1, label: "Not like me" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Very much" }
];

// ===========================================
// STATE
// ===========================================

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

// ===========================================
// ANALYTICS STUBS
// ===========================================

function trackEvent(eventName, eventData = {}) {
  console.log(`[Analytics] ${eventName}`, eventData);
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

// ===========================================
// QUIZ LOGIC
// ===========================================

function initQuiz() {
  const startBtn = document.getElementById('start-quiz');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  startBtn.addEventListener('click', startQuiz);
  prevBtn.addEventListener('click', prevQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  
  buildQuestions();
}

function buildQuestions() {
  const container = document.getElementById('questions-container');
  
  QUESTIONS.forEach((question, index) => {
    const questionEl = document.createElement('div');
    questionEl.className = 'quiz-question';
    questionEl.id = `question-${index}`;
    questionEl.setAttribute('data-question', index);
    
    questionEl.innerHTML = `
      <p class="question-number">${index + 1} / 28</p>
      <p class="question-text">${question.text}</p>
      <div class="likert-scale">
        ${LIKERT_OPTIONS.map(option => `
          <div class="likert-option">
            <input 
              type="radio" 
              name="q${index}" 
              id="q${index}-${option.value}" 
              value="${option.value}"
              data-question="${index}"
            >
            <label for="q${index}-${option.value}">
              <span class="likert-number">${option.value}</span>
              <span class="likert-label">${option.label}</span>
            </label>
          </div>
        `).join('')}
      </div>
    `;
    
    container.appendChild(questionEl);
  });
  
  container.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', handleAnswer);
  });
}

function startQuiz() {
  document.getElementById('quiz-intro').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  showQuestion(0);
  trackQuizStart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuestion(index) {
  document.querySelectorAll('.quiz-question').forEach(q => {
    q.classList.remove('active');
  });
  
  const question = document.getElementById(`question-${index}`);
  question.classList.add('active');
  
  currentQuestion = index;
  document.getElementById('progress-fill').style.width = `${((index + 1) / QUESTIONS.length) * 100}%`;
  
  updateNavButtons();
  
  const firstInput = question.querySelector('input[type="radio"]');
  if (firstInput) firstInput.focus();
}

function handleAnswer(e) {
  const questionIndex = parseInt(e.target.dataset.question);
  const value = parseInt(e.target.value);
  
  answers[questionIndex] = value;
  updateNavButtons();
  
  if (currentQuestion < QUESTIONS.length - 1) {
    setTimeout(() => nextQuestion(), 250);
  }
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  prevBtn.disabled = currentQuestion === 0;
  
  const isAnswered = answers[currentQuestion] !== undefined;
  nextBtn.disabled = !isAnswered;
  
  nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? 'See Results' : 'Next';
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
  scores = {
    explainer: 0,
    fixer: 0,
    peacemaker: 0,
    niceOne: 0,
    loyalist: 0,
    achiever: 0,
    selfDoubter: 0
  };
  
  Object.keys(answers).forEach(questionIndex => {
    const question = QUESTIONS[parseInt(questionIndex)];
    const value = answers[questionIndex];
    scores[question.category] += value;
  });
  
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  
  const primary = sortedScores[0][0];
  const primaryScore = sortedScores[0][1];
  const secondary = sortedScores[1][0];
  const secondaryScore = sortedScores[1][1];
  
  const isDualProfile = (primaryScore - secondaryScore) <= 2;
  
  trackQuizComplete(primary, secondary, isDualProfile);
  trackPrimaryResult(primary);
  
  displayResults(primary, secondary, isDualProfile);
}

function displayResults(primary, secondary, isDualProfile) {
  document.getElementById('quiz-questions').style.display = 'none';
  
  const primaryData = ENTRY_POINTS[primary];
  const secondaryData = ENTRY_POINTS[secondary];
  
  const resultsContainer = document.getElementById('quiz-results');
  
  resultsContainer.innerHTML = `
    <div class="results-header">
      <h2>Your Primary Entry Point</h2>
      <span class="result-type">${primaryData.name}</span>
      ${isDualProfile ? '<span class="dual-profile-badge">Dual Entry Profile</span>' : ''}
      <p class="result-secondary">Secondary: <strong>${secondaryData.name}</strong></p>
    </div>
    
    <div class="result-summary">
      <p>${primaryData.summary}</p>
    </div>
    
    <!-- Email Gate -->
    <div class="email-gate" id="email-gate">
      <h3>Your full breakdown.</h3>
      <p>Interrupts, tactics, and what to watch for—delivered once.</p>
      
      <form class="email-form" id="email-form">
        <input type="email" class="form-input" id="email-input" placeholder="your@email.com" required>
        <input type="hidden" name="primary" value="${primary}">
        <input type="hidden" name="secondary" value="${secondary}">
        <input type="hidden" name="score_explainer" value="${scores.explainer}">
        <input type="hidden" name="score_fixer" value="${scores.fixer}">
        <input type="hidden" name="score_peacemaker" value="${scores.peacemaker}">
        <input type="hidden" name="score_niceone" value="${scores.niceOne}">
        <input type="hidden" name="score_loyalist" value="${scores.loyalist}">
        <input type="hidden" name="score_achiever" value="${scores.achiever}">
        <input type="hidden" name="score_selfdoubter" value="${scores.selfDoubter}">
        <button type="submit" class="btn btn--primary">Send My Results</button>
      </form>
      
      <p class="email-disclaimer">One email. No sequence. Unsubscribe anytime.</p>
    </div>
    
    <!-- Full Results -->
    <div class="full-results" id="full-results">
      <h3>What Others Pull From You</h3>
      <p>${primaryData.whatOthersPull}</p>
      
      <h3>What It Costs Over Time</h3>
      <p>${primaryData.costOverTime}</p>
      
      <h3>Your Interrupts</h3>
      <ul class="interrupts-list">
        ${primaryData.interrupts.map(i => `<li>${i}</li>`).join('')}
      </ul>
      
      <h3>Tactics to Watch</h3>
      <ul class="tactics-list">
        ${primaryData.tactics.map(t => `<li>${t}</li>`).join('')}
      </ul>
      
      <h3>Secondary: ${secondaryData.name}</h3>
      <p>${secondaryData.summary}</p>
      
      <div class="book-cta">
        <h3>Go Deeper</h3>
        <p>All 27 tactics. What they look like. How to respond.</p>
        <a href="book.html" class="btn btn--primary" id="results-book-link">See the Book</a>
      </div>
    </div>
  `;
  
  resultsContainer.classList.add('active');
  
  document.getElementById('email-form').addEventListener('submit', handleEmailSubmit);
  document.getElementById('results-book-link').addEventListener('click', () => {
    trackBookClick('results_page');
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function handleEmailSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const email = document.getElementById('email-input').value;
  const primary = form.querySelector('input[name="primary"]').value;
  const secondary = form.querySelector('input[name="secondary"]').value;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  try {
    await submitToConvertKit(email, form);
    trackEmailSubmitted(primary, secondary);
    
    document.getElementById('email-gate').style.display = 'none';
    document.getElementById('full-results').classList.add('active');
    
  } catch (error) {
    console.error('Email submission error:', error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send My Results';
    alert('There was an error. Please try again.');
  }
}

async function submitToConvertKit(email, form) {
  // Replace with your ConvertKit implementation
  // See README.md for setup instructions
  
  /*
  const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_PUBLIC_API_KEY',
      email: email,
      fields: {
        primary_entry_point: form.querySelector('input[name="primary"]').value,
        secondary_entry_point: form.querySelector('input[name="secondary"]').value
      }
    })
  });
  
  if (!response.ok) throw new Error('ConvertKit submission failed');
  */
  
  return new Promise(resolve => setTimeout(resolve, 400));
}

document.addEventListener('DOMContentLoaded', initQuiz);
