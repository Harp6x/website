# Portfolio — Maintenance Handbook

## Development

### Local Setup
```bash
git clone <repo-url>
cd portfolio
npm install
cp .env.example .env.local   # Fill in Sanity + optional API keys
npm run dev                   # → http://localhost:3000
```

### Scripts
| Command | Purpose |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm test` | Vitest tests |
| `npm run format` | Prettier format |

### Before Pushing Code
```bash
npm run lint && npm run typecheck && npm test && npm run build
```

---

## Common Tasks

### Update Profile / Bio / Job Title
1. Go to `/studio` → **Profile**
2. Edit fields → Publish
3. Changes appear within 60 seconds (ISR)

### Add a New Experience Chapter
1. `/studio` → **+ Create** → **Experience**
2. Fill: era, period, title, company, narrative, highlights
3. Set `order` (lower = higher on page), toggle `current` for active role
4. Publish

### Add a New Product
1. `/studio` → **+ Create** → **Product**
2. Fill: title, slug, brand, productType, priceType, price, etc.
3. Set `showOn` array (`professional`, `personal`, or both)
4. Toggle `featured` for homepage showcase
5. Publish
6. Add product detail to `src/data/product-details.ts` for the `/products/[slug]` page

### Change Color Accents
Edit CSS variables in `src/app/globals.css`:
- Professional: `--accent` (amber `#d97706`)
- Personal: `--personal-accent` (terracotta) + `--personal-teal` (teal)
- Update both `:root` (light) and `.dark` blocks

### Add External Feed (YouTube / Instagram)
1. Add API credentials to `.env.local`
2. Use existing fetcher in `src/lib/` or create a new one
3. Call from page component (server-side)
4. Handle empty/error state gracefully

### Seed CMS with Fallback Data
```bash
node scripts/seed-sanity.mjs
```
⚠️ Requires `SANITY_API_TOKEN` with **write** permissions. Overwrites existing CMS data.

---

## Deployment

- **Hosting:** Vercel (auto-deploys on push to `main`)
- **Build:** `npm run build` via Vercel
- **Config:** `vercel.json` in project root
- **Environment:** Set all env vars in Vercel dashboard → Settings → Environment Variables

---

## Troubleshooting

### Build fails with type errors
```bash
rm -rf .next && npx tsc --noEmit
```

### CMS content not updating
- ISR revalidation is 60 seconds — wait and refresh
- Check Sanity Studio → is the document published (not just draft)?
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` in env

### Dark mode flickers on load
- ThemeProvider reads `localStorage('theme')` on mount
- Ensure the script runs before paint (it does via ThemeProvider)

### External feed shows empty
- YouTube/Instagram/Substack tokens may have expired
- Check env vars in `.env.local` and Vercel dashboard
- These degrade gracefully — empty section, no crash

### Product detail page 404
- Verify slug exists in `src/data/product-details.ts`
- Product must also exist in Sanity with matching slug
