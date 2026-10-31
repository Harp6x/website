import type { LifeSection } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New section? → Add a new object to the array.
//   • emoji: paste any emoji character (e.g. 🧭 ⛰️ 🎵 📖)
//   • All content is also editable from /studio (Sanity CMS)
// ───────────────────────────────────────────────────

const sections: LifeSection[] = [
  {
    emoji: "⚡",
    title: "AI & Systems Building",
    subtitle: "Building with taste at machine speed",
    body: [
      "I build with modern AI tooling: Claude Code, Cursor, and automated workflows. Not as a shortcut, but because building at the speed of thought unlocks rapid iteration. Rapid context switching, deep-focus sessions, and building in parallel across engineering, operations, and product strategy.",
      "From expedition logistics platforms to digital therapy systems, modern development is a dialogue between strategic intent and rapid machine execution. The systems discipline remains grounded in cybersecurity rigor.",
    ],
    mood: "Late-night terminals. Clear architecture. The satisfaction of dependable systems.",
  },
  {
    emoji: "🔧",
    title: "Building Things",
    subtitle: "Products, ventures, operating systems",
    body: [
      "I build things with an operator's mindset. IndieRoam is an automotive expedition company built for high-altitude journeys. BeforeMaps is an independent travel venture delivering scouted itineraries and group departures. MSPaulTherapies is a digital health platform where I serve as CTO.",
      "The craft of building is the through-line: identifying operational bottlenecks, architecting dependable systems, shipping resilient platforms, and executing in the real world. I treat every venture as an interconnected product problem.",
    ],
    mood: "Field logs. System diagrams. Operational checklists. Real-world execution.",
  },
  {
    emoji: "🧭",
    title: "Overlanding & 4x4",
    subtitle: "Where engineering meets the wild",
    body: [
      "Building a Suzuki Jimny from stock to expedition-ready. Reliability modifications, recovery gear, communication systems, solving the same kind of problems I solve in security, but in the dirt.",
      "There's something about a mountain pass at dawn that resets the way you think. The vehicle is a system. You harden it the same way you harden infrastructure: assess risk, build redundancy, test under pressure, and trust your preparation when things get uncertain.",
    ],
    mood: "Dusty roads. Cold mornings. Engine sounds echoing off valley walls.",
  },
  {
    emoji: "⛰️",
    title: "Trekking & Exploration",
    subtitle: "Slow travel, honest places",
    body: [
      "I don't travel for leisure. I travel for perspective. Mountains, forests, solitude. The kind of places where your phone doesn't work and your mind finally does.",
      "Slow travel over luxury. Immersive experiences over Instagram moments. Walking for hours with nothing but the weight on your back and the quiet of your thoughts.",
    ],
    mood: "Thin air. Forest silence. The kind of tired that feels earned.",
  },
  {
    emoji: "🎵",
    title: "Music & DJing",
    subtitle: "Nighttime creative energy",
    body: [
      "Music is how I think when I'm not working. Deep house, ambient, electronic, the kind that creates atmosphere rather than demanding attention.",
      "Mixing isn't just about beatmatching. It's about reading energy, building tension, knowing when to let silence do the work. A lot like managing a SOC, honestly.",
    ],
    mood: "Late nights. Warm frequencies. The space between tracks.",
  },
  {
    emoji: "📖",
    title: "Philosophy & Mindset",
    subtitle: "Thinking about thinking",
    body: [
      "Stoicism, Buddhism, existentialism: not academic exercises, but operating systems for living. Discipline as freedom. Meaning as something you build, not something you find.",
      "Intentional living means deciding what matters before the world decides for you. It means building a life that holds up under pressure, not just a career.",
    ],
    mood: "Early mornings. Journaling. Questions without easy answers.",
  },
];

export default sections;
