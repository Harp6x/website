#!/usr/bin/env node
/**
 * Seed script: pushes all hardcoded portfolio content into Sanity CMS.
 * Run: node scripts/seed-sanity.mjs
 *
 * Requires SANITY_API_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
 * in .env.local (or environment).
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seed() {
  console.log("🌱 Seeding Sanity CMS...\n");

  // ─── Profile (singleton) ───
  console.log("  → Profile");
  await client.createOrReplace({
    _id: "profile-singleton",
    _type: "profile",
    name: "Uddip Ranjan Das",
    handle: "harp6x",
    email: "uddip9@gmail.com",
    location: "New Delhi, India",
    currentRole: "Product Owner",
    currentCompany: "(prev. Cisco)",
    focus: "Security & Product",
    tagline: "Building resilient systems.",
    subtitleLine1: "Product thinker. Cybersecurity engineer. Explorer.",
    subtitleLine2: "Six years in cybersecurity. From SOC analyst to threat intel to detection engineering to product owner at Cisco.",
    heroKeywords: "Security · Product · Systems",
    landingIntro: "Cybersecurity professional turned product owner. Explorer. Builder.",
    bio: [
      "I spent six years in cybersecurity, starting on the front lines of SOC operations, moving into threat intelligence and detection engineering, and eventually owning the product side at Cisco.",
      "At Cisco, I led the SAL Intelligence and Analytics product as Product Owner, turning raw network telemetry and security signals into decisions that actually matter for customers.",
      "The path was straightforward: understand the problem deeply first, then build the solution. That mindset took me from triaging alerts to defining what gets built next.",
    ],
    bioClosing: "Outside of work, I chase clarity on mountain roads, think about philosophy, build things with my hands, and try to live a life that still feels alive while doing serious work.",
    stats: [
      { _key: "s1", label: "Years in Cybersecurity", value: "6" },
      { _key: "s2", label: "As Product Owner", value: "1 yr" },
    ],
    socials: [
      { _key: "so1", label: "YouTube", href: "https://youtube.com/@harp6x" },
      { _key: "so2", label: "LinkedIn", href: "https://linkedin.com/in/harp6x" },
      { _key: "so3", label: "GitHub", href: "https://github.com/harp6x" },
      { _key: "so4", label: "Substack", href: "https://substack.com/@harp6x" },
    ],
    professionalEmails: ["uddip9@gmail.com", "uddipbuilds@gmail.com"],
    personalBrands: [
      { _key: "b1", key: "harp6x", instagram: "https://instagram.com/harp6x", youtube: "https://youtube.com/@harp6x", substack: "https://substack.com/@harp6x", email: "harp6x@gmail.com" },
      { _key: "b2", key: "theregoesuddip", instagram: "https://instagram.com/theregoesuddip", youtube: "https://youtube.com/@theregoesuddip", substack: "https://substack.com/@theregoesuddip", email: "theregoesuddip@gmail.com" },
      { _key: "b3", key: "jimnyruns", instagram: "https://instagram.com/jimnyruns", youtube: "https://youtube.com/@jimnyruns" },
    ],
    resumePath: "/Uddip_Ranjan_Das_CV.pdf",
  });

  // ─── Experience ───
  const experiences = [
    { era: "Latest", title: "Product Owner / Technical Lead", company: "Cisco", period: "2025 – June 2026", narrative: "Led SAL Intelligence and Analytics. built the decision layer behind Cisco's firewall products. Turned raw network telemetry into actionable intelligence.", highlights: ["Product owner of Cisco SAL Intelligence & Analytics", "Developed solutions for Cisco Firewall Products", "Bridged security operations with product strategy"], current: false, order: 1 },
    { era: "Parallel", title: "Writer & CTI Analyst", company: "The CTI Dispatch", period: "2025 – Present", narrative: "My own publication. Weekly curated CTI analysis, special bulletins for high-impact events. Building a voice in the intelligence community.", highlights: ["Weekly editions of curated threat intelligence", "Special bulletins on high-impact cyber events"], order: 2 },
    { era: "Growth", title: "Senior SOC Analyst & CTI Analyst", company: "Versprite Cybersecurity", period: "2022 – 2025", narrative: "Three years of deepening mastery. from alert triage to leading threat intelligence programs. The phase where I stopped reacting and started thinking strategically.", highlights: ["Led 6 CTI projects across 8 clients, identified 20 critical risks", "2000-endpoint defense, 15-min investigation, 30-sec response", "Improved SOC workflows by 65%, reduced false positives by 40%", "APT hunting. early detection of 7 threat groups", "10,000 security logs/month, 500 intrusions mitigated", "Published 4 blogs, 25 weekly newsletters"], order: 3 },
    { era: "Foundation", title: "Security Researcher", company: "Ministry of Defence of India", period: "2021", narrative: "Contributing to national cyber defense. Malware triage, Blue Team simulations against nation-state threats. The experience that made everything else feel possible.", highlights: ["5 cyber defense initiatives", "Identified 12 IOCs linked to APT actors", "Weekly intelligence briefings to defense leadership"], order: 4 },
    { era: "Origin", title: "InfoSec Analyst → Trainee", company: "Innefu Labs / Innobuzz", period: "2018 – 2020", narrative: "Where it started. Penetration testing, endpoint defense, vulnerability scanning across 1500 nodes. Learning the craft from the ground up.", highlights: ["Managed endpoint defense across 1500 nodes", "20 risk assessment reports, 90% patch compliance", "MITRE ATT&CK-based playbook implementation"], order: 5 },
  ];
  for (const [i, exp] of experiences.entries()) {
    console.log(`  → Experience: ${exp.title}`);
    await client.createOrReplace({
      _id: `experience-${i + 1}`,
      _type: "experience",
      ...exp,
      highlights: exp.highlights.map((h, j) => ({ ...{}, _key: `h${j}`, _type: "string" })),
    });
    // Sanity arrays of strings need to be plain strings, let me fix
  }

  // Actually let's use createOrReplace with proper string arrays
  // Sanity string arrays are just plain arrays, the _key is needed for object arrays
  // Re-seed experiences properly:
  for (const [i, exp] of experiences.entries()) {
    await client.createOrReplace({
      _id: `experience-${i + 1}`,
      _type: "experience",
      era: exp.era,
      title: exp.title,
      company: exp.company,
      period: exp.period,
      narrative: exp.narrative,
      highlights: exp.highlights,
      current: exp.current ?? false,
      order: exp.order,
    });
  }

  // ─── Projects ───
  const projects = [
    { title: "Cisco SAL Intelligence & Analytics", category: "Product", description: "Building the intelligence layer for Cisco's firewall ecosystem. Transforming raw syslog data, network telemetry, and security signals into proactive threat detection.", thinking: "The challenge: SOC teams drown in data but starve for insight. The approach: treat security telemetry as a product problem, not just an engineering one.", tags: ["Product Ownership", "Cisco Security", "Syslog", "Automation"] },
    { title: "The CTI Dispatch", category: "Publication", description: "A weekly publication of curated cyber threat intelligence. analysis, not just headlines. Special bulletins for high-impact events reaching security professionals.", thinking: "Most threat intel is noise. The goal: signal over volume, clarity over comprehensiveness.", tags: ["CTI", "Writing", "OSINT", "Analysis"], link: "https://medium.com/@harp6x" },
    { title: "SOC Workflow Automation", category: "Security Engineering", description: "Redesigned SOC workflows that improved efficiency by 65% and cut false positives by 40%. Built detection rules, playbooks, and analyst decision frameworks.", thinking: "Alert fatigue is a design problem. By rethinking the investigation pipeline, we gave analysts back their judgment.", tags: ["SIEM", "SOAR", "MITRE ATT&CK", "Detection Engineering"] },
    { title: "APT Threat Hunting Program", category: "Threat Intelligence", description: "Built and led proactive threat hunting operations that identified 7 threat groups before they could establish persistence.", thinking: "Hunting isn't about finding needles in haystacks. It's about understanding which haystacks to look in.", tags: ["APT", "Threat Hunting", "IOC Analysis", "Intelligence"] },
    { title: "Jimny Build Documentation", category: "Personal / Exploration", description: "Documenting the build process of a Suzuki Jimny. reliability mods, recovery systems, expedition preparation. Where engineering meets adventure.", thinking: "A vehicle is a system. You modify it the same way you harden a network. assess risks, build redundancy, test under pressure.", tags: ["Overlanding", "4x4", "Documentation", "Systems Thinking"] },
  ];
  for (const [i, proj] of projects.entries()) {
    console.log(`  → Project: ${proj.title}`);
    await client.createOrReplace({
      _id: `project-${i + 1}`,
      _type: "project",
      ...proj,
      order: i + 1,
    });
  }

  // ─── Skills (singleton) ───
  console.log("  → Skills");
  await client.createOrReplace({
    _id: "skills-singleton",
    _type: "skill",
    technical: ["Cybersecurity", "SOC Operations", "SIEM", "Threat Intelligence", "OSINT", "Malware Analysis", "Reverse Engineering", "Cisco Security", "Network Security", "Automation", "Syslog Analysis", "Product Ownership", "AI Workflows", "Dashboard Thinking", "Linux", "Python", "APIs", "Data Interpretation"],
    soft: ["Systems Thinking", "Communication", "Emotional Intelligence", "Leadership", "Product Strategy", "Adaptability", "Curiosity", "Pattern Recognition", "Storytelling", "Deep Focus", "Critical Thinking"],
    tools: ["Cisco Secure Cloud Analytics", "Cisco Defense Orchestrator", "Cisco Secure Analytics & Logging", "Stellar Cyber", "D3 Security", "SentinelOne", "Cybereason", "Rapid7", "Qualys", "Maltego", "Intelx", "MITRE ATT&CK", "GPT Pro", "Google Cloud Code", "Windsurf", "Cursor", "Figma", "Google Looker Studio", "VS Code", "WebStorm"],
    credentials: [
      { _key: "c1", cert: "Certified Red Team Professional", org: "Pentester Academy" },
      { _key: "c2", cert: "Cyber Threat Intelligence Analyst", org: "Cybereason" },
      { _key: "c3", cert: "SOC Analyst", org: "D3 Security" },
      { _key: "c4", cert: "Advanced InfoSec Diploma", org: "Innobuzz" },
      { _key: "c5", cert: "Reverse Engineering Training", org: "U.S. DHS" },
      { _key: "c6", cert: "Top 1%", org: "TryHackMe & Hack The Box" },
    ],
  });

  // ─── Beyond Work ───
  const beyondSections = [
    { emoji: "🧭", title: "Overlanding & 4x4", subtitle: "Where engineering meets the wild", body: ["Building a Suzuki Jimny from stock to expedition-ready. Reliability modifications, recovery gear, communication systems. solving the same kind of problems I solve in security, but in the dirt.", "There's something about a mountain pass at dawn that resets the way you think. The vehicle is a system. You harden it the same way you harden infrastructure. assess risk, build redundancy, test under pressure, and trust your preparation when things get uncertain."], mood: "Dusty roads. Cold mornings. Engine sounds echoing off valley walls." },
    { emoji: "⛰️", title: "Trekking & Exploration", subtitle: "Slow travel, honest places", body: ["I don't travel for leisure. I travel for perspective. Mountains, forests, solitude. The kind of places where your phone doesn't work and your mind finally does.", "Slow travel over luxury. Immersive experiences over Instagram moments. Walking for hours with nothing but the weight on your back and the quiet of your thoughts."], mood: "Thin air. Forest silence. The kind of tired that feels earned." },
    { emoji: "🎵", title: "Music & DJing", subtitle: "Nighttime creative energy", body: ["Music is how I think when I'm not working. Deep house, ambient, electronic. the kind that creates atmosphere rather than demanding attention.", "Mixing isn't just about beatmatching. It's about reading energy, building tension, knowing when to let silence do the work. A lot like managing a SOC, honestly."], mood: "Late nights. Warm frequencies. The space between tracks." },
    { emoji: "📖", title: "Philosophy & Mindset", subtitle: "Thinking about thinking", body: ["Stoicism, Buddhism, existentialism. not as academic exercises, but as operating systems for living. Discipline as freedom. Meaning as something you build, not something you find.", "Intentional living means deciding what matters before the world decides for you. It means building a life that holds up under pressure. not just a career."], mood: "Early mornings. Journaling. Questions without easy answers." },
  ];
  for (const [i, sec] of beyondSections.entries()) {
    console.log(`  → Beyond: ${sec.title}`);
    await client.createOrReplace({
      _id: `beyond-${i + 1}`,
      _type: "beyondWork",
      ...sec,
      order: i + 1,
    });
  }

  // ─── Philosophy ───
  const philosophies = [
    { title: "Systems over motivation", summary: "Motivation fades. Systems compound. Build the infrastructure for the life you want, and let it work even when you don't feel like it.", tags: ["discipline", "systems thinking"] },
    { title: "Slow compounding", summary: "The most meaningful things in life take time. Relationships, skills, trust, understanding. all of it compounds slowly if you stay consistent.", tags: ["patience", "long-term"] },
    { title: "Signal over noise", summary: "Most information is noise. Most opinions are noise. Most trends are noise. Curate ruthlessly. in content, in relationships, in how you spend attention.", tags: ["attention", "clarity"] },
    { title: "Build once, use forever", summary: "Whether it's a system, a habit, a skill, or a piece of infrastructure. invest upfront so it serves you indefinitely. Front-load the work.", tags: ["leverage", "efficiency"] },
    { title: "Freedom with structure", summary: "Real freedom isn't the absence of rules. It's having enough structure that you can be spontaneous without chaos. Discipline creates space.", tags: ["freedom", "discipline"] },
    { title: "Document, don't perform", summary: "The difference between personal branding and documentation is intent. One seeks validation. The other seeks clarity. Always choose documentation.", tags: ["authenticity", "self-awareness"] },
    { title: "Anti-average by default", summary: "Not contrarian for the sake of it. but questioning defaults. The average life is designed by committee. An intentional one is designed by you.", tags: ["intentionality", "identity"] },
    { title: "Human-first automation", summary: "Technology should amplify human capability, not replace human judgment. Automate the mundane so you can focus on what actually matters.", tags: ["technology", "humanity"] },
  ];
  for (const [i, p] of philosophies.entries()) {
    console.log(`  → Philosophy: ${p.title}`);
    await client.createOrReplace({
      _id: `philosophy-${i + 1}`,
      _type: "philosophy",
      ...p,
      order: i + 1,
    });
  }

  // ─── Journal Topics ───
  const journalTopics = [
    { title: "Why I Left the SOC", preview: "Five years defending networks taught me one thing: reactive security breaks at scale. This is the story of shifting from operator to builder.", category: "Cybersecurity" },
    { title: "Mountain Journals. Spiti Valley", preview: "Five days with no signal, no plan B, and the kind of silence that rewires how you think.", category: "Travel" },
    { title: "Discipline as an Operating System", preview: "Stoicism isn't philosophy for academics. It's firmware for anyone trying to build something real while the world demands you stay comfortable.", category: "Philosophy" },
    { title: "Building Systems for Life", preview: "The same principles that make good infrastructure. redundancy, observability, graceful degradation. apply to how you design a life.", category: "Systems Thinking" },
    { title: "The Jimny Build Log", preview: "Every modification tells a story about risk assessment, trade-offs, and trusting your preparation when the trail gets uncertain.", category: "Automotive" },
    { title: "Burnout, Meaning, and What Comes After", preview: "What happens when the career you built starts feeling like a cage. And what it takes to rebuild without burning everything down.", category: "Reflections" },
    { title: "AI Won't Replace You. But It Will Change What Matters", preview: "Thoughts on automation, product thinking, and why the human layer in security is more important than ever.", category: "AI & Automation" },
    { title: "Exploration as Practice", preview: "Why I don't travel for leisure. Slow travel, honest places, and what mountains teach you about the rest of your life.", category: "Exploration" },
  ];
  for (const [i, j] of journalTopics.entries()) {
    console.log(`  → Journal: ${j.title}`);
    await client.createOrReplace({
      _id: `journal-${i + 1}`,
      _type: "journalTopic",
      ...j,
      order: i + 1,
    });
  }

  // ─── Personal About (singleton) ───
  console.log("  → Personal About");
  await client.createOrReplace({
    _id: "personal-about-singleton",
    _type: "personalAbout",
    headline: "I'm not building an audience.",
    headlineAccent: "I'm documenting a transition.",
    paragraphs: [
      "From conventional systems into something more intentional. A life where work, creativity, exploration, and meaning aren't separate categories. they're integrated. This is an active, honest process, and I'm still in the middle of it.",
      "By day, I build security systems and products. Outside of that, I chase clarity on mountain roads, think about philosophy, build things with my hands, and try to live a life that still feels alive while doing serious work. I believe in systems over motivation, slow compounding over viral moments, and discipline as the highest form of freedom.",
    ],
    pillars: [
      { _key: "p1", label: "Approach", value: "Document everything. Perform nothing." },
      { _key: "p2", label: "Mindset", value: "Systems thinking applied to life." },
      { _key: "p3", label: "Direction", value: "Location independence. Creative freedom. Meaningful work." },
    ],
  });

  // ─── Life Pillars ───
  const lifePillars = [
    { brand: "Harp6x", key: "harp6x", theme: "Systems · Technology · AI · Cybersecurity · Experimentation", description: "The primary personal brand. where technology, philosophy, and intentional living intersect. Shortform on Instagram, longform on YouTube and Substack.", contentPillars: ["Shortform: Instagram", "Longform: YouTube", "Blog: Substack"] },
    { brand: "There Goes Uddip", key: "theregoesuddip", theme: "Travel · Philosophy · Reflection · Exploration", description: "The travel and reflection brand. Slow travel, mountain roads, honest places, and the kind of experiences that change how you see things.", contentPillars: ["Shortform: Instagram", "Longform: YouTube", "Blog: Substack"] },
    { brand: "Jimny Runs", key: "jimnyruns", theme: "Overlanding · Vehicles · Mountains · Exploration", description: "Dedicated automotive and adventure platform. Jimny builds, overlanding, off-road trails, and expedition-style storytelling.", contentPillars: ["Shortform: Instagram", "Longform: YouTube"] },
  ];
  for (const [i, lp] of lifePillars.entries()) {
    console.log(`  → Life Pillar: ${lp.brand}`);
    await client.createOrReplace({
      _id: `life-pillar-${i + 1}`,
      _type: "lifePillar",
      ...lp,
      order: i + 1,
    });
  }

  console.log("\n✅ Seeding complete! All content is now in Sanity CMS.");
  console.log("   Open /studio to edit any content.");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
