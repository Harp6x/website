"use client";

import AnimatedSection from "./AnimatedSection";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  profile?: Profile;
}

export default function About({ profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  return (
    <section id="about" className="section-padding px-6 md:px-10 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            About
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
          {/* Left: Bio */}
          <div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8">
                I build companies, products,
                <br />
                <span className="text-[var(--text-secondary)]">and systems that ship.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
                {profile.bio.map((para, i) => {
                  const html = para.replace(
                    /\*\*(.+?)\*\*/g,
                    '<span class="text-[var(--text-primary)]">$1</span>'
                  );
                  return (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  );
                })}
                <p className="text-[var(--text-muted)]">{profile.bioClosing}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Quick facts + Claude quote */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="space-y-8 lg:pt-16">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between border-b border-[var(--border)] pb-4"
                  >
                    <span className="text-[var(--text-muted)] text-base">{stat.label}</span>
                    <span className="text-[var(--text-primary)] font-mono text-xl">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {profile.claudeReviewShort && (
              <AnimatedSection delay={0.3}>
                <div className="mt-10 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
                    &ldquo;{profile.claudeReviewShort}&rdquo;
                  </p>
                  <p className="text-[var(--text-muted)] text-xs font-mono mt-3">
                    — Claude Code, AI coding partner
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
