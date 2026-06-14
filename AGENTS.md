<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — AI Agent Context File

> **Read this first** before making any code changes. Full mental model in a single pass.

---

## Identity

**Personal portfolio site** for Uddip Ranjan Das (handle: **harp6x**). Cybersecurity engineer, product thinker, explorer.

**Two distinct experiences on one site:**
- `/professional` — Career, skills, projects, experience (amber accent `#d97706`)
- `/personal` — Philosophy, beyond-work, journal, life pillars (terracotta `#c2703a` + teal `#2d8a7c`)
- `/` — Landing page (gateway between the two)

**This is NOT a blog-first site.** It's a dual-persona portfolio with CMS-driven content and static fallbacks.

**Live:** Vercel (auto-deploys on push to main)
**CMS:** Sanity v5 (project ID: `55vwwzpf`, dataset: `production`)
**Studio:** Embedded at `/studio`

---

## Tech Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | 5 |
| UI | React | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| CMS | Sanity | v5.26 (next-sanity 13) |
| Animation | Framer Motion | 12.39 |
| Icons | Lucide React + React Icons | |
| Analytics | Vercel Analytics + Speed Insights | |
| Fonts | Geist, Geist Mono, Lora | next/font/google |
| Hosting | Vercel | Auto-deploy from main |

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (fonts, ThemeProvider, Analytics)
│   ├── page.tsx                 # Landing page (LandingHero → pick professional/personal)
│   ├── globals.css              # CSS variables (light/dark × professional/personal)
│   ├── professional/page.tsx    # Professional page (career, skills, projects)
│   ├── personal/page.tsx        # Personal page (philosophy, beyond-work, journal)
│   ├── products/
│   │   ├── page.tsx             # Product catalog page
│   │   └── [slug]/              # Product detail pages
│   ├── blog/
│   │   └── [slug]/              # Blog post pages
│   └── studio/[[...tool]]/      # Sanity Studio (embedded)
├── components/                  # 30 components (see below)
├── data/                        # Static fallback data + types
│   ├── types.ts                 # ALL TypeScript interfaces (centralized)
│   ├── profile.ts               # Fallback profile data
│   ├── experience.ts            # Fallback experience chapters
│   ├── projects.ts              # Fallback projects
│   ├── skills.ts                # Fallback skills + credentials
│   ├── beyond.ts                # Fallback beyond-work sections
│   ├── journal.ts               # Fallback journal topics
│   ├── products.ts              # Fallback product catalog
│   ├── product-details.ts       # Product detail pages (long-form)
│   ├── creator.ts               # Creator brands data
│   └── youtube.ts               # YouTube video data
├── lib/
│   ├── cms.ts                   # Data layer: Sanity → fallback for every fetch
│   ├── instagram.ts             # Instagram feed fetcher
│   ├── products.ts              # Product utility functions
│   ├── substack.ts              # Substack RSS fetcher
│   └── youtube.ts               # YouTube API fetcher
├── sanity/
│   ├── client.ts                # Sanity client instance
│   ├── config.ts                # Sanity project config
│   ├── queries.ts               # GROQ queries + Sanity TypeScript interfaces
│   ├── schemas/                 # 13 Sanity document schemas
│   ├── structure.ts             # Studio desk structure
│   └── studio.config.ts         # Sanity Studio config
scripts/
├── seed-sanity.mjs              # Seed CMS with fallback data
├── seed-hobie.mjs               # Seed Hobie-specific data
└── upload-resumes.mjs           # Upload resume PDFs to Sanity
```

---

## Architecture: Dual-Source Data Pattern

```
Page request
  → lib/cms.ts fetch function
    → Try Sanity GROQ query
      → Success? Map CMS shape → app shape, return
      → Fail/empty? Return static fallback from data/*.ts
    → Component renders with unified type
```

**Every CMS fetch has a fallback.** The site never breaks even if Sanity is down.

| CMS Document | Fallback File | Used By |
|---|---|---|
| `profile` | `data/profile.ts` | Hero, About, Contact, Footer, Navbar |
| `experience` | `data/experience.ts` | Experience |
| `project` | `data/projects.ts` | Projects |
| `skill` | `data/skills.ts` | Skills |
| `beyondWork` | `data/beyond.ts` | BeyondWork |
| `philosophy` | (empty array) | Philosophy |
| `journalTopic` | `data/journal.ts` | Journal |
| `personalAbout` | (null) | PersonalAbout |
| `lifePillar` | (empty array) | LifePillars |
| `product` | `data/products.ts` | ProductShowcase, ProductCatalog |
| `blogPost` | (none) | Blog |

---

## Sanity Schemas (13 types)

| Schema | Type | Key Fields |
|---|---|---|
| `profile` | singleton | name, handle, email, tagline, bio[], stats[], socials[] |
| `experience` | document | era, title, company, period, narrative, highlights[], current |
| `project` | document | title, category, description, thinking, tags[], link |
| `skill` | singleton | technical[], soft[], tools[], credentials[] |
| `beyondWork` | document | emoji, title, subtitle, body[], mood |
| `philosophy` | document | title, summary, tags[] |
| `journalTopic` | document | title, preview, category, substackUrl |
| `personalAbout` | singleton | headline, headlineAccent, paragraphs[], pillars[] |
| `lifePillar` | document | brand, key, theme, description, contentPillars[] |
| `product` | document | title, slug, brand, productType, priceType, price, coverImage |
| `blogPost` | document | title, slug, category, excerpt, publishedAt, body[] |
| `siteSettings` | singleton (legacy) | currentRole, tagline, etc. |

---

## Theming System

Two independent color systems controlled by CSS variables in `globals.css`:

**Professional palette:** Amber accent (`--accent: #d97706`), neutral backgrounds
**Personal palette:** Terracotta (`--personal-accent: #c2703a`) + Teal (`--personal-teal: #2d8a7c`), warm backgrounds

**Dark mode:** Toggled via `.dark` class on `<html>` (ThemeProvider + ThemeToggle). Both professional and personal pages support dark mode.

---

## Rendering Strategy

| Route | Strategy | Revalidation |
|---|---|---|
| `/` | SSG + ISR | 60s |
| `/professional` | SSG + ISR | 60s |
| `/personal` | SSG + ISR | 60s |
| `/products` | SSG + ISR | 60s |
| `/products/[slug]` | SSG + ISR | 60s |
| `/blog/[slug]` | SSG + ISR | 60s |
| `/studio/**` | Client-side | N/A |

---

## Environment Variables

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=55vwwzpf
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<read-token>

# Optional (external feeds)
YOUTUBE_API_KEY=...
YOUTUBE_CHANNEL_HARSH6X=...
YOUTUBE_CHANNEL_JIMNYRUNS=...
INSTAGRAM_ACCESS_TOKEN=...
INSTAGRAM_USER_HARSH6X=...
INSTAGRAM_USER_THEREGOESUDDIP=...
INSTAGRAM_USER_JIMNYRUNS=...
```

---

## Known Gotchas

1. **Dual-persona routing:** `/professional` and `/personal` are separate pages, NOT tabs. Each fetches its own data in parallel. Don't share state between them.

2. **Types live in `data/types.ts`:** All interfaces are centralized there. Import from `@/data/types`, not inline.

3. **CMS types vs app types:** Sanity types (prefixed `Sanity*`) live in `sanity/queries.ts`. App-facing types live in `data/types.ts`. The mapping happens in `lib/cms.ts`.

4. **Product brands:** Three brands — `harp6x`, `tgu`, `crossover`. Each product has a `showOn` array controlling which page it appears on.

5. **No blog fallback data:** Blog posts only come from Sanity. If CMS is empty, blog is empty.

6. **Framer Motion:** Used for scroll-triggered animations. AnimatedSection wraps sections with `whileInView` transitions.

7. **External feeds are fragile:** Instagram, YouTube, Substack feeds use external APIs. Tokens expire, APIs change. These should degrade gracefully.

8. **Seed scripts need write token:** `scripts/seed-sanity.mjs` requires `SANITY_API_TOKEN` with write permissions.

9. **ISR revalidation:** All pages use `revalidate = 60` (1 minute). CMS changes appear within 60 seconds.

10. **Dark mode persists:** ThemeProvider reads/writes `localStorage('theme')`. The `.dark` class toggles all CSS variables.

---

## Quick Rules

- All content fetches go through `lib/cms.ts` — never call Sanity directly from components
- Types in `data/types.ts` — never define interfaces inline in components
- Sanity types in `sanity/queries.ts` — CMS-facing shapes stay separate from app shapes
- Professional = amber, Personal = terracotta/teal — never mix accent colors
- ISR: `revalidate = 60` on all pages
- Never add `unoptimized` to `<Image>` components
- Font: Geist for UI, Lora for editorial headings
- Tests: `npm test` (Vitest) · Type check: `npx tsc --noEmit` · Lint: `npm run lint`
- **Read `docs/lessons/` before every session**

## Docs Index

- `CLAUDE.md` — Claude-specific quick context
- `AGENTS.md` — This file (full AI agent context)
- `CMS-GUIDE.md` — Self-service CMS maintenance guide
- `docs/ARCHITECTURE.md` — System architecture and data flow
- `docs/HANDBOOK.md` — Maintenance guide
- `docs/HOW-IT-WORKS.md` — Founder-friendly explainer
