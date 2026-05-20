"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import topicsFallback from "@/data/journal";
import type { JournalTopic } from "@/data/types";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const COLLAPSED_COUNT = 6;

interface Props {
  topics?: JournalTopic[];
}

export default function Journal({ topics: topicsProp }: Props) {
  const topics = topicsProp ?? topicsFallback;
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? topics : topics.slice(0, COLLAPSED_COUNT);
  const hasMore = topics.length > COLLAPSED_COUNT;

  return (
    <section id="journal" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-6">
            Journal
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            Thinking out loud.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-16 leading-relaxed">
            Long-form writing and reflections. lessons from cybersecurity,
            travel journals, philosophy, systems thinking, and the honest
            process of building a life that holds up under pressure.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((topic, i) => {
            const isLink = !!topic.substackUrl;
            const Wrapper = isLink ? "a" : "div";
            const wrapperProps = isLink
              ? { href: topic.substackUrl, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <AnimatedSection key={topic.title} delay={i * 0.04}>
                <Wrapper
                  {...wrapperProps}
                  className={`warm-card group block p-6 h-full flex flex-col ${isLink ? "cursor-pointer" : "cursor-default"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono text-[var(--personal-accent)] tracking-[0.2em] uppercase">
                      {topic.category}
                    </span>
                    {isLink && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[var(--personal-accent)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>
                  <h3 className="font-serif-heading text-[var(--text-primary)] font-semibold text-base mb-2 group-hover:text-[var(--personal-accent)] transition-colors duration-300 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                    {topic.preview}
                  </p>
                  {isLink && (
                    <span className="mt-4 text-[10px] font-mono text-[var(--text-faint)] group-hover:text-[var(--personal-accent)] transition-colors">
                      Read on Substack ↗
                    </span>
                  )}
                </Wrapper>
              </AnimatedSection>
            );
          })}
        </div>

        {hasMore && (
          <AnimatedSection delay={0.2} className="mt-10 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--personal-border)] text-sm text-[var(--text-secondary)] hover:border-[var(--personal-accent)]/40 hover:text-[var(--text-primary)] transition-all duration-300"
            >
              {expanded ? "Show less" : `Show all ${topics.length} entries`}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </AnimatedSection>
        )}

        {/* Writing note */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-xl">
            <p className="text-[var(--text-faint)] text-sm italic font-serif-heading leading-relaxed">
              Writing is thinking made visible. These are the topics I keep
              coming back to. some published, some still forming. The style:
              thoughtful, observant, reflective, human.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
