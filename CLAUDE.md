# Portfolio — Claude Context

**Stack:** Next.js 16.2.6 (App Router) · TypeScript · React 19 · Sanity v5 · Tailwind CSS v4 · Framer Motion

**Read `AGENTS.md` first** — full codebase context: dual-persona architecture, Sanity schema map (13 types), theming, data flow, known gotchas.

**What this is:** Dual-persona portfolio site — `/professional` (career, amber accent) and `/personal` (philosophy, terracotta/teal accent). Landing page at `/` lets user choose.

## Quick Rules
- Sanity project ID: `55vwwzpf` · Dataset: `production` · Studio at `/studio`
- Dual-source data: Sanity CMS primary, static fallback in `src/data/*.ts`
- All fetches via `lib/cms.ts` — never call Sanity directly from components
- App types in `data/types.ts` — Sanity types in `sanity/queries.ts`
- Professional = amber `#d97706`, Personal = terracotta `#c2703a` + teal `#2d8a7c`
- ISR: `revalidate = 60` on all pages
- Dark mode via `.dark` class on `<html>`, ThemeProvider + ThemeToggle
- Never add `unoptimized` to `<Image>` components
- Tests: `npm test` (Vitest) · Type check: `npx tsc --noEmit` · Lint: `npm run lint`
- **Read `docs/lessons/` before every session**

## Key Locations
- Data layer: `src/lib/cms.ts` (CMS → fallback for every fetch)
- Types: `src/data/types.ts` (app) + `src/sanity/queries.ts` (CMS)
- Themes: `src/app/globals.css` (CSS variables, light/dark × professional/personal)
- Schemas: `src/sanity/schemas/` (13 document types)
- Fallback data: `src/data/` (profile, experience, projects, skills, etc.)

## Docs Index
- `AGENTS.md` — Full AI agent context (detailed)
- `CMS-GUIDE.md` — Self-service CMS maintenance guide
- `docs/ARCHITECTURE.md` — System architecture and data flow
- `docs/HANDBOOK.md` — Maintenance guide
- `docs/HOW-IT-WORKS.md` — Founder-friendly explainer
