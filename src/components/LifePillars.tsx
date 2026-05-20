"use client";

import AnimatedSection from "./AnimatedSection";
import { Camera, Play, BookOpen, ArrowUpRight } from "lucide-react";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

const defaultPillars = [
  {
    brand: "Harp6x",
    key: "harp6x" as const,
    theme: "Systems · Technology · AI · Cybersecurity · Experimentation",
    description:
      "The primary personal brand. where technology, philosophy, and intentional living intersect. Shortform on Instagram, longform on YouTube and Substack.",
    contentPillars: ["Shortform: Instagram", "Longform: YouTube", "Blog: Substack"],
  },
  {
    brand: "There Goes Uddip",
    key: "theregoesuddip" as const,
    theme: "Travel · Philosophy · Reflection · Exploration",
    description:
      "The travel and reflection brand. Slow travel, mountain roads, honest places, and the kind of experiences that change how you see things.",
    contentPillars: ["Shortform: Instagram", "Longform: YouTube", "Blog: Substack"],
  },
  {
    brand: "Jimny Runs",
    key: "jimnyruns" as const,
    theme: "Overlanding · Vehicles · Mountains · Exploration",
    description:
      "Dedicated automotive and adventure platform. Jimny builds, overlanding, off-road trails, and expedition-style storytelling.",
    contentPillars: ["Shortform: Instagram", "Longform: YouTube"],
  },
];

interface Props {
  pillarsData?: { brand: string; key: string; theme: string; description: string; contentPillars: string[] }[];
  profile?: Profile;
}

export default function LifePillars({ pillarsData, profile: profileProp }: Props) {
  const pillars = pillarsData?.length ? pillarsData : defaultPillars;
  const profile = profileProp ?? profileFallback;
  const brands = profile.personalBrands;

  return (
    <section id="pillars" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-teal)] tracking-[0.3em] uppercase mb-6">
            Content Ecosystem
          </div>
          <h2 className="font-serif-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
            Three pillars. One person.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-16 leading-relaxed">
            Each brand represents a different dimension of the same life. technology,
            exploration, and machines. Shortform for Instagram, longform for YouTube,
            blog for Substack.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const links = brands[pillar.key];
            return (
              <AnimatedSection key={pillar.brand} delay={i * 0.1}>
                <div className="warm-card group h-full p-8 flex flex-col">
                  <h3 className="text-[var(--personal-accent)] font-serif-heading text-lg font-semibold mb-3">
                    {pillar.brand}
                  </h3>
                  <p className="text-[var(--text-faint)] text-[10px] font-mono tracking-wider uppercase mb-4">
                    {pillar.theme}
                  </p>
                  <p className="text-[var(--text-secondary)] text-base leading-[1.8] mb-6 flex-1">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pillar.contentPillars.map((cp) => (
                      <div key={cp} className="text-[var(--text-muted)] text-xs font-mono flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[var(--personal-teal)]/40" />
                        {cp}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {links?.instagram && (
                      <a href={links.instagram} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] border border-[var(--personal-border-subtle)] hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <Camera className="w-3 h-3" /> IG
                      </a>
                    )}
                    {links?.youtube && (
                      <a href={links.youtube} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] border border-[var(--personal-border-subtle)] hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <Play className="w-3 h-3" /> YT
                      </a>
                    )}
                    {links?.substack && (
                      <a href={links.substack} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] border border-[var(--personal-border-subtle)] hover:border-[var(--personal-accent)]/30 hover:text-[var(--text-primary)] transition-all">
                        <BookOpen className="w-3 h-3" /> Blog
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
