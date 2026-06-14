# Lesson: Never Break Existing Functionality

## Rule
Always verify that existing features still work after making changes.

## Checklist (run after every change)
```bash
npx tsc --noEmit   # TypeScript passes
npm run lint        # ESLint passes
npm test            # All tests pass
npm run build       # Production build succeeds
```

## Why
- Dual-persona architecture means changes can affect both /professional and /personal
- CMS mapping in lib/cms.ts affects all content — a type change there breaks everything
- CSS variable changes in globals.css cascade to both light and dark mode
- Fallback data shapes must match CMS mapping shapes exactly
