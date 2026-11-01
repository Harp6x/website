import type { Venture } from "./types";

const ventures: Venture[] = [
  {
    slug: "indieroam",
    title: "IndieRoam",
    tagline:
      "Premium self-drive expeditions, curated convoys, and managed road experiences across India.",
    role: "Co-Founder",
    philosophy:
      "Building one of India's leading automotive expedition companies. We combine precision route reconnaissance, managed convoys, and rugged hospitality to deliver transformative road experiences in high-altitude terrain.",
    highlights: [
      "Building one of India's leading automotive expedition companies",
      "Focus on premium self-drive expeditions, curated convoys, and managed road experiences",
      "Directing business strategy, product development, technology, operations, and growth",
      "Field-tested automotive expedition execution across Ladakh and high-altitude mountain corridors",
      "Long-term ambition to establish a trusted, recognizable overland expedition brand in India",
    ],
    techStack: [
      "Expedition Operations",
      "Convoy Management",
      "Fleet Logistics",
      "Digital Booking",
      "Growth Strategy",
    ],
    status: "active",
  },
  {
    slug: "before-maps",
    title: "BeforeMaps",
    tagline:
      "Independent travel venture: personally explored destinations, group departures, and custom itineraries.",
    role: "Founder",
    url: "https://beforemaps.com",
    philosophy:
      "Ground-truth travel design. Independent exploration, curated group departures, private trips, and customized itineraries built from firsthand field scouting.",
    highlights: [
      "Personally explored destinations and scouted routes across India",
      "Curated group departures, private journeys, and custom itineraries",
      "End-to-end trip operations, route logistics, and traveler care",
      "Full-stack digital platform for direct travel engagement",
    ],
    techStack: ["Next.js", "Sanity CMS", "Travel Logistics", "Operations", "Vercel"],
    status: "active",
  },
  {
    slug: "ms-paul-therapies",
    title: "MSPaulTherapies",
    tagline:
      "Digital systems, technology leadership, and platform architecture for modern clinical wellness.",
    role: "Chief Technology Officer (CTO)",
    url: "https://mspaultherapies.in",
    philosophy:
      "Applying disciplined technology leadership to healthcare, creating frictionless booking and operational infrastructure so clinicians can focus on care.",
    highlights: [
      "Full platform engineering: booking pipeline, intake automations, and payment flows",
      "Modern clinical operations and content publishing systems",
      "High trust, accessible user experience tailored for mental health clients",
    ],
    techStack: ["Next.js", "Sanity CMS", "Payment Integrations", "Automation", "Vercel"],
    status: "active",
  },
];

export default ventures;
