import type { JournalTopic } from "./types";

// ───────────────────────────────────────────────────
// HOW TO UPDATE:
//   • New topic? → Add object to the array.
//   • These are displayed as upcoming/planned topics.
//     When you publish a real blog post, add a `link`
//     field (future enhancement).
// ───────────────────────────────────────────────────

const topics: JournalTopic[] = [
  // ─── Harp6x — Systems, AI, Cybersecurity ───
  {
    title: "Why I Left the SOC",
    preview: "Five years defending networks taught me one thing: reactive security breaks at scale. This is the story of shifting from operator to builder.",
    category: "Cybersecurity",
  },
  {
    title: "Systems Over Motivation",
    preview: "Why discipline without architecture is just suffering with extra steps. How to build a personal operating system that carries you.",
    category: "Systems Thinking",
  },
  {
    title: "Alert Fatigue Is a Design Problem",
    preview: "When everything is urgent, nothing is. How the most expensive tool in your stack becomes your biggest liability.",
    category: "Cybersecurity",
  },
  {
    title: "The Automation Paradox",
    preview: "More automation requires more human supervision, not less. What happens when the safety net is the thing that fails.",
    category: "AI & Automation",
  },
  {
    title: "AI Won't Replace You. But It Will Change What Matters",
    preview: "The human layer in security — and in everything else — is more important than ever. What to invest in.",
    category: "AI & Automation",
  },
  {
    title: "Building Systems for Life",
    preview: "Redundancy, observability, graceful degradation — applied to how you design a life. Infrastructure principles for humans.",
    category: "Systems Thinking",
  },
  {
    title: "Threat Modeling Your Decisions",
    preview: "The cybersecurity framework that makes you better at life choices. Four questions that change how you evaluate risk.",
    category: "Cybersecurity",
  },
  {
    title: "Zero Trust Is a Philosophy, Not a Product",
    preview: "Never trust, always verify — and why this applies to more than network security. A principle for information, commitments, and planning.",
    category: "Cybersecurity",
  },
  {
    title: "Signal Over Noise",
    preview: "The fundamental intelligence metric — in security, in information, in life. How to build better filters.",
    category: "Systems Thinking",
  },
  {
    title: "Slow Compounding",
    preview: "Why 1% better, consistently, beats everything else. The math of showing up on Tuesday.",
    category: "Systems Thinking",
  },
  {
    title: "Second-Order Thinking",
    preview: "Consequences of consequences — the skill that separates good decisions from great ones. How to think three steps ahead.",
    category: "Mental Models",
  },
  {
    title: "SIEM Without Strategy Is Just Noise",
    preview: "Why the most expensive tool in your stack might be your biggest liability. Detection engineering vs detection accumulation.",
    category: "Cybersecurity",
  },
  {
    title: "Build Once, Use Forever",
    preview: "The philosophy of leverage through reusable systems. Why the most valuable work is work that pays dividends after you stop doing it.",
    category: "Systems Thinking",
  },
  {
    title: "Prompt Engineering Is Communication Design",
    preview: "The people who get the most from AI are the ones who think clearly, not the ones who know the tricks.",
    category: "AI & Automation",
  },
  {
    title: "Freedom with Structure",
    preview: "Why discipline is the highest form of freedom. The paradox of jazz musicians, firewalls, and morning routines.",
    category: "Philosophy",
  },
  {
    title: "The Kill Chain of a Bad Decision",
    preview: "How attackers move — and how bad decisions move the same way. Intervention points for life choices.",
    category: "Cybersecurity",
  },
  {
    title: "Digital Minimalism — The Honest Version",
    preview: "What it actually means beyond deleting apps and buying a dumbphone. Intentional defaults, not performative simplicity.",
    category: "Technology",
  },
  {
    title: "Incident Response Is a Discipline",
    preview: "The difference between reacting to a crisis and containing one. Playbooks, roles, and the life parallel.",
    category: "Cybersecurity",
  },
  {
    title: "Document Everything. Perform Nothing.",
    preview: "Why writing things down is the most underrated professional superpower. Converting experience into infrastructure.",
    category: "Systems Thinking",
  },
  {
    title: "Lateral Movement — The Quiet Phase",
    preview: "What happens after the attacker gets in, and why most organizations miss it. The initial event is rarely the real problem.",
    category: "Cybersecurity",
  },
  {
    title: "The Fragility Trap",
    preview: "When efficiency removes resilience — and why optimization can be dangerous. Building antifragile systems for work and life.",
    category: "Systems Thinking",
  },
  {
    title: "Writing Is Thinking",
    preview: "Not documentation. Generation. How converting thought into words forces clarity and compounds into a knowledge base.",
    category: "Knowledge Work",
  },
  {
    title: "Goodhart's Law Will Ruin Your Metrics",
    preview: "When a measure becomes a target, it stops being a good measure. How to design metrics that don't destroy what they track.",
    category: "Mental Models",
  },
  {
    title: "First Principles Reasoning",
    preview: "Dismantling assumptions until you reach something true. When analogy fails and foundational thinking is the only way forward.",
    category: "Mental Models",
  },
  {
    title: "Burnout, Meaning, and What Comes After",
    preview: "What happens when the career you built starts feeling like a cage. And what it takes to rebuild without burning everything down.",
    category: "Reflections",
  },
  // ─── ThereGoesUddip — Travel, Mountains, Philosophy ───
  {
    title: "Mountain Journals — Spiti Valley",
    preview: "Five days with no signal, no plan B, and the kind of silence that rewires how you think.",
    category: "Travel",
  },
  {
    title: "Exploration as Practice",
    preview: "Why I don't travel for leisure. Slow travel, honest places, and what mountains teach you about the rest of your life.",
    category: "Exploration",
  },
  {
    title: "The Jimny Build Log",
    preview: "Every modification tells a story about risk assessment, trade-offs, and trusting your preparation when the trail gets uncertain.",
    category: "Automotive",
  },
  {
    title: "Discipline as an Operating System",
    preview: "Stoicism isn't philosophy for academics. It's firmware for anyone trying to build something real while the world demands you stay comfortable.",
    category: "Philosophy",
  },
  {
    title: "The Difference Between Loneliness and Solitude",
    preview: "Precise definitions for two experiences that look identical from the outside but feel entirely different from within.",
    category: "Solitude",
  },
  {
    title: "What Mountains Teach About Patience",
    preview: "The summit is there. Walking faster doesn't bring it closer. Lessons from altitude that transfer to everything else.",
    category: "Mountains",
  },
  {
    title: "Why Bad Trips Make Better Stories",
    preview: "Type 2 fun and the paradox of retrospective enjoyment. Why discomfort converts to meaning.",
    category: "Exploration",
  },
  {
    title: "The Case for Slow Travel",
    preview: "Why seeing less is understanding more. The philosophy of pace, observation, and genuine connection with place.",
    category: "Travel",
  },
  {
    title: "Why Instagram Destroyed Mountain Towns",
    preview: "What happened to Kasol, Jibhi, and Chitkul — and what's left after the influencers move on.",
    category: "Travel",
  },
  {
    title: "The Empty Places",
    preview: "What the uncrowded routes are actually saying. Why the blank spaces on the map are worth more than the marked trails.",
    category: "Exploration",
  },
  {
    title: "Night Skies at Altitude",
    preview: "What light pollution is actually costing us. The Milky Way, seen properly, changes your relationship with the sky.",
    category: "Mountains",
  },
  {
    title: "Returning",
    preview: "Why the last day of a trip is always strange. What the return reveals about what you left — and what you're going back to.",
    category: "Reflections",
  },
  {
    title: "Walking Is the Most Underrated Thinking Tool",
    preview: "Every philosopher walked. The neuroscience of diffuse thinking and why your best ideas come in motion.",
    category: "Philosophy",
  },
  {
    title: "How India's Weather Is Decided in the Bay of Bengal",
    preview: "The monsoon system — the most consequential weather pattern most Indians can't explain. And why trekkers need to understand it.",
    category: "Mountains",
  },
  {
    title: "Amor Fati — Loving What Happens",
    preview: "Not acceptance. Not resignation. Something harder and more useful. What a mountain pass at 16,000 feet taught me about Stoic philosophy.",
    category: "Philosophy",
  },
  {
    title: "Village Economies at Altitude",
    preview: "How people build lives in extreme conditions — and what it teaches about resilience, constraint, and collective infrastructure.",
    category: "Travel",
  },
  {
    title: "What Happens After the Peak",
    preview: "The descent as metaphor — and why nobody talks about it. More accidents happen going down than going up.",
    category: "Mountains",
  },
  {
    title: "Reading Terrain",
    preview: "The intelligence of landscape — what the ground is telling you. An extinct skill that changes how you see the world.",
    category: "Exploration",
  },
  {
    title: "Sacred Geography",
    preview: "Why every high peak in India is a deity — and what that means for how we treat the land. The oldest environmental ethics.",
    category: "Philosophy",
  },
  {
    title: "The Backpacker Paradox",
    preview: "Seeking authenticity while contributing to its destruction. The honest conversation about tourism's impact.",
    category: "Travel",
  },
  {
    title: "Memento Mori on the Trail",
    preview: "Not about death. About attention. What altitude teaches about being alive — and what it costs to forget.",
    category: "Philosophy",
  },
  {
    title: "Privilege in Travel",
    preview: "You can't explore the world ethically without acknowledging who gets to explore it. The honest conversation.",
    category: "Reflections",
  },
  {
    title: "Why Underestimated Mountains Matter",
    preview: "The Sahyadri case — 150 million years old, more biodiversity than most ranges, and accessible from your city. Why low altitude doesn't mean low value.",
    category: "Mountains",
  },
  {
    title: "What Photography Can't Capture",
    preview: "Why the best travel stories are written, not photographed. The limitation of images and the power of sensory writing.",
    category: "Storytelling",
  },
  {
    title: "Designing a Life That Holds Up Under Pressure",
    preview: "Not optimizing for happiness. Designing for resilience. Load-bearing elements vs decorative ones — and how to tell the difference.",
    category: "Life Design",
  },
];

export default topics;
