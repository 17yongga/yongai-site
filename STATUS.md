# YongAI Site — STATUS.md
> Updated: 2026-06-20

## What's Live
- **URL:** https://yongai.ca
- **Stack:** Astro + Tailwind CSS v4 → static HTML → S3/CloudFront
- **CloudFront:** `EMKYCPGH3MJHV`

## Pages
- `/` — Hermes Agent service platform landing page ✅ live Jun 16
- Old YongAI consulting pages/demos removed from active routes and archived locally at `archive/20260616-hermes-platform-refactor/`
- Partner docs remain on S3: `/partner-agenda.html`, `/partner-workshop-guide.html`

## Design (Redesigned 2026-06-16)
- **Theme:** Light, calm, editorial SaaS style — warm off-white backgrounds with white cards
- **Accent:** Deep teal (`#0f766e`) + charcoal (`#1f2937`); no purple
- **Typography:** Inter + IBM Plex Mono labels; oversized blunt headlines; no gradient text
- **Cards:** Clean borders, restrained radius, minimal shadows
- **Animations:** No GSAP/runtime page animations; only simple hover transitions and nav menu JS
- **Hero:** Split layout — service copy left, compact Hermes operator mockup right
- **Sections:** Platform pillars, setup process, use cases, safety model, packages, contact form
- **Removed from active site:** old consulting homepage sections, live demo routes, responsible AI page, `/hermes-agent-setup/` duplicate route

## Current State (2026-06-20)
- Root `https://yongai.ca/` is now the Hermes Agent service platform landing page ✅
- Old site source/assets/build output archived at `archive/20260616-hermes-platform-refactor/` ✅
- Old demo/responsible/Hermes duplicate routes intentionally removed from active Astro build ✅
- Partner docs restored after deploy and verified live ✅
- 2026-06-20 content revamp deployed: root page tells a tighter top-to-bottom story around an **AI Workflow Setup Sprint**, using the Ben/CubeOne setup trail as the concrete example pattern (discovery → use case → setup package → operating model).
- 2026-06-20 concise copy pass deployed after Gary feedback: shortened hero to “Your private AI operator.”, removed section lead paragraphs, converted sections into scan-friendly buyer questions, short cards, package bullets, and direct CTAs.
- Verification: `npm run build` passed (1 page built); S3 sync completed; partner docs restored after `--delete` sync; live `https://yongai.ca/`, `/index.html`, `/partner-agenda.html`, and `/partner-workshop-guide.html` all return 200; live browser render shows new title/headline and console clean.
- CloudFront invalidations: `I6UY2I3YXVUUP4SZSGPCTGLHCX` (full revamp), `I2T4KN0FR76DCKVKP5UFEVAUG4` (root + partner docs restore), `I58AB2890Z3DF8QPUEMMRRXGR7` (2026-06-20 deploy), `IAIIW9LTK9YZMY5DBSABI6J0P3` (partner docs restore + root refresh), `IBC363L42OWXCOH7OJTVX234NE` (concise copy pass deploy), `I5QREMJ4VGWMFHUFORQKKXTEP7` (partner docs restore + root refresh)
- Footer/contact fallback email remains `gymoltbot@gmail.com` per cancelled `gary.yong@yongai.ca` decision.

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
- Archive snapshot of pre-refactor site: `archive/20260616-hermes-platform-refactor/`

## Known Gaps
- No testimonial/result claims yet; Ben/CubeOne is used only as an honest setup-pattern example, not a fabricated case study.
- Pricing/package language still needs Gary approval before public deployment.
- Partner docs are legacy S3-only pages and not part of the current Astro build

## Next Actions
- [ ] Gary review/refinement pass after live deployment: copy/story, package names/pricing, exact CTA language
- [ ] Add proof: pilot testimonials, screenshots, or concrete Hermes setup examples when available
- [ ] SEO/OG polish for Hermes setup keywords

## Decisions
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
```
