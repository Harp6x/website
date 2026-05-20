"use client";

import AnimatedSection from "./AnimatedSection";
import { brands, vision } from "@/data/creator";
import { ArrowUpRight } from "lucide-react";

export default function Dispatches() {
  return (
    <section id="dispatches" className="section-padding px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[#d97706] tracking-[0.3em] uppercase mb-6">
            Dispatches
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Stories from the road.
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mb-6 leading-relaxed">
            Not influencer content. A long-term documentation project of
            building a non-average life. travel, exploration, philosophy,
            vehicle building, and the pursuit of something more intentional.
          </p>
          <p className="text-[var(--text-faint)] text-sm font-mono italic mb-20">
            An active pursuit. A documented transition. A real journey in progress.
          </p>
        </AnimatedSection>

        {/* Creator brands */}
        <div className="space-y-20">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={i * 0.1}>
              <div className="glass rounded-lg p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
                  {/* Left: Brand identity */}
                  <div>
                    <h3 className="text-[var(--text-primary)] text-2xl font-bold mb-1">
                      {brand.name}
                    </h3>
                    <p className="text-[#d97706] font-mono text-sm mb-4">
                      {brand.handle}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* Tone */}
                    <p className="text-[var(--text-faint)] text-xs font-mono italic mb-6">
                      {brand.tone}
                    </p>

                    {/* Visual direction (Jimny Runs) */}
                    {brand.visual && (
                      <p className="text-[var(--text-faint)] text-xs font-mono mb-6">
                        Visual: {brand.visual}
                      </p>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {brand.links.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[#d97706] transition-colors duration-300"
                        >
                          {label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right: Themes grid */}
                  <div>
                    <p className="text-[var(--text-muted)] text-xs font-mono tracking-wider uppercase mb-4">
                      Themes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.themes.map((theme) => (
                        <span
                          key={theme}
                          className="text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--text-secondary)] hover:border-[#d97706]/20 hover:text-[var(--text-primary)] transition-all duration-300"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    {/* Brand tagline */}
                    <p className="text-[var(--text-muted)] text-sm mt-8 leading-relaxed italic">
                      &ldquo;{brand.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Content vision */}
        <AnimatedSection delay={0.2} className="mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-[var(--text-primary)] text-xl font-semibold mb-3">
              {vision.headline}
            </h3>
            <p className="text-[var(--text-muted)] text-sm mb-8">{vision.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {vision.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-muted)]"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-faint)] text-sm italic leading-relaxed">
              {vision.closingLine}
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
