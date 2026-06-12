# Coding Taste — Uddip Ranjan Das (@harp6x)

## Stack Preferences

- **Framework**: Next.js (App Router, latest version — currently v16). Never Pages Router.
- **Language**: TypeScript. Always. No plain JavaScript in production.
- **Styling**: Tailwind CSS v4. No CSS modules, no styled-components, no Sass.
- **Animation**: Framer Motion. Prefer `motion.div` with `initial`/`animate`/`transition` pattern.
- **CMS**: Sanity (headless). Embedded Studio at `/studio`. GROQ for queries.
- **Icons**: Lucide React for UI icons. `react-icons/si` for brand icons (Instagram, YouTube, etc.).
- **Deployment**: Vercel. Auto-deploy from GitHub `main` branch. Always include `@vercel/analytics` and `@vercel/speed-insights`.
- **Package Manager**: npm (not yarn, not pnpm).
- **Version Control**: Git + GitHub via SSH. Org: `Harp6x`.

## Project Structure

- Use Next.js App Router convention: `src/app/` for routes, `src/components/` for components.
- Keep data layer separate: `src/data/` for static fallbacks + TypeScript types.
- CMS layer in `src/sanity/` — `client.ts`, `queries.ts`, `schemas/`.
- Utility functions in `src/lib/` — one file per concern (`cms.ts`, `youtube.ts`, `instagram.ts`).
- No `utils/` folder. No barrel exports. No `index.ts` re-exports.

## Component Patterns

- One component per file. File name matches export name (`Hero.tsx` → `export default function Hero`).
- Props via interface, not inline types. Name it `Props`.
- Use `"use client"` only when interactivity is needed (scroll listeners, useState, animations).
- Default to server components. Fetch data in page-level server components, pass as props.
- Variant pattern: components accept `variant: "professional" | "personal"` for dual-mode sites.

## Data Architecture

- CMS-first with static fallbacks. Every `fetchX()` function tries Sanity first, falls back to `src/data/` files.
- TypeScript interfaces in `src/data/types.ts` — single source of truth for data shapes.
- GROQ queries return typed interfaces. Dereference assets inline: `image.asset->url`.
- ISR with `export const revalidate = 60` on data-driven pages.

## Styling Conventions

- Colors via CSS custom properties (`--text-primary`, `--bg-card`, `--accent`), not hardcoded hex in components.
- Exception: accent color `#d97706` (amber) is the primary brand color, sometimes used directly.
- Personal/creative pages use earthy warm tones (`--personal-accent: #c2703a`).
- Professional pages use the default dark/neutral palette.
- Dark mode support via CSS variable swaps in `globals.css`, not Tailwind `dark:` prefix.
- Spacing: Tailwind utilities. No custom spacing scale.
- Typography: `font-mono` for labels/metadata, default sans for body, `font-serif-heading` for personal page headings.
- Responsive: mobile-first. Breakpoints: `md:` (768px) and `lg:` (1024px) primarily.

## Animation Style

- Entrance animations: fade up (`opacity: 0, y: 20` → `opacity: 1, y: 0`).
- Staggered delays: hero elements load sequentially (1.2s, 1.3s, 1.5s, 1.7s, etc.).
- Scroll-triggered reveals via `AnimatedSection` wrapper component.
- Hover transitions: `transition-all duration-300` or `transition-colors duration-300`.
- No heavy animations. Subtle, purposeful motion only.

## Sanity CMS Patterns

- Schemas use `defineType` + `defineField` from `sanity`.
- File uploads for documents (PDFs, resumes) — type `file` with `options: { accept: "application/pdf" }`.
- Image uploads — type `image` with `hotspot: true`.
- Preview configuration on every schema.
- Singleton documents (profile, settings) fetched with `*[_type == "profile"][0]`.
- Ordered collections use `order` field + `| order(order asc)` in GROQ.
- Embedded Studio config in `src/sanity/studio.config.ts`.

## Code Style

- No semicolons (rely on AST). Actually — semicolons ARE used consistently.
- Double quotes for JSX attributes and imports.
- Arrow functions for inline handlers. Named `function` declarations for components.
- Destructure props in function signature: `function Hero({ variant, profile }: Props)`.
- Conditional rendering: `&&` for show/hide, ternary for A/B variants.
- No `else` blocks when early return is possible.
- Template literals over string concatenation.
- `className` strings: static classes first, then conditional with template literals or ternary.

## Naming

- Components: PascalCase (`CrossPageNudge.tsx`, `YouTubeFeed.tsx`).
- Files match component names exactly.
- Hooks: none custom so far — use React built-ins directly.
- Data files: camelCase (`profile.ts`, `experience.ts`).
- Sanity schemas: camelCase type names (`blogPost`, `beyondWork`, `lifePillar`).
- CSS variables: kebab-case (`--text-primary`, `--bg-card`).
- Git branches: `main` only (no feature branches in personal projects).

## Git Conventions

- Commit messages: conventional commits format (`feat:`, `fix:`, `chore:`).
- Multi-line commit bodies for significant changes.
- Force-push only when re-initializing repos (not for regular work).
- Commit author: `Harp6x` / `Harp6x@users.noreply.github.com`.

## SEO & Performance

- Metadata via Next.js `export const metadata` object.
- Always include: title, description, Open Graph, Twitter cards.
- `sitemap.xml` generation for all routes.
- JSON-LD structured data where applicable.
- Image optimization via Next.js `<Image>` component with `remotePatterns` in `next.config.ts`.
- Vercel Analytics + Speed Insights on every deployed project.

## Projects Built

1. **Portfolio** (`/Users/udddas/Documents/portfolio`) — Personal website with professional/personal dual-mode. Next.js 16 + Sanity + Framer Motion + Tailwind.
2. **MissPaulTherapies** (`/Users/udddas/Documents/code/miss-paul-therapies`) — Therapy practice website. Next.js 16 + Sanity + Cal.com booking + Razorpay payments.
3. **BeforeMaps** (`/Users/udddas/CascadeProjects/beforemaps`) — Travel/journey platform. Next.js 16 + Sanity + Resend emails + image galleries.
4. **NPE Code V1** (`/Users/udddas/Documents/NPE/Code V1`) — NAT Pool Exhaustion analyst console. Next.js + Recharts + simulation engine + chatbot.
5. **Rio Travels** (`/Users/udddas/Downloads/Riotravelnext-main`) — Travel agency site. Next.js 15.5 + Firebase + EmailJS + programmatic SEO (98 locality pages).

## Things I Avoid

- No CSS-in-JS (styled-components, Emotion).
- No Redux or Zustand (prefer React Context when global state is needed).
- No GraphQL (GROQ or REST is enough).
- No class components.
- No `any` type unless absolutely necessary.
- No `console.log` left in production code.
- No inline styles unless `writingMode` or dynamic values that Tailwind can't handle.
- No barrel exports or `index.ts` re-export files.
- No excessive abstraction — prefer readable, flat component code over deep nesting.

## Design Philosophy

- Minimal, purposeful UI. White space is a feature.
- Dark mode as first-class. Both themes must look intentional.
- Grid/topo backgrounds for texture, not decoration.
- Brand color `#d97706` (amber) used sparingly — CTAs and accents only.
- Earthy tones for personal/creative content, cool/neutral for professional.
- Typography-driven design. Let the text breathe.
- Interactive elements must have clear hover/focus states.
- Mobile-first but desktop is the primary experience for portfolio sites.
