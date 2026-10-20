# Phase 0 — Baseline audit

Source: `Portfolio_Optimized_Under_30MB.zip` → `Portfolio/` (untouched copy in `baseline-source/`, git commit `94e7f15`).
Live site named in brief: https://portfolio-2003.vercel.app/ (not fetched in this session; audit is of the supplied ZIP).

## Source file map

| File | Lines | Role |
|---|---|---|
| `index.html` | 423 | All markup; 7 sections + footer |
| `style.css` | 813 | Main styles |
| `responsive.css` | 379 | Media queries |
| `index.js` | 44 | Scroll-class on nav, mobile menu toggle, Formspree submit |
| `Image/` | 9 files + `gallery-photo/` (10) | Screenshots, profile, logos, OG image |
| `documents/MyResume.pdf` | 156 KB | Résumé |
| `icon/mariadb.svg` | 4 KB | Unused (only referenced in commented-out markup) |

Total ZIP content: 14 MB.

## Real current functionality

- Sections/anchors: `#home #about #skills #projects #education #gallery #contact`, footer.
- Hero: "Hi, I'm Harshit Kumar", CSS-rotating roles (Front-end Developer / Software Developer / UI/UX Enthusiast), Résumé + Contact buttons.
- Projects: Moto-s (GitHub + live), BETWEEN (GitHub + live).
- Education: MCA (Dr. A.P.J. Abdul Kalam Technical University, Aug 2024 – Present), BSc CS (Chaudhary Charan Singh University, Aug 2021 – Jul 2024).
- Contact: email, phone, LinkedIn, GitHub, Formspree form (`https://formspree.io/f/mqadgvgd`) with `alert()` feedback.
- Nav: mobile toggle (inline `onclick`), `.scrolled` class after 50px.

## Link inventory (from source; none were requested over the network in this session)

| Link | Target |
|---|---|
| LinkedIn | https://www.linkedin.com/in/harshit-kumarr |
| GitHub | https://www.github.com/harshitkumar2003 |
| Moto-S repo / live | https://github.com/harshitkumar2003/moto-s · https://moto-s.vercel.app/ |
| BETWEEN repo / live | https://github.com/harshitkumar2003/between · https://betweenhk.vercel.app/ |
| Résumé | `documents/MyResume.pdf` |
| Email | mailto:harshitkumar2k03@gmail.com |
| OG / Twitter image | https://portfolio-2003.vercel.app/Image/shareable.png |
| Favicon | https://portfolio-2003.vercel.app/Image/favicon.png |

Link reachability: **NOT RUN** (no verified outbound access to those hosts).

## Issues found

Confirmed in the ZIP:
1. `index.html` ends with stray `jj` after `</html>`.
2. `.nav-container` uses `width: 100vw` (style.css:55) → horizontal-overflow risk.
3. Fixed `bg.jpg` (224×400 px) as full-page background, upscaled.
4. `style.css:163` hot-links a Google `encrypted-tbn0.gstatic.com` image (external dependency, fragile, licence unclear).
5. `alert()` popups for form states; no inline status, no labels (icons only, placeholders as labels).
6. Invalid/sloppy markup: capitalised `<Section>` tags, duplicate stray `</a>` in both project cards, `<h1>` used for education entries (multiple H1s), duplicate alt text "gallery image9", non-descriptive alts.
7. Inline `onclick` handler; `index.js` form code runs at load without a null check.
8. Footer year is hard-coded "© 2025".
9. Heavy images: `image.jpg` 2.9 MB (4032×3024), `moto-s.png` 2.6 MB, `between.png` 2.4 MB, `miet.png` 1.5 MB, `shareable.png` 2.6 MB. No srcset, no lazy-loading, no WebP/AVIF.
10. OG image 2.6 MB is far above what WhatsApp/LinkedIn reliably accept (~300 KB guidance), so share previews may fail.

**Discrepancy with the brief:** the brief cites a "~19 MB" gallery image. The supplied ZIP (named "Optimized Under 30MB") contains a 2.9 MB `image.jpg`; no ~19 MB file exists. The audit follows the files actually supplied.

## Résumé cross-check (facts usable for the portfolio)

The résumé independently supports the Moto-S and BETWEEN contribution wording (independent development; responsive front-end; BETWEEN shopping cart; Git/GitHub flow) and lists Aug 2024 – Present / Aug 2021 – Jul 2024 for the degrees, matching the site. It also lists an achievement and a "30% increase in student participation" claim, plus SGPA/CGPA. **None of these are on the current site and none were added**; they need the owner's explicit approval before publishing.

## TOMS and Kinetix — evidence status

No TOMS or Kinetix code, screenshots, links or contribution notes were in the upload. Both are implemented strictly from the brief's approved wording. Every unverified field reads "To verify"; no repo/demo/work-order ID is shown. Needed from the owner to complete them: exact personal contribution for each, approved challenge/architecture text, authorised screenshots, any public links, and confirmation whether `WO-MW-5521` exists in the code.

## Screenshots

Baseline captures at 1440 / 768 / 390 / 320 px are in `../evidence/baseline/` (`base-1440.png`, `base-768.png`, `base-390.png`, `base-320.png`), taken earlier in this workspace by `../scripts/shoot.py`. They were not re-taken this turn.

## Design direction

Dark graphite base, subtle grid/noise, ice-white + restrained electric-blue accents, clamp-based editorial type, floating translucent nav, one lazy-loaded hero 3D scene with a static gradient fallback; GSAP only for scroll story beats. Tokens live in `src/styles/tokens.css`.
