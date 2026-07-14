# YongAI Site — STATUS.md
> Updated: 2026-06-30

## What's Live
- **YongAI venture portfolio:** https://yongai.ca ✅ restored/rebuilt as the venture homepage on 2026-06-30
- **YourHermes service landing page:** https://urhermes.com ✅ launched 2026-06-29
- **Stack:** Astro + Tailwind CSS v4 → static HTML → S3/CloudFront
- **YongAI CloudFront:** `EMKYCPGH3MJHV`
- **YourHermes CloudFront:** `E1ZFW2O41LK67T` (`d17al3s5n5mih8.cloudfront.net`)

## Pages
- `https://yongai.ca/` — YongAI business venture homepage ✅ restored
- `https://yongai.ca/onlypets/` — OnlyPets app overview / TestFlight product page ✅ added 2026-07-04
- `https://yongai.ca/cue/` — Cue voice meeting assistant overview / local prototype page ✅ added 2026-07-05
- `https://yongai.ca/demos/workflow-audit/` — Demo: AI workflow audit tool ✅ restored
- `https://yongai.ca/demos/client-intake/` — Demo: Client intake automation ✅ restored
- `https://yongai.ca/demos/resume-screener/` — Demo: AI resume screening ✅ restored
- `https://yongai.ca/demos/contract-reviewer/` — Demo: Contract review tool ✅ restored
- `https://yongai.ca/demos/candidate-outreach/` — Demo: Candidate outreach automation ✅ restored
- `https://yongai.ca/responsible-ai/` — Responsible AI page ✅ restored
- `https://yongai.ca/hermes-agent-setup/` — 301 redirects to `https://urhermes.com/`
- Partner docs remain on S3: `/partner-agenda.html`, `/partner-workshop-guide.html`

## Design
- **YongAI:** Venture portfolio homepage — classic bento/project-card layout with Flowt, OnlyPets, NEON 777 Casino, and YourHermes. Root page no longer shows the old AI automation consulting/law-firm/recruiting positioning or the rejected "Building practical products, not pitch decks" rebuild.
- **YourHermes:** Separate subset service page on `urhermes.com` — light editorial SaaS style, private AI operator positioning, exact screenshot sections only.

## Current State (2026-07-14 — Cue story + mobile refinement)
- Reframed `/cue/` around a short, grounded story: useful conversations lose decisions in scattered notes, and Cue keeps the next move visible.
- Replaced the oversized technical logo panel with a compact debrief preview that demonstrates the product outcome without pretending to be a full app screenshot.
- Added a clean transparent-corner Cue web mark (`public/portfolio/logos/cue-web.png`) and applied it to both the Cue page and homepage card; the black corner artifact is gone.
- Removed stale local-only and overly technical public copy. Cue is now accurately presented as a private TestFlight prototype with working recording, long-call transcription, structured debrief, and Ask flows.
- Condensed the page into four beats: origin, intent, three-step flow, and honest current status. Added warm tonal depth while preserving YongAI's strict neutral v3 palette.
- Slowed mobile reveal motion to `900ms` with a smaller `12px` travel distance and calmer delay; slowed mobile-menu transitions to `340–430ms`. Desktop reveals are `680ms`; reduced-motion remains immediate.
- Deployed to `https://yongai.ca/cue/?v=story-refine`; CloudFront invalidation `I4JB9N66V3HC2F07VW4IVSCX1G` completed.
- Verification: build passed with 10 pages; 320/375/390/430/820/1440px checks showed zero horizontal overflow and zero console errors; all buttons remain 48px tall; reduced-motion has zero active animations or hidden reveals; live Cue page, cleaned icon, and both partner docs return 200.

## Current State (2026-07-14 — Premium motion + interaction polish)
- Added a restrained shared motion system with fast/base/slow timing tokens, a premium easing curve, lightweight IntersectionObserver + Web Animations API reveals, short stagger delays, and compositor-friendly opacity/translate animation.
- Added `prefers-reduced-motion` handling: reveals render immediately, transitions/animations collapse, and smooth scrolling is disabled for users requesting less motion.
- Animated the shared mobile hamburger naturally in both directions: icon morph, panel fade/translate/scale, delayed close for exit motion, click-outside close, Escape close, focus return, and synchronized `aria-expanded`.
- Extended card-style interaction feedback across homepage, OnlyPets, and Cue: subtle lift, border/shadow refinement, gentle screenshot scale, consistent button hover/focus/active states, and keyboard `:focus-visible` feedback.
- Disabled lift effects on non-hover/touch devices to avoid sticky hover artifacts and kept all motion within small 1–4px movement ranges.
- Removed a stale broken Inter font preload that returned 404; Google Fonts stylesheet remains responsible for loading the actual font asset.
- Deployed to `https://yongai.ca/?v=premium-motion`; CloudFront invalidation `I317WLWAGOA0LO9V15RR8KL5QD` completed.
- Verification: `npm run build` passed with 10 pages; local QA confirmed all reveal targets become visible on scroll, card hover retains smooth transform/shadow and project-button feedback, animated menu opens/closes with correct ARIA/focus behavior, reduced-motion has 0 active reveal animations, homepage/OnlyPets/Cue have 0 overflow, and no local/live JS console errors; live homepage/OnlyPets/Cue and both partner docs return 200.

## Current State (2026-07-14 — Navigation standardization + Flowt logo fix)
- Standardized navigation across homepage, OnlyPets, and Cue by adding shared `src/components/SiteNav.astro` and replacing each page-specific nav.
- Chose a cleaner site information architecture: global nav now only includes `Portfolio`, `Approach`, `YourHermes`, and `Contact`; project subpages like OnlyPets/Cue remain accessible from portfolio cards and page CTAs, not top-level menu items.
- Updated footer to match the same high-level navigation model and removed project subpage links from the footer.
- Replaced the incorrect Flowt card logo with the official Flowt two-wave icon (`flowt-logo-FINAL.svg`) at `public/portfolio/logos/flowt.svg`.
- Deployed to `https://yongai.ca/?v=nav-standardized`; CloudFront invalidation `I7PA959AMYNC42V0DSBMSWAG6V` completed.
- Verification: `npm run build` passed with 10 pages; local browser QA checked homepage/OnlyPets/Cue desktop and mobile; live checks confirm homepage/OnlyPets/Cue 200, top nav excludes OnlyPets/Cue, Flowt logo renders at `/portfolio/logos/flowt.svg` with natural size `300×300`, all project buttons remain `156×44`, no live JS console errors, and partner docs remain 200.

## Current State (2026-07-05 — Cue + venture logos)
- Added Cue to the YongAI homepage portfolio as `LOCAL PROTOTYPE · VOICE AI` with copy grounded in the Cue product docs/status: Gary-first voice meeting assistant for recording conversations, generating debriefs, and turning context into next moves.
- Added a lightweight `https://yongai.ca/cue/` overview page so the Cue project card opens to a useful page rather than a dead/placeholder link.
- Added project-card logo assets for all five ventures under `public/portfolio/logos/`: Flowt, OnlyPets, Cue, NEON 777, and YourHermes.
- Placed each logo in the top-left of its project card with a consistent `64×64` logo container and fixed the local CSS conflict with legacy `.venture-card img { min-height: 330px; }` using a scoped override.
- Updated metrics from `4` to `5` venture tracks and added Cue to the homepage nav/mobile menu/footer.
- Deployed to `https://yongai.ca/?v=cue-logos` and `https://yongai.ca/cue/?v=cue-logos`; CloudFront invalidation `I5Z7B2PSL681P0ZBTK518IHRH8` completed.
- Verification: `npm run build` passed with 10 pages; local/live browser checks confirmed 5 portfolio cards, 5 logos, uniform `Open project →` buttons at `156×44`, homepage overflow non-positive, Cue page overflow non-positive, 0 live JS console errors, and partner docs remain 200.

## Current State (2026-07-05 — Anchovy-style copy reference)
- Used `https://anchovylabs.ai/index.html` as a copy/layout reference while preserving YongAI’s existing v3 brand system and overall design.
- Updated homepage wording to mirror the reference’s clearer structure: `Venture product studio` hero label, `We build useful software fast.` headline, a concise studio description, `By the numbers` snapshot, `Featured ventures`, and `How we build` section.
- Reworded venture card status labels and descriptions to be more direct and product-oriented: Flowt, OnlyPets, NEON 777, and YourHermes now use Anchovy-style status/category lines without changing YongAI visual language.
- Updated page title to `YongAI — Useful software, built fast`.
- Deployed to `https://yongai.ca/?v=anchovy-copy`; CloudFront invalidation `IAJ9JLW9VCC7DJUL21H1Z8NJPO` completed.
- Verification: `npm run build` passed with 9 pages; Playwright confirmed homepage desktop/mobile overflow `0`, no horizontal offenders, uniform `Open project →` buttons at `156×44`, no old copy strings (`Build what proves it.`, `Four active tracks.`, `Working products, tested in public.`), and live homepage has 0 JS console errors; live curl confirms new copy and partner docs remain 200.

## Current State (2026-07-04 — Homepage de-duplication + OnlyPets page)
- Visually inspected the live homepage and confirmed the old layout repeated the same portfolio/proof language across hero side panel, proof strip, portfolio cards, method, and evaluation sections, with large vertical gaps.
- Rebuilt `src/pages/index.astro` into a shorter homepage: concise hero, compact `At a glance` portfolio snapshot, no duplicated proof strip, compact portfolio grid, single `Approach` section, and shorter CTA.
- Fixed all `Open project →` buttons to a consistent `156×44` base size; hover still enlarges/highlights them, and OnlyPets now links to `/onlypets/`.
- Corrected OnlyPets status from `Production API` to `TestFlight testing`, based on `/Users/moltbot/projects/onlypets/STATUS.md` showing TestFlight build 9 live/submitted and App Store public release not done.
- Added `src/pages/onlypets.astro` at `https://yongai.ca/onlypets/`: a fun app overview with OnlyPets screenshots, what it is for, why it exists, how people use it, and current TestFlight/testing status.
- Deployed to `https://yongai.ca/?v=concise-onlypets` and `https://yongai.ca/onlypets/?v=concise-onlypets`; CloudFront invalidation `I8OMAZWS3KAGTMCEPD3OBJRE0U` completed.
- Verification: `npm run build` passed with 9 pages; local Playwright confirmed homepage and OnlyPets page have 0 desktop/mobile overflow, 0 console errors, and homepage Open Project buttons are uniformly `156×44` (`165×47` on hover); live checks confirmed homepage + `/onlypets/` return 200, OnlyPets page contains `TestFlight`, does not contain `Production API`, and partner docs remain 200.

## Current State (2026-07-04 — v3 logo brand alignment)
- Extracted `YongAI_logo_package_v3_with_svg_pdf.zip`, read `README.txt` and `manifest.json`, and copied selected v3 assets into `public/brand/v3/` for future use.
- Applied v3 identity across the site: nav/favicons now use v3 assets, display typography uses institutional serif styling, body/UI remains Inter, and colors are aligned to package tokens black `#000000`, white `#FFFFFF`, charcoal `#0B0C0E`, warm ivory `#FAF8F2`.
- Updated global brand tokens and legacy demo overrides so old green/orange/blue/purple utility classes render as monochrome/neutral instead of off-brand accents.
- Updated `BRAND_GUIDE.md` to v3 and kept it internal; removed public `/brand/YongAI_brand_guide.html` and `/brand/YongAI_brand_guide.pdf` from S3 so the brand guide is no longer audience-facing.
- Updated `CLAUDE.md` to remove stale green/glassmorphism guidance and document v3 logo/color/type rules plus safe deploy behavior.
- Deployed to `https://yongai.ca/?v=v3brand`; CloudFront invalidation `IF1O6DIJRMAI9RJOLH0EW46J8W` completed.
- Verification: `npm run build` passed; local Playwright checked homepage, Responsible AI, and all 5 demo pages for 0 desktop/mobile overflow and no non-neutral computed color samples; live homepage returns 200, uses `/brand/v3/YongAI_horizontal_black_transparent.svg`, has Cormorant Garamond display headings, 0 JS console errors, 0 Brand Guide links, partner docs remain 200, and public brand guide URL now returns 404.

## Current State (2026-07-04 — Landing copy + hierarchy refinement)
- Refined Gary’s landing-page feedback: replaced hero headline with `Build what proves it.`, rewrote the hero subtitle to explain YongAI directly, made the right-side portfolio panel more useful, and changed the proof strip labels to clearer signals.
- Reduced heavy headline weights/sizes across hero, section headings, venture cards, evaluation model, and CTA for a more elegant feel.
- Reworked `Current portfolio` to `Four venture tracks.`, replaced fluffy Brand Standards with a concrete `Evaluation model`, and removed the public Brand Guide CTA from the final section.
- Added project-card hover behavior so the `Open project →` button enlarges/highlights when each card is hovered.
- Deployed to `https://yongai.ca/?v=copy-refine`; CloudFront invalidation `IEZPLEX609Y0P2PGHISD65K9YD` completed.
- Verification: `npm run build` passed; local Playwright confirmed hover CTA scale/color change, 0 desktop/mobile overflow, mobile hamburger visible, 0 Brand Guide links; live homepage returns 200, title is `YongAI — Build what proves it`, 0 JS console errors, and partner docs remain 200.

## Current State (2026-07-04 — GitHub reconciliation)
- Reconciled the local deployed YongAI work with GitHub `origin/main` after the branch diverged.
- Created safety branch `backup/pre-github-reconcile-20260704-164819` before merging.
- Merged GitHub commits through `6bc1aca feat: refine venture portfolio presentation` into local `main`, preserving the live YongAI logo-led landing page files where conflicts existed while retaining GitHub-side package updates and newly added portfolio/studio image assets.
- Verification: `npm run build` passed after merge; source search found 0 old email references (`gymoltbot@gmail.com`, `info@`, `hello@`, `contact@`) and 3 canonical `gary.yong@yongai.ca` references.
- Pushed reconciled `main` to GitHub: `1513e74 Merge GitHub venture portfolio updates`.

## Current State (2026-07-04 — Canonical YongAI work email)
- Gary confirmed `gary.yong@yongai.ca` is registered and should be the go-to email for YongAI references.
- Updated active source fallback contact copy in `src/components/ContactForm.astro` from `gymoltbot@gmail.com` to `gary.yong@yongai.ca`.
- Updated project status to reverse the older cancelled-email note and document that `info@`, `hello@`, `contact@`, and old personal fallbacks should not be used for YongAI public contact copy.
- Verification: searched active `src/` for `gymoltbot@gmail.com`, `info@yongai.ca`, `hello@yongai.ca`, and `contact@yongai.ca` — 0 matches; `npm run build` passed; generated `dist/` has 0 old email matches.

## Current State (2026-07-03 — Mobile hamburger + monochrome cleanup)
- Added a mobile hamburger menu in the top-right nav with links to Portfolio, Method, Standards, and YourHermes; desktop nav remains unchanged.
- Removed off-brand green/blue/purple/brass accents from the landing page and updated the brand guide to define YongAI as black/white/warm-neutral only for the main site.
- Neutralized venture card accents, proof dots, hover states, and the method visual so page elements align with the logo-led monochrome guideline.
- Deployed via `aws s3 sync dist/ s3://yongai.ca/` without `--delete`; CloudFront invalidation `I1LC58IG3KYK5ZJ43E7004SLFR` completed.
- Verification: `npm run build` passed; live `https://yongai.ca/?v=hamburger-neutral` returns 200; desktop console has 0 JS errors; desktop overflow is non-positive; live mobile Playwright check shows hamburger visible, desktop links hidden, menu opens with all 4 links, nav logo ~158×57, 0 overflow, and 0 occurrences of old green/blue/purple/brass tokens; partner docs remain 200.

## Current State (2026-07-01 — Logo restraint + responsive layout cleanup)
- Gary reviewed the logo-led revamp and flagged that logo assets were being used as decoration across the page, making the landing page feel messy.
- Removed decorative logo usage from the hero identity panel, operating-method visual, and footer; the visible logo now appears only in the primary nav. Footer uses plain text instead of another logo asset.
- Added a cropped header SVG/PDF (`YongAI_header_cropped.svg/pdf`) so the nav logo renders at an appropriate visible size instead of inheriting excess source-canvas whitespace.
- Tightened hero/layout spacing and replaced logo panels with structured portfolio/method cards that express the brand through typography, spacing, and content rather than repeated marks.
- Deployed via `aws s3 sync dist/ s3://yongai.ca/` without `--delete`; CloudFront invalidation `I5PP76TRCKDPXYV8HV2OBFE9M6` completed.
- Verification: `npm run build` passed; live `https://yongai.ca/?v=logo-restraint-fix` returns 200; only one visible image is present on the landing page (`/brand/YongAI_header_cropped.svg`); desktop console has 0 JS errors; desktop overflow is non-positive; mobile/tablet/desktop programmatic viewport checks showed 0 overflow/offenders and nav logo sizes of ~164×59 mobile, ~168×61 tablet, ~188×68 desktop; partner docs remain 200.

## Current State (2026-07-01 — Logo-led brand guide + landing revamp)
- Created `BRAND_GUIDE.md` plus live brand guide exports at `/brand/YongAI_brand_guide.html` and `/brand/YongAI_brand_guide.pdf` from the supplied `YongAI_logo_package_v2.zip`.
- Generated SVG/PDF vector-style masters under `/brand/` for the website header, monogram, and vertical lockup. Note: these are bitmap-traced reconstructions from PNG source, not original designer-authored vector files.
- Revamped `https://yongai.ca/` into a premium monochrome/warm-neutral venture portfolio using the new logo system: editorial hero, logo identity panel, proof strip, bento-style venture board, operating method, brand standards, and CTA.
- Deployed via `aws s3 sync dist/ s3://yongai.ca/` without `--delete` to avoid removing legacy partner docs; CloudFront invalidation `I547RUQOJQOLZPJW5BFWOMUCG9` completed.
- Verification: `npm run build` passed; live `https://yongai.ca/?v=brand-guide-revamp` returns 200, title is `YongAI — Practical ventures, built with operator discipline`, console has 0 JS errors, desktop overflow is non-positive, brand guide PDF/SVG return 200, and legacy `/partner-agenda.html` + `/partner-workshop-guide.html` remain 200.

## Current State (2026-06-30 — Classic Portfolio Restore)
- Gary rejected the first rebuilt venture homepage as worse than the previous design and asked to restore the original.
- S3 version-history permissions were re-tested and now work, but `yongai.ca` bucket/object history only shows `VersionId: null`; older `index.html` versions were not preserved because bucket versioning was not active for the overwritten files.
- Web archive/search and local image-cache/source searches did not recover the exact prior design artifact.
- Replaced the rejected editorial rebuild with a more conservative classic venture-portfolio layout: large bold hero, right-side portfolio summary, bento-style venture cards, and operating approach section.
- Deployed homepage plus all generated `_astro` CSS/JS assets; invalidation `I2KFGCGADFZ90VF2FSL24TV92A` completed.
- Verification: live `https://yongai.ca/?v=classic-portfolio` returns 200, references `/_astro/index.CplLGu-V.css` and `/_astro/candidate-outreach.D5drE0qi.css` with `200 text/css`, contains Flowt/OnlyPets/NEON 777 Casino/YourHermes, does not contain rejected headline `Building practical products, not pitch decks.`, browser overflow is `0`, and `/hermes-agent-setup/` remains `301 Location: https://urhermes.com/`.

## Current State (2026-06-30 — Venture Rebuild Attempt)
- Gary flagged that the 2026-06-29 restoration was the wrong YongAI version: it restored the older AI automation consulting site, not the venture portfolio listing active projects.
- Searched local source, backups, git history, public cache/search, memory/session history, and S3 current objects. The exact old venture-source snapshot was not found locally/publicly.
- Initially attempted S3 version-history recovery, but `s3:ListBucketVersions` / object-version listing was denied for `arn:aws:iam::628063714079:user/Dr.Molt`. Gary later granted it; re-check showed no historical object versions preserved.
- Rebuilt the root homepage from project source-of-truth files as a clean YongAI venture portfolio with Flowt, OnlyPets, NEON 777 Casino, and YourHermes.
- Deployed only `dist/index.html` to S3 and invalidated `/` + `/index.html` — no broad `--delete` sync. Partner docs, demo pages, and `/hermes-agent-setup/` redirect were not overwritten.
- Verification: `npm run build` passed; live `https://yongai.ca/?v=venture-restore` returns 200 and contains `Flowt`, `OnlyPets`, `NEON 777 Casino`, `YourHermes`, and `Building practical products`; old consulting headline `Your best people deserve better work` is absent. Browser title: `YongAI — Ventures by Gary Yong`; horizontal overflow: `0`. `/hermes-agent-setup/` still returns `301 Location: https://urhermes.com/`.

## Current State (2026-06-29)
- `urhermes.com` launched as the only YourHermes service domain. It is served by CloudFront distribution `E1ZFW2O41LK67T` using ACM cert `732fc5f7-9f4d-4d51-9b2d-3c5bbf85cf2a`; Route 53 aliases `A`/`AAAA` point to `d17al3s5n5mih8.cloudfront.net`.
- Because IAM has an explicit deny on `s3:CreateBucket`, YourHermes static files are deployed under the existing `yongai.ca` S3 bucket prefix `s3://yongai.ca/urhermes/`, with a dedicated CloudFront distribution and `urhermes.com` alias.
- `yongai.ca` restored from `archive/20260616-hermes-platform-refactor/` to the business venture website. Old demos and responsible AI page are live again.
- `https://yongai.ca/hermes-agent-setup/` now returns a real `301` S3 website redirect to `https://urhermes.com/`.
- Partner docs restored after `--delete` sync and verified live.
- Verification: `npm run build` passed for both `urhermes-site` (1 page) and restored `yongai-site` (8 pages). Live curl/browser checks returned 200 for `urhermes.com`, `yongai.ca`, demo/responsible pages, and partner docs; `/hermes-agent-setup/` returns `301 Location: https://urhermes.com/`.

## Illustrations (2026-03-15)
All 5 demo pages now have flat-style SVG hero illustrations replacing placeholder JPGs:
1. **hero-workflow-audit.svg** (~15KB) — 3-panel: messy process flow → AI analysis node → optimized output
2. **hero-client-intake.svg** (~18KB) — law firm + chat bubbles + outcome cards (case qualified, booked)
3. **hero-contract-reviewer.svg** (~16KB) — document stack → AI scanner → flagged clause analysis panel
4. **hero-resume-screener.svg** (~21KB) — 73 applicants pile → AI funnel → ranked shortlist with match scores
5. **hero-candidate-outreach.svg** (~17KB) — candidate profile → AI personalization → fanned email variants

## Bug Fixes (2026-03-14)
1. **contract-reviewer** — "Analyze Selected Contract" button called undefined `analyzeContract()` function. Fixed to call `startAnalysis()`. Removed duplicate "Start AI Analysis" button below grid.
2. **contract-reviewer** — Orphaned unclosed `<div>` in comparison section. Cleaned up.
3. **candidate-outreach** — TypeScript type annotations in `<script is:inline>` block caused browser syntax errors (inline scripts don't get compiled). "Generate Personalized Messages" button was fully broken. Converted to plain JS.
4. **workflow-audit, client-intake, resume-screener** — Audited, no bugs found.

## What's Local Only
- `~/clawd/urhermes-site/` — local source/build workspace for the YourHermes landing page deployed at `urhermes.com`.
- Archive snapshot of pre-refactor YongAI business site remains at `archive/20260616-hermes-platform-refactor/`.

## Known Gaps
- YongAI business site still contains older/static simulated demo pages and advisor/testimonial placeholders from the restored archive.
- YongAI public contact references should use `gary.yong@yongai.ca` as the go-to work email; avoid `info@`, `hello@`, `contact@`, or `gymoltbot@gmail.com` for YongAI site contact copy.
- YourHermes uses the existing `yongai.ca` bucket prefix because `s3:CreateBucket` is explicitly denied for this IAM user; a standalone bucket can be created later from the console if desired.
- Partner docs are legacy S3-only pages and not part of the current Astro build.

## Next Actions
- [ ] Gary review restored YongAI business site at `https://yongai.ca/`
- [ ] Gary review YourHermes service landing page at `https://urhermes.com/`
- [ ] If desired, create a dedicated `urhermes.com` S3 bucket manually in AWS console later and migrate off the `yongai.ca/urhermes/` prefix.
- [x] Use `gary.yong@yongai.ca` as the canonical YongAI work email for public `yongai.ca` contact references.

## Decisions
- 2026-06-29: YourHermes split out to `urhermes.com` as a YongAI subset service; `yongai.ca` restored to the archived business venture website; `/hermes-agent-setup/` redirects to `https://urhermes.com/`.
- 2026-06-16: Root `yongai.ca` repositioned as the Hermes Agent service platform landing page. Previous YongAI consulting pages/assets/build output archived at `archive/20260616-hermes-platform-refactor/`; old active demo routes removed; partner docs kept live on S3.
- 2026-06-08: Added `/hermes-agent-setup` as a productized service landing page for private AI operator / Hermes setup offer; positioning emphasizes workflow discovery, safety boundaries, and implementation discipline over commodity install.
- 2026-03-15: Flat SVG hero illustrations deployed — all 5 demo pages, ~15-21KB each, committed to repo
- 2026-03-14: Bug sweep across all 5 demo pages — 3 bugs fixed (contract-reviewer ×2, candidate-outreach ×1)
- 2026-03-10: Full design overhaul — dark→light, purple→orange, stripped all AI slop patterns (per "Common Mistakes With Vibe Coded Websites" video)
- 2026-02-21: Astro chosen for fast static builds
- 2026-02-20: Nano Banana API exhausted — Gary doesn't want pay-per-use
- 2026-07-04: Gary confirmed `gary.yong@yongai.ca` is registered and should be the only go-to email for YongAI references; do not use `info@`, `hello@`, `contact@`, or old personal fallback emails in public YongAI contact copy.

## Deploy
```bash
cd /Users/moltbot/clawd/yongai-site
npm run build
aws s3 sync dist/ s3://yongai.ca/ --delete --profile clawdbot-deploy
aws cloudfront create-invalidation --distribution-id EMKYCPGH3MJHV --paths "/*" --profile clawdbot-deploy

# YourHermes landing page source lives at /Users/moltbot/clawd/urhermes-site
cd /Users/moltbot/clawd/urhermes-site
npm run build
aws s3 sync dist/ s3://yongai.ca/urhermes/ --delete --profile clawdbot-deploy
aws cloudfront create-invalidation --distribution-id E1ZFW2O41LK67T --paths "/*" --profile clawdbot-deploy
```
