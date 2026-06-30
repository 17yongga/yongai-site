# YongAI Site — STATUS.md
> Updated: 2026-06-29

## What's Live
- **YongAI business site:** https://yongai.ca ✅ restored from archived pre-Hermes business-site snapshot on 2026-06-29
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
- **YongAI:** Restored archived business venture site design — light theme, dark orange accent, consulting-service positioning, demos, process, trust/data, and contact sections.
- **YourHermes:** Separate subset service page on `urhermes.com` — light editorial SaaS style, private AI operator positioning, exact screenshot sections only.

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
