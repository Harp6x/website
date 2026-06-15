import type { Chapter } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New job? → Add a new object at the TOP of this array.
//     Set `current: true` on the new entry and remove it
//     from the previous one.
//   • Leaving a job? → Change its `period` end date and
//     set `current: false` (or just remove the field).
// ───────────────────────────────────────────────────

const chapters: Chapter[] = [
  {
    era: "Latest",
    title: "Product Owner / Technical Lead",
    company: "Cisco",
    period: "2025 – June 2026",
    narrative:
      "Led SAL Intelligence and Analytics. built the decision layer behind Cisco's firewall products. Turned raw network telemetry into actionable intelligence.",
    highlights: [
      "Product owner of Cisco SAL Intelligence & Analytics",
      "Developed solutions for Cisco Firewall Products",
      "Bridged security operations with product strategy",
    ],
  },
  {
    era: "Parallel",
    title: "CEO & Founder",
    company: "Before Maps",
    period: "2023 – Present",
    narrative:
      "Founded and run Before Maps — an exploration-led travel company building scouted, small-group journeys across India. Designed the full product from route planning to the digital platform. Every journey is personally field-tested before it opens.",
    highlights: [
      "Built the full-stack platform (Next.js, Sanity CMS, Vercel)",
      "Designed product catalog, booking pipeline, and operations system",
      "Personally scouted every route — Himalayas, Northeast, Western Ghats",
      "Launched digital product line: travel guides, toolkits, and planning systems",
    ],
    current: true,
  },
  {
    era: "Parallel",
    title: "Co-founder & Tech Lead",
    company: "Ms Paul Therapies",
    period: "2024 – Present",
    narrative:
      "Co-founded a therapy and wellness platform. Built the entire tech stack — Next.js, Sanity CMS, booking pipeline, content system. Designed the brand, client experience, and digital operations from scratch.",
    highlights: [
      "Built full-stack platform (Next.js, Sanity CMS, Vercel)",
      "Designed CMS-driven content system with published/draft workflows",
      "Built client booking pipeline and payment integrations",
      "Shipped product catalog, blog, and workshop systems",
    ],
    current: true,
  },
  {
    era: "Parallel",
    title: "Creator & Builder",
    company: "Hobie",
    period: "2025 – Present",
    narrative:
      "Building a cozy hobby-tracking studio. Roadmaps, quests, and focus timers that turn casual interest into real, visible progress. Vibe-coded the entire thing with AI.",
    highlights: [
      "Built with Vite + React 19 + TypeScript + Supabase + Tailwind v4",
      "PWA-first design with offline support",
      "Vibe-coded end-to-end with Claude Code and Windsurf",
      "Deployed at hobie-deploy.vercel.app",
    ],
    current: true,
  },
  {
    era: "Parallel",
    title: "Writer & CTI Analyst",
    company: "The CTI Dispatch",
    period: "2025 – Present",
    narrative:
      "My own publication. Weekly curated CTI analysis, special bulletins for high-impact events. Building a voice in the intelligence community.",
    highlights: [
      "Weekly editions of curated threat intelligence",
      "Special bulletins on high-impact cyber events",
    ],
  },
  {
    era: "Growth",
    title: "Senior SOC Analyst & CTI Analyst",
    company: "Versprite Cybersecurity",
    period: "2022 – 2025",
    narrative:
      "Three years of deepening mastery. from alert triage to leading threat intelligence programs. The phase where I stopped reacting and started thinking strategically.",
    highlights: [
      "Led 6 CTI projects across 8 clients, identified 20 critical risks",
      "2000-endpoint defense, 15-min investigation, 30-sec response",
      "Improved SOC workflows by 65%, reduced false positives by 40%",
      "APT hunting. early detection of 7 threat groups",
      "10,000 security logs/month, 500 intrusions mitigated",
      "Published 4 blogs, 25 weekly newsletters",
    ],
  },
  {
    era: "Foundation",
    title: "Security Researcher",
    company: "Ministry of Defence of India",
    period: "2021",
    narrative:
      "Contributing to national cyber defense. Malware triage, Blue Team simulations against nation-state threats. The experience that made everything else feel possible.",
    highlights: [
      "5 cyber defense initiatives",
      "Identified 12 IOCs linked to APT actors",
      "Weekly intelligence briefings to defense leadership",
    ],
  },
  {
    era: "Origin",
    title: "InfoSec Analyst → Trainee",
    company: "Innefu Labs / Innobuzz",
    period: "2018 – 2020",
    narrative:
      "Where it started. Penetration testing, endpoint defense, vulnerability scanning across 1500 nodes. Learning the craft from the ground up.",
    highlights: [
      "Managed endpoint defense across 1500 nodes",
      "20 risk assessment reports, 90% patch compliance",
      "MITRE ATT&CK-based playbook implementation",
    ],
  },
];

export default chapters;
