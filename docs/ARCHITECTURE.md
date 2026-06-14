# Portfolio — Architecture

## System Overview

```
┌──────────────┐     ┌──────────────────┐     ┌────────────────┐
│  Sanity CMS  │────▶│   Next.js 16     │────▶│    Vercel      │
│  (v5.26)     │     │  App Router      │     │                │
│              │     │  ISR (60s)       │     │  Edge CDN      │
│  13 schemas  │     │  React 19        │     │  Auto-deploy   │
│  GROQ queries│     │  TypeScript 5    │     │                │
└──────────────┘     └──────────────────┘     └────────────────┘
                          │
                     ┌────┴────┐
                     │ Fallback│
                     │ data/*.ts│
                     └─────────┘
```

---

## Dual-Persona Architecture

The site serves two distinct experiences from one codebase:

```
/  (Landing)
├── /professional    ── Amber accent (#d97706)
│   ├── Hero (career tagline)
│   ├── About (bio, stats)
│   ├── Experience (career chapters)
│   ├── Skills (technical, tools, credentials)
│   ├── Projects (selected work)
│   ├── ProductShowcase (filtered: showOn includes "professional")
│   └── Contact (professional emails)
│
├── /personal        ── Terracotta (#c2703a) + Teal (#2d8a7c)
│   ├── Hero (personal tagline)
│   ├── PersonalAbout (headline, pillars)
│   ├── Philosophy (life philosophies)
│   ├── LifePillars (content brands)
│   ├── ProductShowcase (filtered: showOn includes "personal")
│   ├── BeyondWork (travel, hobbies, etc.)
│   ├── Journal (Substack topics)
│   └── Contact (personal emails)
│
├── /products        ── Product catalog (all brands)
│   └── /products/[slug]  ── Product detail pages
│
├── /blog            ── Blog (CMS-only, no fallback)
│   └── /blog/[slug]      ── Blog post pages
│
└── /studio          ── Sanity Studio (embedded, client-side)
```

---

## Data Flow

```
Page component (server)
  └── fetchProfile() / fetchExperiences() / etc.  (lib/cms.ts)
        ├── Try: sanityClient.fetch(GROQ_QUERY)   (sanity/queries.ts)
        │     └── Map SanityShape → AppShape
        └── Catch: return fallbackData             (data/*.ts)
              └── Component renders with unified type
```

### Type Architecture (two layers)

```
Sanity Types (CMS shape)         App Types (component shape)
─────────────────────────        ─────────────────────────
sanity/queries.ts                data/types.ts
  SanityProfile                    Profile
  SanityExperience                 Chapter
  SanityProject                    Project
  SanitySkills                     Skills
  SanityBeyondWork                 LifeSection
  SanityPhilosophy                 { title, summary, tags }
  SanityJournalTopic               JournalTopic
  SanityPersonalAbout              SanityPersonalAbout (passthrough)
  SanityLifePillar                 { brand, key, theme, ... }
  SanityProductDoc                 Product

Mapping: lib/cms.ts (one function per content type)
```

---

## Component Hierarchy

### Professional Page
```
Navbar (variant="professional")
CrossPageNudge (variant="professional")
Hero (variant="professional")
About
Experience
Skills
Projects
ProductShowcase (variant="professional")
Contact (variant="professional")
Footer
```

### Personal Page
```
Navbar (variant="personal")
CrossPageNudge (variant="personal")
Hero (variant="personal")
PersonalAbout
Philosophy
LifePillars
ProductShowcase (variant="personal")
BeyondWork
Journal
Contact (variant="personal")
Footer
```

---

## External Integrations

| Service | File | Purpose | Failure Mode |
|---|---|---|---|
| Sanity CMS | `sanity/queries.ts` | All content | Falls back to `data/*.ts` |
| YouTube API | `lib/youtube.ts` | Video feeds | Empty array |
| Instagram API | `lib/instagram.ts` | Photo feeds | Empty array |
| Substack RSS | `lib/substack.ts` | Newsletter feed | Empty array |
| Vercel Analytics | Layout | Page analytics | Silent |
| Vercel Speed Insights | Layout | Web vitals | Silent |

---

*For complete AI agent context, see `AGENTS.md`. For CMS self-service guide, see `CMS-GUIDE.md`.*
