# Meriç Erler — Portfolio

A static personal site: data-analysis case studies, browser games, a financial-coaching
section, and an editable CV. Plain HTML, CSS, and vanilla JavaScript — no build step, no
frameworks, no dependencies.

```
index.html          Landing page (hero, nav cards, about, projects, coaching, contact)
about.html          The longer personal story
master-cv.html      The Master CV (live web CV and source for the PDF)
one-pager-cv.html   Template for a job-tailored one-page CV
styles.css          Design system (theme variables in :root)
cv-print.css        Print/PDF styling for the CV pages
script.js           Theme toggle, mobile nav, scroll reveals
CV-SYSTEM.md        How the CV / job-application system works
projects/           Case studies (3 data + 4 games)
coaching/           Standalone financial-coaching site (English + Turkish)
assets/             CV PDF and chart images
```

## Run locally

Open `index.html` directly, or serve the folder:

```
python -m http.server 5500
# http://localhost:5500
```

## CV system

`master-cv.html` is the single source of truth and doubles as the live web CV. Regenerate
`assets/CV_Meric_Erler.pdf` by opening it and choosing **Print → Save as PDF**. For each
application, duplicate `one-pager-cv.html` and fill in the `<!-- TAILOR -->` blocks. The full
workflow is in `CV-SYSTEM.md`.

## Deploy

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For GitHub Pages,
push to a repository and enable Pages on the default branch in Settings → Pages.

## Notes

- The phone number is intentionally omitted from the public site and CV pages (spam/scraping).
  Add it to the contact band of `master-cv.html` in one place if needed, then re-export the PDF.
- Transcripts, diplomas, and reference letters are kept private and shared with hiring teams on request.
