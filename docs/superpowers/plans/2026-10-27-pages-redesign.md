# GitHub Pages directory implementation plan

**Goal:** Replace the homepage with a GitHub-style directory linking to the user's three websites.

**Architecture:** Buildless, semantic HTML with local CSS, inline SVG icons, and a small JavaScript enhancement for language selection. Project links and English descriptions render without JavaScript or API requests.

**Tech stack:** HTML, CSS, JavaScript; existing GitHub Pages hosting.

**Spec:** User's request in this chat. Rebuild freely, GitHub visual style, repository-based short descriptions, automatic language detection, fixed order: doc-blog, Pokemon-Fusion-Viewer, I-want-to-open-HTML.

## Decisions

- Dark GitHub palette, compact header, one bordered project list, clear website and repository links, responsive mobile layout.
- Korean and English translations verified against the repositories' current GitHub descriptions. Other browser languages fall back to English.
- Language control offers automatic detection, Korean, and English. Explicit choice persists when localStorage is available; blocked storage must not prevent rendering.
- Work in the requested repository; keep its search verification files and favicon. No publishing, remote commits, framework, or new hosting project.
- Remove the superseded JSON data and translation image after replacing their consumers; update sitemap with the three destinations.

## Tasks

- [x] Replace `index.html`, add `styles.css` and `script.js`, remove obsolete `list.json` and `translate-svgrepo-com.svg`.
- [x] Add all six destination links and translated descriptions in the specified order; preserve no-JavaScript navigation.
- [x] Add automatic browser-language detection, manual override, live language changes, and safe storage handling.
- [x] Update sitemap and document local preview instructions.
- [x] Verify Korean/English/unsupported language detection, manual selection persistence, blocked storage, no JavaScript, links and order, keyboard focus, desktop/mobile layout, and console errors. Run syntax and diff checks.

## Verification

- Playwright with installed Microsoft Edge: 12/12 browser checks passed, including both languages at widths 320, 375, 430, 431, 760, 761, and 1024 pixels.
- Captured and visually inspected desktop and mobile screenshots; adjusted Korean headline wrapping to preserve words.
- `node --check script.js` and `git diff --check` passed.
- Independent read-only code review found no critical, important, or minor issues. Actual screen-reader operation and destination-site internals were not tested. No additional translation languages or deployment were requested.
- Changes remain local and uncommitted for review.

## Review focus

- Long repository names must wrap at narrow widths.
- Storage failures must not break the page or language switching.
- Browser language preferences must be respected in order, with English fallback.
- Every project must remain navigable without JavaScript.
- Website links and source links must point to their distinct destinations.
