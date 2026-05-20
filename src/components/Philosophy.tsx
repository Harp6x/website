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
    <section id="philosophy" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-6">
            Operating System
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            Philosophies I live by.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-16 leading-relaxed">
            Not borrowed quotes. These are the frameworks, principles, and mental models that
            shape how I think, build, and move through the world.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {philosophies.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.04}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left group"
              >
                <div className="flex items-center justify-between py-6 px-5 rounded-xl border border-[var(--personal-border-subtle)] hover:border-[var(--personal-border)] hover:bg-[var(--personal-bg-card)] transition-all">
                  <div className="flex-1">
                    <h3 className="font-serif-heading text-[var(--text-primary)] font-semibold text-lg group-hover:text-[var(--personal-accent)] transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono text-[var(--text-faint)] tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-faint)] transition-transform duration-300 ${
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-serif-heading text-[var(--text-secondary)] text-base leading-[1.8] py-6 pl-5 ml-5 border-l-2 border-[var(--personal-accent)]/30 italic">
                      {p.summary}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
