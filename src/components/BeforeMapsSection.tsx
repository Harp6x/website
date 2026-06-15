"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const BLOCKS = [
  {
    label: "What It Is",
    content:
      "Before Maps is an exploration-first travel company building scouted, small-group journeys across India. Every route is personally field-tested before it opens. Travelers apply to join — it's not a booking engine, it's a trust system.",
  },
  {
    label: "Why It Started",
    content:
      "Most travel operators sell destinations. Before Maps was born from a different belief: that travel is a product problem. The real value isn't the place — it's the preparation, the route, the logistics, the safety margin, and the story behind it. It started because I wanted to build something I'd trust with my own people.",
  },
  {
    label: "Philosophy",
    content:
      "Every journey is personally scouted and tested before anyone else sets foot on it. Application-only groups. Trust built through transparency and content — field notes, scouting logs, founder notes — not marketing. The brand positioning: we don't just show you where to go, we show you how to experience it.",
  },
  {
    label: "Goals",
    content:
      "Build India's most trusted travel brand for thoughtful travelers — domestic and international. Make exploration accessible without sacrificing authenticity. Create a company where the founder's fieldwork is the product, and the content is the trust engine.",
  },
];

export default function BeforeMapsSection() {
  return (
    <section id="before-maps" className="section-padding px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-6">
            The Company
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            Before Maps.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mb-4">
            A company I founded to turn personal exploration into something
            other people can trust.
          </p>
          <a
            href="https://beforemaps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--personal-accent)] hover:gap-3 transition-all mb-16"
          >
            beforemaps.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </AnimatedSection>

        <div className="space-y-10">
          {BLOCKS.map((block, i) => (
            <AnimatedSection key={block.label} delay={i * 0.06}>
              <div className="warm-card p-8 md:p-10">
                <p className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.2em] uppercase mb-4">
                  {block.label}
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-[1.8]">
                  {block.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-serif-heading text-[var(--text-muted)] text-xl leading-relaxed italic">
              &ldquo;We don&apos;t just show you where to go — we show you how
              to experience it.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
