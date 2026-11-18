# Job / Career Helper

This repo is Thias B. Kochen's **job and career helper**. It holds the public portfolio and online CV
(GitHub Pages: https://thias-bkh.github.io/ and `/cv`). Use it to keep the CV and portfolio up to date
and to prepare job applications.

## Where things live
- `content/profile.ts` holds all CV and portfolio content: profile, education, experience, skills, languages
  and projects. Edit only this file for content changes. Both pages read it.
- `app/page.tsx` is the portfolio. `app/Room.tsx` is the hero: a 3D room whose viewpoint follows the pointer,
  echoing P707's head-coupled perspective. `app/cv/page.tsx` is the light, print-friendly CV.
- Design rules: the colour tokens in `app/globals.css` (verdigris on plaster), one typeface (Schibsted Grotesk),
  sentence case, no ALL-CAPS labels, no card grids. Keep the room the only bold element.
- `applications/` is git-ignored. Tailored CVs, cover letters and job-ad notes go here and are never committed.

## Local source material (read for facts, never copy wholesale)
- CV PDFs: `~/Desktop/2025/Job/CV's/` (newest `Thias_CV.pdf`). Older cover letters are in `~/Downloads`.
- Project folders:
  - P707 Rådhuspladsen installation: `~/Desktop/P707---Main-Project` (team repo `Bob-Ross-Codes/P707---Main-Project`).
    Thias's part is NPCs, Wwise audio, flags, the 1645 atmosphere and modelling.
  - eyeRest (Swift macOS app): `~/Documents/Codex/2026-07-27/eyeRest`, at https://github.com/Thias-BKH/eyeRest.
  - Sixth Sense Belt: `~/Desktop/2025/Job/Portfolio/The Sixth Sense Belt – AIRLab.pdf`.
  - Smart Waste (Smart skrald): `~/Documents/Arduino/SMARTSKRALD*` and `~/Desktop/2025/Forrige semestre/Smart skrald`.
- Candidates not shown yet:
  - food-cal-webcam (`~/Desktop/food-cal-webcam`)
  - Fruits-Calories (Edge Impulse on ESP32)
  - Sound_test (Wwise)
  - Bachelor code (`~/Desktop/2025/Bachelor`)
  - P707 NPC Blender models
- Skip: tutorials and third-party clones (ml-agents, mediapipe, libfreenect, GitGoing, ML-For-Beginners).

## Workflows
- **Add a project:** read its README and git log (`git log --author=Thias`) to state Thias's real role.
  Add an entry to `projects`. Use `href: ""` if it has no public link.
- **Update the CV:** after a new job, course, degree or skill, update `content/profile.ts`. Ask for dates
  and organisation names instead of guessing.
- **Tailor for a job ad:** read the ad, then write `applications/<company>-<role>/cv.md` and `cover-letter.md`
  that reorder and emphasise the existing facts. Never invent experience. Suggest edits to `profile.ts` only if they help the public version too.
- **PDF CV:** open `/cv` in a browser, then Print → Save as PDF.

## Rules
- Facts only come from Thias or the source material. Ask when something is unknown, and never fabricate.
- Privacy: this site is public. **No phone number**, no home address beyond the city, no ID numbers.
  Never read or publish `~/Documents/Chrome Passwords.csv`, `~/Desktop/winner/.env`, or termination and HR documents.
- Thias studies MSc Medialogy at AAU Copenhagen (2026–) and holds a BSc DDIT from ITU (2023–2026).

## Verify before pushing
```bash
npm run build                      # must pass; creates out/index.html and out/cv.html
grep -rn "+45" app content out     # must print nothing
```
Pushing to `main` deploys through `.github/workflows/deploy.yml`.
