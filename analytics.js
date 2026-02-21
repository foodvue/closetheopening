// =============================================
// GA4 CUSTOM EVENT TRACKING — Close The Opening
// =============================================
// 
// SETUP: Replace GA_MEASUREMENT_ID with your actual GA4 ID (format: G-XXXXXXXXXX)
// Then include this file on every page after the gtag base snippet.
//
// BASE SNIPPET (add to every page's <head>, before </head>):
//
//   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
//   <script>
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//     gtag('config', 'GA_MEASUREMENT_ID');
//   </script>
//
// Then add <script src="analytics.js"></script> after the base snippet.
// =============================================

(function() {
  'use strict';

  // Guard: only run if gtag is available
  if (typeof gtag !== 'function') return;

  // ── ASSESSMENT EVENTS (add to quiz.js integration points) ──

  // Call when user answers the first question
  window.trackAssessmentStart = function() {
    gtag('event', 'assessment_start', {
      event_category: 'assessment',
      event_label: 'quiz_begin'
    });
  };

  // Call when results are displayed
  window.trackAssessmentComplete = function(primaryEP, secondaryEP) {
    gtag('event', 'assessment_complete', {
      event_category: 'assessment',
      primary_entry_point: primaryEP,
      secondary_entry_point: secondaryEP
    });
  };

  // ── EMAIL EVENTS ──

  // Call when email form is submitted
  window.trackEmailSignup = function(entryPoint) {
    gtag('event', 'email_signup', {
      event_category: 'conversion',
      entry_point: entryPoint || 'unknown'
    });
  };

  // ── BOOK CLICK EVENTS ──

  // Call when any Amazon/book link is clicked
  window.trackBookClick = function(location) {
    gtag('event', 'book_click', {
      event_category: 'conversion',
      click_location: location  // e.g. 'results_page', 'book_page', 'nav', 'article_cta'
    });
  };

  // ── SHARE EVENTS ──

  window.trackShare = function(platform) {
    gtag('event', 'share_click', {
      event_category: 'engagement',
      platform: platform  // 'twitter', 'facebook', 'copy_link'
    });
  };

  // ── AUTO-TRACK: Book link clicks across the site ──

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="amazon.com/dp/"]');
    if (link) {
      // Determine location from context
      var loc = 'unknown';
      if (link.closest('.blog-cta-box')) loc = 'article_cta';
      else if (link.closest('.site-nav, .footer-nav')) loc = 'nav';
      else if (link.closest('.hero-book')) loc = 'homepage_hero';
      else if (document.querySelector('title').textContent.includes('Book')) loc = 'book_page';
      else loc = 'inline_link';

      window.trackBookClick(loc);
    }
  });

  // ── AUTO-TRACK: Entry Point page views ──

  var epMatch = window.location.pathname.match(/entry-points\/the-([\w-]+)\.html/);
  if (epMatch) {
    gtag('event', 'entry_point_view', {
      event_category: 'engagement',
      entry_point_name: epMatch[1].replace(/-/g, '_')
    });
  }

  // ── AUTO-TRACK: Article scroll depth (75%+) ──

  if (document.querySelector('.post-body')) {
    var tracked = false;
    var slug = window.location.pathname.split('/').pop().replace('.html', '');
    window.addEventListener('scroll', function() {
      if (tracked) return;
      var scrollPct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPct > 0.75) {
        tracked = true;
        gtag('event', 'article_read', {
          event_category: 'engagement',
          article_slug: slug
        });
      }
    });
  }

})();

// =============================================
// QUIZ.JS INTEGRATION GUIDE
// =============================================
// 
// Add these calls to quiz.js at the appropriate points:
//
// 1. When user answers first question:
//    if (typeof trackAssessmentStart === 'function') trackAssessmentStart();
//
// 2. When results are displayed:
//    if (typeof trackAssessmentComplete === 'function') {
//      trackAssessmentComplete(primaryEntryPoint, secondaryEntryPoint);
//    }
//
// 3. When email form is submitted:
//    if (typeof trackEmailSignup === 'function') {
//      trackEmailSignup(primaryEntryPoint);
//    }
//
// 4. When share button is clicked:
//    if (typeof trackShare === 'function') trackShare('twitter');
//    if (typeof trackShare === 'function') trackShare('facebook');
//    if (typeof trackShare === 'function') trackShare('copy_link');
//
// =============================================
// GA4 CONVERSIONS SETUP
// =============================================
//
// In GA4 Admin → Events → Mark as conversion:
//   1. email_signup
//   2. book_click
//   3. assessment_complete
//
// Custom dimensions to create in GA4:
//   - primary_entry_point (event-scoped)
//   - secondary_entry_point (event-scoped)
//   - entry_point_name (event-scoped)
//   - click_location (event-scoped)
//   - article_slug (event-scoped)
//
