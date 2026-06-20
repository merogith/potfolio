# Job-application system

A small, repeatable system for applying to jobs. Everything lives in this repo —
no build step, no tooling. You author once, then tailor per application.

## The four things you send per application

| Artifact | Source | Notes |
|---|---|---|
| **1. Tailored one-page CV** | `one-pager-cv.html` → Print to PDF | Built from the Master CV + the job ad. |
| **2. Cover letter** | (your own doc) | Tailored to the role. |
| **3. Case study** | a small project you build for the role | Links to the portfolio; if the application is rejected, fold it into `projects/`. |
| **4. Portfolio website** | the live site (`index.html`) | The "web CV," with the coaching link and a CV download. |

## The files

| File | What it is |
|---|---|
| `master-cv.html` | **The single source of truth.** Comprehensive, bullet-heavy: experience, education, data & game projects, honors. No profile/skills section — those are added per job. Doubles as the live "web CV" and as the PDF source. |
| `one-pager-cv.html` | **Copy-me template** for a job-tailored one-pager: profile + core skills + selected projects + trimmed experience. Tuned to print to one A4 page. |
| `cv-print.css` | Print/PDF styling for both CV pages (kept out of `styles.css`). |
| `assets/CV_Meric_Erler.pdf` | The downloadable PDF, regenerated from `master-cv.html` (see below). |

## Workflow

### A. Keep the Master CV current
1. Edit `master-cv.html` whenever a fact changes (new role, new honor). It's plain HTML — find the entry and edit the bullets.
2. Regenerate the PDF: open `master-cv.html` in a browser → **Print → Save as PDF → A4** → save **over** `assets/CV_Meric_Erler.pdf`. The print stylesheet hides the nav/footer and forces a clean light theme automatically.
3. Commit.

### B. Tailor a one-pager for a specific job
1. Duplicate `one-pager-cv.html` (e.g. `applications/one-pager-cv-<company>.html`, or just keep it locally).
2. Work through every `<!-- TAILOR -->` block using the job ad:
   - **Profile** — 2–3 sentences aimed at the role; name the case study you built for it.
   - **Core skills** — keep/reorder the groups the ad asks for.
   - **Selected projects** — the 2–3 closest to the role; the case study you built goes first.
   - **Experience** — keep the 3–4 relevant roles, trimmed to their best 1–2 bullets.
3. **Only use facts that are also on `master-cv.html`.** Never invent dates, titles, or numbers.
4. Print → Save as PDF (it's tuned to one page). Attach it with the cover letter.

### C. The per-application case study
1. Build a small, focused case study for the role (the way `IdleBankTycoonCaseStudy` was built for a game-economy job).
2. Link it from the cover letter and the one-pager.
3. **If the application is rejected**, add it to the portfolio: create a `projects/<name>.html` page (copy an existing project page as the template), add a card to the `#work` or `#games` grid in `index.html`, and link it from `master-cv.html`.

## Ground rules
- One source of truth: facts flow **from** `master-cv.html` **to** the one-pager, never the other way.
- No fabrication: numbers, dates, and titles must match the Master CV.
- Phone number is intentionally omitted from the CV pages — add it in one place (the contact band) if you want it on the PDF.
