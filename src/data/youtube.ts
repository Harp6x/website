import type { FeaturedVideo } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New video? → Add object to the array.
//   • Got a real YouTube URL? → Add it as `url`.
//   • thumbnailPlaceholder is shown until real
//     thumbnails are added.
// ───────────────────────────────────────────────────

const videos: FeaturedVideo[] = [
  {
    title: "Dawn at 14,000ft",
    description:
      "A cinematic trekking film from the high Himalayas. Silence, altitude, and the kind of clarity you can't get in a city.",
    category: "Trekking Documentary",
    thumbnailPlaceholder: "Himalayan dawn, frost, prayer flags",
  },
  {
    title: "Building the Jimny. Ep. 1",
    description:
      "From stock to expedition-ready. The philosophy behind every modification, and why I treat a vehicle like a network. hardened, redundant, tested under pressure.",
    category: "Vehicle Build",
    thumbnailPlaceholder: "Workshop, tools, Jimny chassis",
  },
  {
    title: "Discipline as Freedom",
    description:
      "A short film on stoic practice, morning routines, and what it actually means to live intentionally instead of just talking about it.",
    category: "Philosophy",
    thumbnailPlaceholder: "Morning light, journal, coffee",
  },
  {
    title: "The Road to Spiti",
    description:
      "5 days through one of the most remote mountain passes in India. No signal, no shortcuts, no backup plan.",
    category: "Expedition Log",
    thumbnailPlaceholder: "Mountain road, switchbacks, dust",
  },
];

export default videos;
