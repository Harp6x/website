# Portfolio — How Everything Works

> Plain English. No jargon.

---

## The Big Picture

Your portfolio is a **website with two sides**:
- **Professional** (`/professional`) — Your career, skills, projects, experience
- **Personal** (`/personal`) — Your philosophy, hobbies, journal, life pillars

The **landing page** (`/`) lets visitors choose which side to explore.

All the text on the site is editable through a **CMS** (Content Management System) called Sanity. You edit content at `/studio` — no code changes needed.

---

## How Content Works

### The CMS (Sanity Studio)

Go to `your-site.com/studio` and log in. You'll see documents like:
- **Profile** — Your name, bio, tagline, social links
- **Experience** — Career chapters
- **Project** — Selected work
- **Beyond Work** — Personal sections (travel, hobbies, etc.)
- **Product** — Things you sell (ebooks, templates, etc.)
- And more...

Edit any document → click **Publish** → changes appear on the live site within 60 seconds.

### Safety Net

Every piece of content has a **fallback** — hardcoded data in the code. If the CMS goes down, the site still works. This means:
- The site **never shows blank sections**
- To update fallbacks, edit files in `src/data/` and push to git

---

## Where Things Live

| What | Where | How to Change |
|---|---|---|
| **Profile info** | Sanity → Profile document | Edit in Studio |
| **Career history** | Sanity → Experience documents | Edit in Studio |
| **Projects** | Sanity → Project documents | Edit in Studio |
| **Skills** | Sanity → Skill document | Edit in Studio |
| **Personal sections** | Sanity → Beyond Work documents | Edit in Studio |
| **Products** | Sanity → Product documents | Edit in Studio |
| **Colors/theme** | `src/app/globals.css` | Edit CSS file |
| **Fallback data** | `src/data/*.ts` files | Edit TS files |
| **Product detail pages** | `src/data/product-details.ts` | Edit TS file |

---

## How the Two Sides Work

Both pages pull from the **same CMS** but show different content:
- Professional page shows: career, skills, projects, professional products
- Personal page shows: philosophy, beyond-work, journal, personal products

Products have a `showOn` field that controls which page they appear on — set to `professional`, `personal`, or both.

---

## External Services

| Service | What It Does | If It Goes Down |
|---|---|---|
| **Sanity CMS** | Stores all editable content | Falls back to hardcoded data |
| **Vercel** | Hosts the website | Site goes offline |
| **YouTube API** | Shows your videos | Video section shows empty |
| **Instagram API** | Shows your photos | Photo section shows empty |
| **Substack** | Shows newsletter posts | Journal section shows empty |

---

## Deployment

The site **auto-deploys** when you push code to GitHub:
```bash
git add -A
git commit -m "update"
git push
```
Vercel builds and deploys within ~60 seconds.

---

## Glossary

| Term | Meaning |
|---|---|
| **CMS** | Content Management System — where you edit text without touching code |
| **Sanity** | The specific CMS this site uses |
| **Studio** | The editing interface at `/studio` |
| **ISR** | Incremental Static Regeneration — pages rebuild automatically every 60 seconds |
| **Fallback** | Backup data used when the CMS is unavailable |
| **SSG** | Static Site Generation — pages are pre-built for speed |
| **Vercel** | The hosting platform that runs the site |
| **Dark mode** | Alternate color scheme toggled by the moon/sun button |
