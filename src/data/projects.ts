import type { Project } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New project? → Add a new object anywhere in the array.
//   • Link optional. omit `link` for projects without a URL.
// ───────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Cisco SAL Intelligence & Analytics",
    category: "Product (ex-Cisco)",
    description:
      "Built the intelligence layer for Cisco's firewall ecosystem. Transformed raw syslog data, network telemetry, and security signals into proactive threat detection.",
    thinking:
      "The challenge: SOC teams drown in data but starve for insight. The approach: treat security telemetry as a product problem, not just an engineering one.",
    tags: ["Product Ownership", "Cisco Security", "Syslog", "Automation"],
  },
  {
    title: "Hobie",
    category: "Creator & Builder",
    description:
      "A cozy hobby-tracking studio. Roadmaps, quests, and focus timers that turn casual interest into real, visible progress. Vibe-coded end-to-end with Claude Code.",
    thinking:
      "Most hobby apps are either rigid course platforms or empty timers. Hobie sits in between — just enough structure to keep momentum, never enough to kill the joy.",
    tags: ["React 19", "Supabase", "TypeScript", "Tailwind v4", "PWA", "Vibe Coding"],
    link: "https://hobie-deploy.vercel.app",
  },
  {
    title: "The CTI Dispatch",
    category: "Publication",
    description:
      "A weekly publication of curated cyber threat intelligence. analysis, not just headlines. Special bulletins for high-impact events reaching security professionals.",
    thinking:
      "Most threat intel is noise. The goal: signal over volume, clarity over comprehensiveness.",
    tags: ["CTI", "Writing", "OSINT", "Analysis"],
    link: "https://medium.com/@harp6x",
  },
  {
    title: "SOC Workflow Automation",
    category: "Security Engineering",
    description:
      "Redesigned SOC workflows that improved efficiency by 65% and cut false positives by 40%. Built detection rules, playbooks, and analyst decision frameworks.",
    thinking:
      "Alert fatigue is a design problem. By rethinking the investigation pipeline, we gave analysts back their judgment.",
    tags: ["SIEM", "SOAR", "MITRE ATT&CK", "Detection Engineering"],
  },
  {
    title: "APT Threat Hunting Program",
    category: "Threat Intelligence",
    description:
      "Built and led proactive threat hunting operations that identified 7 threat groups before they could establish persistence.",
    thinking:
      "Hunting isn't about finding needles in haystacks. It's about understanding which haystacks to look in.",
    tags: ["APT", "Threat Hunting", "IOC Analysis", "Intelligence"],
  },
  {
    title: "Before Maps",
    category: "Founder & CEO",
    description:
      "Founded and run Before Maps — an exploration-first travel company building scouted, small-group journeys across India. Built the full-stack platform, product catalog, digital product line, and operations system from scratch. Every route personally field-tested before it opens.",
    thinking:
      "Travel is a product problem. Most operators sell destinations. Before Maps sells a standard of preparation — the route, the logistics, the safety margin, the story. We don't just show you where to go — we show you how to experience it.",
    tags: ["Next.js", "Sanity CMS", "Product Design", "Operations", "Founder"],
    link: "https://beforemaps.com",
  },
  {
    title: "Ms Paul Therapies",
    category: "Co-founder & Tech Lead",
    description:
      "Co-founded a therapy and wellness platform. Built the entire tech stack — Next.js, Sanity CMS, booking pipeline, content system. Designed the brand, client experience, and digital operations from scratch.",
    thinking:
      "Good therapy deserves good design. The trust a client feels starts before they walk in — it starts with how professional and human the digital experience feels.",
    tags: ["Next.js", "Sanity CMS", "Product Design", "Full-Stack", "Co-Founder"],
    link: "https://mspaultherapies.in",
  },
  {
    title: "Jimny Build Documentation",
    category: "Personal / Hobby",
    description:
      "Documenting the build process of a Suzuki Jimny. reliability mods, recovery systems, expedition preparation. Where engineering meets adventure.",
    thinking:
      "A vehicle is a system. You modify it the same way you harden a network. assess risks, build redundancy, test under pressure.",
    tags: ["Overlanding", "4x4", "Documentation", "Systems Thinking"],
  },
];

export default projects;
