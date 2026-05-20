"use client";

import AnimatedSection from "./AnimatedSection";
import type { SanityPersonalAbout } from "@/sanity/queries";

const defaults = {
  headline: "I'm not building an audience.",
  headlineAccent: "I'm documenting a transition.",
  paragraphs: [
    "From conventional systems into something more intentional. A life where work, creativity, exploration, and meaning aren't separate categories. they're integrated. This is an active, honest process, and I'm still in the middle of it.",
    "By day, I build security systems and products. Outside of that, I chase clarity on mountain roads, think about philosophy, build things with my hands, and try to live a life that still feels alive while doing serious work. I believe in systems over motivation, slow compounding over viral moments, and discipline as the highest form of freedom.",
  ],
  pillars: [
    { label: "Approach", value: "Document everything. Perform nothing." },
    { label: "Mindset", value: "Systems thinking applied to life." },
    { label: "Direction", value: "Location independence. Creative freedom. Meaningful work." },
  ],
};

interface Props {
  data?: SanityPersonalAbout | null;
}

export default function PersonalAbout({ data }: Props) {
  const headline = data?.headline ?? defaults.headline;
  const headlineAccent = data?.headlineAccent ?? defaults.headlineAccent;
  const paragraphs = data?.paragraphs?.length ? data.paragraphs : defaults.paragraphs;
  const pillars = data?.pillars?.length ? data.pillars : defaults.pillars;

  return (
    <section id="about" className="section-padding px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-6">
            Who is Uddip
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection delay={0.05}>
            <p className="font-serif-heading text-[var(--text-primary)] text-2xl md:text-3xl leading-relaxed font-normal italic">
              {headline}{" "}
              <span className="text-[var(--personal-accent)] not-italic font-medium">{headlineAccent}</span>
            </p>
          </AnimatedSection>

          {paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.05}>
              <p className="text-[var(--text-secondary)] text-lg leading-[1.8]">{p}</p>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-[var(--personal-border-subtle)]">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="p-5 rounded-xl bg-[var(--personal-bg-card)] border border-[var(--personal-border-subtle)]">
                  <p className="font-mono text-[10px] text-[var(--personal-accent)] tracking-[0.2em] uppercase mb-2">
                    {pillar.label}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm font-serif-heading">{pillar.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
