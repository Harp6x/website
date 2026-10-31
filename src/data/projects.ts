import type { Project } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New project? → Add a new object anywhere in the array.
//   • Link optional: omit `link` for projects without a URL.
// ───────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "IndieRoam — Automotive Expeditions",
    category: "Co-Founder & Operator",
    description:
      "Building one of India's leading automotive expedition companies, specializing in premium self-drive expeditions, curated convoys, and managed road experiences across Ladakh and challenging Himalayan routes.",
    thinking:
      "Automotive expeditions demand precision operations. We engineer convoy management, communications, safety margins, and route intelligence as a cohesive operating system.",
    tags: ["Expedition Planning", "Operations", "Automotive", "Product Strategy", "Growth"],
  },
  {
    title: "BeforeMaps",
    category: "Founder",
    description:
      "Independent travel venture delivering curated group departures, private trips, customized itineraries, and travel experiences built entirely from firsthand exploration.",
    thinking:
      "Travel is a product problem. The real value lies in ground-truth scouting, thoughtful route design, and dependable logistics rather than generic aggregators.",
    tags: ["Travel Operations", "Itinerary Design", "Exploration", "Next.js", "Sanity CMS"],
    link: "https://beforemaps.com",
  },
  {
    title: "MSPaulTherapies",
    category: "Chief Technology Officer (CTO)",
    description:
      "Digital infrastructure and systems architecture for a clinical psychology and wellness platform, featuring automated scheduling, client intake, and publishing pipelines.",
    thinking:
      "Clinical technology must eliminate friction so therapists can focus entirely on care. The digital touchpoints must build immediate confidence and trust.",
    tags: ["Platform Architecture", "Next.js", "Sanity CMS", "Digital Systems", "CTO"],
    link: "https://mspaultherapies.in",
  },
  {
    title: "Cisco SAL Intelligence & Analytics",
    category: "Enterprise Product (ex-Cisco)",
    description:
      "Built the intelligence layer for Cisco's firewall ecosystem. Transformed raw syslog data, network telemetry, and security signals into proactive threat detection.",
    thinking:
      "The challenge: SOC teams drown in data but starve for insight. The approach: treat security telemetry as a product problem, not just an engineering one.",
    tags: ["Product Ownership", "Cisco Security", "Syslog", "Automation"],
  },
  {
    title: "The CTI Dispatch",
    category: "Publication & Research",
    description:
      "A weekly publication of curated cyber threat intelligence: analysis, not just headlines. Special bulletins for high-impact events reaching security professionals.",
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
    title: "Expedition Vehicle Preparation & Build",
    category: "Automotive Systems",
    description:
      "Documenting the build and field preparation of a Suzuki Jimny for high-altitude overland expeditions: recovery systems, electrical redundancy, and payload management.",
    thinking:
      "A vehicle is a system. You modify it the same way you harden a network: assess risks, build redundancy, test under pressure.",
    tags: ["Overlanding", "4x4", "Documentation", "Systems Thinking"],
  },
];

export default projects;
