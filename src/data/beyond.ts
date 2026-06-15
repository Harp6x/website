import type { LifeSection } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New section? → Add a new object to the array.
//   • emoji: paste any emoji character (e.g. 🧭 ⛰️ 🎵 📖)
//   • All content is also editable from /studio (Sanity CMS)
// ───────────────────────────────────────────────────

const sections: LifeSection[] = [
  {
    emoji: "�",
    title: "AI & Vibe Coding",
    subtitle: "Building with taste at machine speed",
    body: [
      "I vibe-code. Claude Code, Windsurf, Cursor, the whole stack. Not because I can't write code the old way, but because building at the speed of thought is more fun. My ADHD brain thrives here: rapid context switching, hyperfocus sessions at 3 AM, jumping between ten ideas and somehow shipping all of them. The AI handles the boilerplate, I handle the taste.",
      "Every product I ship now is AI-assisted end-to-end. Before Maps, Hobie, Ms Paul Therapies, all built this way. The future of building is a conversation between human intent and machine execution. I'm already living in it.",
    ],
    mood: "Late-night terminals. Claude thinking. The dopamine of shipping at 3 AM.",
  },
  {
    emoji: "🔧",
    title: "Building Things",
    subtitle: "Products, systems, companies",
    body: [
      "I build things obsessively. Before Maps is an exploration-led travel company. Hobie is a hobby-tracking studio. Ms Paul Therapies is a therapy platform I co-founded. Each one started as a problem I wanted to solve.",
      "The craft of building is the thing. Figuring out the product, designing the system, shipping the code, iterating on feedback. ADHD makes me terrible at sitting still, but incredible at parallel execution. Three companies at once feels natural. I treat every project like a product problem, because it is one.",
    ],
    mood: "Whiteboards. Figma mockups. Deploy buttons. The satisfaction of something working.",
  },
  {
    emoji: "�🧭",
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
