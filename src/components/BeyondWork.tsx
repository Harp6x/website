"use client";

import AnimatedSection from "./AnimatedSection";
import sectionsFallback from "@/data/beyond";
import type { LifeSection } from "@/data/types";

interface Props {
  sections?: LifeSection[];
}

export default function BeyondWork({ sections: sectionsProp }: Props) {
  const sections = sectionsProp ?? sectionsFallback;
  return (
    <section id="beyond" className="section-padding-sm px-6 md:px-10">
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-teal)] tracking-[0.3em] uppercase mb-6">
            Beyond Work
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            The human layer.
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-2xl mb-3 leading-relaxed">
            The portfolio shows what I do. This part shows who I am — technically
            skilled, emotionally aware, creatively ambitious, drawn toward exploration.
          </p>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-10 leading-relaxed">
            Not a finished story. A documented transition toward a life where work,
            travel, creativity, and meaning are integrated instead of compartmentalized.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className="warm-card p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                  {/* Left: Icon + title */}
                  <div>
                    <span className="text-4xl mb-4 block" role="img" aria-label={s.title}>
                      {s.emoji}
                    </span>
                    <h3 className="font-serif-heading text-[var(--text-primary)] text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-base mt-1">{s.subtitle}</p>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <div className="space-y-4 text-[var(--text-secondary)] text-base leading-[1.8] mb-6">
                      {s.body.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>

                    {/* Mood line */}
                    <p className="font-serif-heading text-[var(--personal-accent)]/60 text-base italic mt-8 pt-6 border-t border-[var(--personal-border-subtle)]">
                      {s.mood}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing thought */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-serif-heading text-[var(--text-muted)] text-xl leading-relaxed italic">
              &ldquo;The strongest thing about this story is that it&apos;s still
              being written. Still in the middle of becoming. and honest about it.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-16" />
    </section>
  );
}
