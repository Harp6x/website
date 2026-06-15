import type { Skills } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New skill? → Append to the relevant array.
//   • New tool?  → Append to `tools`.
//   • New cert?  → Append to `credentials`.
// ───────────────────────────────────────────────────

const skills: Skills = {
  technical: [
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Vibe Coding",
    "AI Agents & Workflows",
    "Cybersecurity",
    "SOC Operations",
    "SIEM",
    "Threat Intelligence",
    "OSINT",
    "Malware Analysis",
    "Cisco Security",
    "Network Security",
    "Automation",
    "Product Ownership",
    "Dashboard Thinking",
    "Linux",
    "Python",
    "APIs",
  ],

  soft: [
    "Systems Thinking",
    "Founder Mindset",
    "Solo Execution",
    "Communication",
    "Emotional Intelligence",
    "Leadership",
    "Product Strategy",
    "Decision Under Uncertainty",
    "Pattern Recognition",
    "Storytelling",
    "Deep Focus",
    "Critical Thinking",
  ],

  tools: [
    // Cisco Platforms
    "Cisco Secure Cloud Analytics",
    "Cisco Defense Orchestrator",
    "Cisco Secure Analytics & Logging",
    // SIEM / EDR / Vuln
    "Stellar Cyber",
    "D3 Security",
    "SentinelOne",
    "Cybereason",
    "Rapid7",
    "Qualys",
    // Intel
    "Maltego",
    "Intelx",
    "MITRE ATT&CK",
    // AI / Dev Tools
    "Claude Code",
    "Windsurf",
    "Cursor",
    "GPT Pro",
    // Platforms
    "Sanity CMS",
    "Supabase",
    "Vercel",
    "Tailwind CSS",
    // Design / Analytics
    "Figma",
    "Google Looker Studio",
    // IDEs
    "VS Code",
  ],

  credentials: [
    { cert: "Certified Red Team Professional", org: "Pentester Academy" },
    { cert: "Cyber Threat Intelligence Analyst", org: "Cybereason" },
    { cert: "SOC Analyst", org: "D3 Security" },
    { cert: "Advanced InfoSec Diploma", org: "Innobuzz" },
    { cert: "Reverse Engineering Training", org: "U.S. DHS" },
    { cert: "Top 1%", org: "TryHackMe & Hack The Box" },
  ],
};

export default skills;
