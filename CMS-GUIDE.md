# Portfolio CMS Self-Maintenance Guide

Everything on your site is editable through Sanity Studio — no code changes needed for content updates.

---

## Quick Start

1. **Open the CMS**: Go to `https://your-domain.com/studio` (or `localhost:3000/studio` in dev)
2. **Log in** with your Sanity account (the one tied to project `55vwwzpf`)
3. Edit any document → click **Publish** → changes go live automatically

---

## What You Can Edit

| CMS Document       | What It Controls                                    |
| ------------------- | --------------------------------------------------- |
| **Profile**         | Name, handle, tagline, bio, stats, socials, emails  |
| **Experience**      | Career chapters (title, company, era, narrative)     |
| **Project**         | Selected projects (title, description, tags, link)   |
| **Skill**           | Technical, soft, tools, credentials lists            |
| **Beyond Work**     | Personal sections (emoji, title, body, mood line)    |
| **Philosophy**      | Philosophy entries (title, summary, tags)             |
| **Journal Topic**   | Journal entries (title, preview, category, Substack URL) |
| **Personal About**  | Headline, accent text, paragraphs, pillars           |
| **Life Pillar**     | Content brands (brand name, theme, description, pillars) |

---

## Common Tasks

### Change your job title or bio
1. Open **Profile** in Studio
2. Edit `currentRole`, `currentCompany`, `bio` paragraphs, etc.
3. Publish

### Add a new career chapter
1. Click **+ Create** → **Experience**
2. Fill in: era, period, title, company, narrative, highlights
3. Set `order` to control sort position (lower = higher on page)
4. Toggle `current` on for your active role
5. Publish

### Add a new project
1. Click **+ Create** → **Project**
2. Fill in: title, category, description, thinking, tags, link
3. Set `order`
4. Publish

### Update Beyond Work sections
1. Open a **Beyond Work** document
2. **Emoji**: Paste any emoji character (e.g. 🏔️ 🎸 🧘)
3. Edit title, subtitle, body paragraphs, mood line
4. Publish

### Add a journal topic with Substack link
1. Click **+ Create** → **Journal Topic**
2. Fill in: title, preview, category
3. **Substack URL**: Paste the full URL to your Substack article
4. Topics with a Substack URL become clickable links on the site
5. Publish

### Update philosophies
1. Open a **Philosophy** document
2. Edit title, summary, tags
3. Publish

### Update personal about section
1. Open **Personal About** (singleton)
2. Edit headline, headline accent, paragraphs, pillars
3. Publish

### Update life pillars / content brands
1. Open a **Life Pillar** document
2. Edit brand, key, theme, description, content pillars
3. Publish

---

## Adding New Skills / Credentials
1. Open the **Skill** document (there's only one — it's a singleton)
2. Add items to the `technical`, `soft`, `tools`, or `credentials` arrays
3. Publish

---

## Fallback System

Every component has **hardcoded fallback data** in `src/data/`. If the CMS is unreachable (e.g. Sanity is down), the site still renders using this data. This means:

- The site **never breaks** even if CMS goes offline
- To update fallback data, edit the files in `src/data/` and redeploy

| Fallback File             | Used By           |
| ------------------------- | ----------------- |
| `src/data/profile.ts`     | Hero, About, Contact, Footer |
| `src/data/experience.ts`  | Experience        |
| `src/data/projects.ts`    | Projects          |
| `src/data/skills.ts`      | Skills            |
| `src/data/beyond.ts`      | Beyond Work       |
| `src/data/philosophy.ts`  | Philosophy        |
| `src/data/journal.ts`     | Journal           |
| `src/data/creator.ts`     | Life Pillars      |

---

## Re-seeding the CMS

If you ever need to reset CMS data to the hardcoded defaults:

```bash
node scripts/seed-sanity.mjs
```

This overwrites all CMS documents with the fallback data. **Use with caution** — it replaces any CMS edits you've made.

---

## Deploying Changes

The site auto-deploys on push to the main branch via Vercel.

```bash
git add -A
git commit -m "content update"
git push
```

Vercel will build and deploy within ~60 seconds.

---

## Project Structure (Key Files)

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── professional/page.tsx # Professional page (fetches CMS data)
│   ├── personal/page.tsx     # Personal page (fetches CMS data)
│   └── studio/[[...tool]]/   # Sanity Studio route
├── components/               # All UI components
├── data/                     # Hardcoded fallback data + types
├── lib/cms.ts                # CMS fetch layer (CMS → fallback)
├── sanity/
│   ├── schemas/              # Sanity document schemas
│   └── queries.ts            # GROQ queries + TypeScript types
scripts/
└── seed-sanity.mjs           # Seed script
```

---

## Color Variables (CSS)

Colors are defined in `src/app/globals.css`. Key variables:

- **Professional accent**: `#d97706` (amber)
- **Personal accent**: `var(--personal-accent)` (terracotta)
- **Personal teal**: `var(--personal-teal)` (teal)

To change a color, update the CSS variable in both light and dark mode blocks in `globals.css`.

---

## Environment Variables

Required in `.env.local` (and Vercel dashboard):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=55vwwzpf
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your-token>
```

---

## Need Help?

- **Sanity docs**: https://www.sanity.io/docs
- **Next.js docs**: https://nextjs.org/docs
- **Vercel dashboard**: https://vercel.com/dashboard
