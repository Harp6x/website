"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const defaultPhilosophies = [
  {
    title: "Systems over motivation",
    summary: "Motivation fades. Systems compound. Build the infrastructure for the life you want, and let it work even when you don't feel like it.",
    tags: ["discipline", "systems thinking"],
  },
  {
    title: "Slow compounding",
    summary: "The most meaningful things in life take time. Relationships, skills, trust, understanding. all of it compounds slowly if you stay consistent.",
    tags: ["patience", "long-term"],
  },
  {
    title: "Signal over noise",
    summary: "Most information is noise. Most opinions are noise. Most trends are noise. Curate ruthlessly. in content, in relationships, in how you spend attention.",
    tags: ["attention", "clarity"],
  },
  {
    title: "Build once, use forever",
    summary: "Whether it's a system, a habit, a skill, or a piece of infrastructure. invest upfront so it serves you indefinitely. Front-load the work.",
    tags: ["leverage", "efficiency"],
  },
  {
    title: "Freedom with structure",
    summary: "Real freedom isn't the absence of rules. It's having enough structure that you can be spontaneous without chaos. Discipline creates space.",
    tags: ["freedom", "discipline"],
  },
  {
    title: "Document, don't perform",
    summary: "The difference between personal branding and documentation is intent. One seeks validation. The other seeks clarity. Always choose documentation.",
    tags: ["authenticity", "self-awareness"],
  },
  {
    title: "Anti-average by default",
    summary: "Not contrarian for the sake of it. but questioning defaults. The average life is designed by committee. An intentional one is designed by you.",
    tags: ["intentionality", "identity"],
  },
  {
    title: "Human-first automation",
    summary: "Technology should amplify human capability, not replace human judgment. Automate the mundane so you can focus on what actually matters.",
    tags: ["technology", "humanity"],
  },
];

interface Props {
  philosophies?: { title: string; summary: string; tags: string[] }[];
}

export default function Philosophy({ philosophies: philosophiesProp }: Props) {
  const philosophies = philosophiesProp?.length ? philosophiesProp : defaultPhilosophies;
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="philosophy" className="section-padding-sm px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-3">
            Operating System
          </div>
          <h2 className="font-serif-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-8">
            Philosophies I live by.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {philosophies.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.04}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left group"
              >
                <div className="warm-card px-5 py-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif-heading text-[var(--text-primary)] font-semibold text-sm group-hover:text-[var(--personal-accent)] transition-colors truncate">
                      {p.title}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[8px] font-mono text-[var(--text-faint)] tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[var(--text-faint)] transition-transform duration-300 shrink-0 ml-3 ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="font-serif-heading text-[var(--text-secondary)] text-sm leading-[1.7] px-5 py-3 border-l-2 border-[var(--personal-accent)]/30 ml-3 italic">
                      {p.summary}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-16" />
    </section>
  );
}
