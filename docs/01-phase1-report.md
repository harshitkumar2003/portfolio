# Phase 1 — Foundation: status report

**Acceptance: NOT MET — unverified.** The scaffold was written but could not be installed, type-checked, built or run in this session. Do not start Phase 2 until the commands below pass on a machine with npm access.

## Blocker

`registry.npmjs.org` is denied by this session's egress policy (proxy answers 403 to CONNECT; direct DNS also fails). `node_modules` could not be created, and Vite, Vitest, ESLint plugins, Three.js, GSAP etc. are not installed globally. Nothing was routed around the policy.

## What exists (uncommitted before this turn, now committed)

- React 19 + TypeScript + Vite scaffold; pinned versions in `package.json` (no Three.js/GSAP/Motion yet — Phase 2/4).
- Data layer: `src/data/{site,projects,types}.ts` — original content, 4 projects (TOMS, Kinetix first; Moto-s, BETWEEN after).
- Sections: Hero, About, Skills, Projects (+ `CaseStudyDialog`), Education, Gallery, Contact, Footer; Nav with skip link/ESC/click-outside hooks.
- `src/lib/contactForm.ts`: validation, honeypot, inline-state submit to the existing Formspree endpoint.
- Images: AVIF/WebP responsive set generated into `public/images/`; original `public/Image/` kept so existing OG/favicon URLs stay valid; `robots.txt`, `sitemap.xml`, `404.html`, `vercel.json`.
- Original untouched copy in `baseline-source/`, baseline commit `94e7f15` (rollback point).

## Content-preservation matrix (static review of source files, not a rendered check)

| Item | Result |
|---|---|
| Hero name, 3 roles, intro paragraph | Matches original text |
| About (2 paragraphs) | Matches original text |
| Skills (6 categories, same items) | Matches; none added |
| Education (2 entries, dates, institutions) | Matches exactly |
| Gallery (10 images, original order) | Order verified against filenames |
| Moto-s / BETWEEN links (4) | Match original; contribution lines are supported by the résumé |
| LinkedIn, GitHub, email, phone, Formspree endpoint | Match original |
| Résumé PDF | Present at `public/documents/MyResume.pdf` |
| `jj` stray text, `100vw` nav | Not carried over |
| TOMS / Kinetix | Brief wording only; "To verify" where unsupported; no links invented |

## Test matrix

| Check | Result |
|---|---|
| `npm install` | **FAIL** — registry blocked (403) |
| `npm run typecheck` | **NOT RUN** (deps missing; tsc stopped at TS2688 missing type definitions, so no real type check happened) |
| `npm run lint` | **NOT RUN** |
| `npm test` | **NOT RUN** — also: `tests/` contains only `setup.ts`; no test cases exist yet |
| `npm run build` | **NOT RUN** |
| Browser render at 1440/768/390/320 | **NOT RUN** for the new build |
| Keyboard / screen reader / reduced motion | **NOT RUN** |
| Form submission to Formspree | **NOT RUN** (would send a real message) |
| External link reachability | **NOT RUN** |
| Lighthouse | **NOT RUN** |

## Outstanding

1. Run `npm install && npm run typecheck && npm run lint && npm run build` where npm works, fix whatever fails.
2. Write real tests (validation, project-data invariants: TOMS/Kinetix have no links; original 4 links intact).
3. Capture screenshots of the new build.
4. Owner input for TOMS/Kinetix (see audit doc).
5. Replace the 2.6 MB `shareable.png` with a ≤300 KB OG image (same URL).

## Local run

```
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```
Rollback: `git checkout 94e7f15` or deploy `baseline-source/Portfolio` as a static site.
