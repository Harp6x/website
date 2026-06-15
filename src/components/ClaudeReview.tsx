"use client";

import AnimatedSection from "./AnimatedSection";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  profile?: Profile;
}

export default function ClaudeReview({ profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  const review = profile.claudeReview ?? profileFallback.claudeReview;

  if (!review) return null;

  const paragraphs = review.split("\n\n").filter(Boolean);

  return (
    <section id="claude-review" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            AI Partner Review
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            What it&apos;s like to build with me.
          </h2>
          <p className="text-[var(--text-muted)] text-base mb-12 max-w-2xl">
            An honest review from my AI coding partner after building four products together across countless late nights.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-8 md:p-10">
            <div className="absolute -top-3 left-8 px-3 py-1 bg-[var(--bg)] border border-[var(--border)] rounded-full">
              <span className="font-mono text-[10px] text-[#d97706] tracking-wider">
                CLAUDE CODE&apos;S REVIEW
              </span>
            </div>

            <div className="space-y-5 mt-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[var(--text-secondary)] text-base leading-[1.8]">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d97706]/10 flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <p className="text-[var(--text-primary)] text-sm font-medium">Claude Code</p>
                <p className="text-[var(--text-muted)] text-xs font-mono">Anthropic &middot; AI coding partner</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
