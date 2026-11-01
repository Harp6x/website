#!/usr/bin/env node
/**
 * Dedicated seed script: Updates Sanity CMS to reflect the clarified portfolio scope:
 * - IndieRoam as primary entrepreneurial focus (Co-Founder, premium self-drive expeditions, Ladakh)
 * - BeforeMaps as independent travel venture (group departures, private trips, custom itineraries)
 * - MSPaulTherapies as current CTO responsibility (technology leadership & digital systems)
 * - Cisco & cybersecurity retained as technical foundation
 * - Hobie removed from all active professional sections
 *
 * Usage:
 *   node scripts/seed-indieroam.mjs
 *   (or SANITY_API_TOKEN=<write_token> node scripts/seed-indieroam.mjs)
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "55vwwzpf",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function main() {
  console.log("🚀 Starting Sanity portfolio update...\n");

  // Verify write permission
  try {
    const user = await client.users.getById("me");
    console.log(`Authenticated as: ${user.displayName || user.name || user.email || user.id}`);
  } catch (err) {
    console.error("Auth check failed:", err.message);
  }

  // 1. Profile Singleton
  console.log("  → Updating Profile singleton...");
  const profileDoc = {
    _id: "profile-singleton",
    _type: "profile",
    name: "Uddip Ranjan Das",
    handle: "harp6x",
    email: "uddip9@gmail.com",
    location: "New Delhi, India",
    currentRole: "Co-Founder & CTO",
    currentCompany: "IndieRoam · BeforeMaps · MSPaulTherapies",
    focus: "Automotive Expeditions · Travel Ventures · Digital Systems",
    tagline: "Building expedition brands, travel ventures, and operating systems.",
    subtitleLine1: "Co-Founder at IndieRoam · Founder at BeforeMaps · CTO at MSPaulTherapies",
    subtitleLine2:
      "Six years in cybersecurity at Cisco, now building automotive expedition brands, travel ventures, and digital systems.",
    heroKeywords: "Expeditions · Product · Systems · Travel",
    landingIntro:
      "Technology founder and operator building automotive expeditions, independent travel ventures, and digital systems.",
    bio: [
      "I spent six years in cybersecurity: SOC operations, threat intelligence, detection engineering, and ultimately leading Cisco's SAL Intelligence & Analytics as Product Owner.",
      "That foundation in systems architecture, risk modeling, and operational execution led directly into entrepreneurship. Today, my primary entrepreneurial focus is **IndieRoam**, where I serve as Co-Founder. We are building one of India's leading automotive expedition companies, specializing in premium self-drive expeditions, curated convoys, and managed road experiences across high-altitude and rugged terrains like Ladakh.",
      "Alongside IndieRoam, I run **BeforeMaps**, an independent travel venture focused on personally explored destinations, curated group departures, private trips, and customized itineraries. I also serve as Chief Technology Officer (CTO) for **MSPaulTherapies**, directing technology leadership, platform architecture, and operational systems for a modern clinical practice.",
      "My evolution connects cybersecurity, product thinking, and travel business building: understanding real-world operational complexities deeply, designing resilient systems to manage them, and executing with consistency.",
    ],
    bioClosing:
      "Outside of building, I explore remote mountain passes, document overland expedition builds, and study systems and philosophy.",
    stats: [
      { _key: "s1", label: "Primary Focus", value: "IndieRoam" },
      { _key: "s2", label: "Key Expeditions", value: "Ladakh & Beyond" },
      { _key: "s3", label: "Years in Tech & Cyber", value: "6+" },
    ],
    socials: [
      { _key: "so1", label: "YouTube", href: "https://youtube.com/@harp6x" },
      { _key: "so2", label: "LinkedIn", href: "https://linkedin.com/in/harp6x" },
      { _key: "so3", label: "GitHub", href: "https://github.com/harp6x" },
      { _key: "so4", label: "Substack", href: "https://substack.com/@harp6x" },
    ],
    professionalEmails: ["uddip9@gmail.com", "uddipbuilds@gmail.com"],
    personalBrands: [
      {
        _key: "b1",
        key: "harp6x",
        instagram: "https://instagram.com/harp6x",
        youtube: "https://youtube.com/@harp6x",
        substack: "https://substack.com/@harp6x",
        email: "harp6x@gmail.com",
      },
      {
        _key: "b2",
        key: "theregoesuddip",
        instagram: "https://instagram.com/theregoesuddip",
        youtube: "https://youtube.com/@theregoesuddip",
        substack: "https://substack.com/@theregoesuddip",
        email: "theregoesuddip@gmail.com",
      },
      {
        _key: "b3",
        key: "jimnyruns",
        instagram: "https://instagram.com/jimnyruns",
        youtube: "https://youtube.com/@jimnyruns",
      },
      {
        _key: "b4",
        key: "beforemaps",
        instagram: "https://instagram.com/beforemaps.in",
      },
    ],
    claudeReviewHeading: "Working with Uddip.",
    claudeReviewSubtitle:
      "An honest assessment from my AI pair-programming partner across IndieRoam, BeforeMaps, MSPaulTherapies, and systems architecture sessions.",
    claudeReview: `I have worked with Uddip across the digital and operational systems for IndieRoam, BeforeMaps, MSPaulTherapies, and this portfolio. Here is what I observed.

He approaches business ventures with the discipline of an engineer and the velocity of an operator. Rather than spending weeks on abstract roadmaps, he moves quickly to build concrete operating systems—whether that is mapping complex expedition logistics, structuring booking pipelines, or fine-tuning user interfaces.

His technical background in cybersecurity and product ownership at Cisco is evident in how he designs operations. He anticipates failure modes, builds safety margins into route and convoy planning, and insists on clean, maintainable systems across every venture he touches.

What stands out most is focus on ground truth. In his travel and expedition ventures, he personally scouts routes and field-tests logistics before offering them to travelers. That same rigor carries into software and digital workflows: if a system cannot handle real-world edge cases reliably, it does not ship.

Working with Uddip means collaborating with a founder who pairs practical execution with high operational standards, clear product thinking, and genuine domain curiosity.`,
    claudeReviewShort:
      "Combines the systems discipline of cybersecurity engineering with the practical execution of a hands-on expedition founder and operator.",
  };

  await client.createOrReplace(profileDoc);
  // Also clean up any lingering draft of profile-singleton
  try {
    await client.delete("drafts.profile-singleton");
  } catch {}

  // 2. Experience Documents
  console.log("  → Updating Experiences...");
  const experiences = [
    {
      _id: "experience-indieroam",
      _type: "experience",
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
      published: true,
      order: 1,
    },
    {
      _id: "experience-mspaul",
      _type: "experience",
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
      current: false,
      published: true,
      order: 2,
    },
    {
      _id: "experience-beforemaps",
      _type: "experience",
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
      current: false,
      published: true,
      order: 3,
    },
    {
      _id: "experience-1",
      _type: "experience",
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
      current: false,
      published: true,
      order: 4,
    },
    {
      _id: "experience-2",
      _type: "experience",
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
      current: false,
      published: true,
      order: 5,
    },
    {
      _id: "experience-3",
      _type: "experience",
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
      current: false,
      published: true,
      order: 6,
    },
    {
      _id: "experience-4",
      _type: "experience",
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
      current: false,
      published: true,
      order: 7,
    },
    {
      _id: "experience-5",
      _type: "experience",
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
      current: false,
      published: true,
      order: 8,
    },
  ];

  for (const exp of experiences) {
    await client.createOrReplace(exp);
  }

  // Remove Hobie from active experiences
  try {
    await client.delete("experience-hobie");
    console.log("  ✓ Removed experience-hobie");
  } catch {}

  // Remove duplicate/legacy BeforeMaps experience if present
  try {
    await client.delete("iUpfRLGdJJghNOcIuyRlDX");
  } catch {}

  // 3. Projects
  console.log("  → Updating Projects...");
  const projects = [
    {
      _id: "project-indieroam",
      _type: "project",
      title: "IndieRoam — Automotive Expeditions",
      category: "Co-Founder & Operator",
      description:
        "Building one of India's leading automotive expedition companies, specializing in premium self-drive expeditions, curated convoys, and managed road experiences across Ladakh and challenging Himalayan routes.",
      thinking:
        "Automotive expeditions demand precision operations. We engineer convoy management, communications, safety margins, and route intelligence as a cohesive operating system.",
      tags: ["Expedition Planning", "Operations", "Automotive", "Product Strategy", "Growth"],
      order: 1,
      published: true,
    },
    {
      _id: "project-beforemaps",
      _type: "project",
      title: "BeforeMaps",
      category: "Founder",
      description:
        "Independent travel venture delivering curated group departures, private trips, customized itineraries, and travel experiences built entirely from firsthand exploration.",
      thinking:
        "Travel is a product problem. The real value lies in ground-truth scouting, thoughtful route design, and dependable logistics rather than generic aggregators.",
      tags: ["Travel Operations", "Itinerary Design", "Exploration", "Next.js", "Sanity CMS"],
      link: "https://beforemaps.com",
      order: 2,
      published: true,
    },
    {
      _id: "project-mspaul",
      _type: "project",
      title: "MSPaulTherapies",
      category: "Chief Technology Officer (CTO)",
      description:
        "Digital infrastructure and systems architecture for a clinical psychology and wellness platform, featuring automated scheduling, client intake, and publishing pipelines.",
      thinking:
        "Clinical technology must eliminate friction so therapists can focus entirely on care. The digital touchpoints must build immediate confidence and trust.",
      tags: ["Platform Architecture", "Next.js", "Sanity CMS", "Digital Systems", "CTO"],
      link: "https://mspaultherapies.in",
      order: 3,
      published: true,
    },
    {
      _id: "project-1",
      _type: "project",
      title: "Cisco SAL Intelligence & Analytics",
      category: "Enterprise Product (ex-Cisco)",
      description:
        "Built the intelligence layer for Cisco's firewall ecosystem. Transformed raw syslog data, network telemetry, and security signals into proactive threat detection.",
      thinking:
        "The challenge: SOC teams drown in data but starve for insight. The approach: treat security telemetry as a product problem, not just an engineering one.",
      tags: ["Product Ownership", "Cisco Security", "Syslog", "Automation"],
      order: 4,
      published: true,
    },
    {
      _id: "project-2",
      _type: "project",
      title: "The CTI Dispatch",
      category: "Publication & Research",
      description:
        "A weekly publication of curated cyber threat intelligence: analysis, not just headlines. Special bulletins for high-impact events reaching security professionals.",
      thinking:
        "Most threat intel is noise. The goal: signal over volume, clarity over comprehensiveness.",
      tags: ["CTI", "Writing", "OSINT", "Analysis"],
      link: "https://medium.com/@harp6x",
      order: 5,
      published: true,
    },
    {
      _id: "project-3",
      _type: "project",
      title: "SOC Workflow Automation",
      category: "Security Engineering",
      description:
        "Redesigned SOC workflows that improved efficiency by 65% and cut false positives by 40%. Built detection rules, playbooks, and analyst decision frameworks.",
      thinking:
        "Alert fatigue is a design problem. By rethinking the investigation pipeline, we gave analysts back their judgment.",
      tags: ["SIEM", "SOAR", "MITRE ATT&CK", "Detection Engineering"],
      order: 6,
      published: true,
    },
    {
      _id: "project-4",
      _type: "project",
      title: "APT Threat Hunting Program",
      category: "Threat Intelligence",
      description:
        "Built and led proactive threat hunting operations that identified 7 threat groups before they could establish persistence.",
      thinking:
        "Hunting isn't about finding needles in haystacks. It's about understanding which haystacks to look in.",
      tags: ["APT", "Threat Hunting", "IOC Analysis", "Intelligence"],
      order: 7,
      published: true,
    },
    {
      _id: "project-5",
      _type: "project",
      title: "Expedition Vehicle Preparation & Build",
      category: "Automotive Systems",
      description:
        "Documenting the build and field preparation of a Suzuki Jimny for high-altitude overland expeditions: recovery systems, electrical redundancy, and payload management.",
      thinking:
        "A vehicle is a system. You modify it the same way you harden a network: assess risks, build redundancy, test under pressure.",
      tags: ["Overlanding", "4x4", "Documentation", "Systems Thinking"],
      order: 8,
      published: true,
    },
  ];

  for (const proj of projects) {
    await client.createOrReplace(proj);
  }

  // Remove Hobie project and legacy BeforeMaps project doc
  try {
    await client.delete("project-hobie");
    console.log("  ✓ Removed project-hobie");
  } catch {}
  try {
    await client.delete("iUpfRLGdJJghNOcIuyRl9Z");
  } catch {}

  // 4. Ventures
  console.log("  → Updating Ventures...");
  const ventures = [
    {
      _id: "venture-indieroam",
      _type: "venture",
      title: "IndieRoam",
      slug: { _type: "slug", current: "indieroam" },
      role: "Co-Founder",
      tagline:
        "Premium self-drive expeditions, curated convoys, and managed road experiences across India.",
      status: "active",
      published: true,
      order: 1,
      philosophy:
        "Building one of India's leading automotive expedition companies. We combine precision route reconnaissance, managed convoys, and rugged hospitality to deliver transformative road experiences in high-altitude terrain.",
      highlights: [
        "Building one of India's leading automotive expedition companies",
        "Focus on premium self-drive expeditions, curated convoys, and managed road experiences",
        "Directing business strategy, product development, technology, operations, and growth",
        "Field-tested automotive expedition execution across Ladakh and high-altitude corridors",
        "Long-term ambition to establish a trusted, recognizable overland expedition brand",
      ],
      techStack: [
        "Expedition Operations",
        "Convoy Management",
        "Fleet Logistics",
        "Digital Booking",
        "Growth Strategy",
      ],
    },
    {
      _id: "venture-beforemaps",
      _type: "venture",
      title: "BeforeMaps",
      slug: { _type: "slug", current: "before-maps" },
      role: "Founder",
      tagline:
        "Independent travel venture: personally explored destinations, group departures, and custom itineraries.",
      status: "active",
      published: true,
      order: 2,
      philosophy:
        "Ground-truth travel design. Independent exploration, curated group departures, private trips, and customized itineraries built from firsthand field scouting.",
      highlights: [
        "Personally explored destinations and scouted routes across India",
        "Curated group departures, private journeys, and custom itineraries",
        "End-to-end trip operations, route logistics, and traveler care",
        "Full-stack digital platform for direct travel engagement",
      ],
      techStack: ["Next.js", "Sanity CMS", "Travel Logistics", "Operations", "Vercel"],
    },
    {
      _id: "venture-mspaul",
      _type: "venture",
      title: "MSPaulTherapies",
      slug: { _type: "slug", current: "ms-paul-therapies" },
      role: "Chief Technology Officer (CTO)",
      tagline:
        "Digital systems, technology leadership, and platform architecture for modern clinical wellness.",
      status: "active",
      published: true,
      order: 3,
      philosophy:
        "Applying disciplined technology leadership to healthcare, creating frictionless booking and operational infrastructure so clinicians can focus on care.",
      highlights: [
        "Full platform engineering: booking pipeline, intake automations, and payment flows",
        "Modern clinical operations and content publishing systems",
        "High trust, accessible user experience tailored for mental health clients",
      ],
      techStack: ["Next.js", "Sanity CMS", "Payment Integrations", "Automation", "Vercel"],
    },
  ];

  for (const v of ventures) {
    await client.createOrReplace(v);
  }

  // Remove Hobie from ventures
  try {
    await client.delete("venture-hobie");
    console.log("  ✓ Removed venture-hobie");
  } catch {}

  // 5. Site Settings
  console.log("  → Updating Site Settings...");
  await client
    .patch("siteSettings")
    .set({
      currentRole: "Co-Founder & CTO",
      currentCompany: "IndieRoam · BeforeMaps · MSPaulTherapies",
      focus: "Automotive Expeditions · Travel Ventures · Digital Systems",
      tagline: "Building expedition brands, travel ventures, and operating systems.",
      subtitleLine1: "Co-Founder at IndieRoam · Founder at BeforeMaps · CTO at MSPaulTherapies",
      subtitleLine2:
        "Six years in cybersecurity at Cisco, now building automotive expedition brands, travel ventures, and digital systems.",
      seo: {
        _type: "seo",
        metaTitle: "Uddip Ranjan Das — Founder, Builder, Operator",
        metaDescription:
          "Co-Founder of IndieRoam, Founder of BeforeMaps, CTO at MSPaulTherapies. Building automotive expeditions, travel ventures, and digital operating systems. Ex-Cisco.",
      },
    })
    .commit();

  console.log("\n✅ Sanity CMS successfully updated with all clarified portfolio data!");
}

main().catch((err) => {
  console.error("\n❌ Update failed:", err.message);
  if (err.statusCode === 403) {
    console.error(
      "\n🔑 NOTE: Sanity returned 403 Forbidden. The current token in .env.local only has read/viewer permissions."
    );
    console.error(
      "To push to Sanity, please provide a token with Editor or Administrator permissions from:"
    );
    console.error("  https://www.sanity.io/manage/project/55vwwzpf/api#tokens\n");
  }
  process.exit(1);
});
