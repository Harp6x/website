import type { CreatorBrand, ContentVision } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New brand/platform? → Add a new object to `brands`.
//   • Update themes/tone? → Edit in place.
//   • New vision pillar? → Append to `vision.pillars`.
// ───────────────────────────────────────────────────

export const brands: CreatorBrand[] = [
  {
    name: "Harp6x",
    handle: "@harp6x",
    tagline: "Documenting the intersection of ambition, freedom, discipline, and exploration.",
    description:
      "The primary personal brand. tech, cybersecurity, product thinking, and personal philosophy. Not an influencer page. a long-term documentation project of building a non-average life.",
    themes: [
      "Philosophy",
      "Mindset",
      "Tech & Cybersecurity",
      "Reflections",
      "Cinematic Lifestyle",
      "Systems Thinking",
      "Self-Development",
      "Growth & Struggle",
      "Immersive Storytelling",
    ],
    tone: "Thoughtful. Cinematic. Grounded. Introspective. Adventurous.",
    links: [
      { label: "Instagram", href: "https://instagram.com/harp6x" },
      { label: "YouTube", href: "https://youtube.com/@harp6x" },
      { label: "Substack", href: "https://harp6x.substack.com" },
    ],
  },
  {
    name: "There Goes Uddip",
    handle: "@theregoesuddip",
    tagline: "Slow travel. Honest places. A life that still feels alive.",
    description:
      "The travel and exploration brand. Trekking, slow travel, mountain roads, and the kind of places where your phone doesn't work and your mind finally does.",
    themes: [
      "Travel",
      "Trekking",
      "Exploration",
      "Mountain Roads",
      "Slow Travel",
      "Cinematic Travel Films",
      "Cultural Immersion",
      "Adventure Storytelling",
    ],
    tone: "Warm. Cinematic. Honest. Immersive.",
    links: [
      { label: "Instagram", href: "https://instagram.com/theregoesuddip" },
      { label: "YouTube", href: "https://youtube.com/@theregoesuddip" },
      { label: "Substack", href: "https://theregoesuddip.substack.com" },
    ],
  },
  {
    name: "Jimny Runs",
    handle: "@jimnyruns",
    tagline: "Rugged. Documentary-like. Authentic.",
    description:
      "Dedicated automotive and adventure platform. Suzuki Jimny builds, overlanding, mountain exploration, off-road trails, modifications, recovery systems, and expedition-style storytelling.",
    themes: [
      "Jimny Builds",
      "Overlanding",
      "Mountain Exploration",
      "Off-Road Trails",
      "Modifications",
      "Reliability Upgrades",
      "Recovery Systems",
      "Road Trips",
      "Expedition Storytelling",
    ],
    tone: "Rugged. Documentary-like. Authentic.",
    visual:
      "Dust, terrain maps, trails, mechanical detail shots, campsite visuals, mountain roads.",
    links: [
      { label: "Instagram", href: "https://instagram.com/jimnyruns" },
      { label: "YouTube", href: "https://youtube.com/@jimnyruns" },
    ],
  },
];

export const vision: ContentVision = {
  headline: "Building toward a more intentional life.",
  subtitle: "This isn't a finished story. it's a documented transition.",
  pillars: [
    "Location-independent lifestyle",
    "Meaningful work",
    "Creative freedom",
    "Slow, immersive travel",
    "Exploration-driven storytelling",
    "Technical independence",
    "Documentary-style personal branding",
  ],
  closingLine:
    "This is someone transitioning from conventional systems into a more intentional life. Still in the middle of becoming. and documenting every step.",
};

export default brands;
