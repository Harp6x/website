import type { Project } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New project? → Add a new object anywhere in the array.
//   • Link optional. omit `link` for projects without a URL.
// ───────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Cisco SAL Intelligence & Analytics",
    category: "Product",
    description:
      "Building the intelligence layer for Cisco's firewall ecosystem. Transforming raw syslog data, network telemetry, and security signals into proactive threat detection.",
    thinking:
      "The challenge: SOC teams drown in data but starve for insight. The approach: treat security telemetry as a product problem, not just an engineering one.",
    tags: ["Product Ownership", "Cisco Security", "Syslog", "Automation"],
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
    title: "Jimny Build Documentation",
    category: "Personal / Exploration",
    description:
      "Documenting the build process of a Suzuki Jimny. reliability mods, recovery systems, expedition preparation. Where engineering meets adventure.",
    thinking:
      "A vehicle is a system. You modify it the same way you harden a network. assess risks, build redundancy, test under pressure.",
    tags: ["Overlanding", "4x4", "Documentation", "Systems Thinking"],
  },
];

export default projects;
