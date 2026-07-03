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
- YourHermes still uses `gymoltbot@gmail.com`/existing Formspree while Gary sets up Google Workspace separately.
- YourHermes uses the existing `yongai.ca` bucket prefix because `s3:CreateBucket` is explicitly denied for this IAM user; a standalone bucket can be created later from the console if desired.
- Partner docs are legacy S3-only pages and not part of the current Astro build.

## Next Actions
- [ ] Gary review restored YongAI business site at `https://yongai.ca/`
- [ ] Gary review YourHermes service landing page at `https://urhermes.com/`
- [ ] If desired, create a dedicated `urhermes.com` S3 bucket manually in AWS console later and migrate off the `yongai.ca/urhermes/` prefix.
- [ ] Set up Google Workspace for `gary.yong@yongai.ca` separately.

## Decisions
- 2026-06-29: YourHermes split out to `urhermes.com` as a YongAI subset service; `yongai.ca` restored to the archived business venture website; `/hermes-agent-setup/` redirects to `https://urhermes.com/`.
- 2026-06-16: Root `yongai.ca` repositioned as the Hermes Agent service platform landing page. Previous YongAI consulting pages/assets/build output archived at `archive/20260616-hermes-platform-refactor/`; old active demo routes removed; partner docs kept live on S3.
- 2026-06-08: Added `/hermes-agent-setup` as a productized service landing page for private AI operator / Hermes setup offer; positioning emphasizes workflow discovery, safety boundaries, and implementation discipline over commodity install.
- 2026-03-15: Flat SVG hero illustrations deployed — all 5 demo pages, ~15-21KB each, committed to repo
- 2026-03-14: Bug sweep across all 5 demo pages — 3 bugs fixed (contract-reviewer ×2, candidate-outreach ×1)
- 2026-03-10: Full design overhaul — dark→light, purple→orange, stripped all AI slop patterns (per "Common Mistakes With Vibe Coded Websites" video)
- 2026-02-21: Astro chosen for fast static builds
- 2026-02-20: Nano Banana API exhausted — Gary doesn't want pay-per-use
- gary.yong@yongai.ca CANCELLED (Feb 21) — use gymoltbot@gmail.com for all comms

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
