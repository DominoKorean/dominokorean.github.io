# DominoKorean · GitHub Pages

A small, GitHub-inspired directory of my websites, in this order:

1. [doc-blog](https://dominokorean.github.io/doc-blog/)
2. [Pokemon-Fusion-Viewer](https://dominokorean.github.io/Pokemon-Fusion-Viewer)
3. [I-want-to-open-HTML](https://dominokorean.github.io/I-want-to-open-HTML)

## Local preview

No build or dependencies are required. Open `index.html` directly, or run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173/.

## Editing

- `index.html`: ordered project links, descriptions, and inline SVG icons. English is the static fallback; `data-ko` supplies Korean translations.
- `styles.css`: responsive GitHub dark styling.
- `script.js`: browser language detection and the automatic/Korean/English selector. Explicit language choices are saved when browser storage is available.
- `sitemap.xml`: public page URLs for search engines.

Descriptions are based on each repository's GitHub description, checked on 2026-10-27. Update both language versions in `index.html` when those descriptions change. No translation service or GitHub API request runs in the visitor's browser. The first supported language in the browser's preferences is used; other languages fall back to English. Website links also work without JavaScript.

The root files are ready for the repository's existing GitHub Pages publishing workflow.
