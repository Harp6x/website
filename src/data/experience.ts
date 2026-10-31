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
    era: "Current",
    title: "Co-Founder",
    company: "IndieRoam",
    period: "2024 – Present",
    narrative:
      "Co-founded IndieRoam with a long-term ambition to build one of India's leading automotive expedition companies. Focused on premium self-drive expeditions, curated convoys, and managed road experiences. Driving business strategy, product development, technology, operations, marketing, and growth.",
    highlights: [
      "Directing company vision, business strategy, product development, technology, and growth",
      "Focus on premium self-drive expeditions, curated convoys, and managed road experiences",
      "Planned and executed complex automotive expeditions, including Ladakh self-drive convoys",
      "Designed expedition operating systems: convoy logistics, communications, and emergency safety margins",
      "Long-term ambition to establish a trusted, recognizable overland expedition brand in India",
    ],
    current: true,
  },
  {
    era: "Leadership",
    title: "Chief Technology Officer (CTO)",
    company: "MSPaulTherapies",
    period: "2024 – Present",
    narrative:
      "Directing technology leadership and digital systems for a modern clinical psychology and wellness platform. Architected the digital infrastructure, client booking pipeline, and practice management workflows.",
    highlights: [
      "Leading technology strategy, platform architecture, and digital operations",
      "Built automated client intake, booking pipeline, and secure payment integrations",
      "Architected CMS-driven system for clinical services, workshops, and educational resources",
      "Engineered internal operational workflows to scale practice efficiency",
    ],
  },
  {
    era: "Ventures",
    title: "Founder",
    company: "BeforeMaps",
    period: "2023 – Present",
    narrative:
      "Independent travel venture focused on personally explored destinations, curated group departures, private trips, customized itineraries, and travel experiences across India.",
    highlights: [
      "Curating and executing group departures, private trips, and customized itineraries",
      "Personally exploring and scouting destinations, routes, and local hospitality networks",
      "Built full-stack digital platform, route catalog, and direct booking systems",
      "Managing on-ground trip operations, contingency planning, and traveler experience",
    ],
  },
  {
    era: "Enterprise",
    title: "Product Owner / Technical Lead",
    company: "Cisco",
    period: "2025 – June 2026",
    narrative:
      "Led SAL Intelligence and Analytics, building the decision layer behind Cisco's firewall products. Turned raw network telemetry and security signals into actionable intelligence.",
    highlights: [
      "Product Owner of Cisco SAL Intelligence & Analytics",
      "Developed solutions for Cisco Firewall products",
      "Bridged security operations with product strategy",
    ],
  },
  {
    era: "Research",
    title: "Writer & CTI Analyst",
    company: "The CTI Dispatch",
    period: "2025 – Present",
    narrative:
      "Independent publication providing weekly curated cyber threat intelligence analysis and tactical bulletins for high-impact security events.",
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
      "Three years of deepening mastery, from alert triage to leading threat intelligence programs. The phase where I stopped reacting and started thinking strategically.",
    highlights: [
      "Led 6 CTI projects across 8 clients, identified 20 critical risks",
      "2,000-endpoint defense, 15-min investigation, 30-sec response",
      "Improved SOC workflows by 65%, reduced false positives by 40%",
      "APT hunting, early detection of 7 threat groups",
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
      "Contributing to national cyber defense: malware triage, Blue Team defensive simulations against advanced threats.",
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
      "Foundational cybersecurity practice: penetration testing, endpoint defense, vulnerability scanning across 1500 nodes. Learning the craft from the ground up.",
    highlights: [
      "Managed endpoint defense across 1500 nodes",
      "20 risk assessment reports, 90% patch compliance",
      "MITRE ATT&CK-based playbook implementation",
    ],
  },
];

export default chapters;
