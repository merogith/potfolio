# Meriç Erler — Portfolio

A static personal site: data-analysis case studies, browser games, and a financial-coaching
section. Plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks, no dependencies.

```
index.html          Landing page
about.html          About / bio
projects/           Case studies and game write-ups
coaching/           Financial-coaching site (English + Turkish)
assets/             CV and chart images
styles.css          Design system (theme variables in :root)
script.js           Theme toggle, mobile nav, scroll reveals
```

## Run locally

Open `index.html` directly, or serve the folder:

```
python -m http.server 5500
# http://localhost:5500
```

## Deploy

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For GitHub Pages,
push to a repository and enable Pages on the default branch in Settings → Pages.
