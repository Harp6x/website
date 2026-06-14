# Portfolio — Uddip Ranjan Das

Dual-persona portfolio site with CMS-driven content and static fallbacks. Professional side (career, skills, projects) and personal side (philosophy, journal, beyond-work) — each with its own visual identity.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router), TypeScript, React 19 |
| CMS | Sanity v5 (13 schemas, embedded Studio at `/studio`) |
| Styling | Tailwind CSS v4 (CSS custom properties, light/dark) |
| Animation | Framer Motion |
| Analytics | Vercel Analytics + Speed Insights |
| Hosting | Vercel (auto-deploy from main) |

## Setup

```bash
npm install
cp .env.example .env.local   # Fill in Sanity + optional API keys
npm run dev                   # → http://localhost:3000
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |
| `npm test` | Vitest tests |
| `npm run format` | Prettier format |

## Architecture

**Dual-source data:** Every page fetches from Sanity CMS first. If CMS fails, static fallback data in `src/data/` is used. The site never breaks.

**Dual-persona routing:** `/professional` (amber accent) and `/personal` (terracotta/teal accent) are separate pages, each fetching their own data. Landing page at `/` is the gateway.

**13 Sanity schemas:** profile, experience, project, skill, beyondWork, philosophy, journalTopic, personalAbout, lifePillar, product, blogPost, siteSettings.

## Documentation

| File | Purpose |
|---|---|
| `AGENTS.md` | Full AI agent context |
| `CLAUDE.md` | Claude-specific quick context |
| `CMS-GUIDE.md` | Self-service CMS guide |
| `docs/ARCHITECTURE.md` | System architecture and data flow |
| `docs/HANDBOOK.md` | Maintenance guide |
| `docs/HOW-IT-WORKS.md` | Founder-friendly explainer |
| `docs/lessons/` | Hard-learned rules |
