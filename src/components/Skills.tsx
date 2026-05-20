"use client";

import AnimatedSection from "./AnimatedSection";
import skillsFallback from "@/data/skills";
import type { Skills as SkillsType } from "@/data/types";

interface Props {
  skills?: SkillsType;
}

export default function Skills({ skills: skillsProp }: Props) {
  const { technical, soft, tools, credentials } = skillsProp ?? skillsFallback;
  return (
    <section id="skills" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-16">
            What I bring.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical */}
          <AnimatedSection>
            <h3 className="text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#d97706]" />
              Technical
            </h3>
            <div className="flex flex-wrap gap-2">
              {technical.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-[var(--text-secondary)] rounded border border-[var(--border)] hover:border-[#d97706]/30 hover:text-[var(--text-primary)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Soft Skills */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#d97706]" />
              Human
            </h3>
            <div className="flex flex-wrap gap-2">
              {soft.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-[var(--text-secondary)] rounded border border-[var(--border)] hover:border-[#d97706]/30 hover:text-[var(--text-primary)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Tools row */}
        <AnimatedSection delay={0.2} className="mt-16">
          <h3 className="text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#d97706]" />
            Platforms &amp; Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono text-[var(--text-muted)] rounded border border-[var(--border-subtle)] hover:border-[#d97706]/20 hover:text-[var(--text-secondary)] transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications inline */}
        <AnimatedSection delay={0.3} className="mt-16">
          <h3 className="text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#d97706]" />
            Credentials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map(({ cert, org }) => (
              <div
                key={cert}
                className="flex items-baseline justify-between py-3 border-b border-[var(--border-subtle)]"
              >
                <span className="text-[var(--text-secondary)] text-base">{cert}</span>
                <span className="text-[var(--text-muted)] text-xs font-mono ml-4 shrink-0">
                  {org}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
