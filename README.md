# Meriç Erler — Portfolio Site

A fast, dependency-free portfolio. Plain HTML + CSS + vanilla JS — no build step, no
frameworks. Open it, edit it, deploy it anywhere static.

```
website/
├── index.html      ← all content (edit text here)
├── styles.css      ← design system (colors live in :root at the top)
├── script.js       ← theme toggle, mobile nav, scroll reveals
└── assets/
    └── CV_Meric_Erler.pdf
```

## Preview locally

Just double-click `index.html` — it works from the file system. For a cleaner local
server (recommended, avoids any path quirks):

```powershell
# from the website/ folder, with Python installed:
python -m http.server 5500
# then open http://localhost:5500
```

## Deploy free on GitHub Pages

You already use GitHub (`merogith`), so this is the natural home.

**Option A — main portfolio at `merogith.github.io`:**
1. Create a repo named exactly `merogith.github.io`.
2. Put the contents of this `website/` folder at the repo root.
3. Push. It goes live at `https://merogith.github.io` within a minute.

**Option B — project page (e.g. `merogith.github.io/portfolio`):**
1. Create a repo named `portfolio`, push these files.
2. Repo → Settings → Pages → Source: `main` branch, `/root`.

(Netlify / Vercel / Cloudflare Pages also work — drag-and-drop the folder.)

A custom domain (e.g. `mericerler.dev`) can be pointed at GitHub Pages later in Settings → Pages.

## Customize

- **Text & projects:** all in `index.html`. To add a project, copy a `<article class="card">…</article>` block.
- **Colors / theme:** edit the CSS variables in `:root` (light) and `[data-theme="dark"]` at the top of `styles.css`.
- **Accent colors per category:** `--data`, `--game`, `--research`, `--eng` in `styles.css`.

## Notes

- **Phone number is intentionally omitted** from the public site (it's on the CV that
  goes out with applications) — public web pages invite spam and scraping.
- **No transcripts, diplomas, IELTS, or reference letters** are published here, by design
  (privacy — for you and your referees). They stay private inputs for applications.
- The **About** copy is a solid first draft written *for* you — it should be rewritten in
  your own voice once the voice questionnaire (`../01_questionnaire.md`, Section 5) is done.
