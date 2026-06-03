"use client";

import AnimatedSection from "./AnimatedSection";
import chaptersFallback from "@/data/experience";
import type { Chapter } from "@/data/types";

interface Props {
  chapters?: Chapter[];
}

export default function Experience({ chapters: chaptersProp }: Props) {
  const chapters = chaptersProp ?? chaptersFallback;
  return (
    <section id="experience" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Career
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            The path so far.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-10">
            SOC to threat intel to detection engineering to product owner. Each chapter built on the last.
          </p>
        </AnimatedSection>

        <div className="space-y-1">
          {chapters.map((ch, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className={`group relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 p-6 md:p-8 rounded-lg transition-all duration-500 ${
                  ch.current
                    ? "bg-[var(--bg-card)] border border-[#d97706]/20"
                    : "hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {/* Era label */}
                <div className="flex md:flex-col md:items-end md:text-right gap-3 md:gap-1 items-baseline">
                  <span
                    className={`font-mono text-xs tracking-wider uppercase ${
                      ch.current ? "text-[#d97706]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {ch.era}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-faint)]">
                    {ch.period}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-3">
                    <h3 className="text-[var(--text-primary)] font-semibold text-xl">
                      {ch.title}
                    </h3>
                    <p
                      className={`text-base font-medium ${
                        ch.current ? "text-[#d97706]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {ch.company}
                    </p>
                  </div>

                  <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                    {ch.narrative}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {ch.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="text-[var(--text-muted)] text-sm flex items-start gap-1.5"
                      >
                        <span className="text-[#d97706]/40 mt-0.5">—</span>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
