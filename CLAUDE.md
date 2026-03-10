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
- **Color scheme:** Dark mode (near-black background)
- **Accent color:** `#3fb950` (green)
- **Style:** Glassmorphism cards, Konrad.com-inspired layout
- **Animations:** GSAP ScrollTrigger for section reveals

## Pages
```
src/pages/
├── index.astro             — Homepage
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
aws s3 sync dist/ s3://yongai.ca/ --delete --profile clawdbot-deploy
aws cloudfront create-invalidation --distribution-id EMKYCPGH3MJHV --paths "/*" --profile clawdbot-deploy
```

## Key Rules
- Run `npm run build` before deploying — Astro must compile first
- Use `--delete` flag in s3 sync to remove stale files
- Do NOT mix up CloudFront IDs — `EMKYCPGH3MJHV` is yongai.ca ONLY
- `EUVZ94LCG1QV2` is gary-yong.com — different project

## Business Context
YongAI is Gary's AI automation consulting business. Copy/messaging must position Gary as:
- Process analyst + workshop facilitator + AI implementation expert
- Targeting enterprise clients (banks, insurance, consulting firms)
- Key differentiator: combines consulting methodology with hands-on AI
- Calendly: https://calendly.com/gary-yong-yongai/30min
- Formspree: https://formspree.io/f/xwvnkpak

## After Changes
1. `git add -A && git commit -m "..."` in `~/clawd/yongai-site/`
2. Update `~/clawd/changes/yongai-site.md`
