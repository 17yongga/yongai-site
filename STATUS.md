# YongAI Site — STATUS.md
> Updated: 2026-03-15

## What's Live
- **URL:** https://yongai.ca
- **Stack:** Astro + Tailwind CSS v4 → static HTML → S3/CloudFront
- **CloudFront:** `EMKYCPGH3MJHV`

## Pages
- `/` — Homepage (redesigned Mar 10)
- `/demos/workflow-audit` — Demo: AI workflow audit tool
- `/demos/client-intake` — Demo: Client intake automation
- `/demos/resume-screener` — Demo: AI resume screening
- `/demos/contract-reviewer` — Demo: Contract review tool ✅ bug fixed Mar 14
- `/demos/candidate-outreach` — Demo: Candidate outreach automation ✅ bug fixed Mar 14

## Design (Redesigned 2026-03-10)
- **Theme:** Light mode — warm white (#FAFAF8) background, white cards
- **Accent:** Dark orange (#C2410C) — replaces old purple/green dark theme
- **Typography:** Inter, heavy weights for headlines, no gradient text
- **Cards:** Clean white with subtle borders/shadows — glassmorphism aliased to light card style
- **Animations:** Minimal — CSS-only hero frame animation, removed GSAP dependency for homepage
- **Hero:** Split layout — headline left, animated AI Workflow Audit demo frame right
- **Sections:** Clean text labels — no pill badges, no section dividers
- **Removed:** Neural network SVG, floating orbs, scroll fade-in on every element, hover:scale on cards, fake "Trusted by" logos bar, gradient buttons, purple accents throughout
- Partner docs on S3: `partner-agenda.html`, `partner-workshop-guide.html`

## Current State (2026-03-15)
- Homepage fully redesigned and live ✅
- Light theme applied across all 5 demo pages ✅
- Demo page bugs fixed and deployed ✅
- **SVG hero illustrations live on yongai.ca ✅ (2026-03-15 12:08 EDT)** — CloudFront invalidation `I5W5WHELPHTFRWRV0O0Y20SUHF`

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
- Nothing pending — illustrations committed and deployed

## Known Gaps
- **Advisory board:** Placeholder names — Gary to add real advisors later
- **Demo backends:** Demo pages are static/simulated — not wired to real AI backends

## Next Actions
- [ ] **Gary: review SVG illustrations live** — check look/feel on yongai.ca demo pages
- [ ] **Advisory board** — Gary to provide real advisor names/credentials
- [ ] Refine demo page narratives (storytelling pass)

## Decisions
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
```
