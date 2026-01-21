# Close The Opening — Website

Static website for CloseTheOpening.com

## Files

```
index.html       Homepage
test.html        Assessment page (quiz)
book.html        Book page
about.html       About page
privacy.html     Privacy policy
styles.css       All styling
quiz.js          Quiz logic (28 questions, scoring, results)
sitemap.xml      SEO sitemap
robots.txt       SEO robots
favicon.svg      Favicon
```

## Design System

**Colors:**
- Background: #F6F6F4
- Text: #111111
- Muted: #555555
- Accent: #6E2C2C (buttons only)

**Typography:**
- Headings: Libre Baskerville
- Body: Inter

## Deployment

Already deployed to Vercel. To update:

1. Edit files locally
2. Go to github.com/foodvue/closetheopening
3. Upload changed files
4. Vercel auto-deploys

## ConvertKit Setup

1. Sign up at convertkit.com (free)
2. Create custom fields:
   - primary_entry_point
   - secondary_entry_point
   - score_explainer, score_fixer, score_peacemaker, score_niceone, score_loyalist, score_achiever, score_selfdoubter
3. Create a form
4. Get your Form ID and public API key
5. Update quiz.js:
   - Replace `CONVERTKIT_FORM_ID`
   - Uncomment the fetch code in `submitToConvertKit()`
6. Push to GitHub

## Analytics

Stub functions in quiz.js ready for connection:
- `trackQuizStart()`
- `trackQuizComplete()`
- `trackPrimaryResult()`
- `trackEmailSubmitted()`
- `trackBookClick()`

To connect Google Analytics, add GA4 snippet to each HTML file and update `trackEvent()` in quiz.js.

## To Do

- [ ] Add Amazon link to book.html
- [ ] Connect ConvertKit
- [ ] Create og-image.png (1200x630px)
- [ ] Optional: Add analytics
