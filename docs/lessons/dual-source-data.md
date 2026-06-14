# Lesson: Dual-Source Data Pattern

## Rule
Every CMS fetch must have a static fallback. The site must never show blank sections.

## How It Works
1. `lib/cms.ts` tries Sanity first
2. If Sanity fails or returns empty → use fallback from `data/*.ts`
3. Components always receive the same type regardless of data source

## Common Mistakes
- Adding a new CMS field without updating the fallback data → blank section if CMS is empty
- Changing the app type in `data/types.ts` without updating the CMS mapping in `lib/cms.ts` → type error
- Calling Sanity directly from a component instead of going through `lib/cms.ts` → no fallback protection
- Forgetting to update `CMS-GUIDE.md` when adding new CMS fields
