# CLAUDE.md — YongAI Site

## Live Environment
- **URL:** https://yongai.ca
- **S3 Bucket:** `yongai.ca`
- **CloudFront:** `EMKYCPGH3MJHV`
- **AWS Profile:** `clawdbot-deploy`

## Local Repo
- **Path:** `~/clawd/yongai-site/`
- **Old reference site:** `~/clawd/yongai-review/`

## Stack
- **Framework:** Astro
- **CSS:** Tailwind CSS
- **Animations:** GSAP (scroll-triggered)
- **Output:** Static HTML → S3/CloudFront

## Design System
- **Brand source:** `YongAI_logo_package_v3_with_svg_pdf.zip`; internal guide in `BRAND_GUIDE.md`
- **Color scheme:** strict v3 monochrome/warm-ivory system — black `#000000`, white `#FFFFFF`, dark charcoal `#0B0C0E`, warm ivory `#FAF8F2`
- **Logo usage:** use v3 horizontal transparent lockup for navigation; keep logo restrained (nav/favicon only unless Gary explicitly asks)
- **Typography:** institutional/editorial feel — serif display headings (`Cormorant Garamond`/Georgia), Inter/system sans for body/UI
- **Style:** premium venture-portfolio board; thin borders, modest radii, no green/purple/blue/orange/neon accents, no random logo placement

## Pages
```
src/pages/
├── index.astro             — Homepage
├── onlypets.astro          — OnlyPets product overview
├── cue.astro               — Cue voice meeting assistant overview
├── responsible-ai.astro    — Responsible AI page
└── demos/
    ├── workflow-audit.astro
    ├── client-intake.astro
    ├── resume-screener.astro
    ├── contract-reviewer.astro
    └── candidate-outreach.astro
```

## Also on S3 (deployed separately, NOT in Astro build)
- `partner-agenda.html` — from `~/clawd/yongai-review/`
- `partner-workshop-guide.html` — from `~/clawd/yongai-review/`

## Deploy Command (full)
```bash
cd ~/clawd/yongai-site
npm run build
aws s3 sync dist/ s3://yongai.ca/ --profile clawdbot-deploy --exclude 'partner-agenda.html' --exclude 'partner-workshop-guide.html'
aws cloudfront create-invalidation --distribution-id EMKYCPGH3MJHV --paths "/*" --profile clawdbot-deploy
```

## Key Rules
- Run `npm run build` before deploying — Astro must compile first
- Do **not** use broad `--delete` unless explicitly intending to remove S3-only legacy files; partner docs live outside the Astro build and must be preserved
- Do NOT mix up CloudFront IDs — `EMKYCPGH3MJHV` is yongai.ca ONLY
- `EUVZ94LCG1QV2` is gary-yong.com — different project

## Business Context
YongAI is Gary's venture portfolio and applied AI studio. Copy/messaging must position Gary/YongAI as:
- Builder/operator of focused software ventures and AI-enabled workflows
- Practical, disciplined, proof-first, and institutional rather than hype-heavy
- Portfolio currently includes Flowt, OnlyPets, NEON 777, and YourHermes
- Canonical YongAI work email: `gary.yong@yongai.ca` (do not use `info@`, `hello@`, `contact@`, or old personal fallback emails for YongAI contact copy)
- Calendly: https://calendly.com/gary-yong-yongai/30min
- Formspree: https://formspree.io/f/xwvnkpak

## After Changes
1. `git add -A && git commit -m "..."` in `~/clawd/yongai-site/`
2. Update `~/clawd/changes/yongai-site.md`
