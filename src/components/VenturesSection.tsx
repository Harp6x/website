"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import type { Venture } from "@/data/types";

const STATUS_BADGE: Record<string, string> = {
  active: "text-emerald-400 border-emerald-400/30",
  building: "text-amber-400 border-amber-400/30",
  paused: "text-zinc-500 border-zinc-500/30",
};

interface Props {
  ventures: Venture[];
}

export default function VenturesSection({ ventures }: Props) {
  if (!ventures.length) return null;

  return (
    <section id="ventures" className="section-padding-sm px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--personal-accent)] tracking-[0.3em] uppercase mb-4">
            Ventures
          </div>
          <h2 className="font-serif-heading text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-3">
            Things I&apos;m building.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-2xl mb-10 leading-relaxed">
            Companies, products, and platforms. Each one started as a problem I wanted to solve.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.map((v, i) => (
            <AnimatedSection key={v.slug} delay={i * 0.08}>
              <div className="warm-card group h-full p-6 flex flex-col">
                {/* Clickable card body → site */}
                <a
                  href={v.url ?? `/ventures/${v.slug}`}
                  target={v.url ? "_blank" : undefined}
                  rel={v.url ? "noopener noreferrer" : undefined}
                  className="flex-1 block cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif-heading text-[var(--text-primary)] text-lg font-semibold group-hover:text-[var(--personal-accent)] transition-colors">
                      {v.title}
                    </h3>
                    <span className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border ${STATUS_BADGE[v.status] ?? STATUS_BADGE.active}`}>
                      {v.status}
                    </span>
                  </div>

                  <p className="text-[var(--text-faint)] text-[10px] font-mono tracking-wider uppercase mb-3">
                    {v.role}
                  </p>

                  <p className="text-[var(--text-secondary)] text-sm leading-[1.7] mb-4">
                    {v.tagline}
                  </p>

                  {v.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {v.techStack.slice(0, 5).map((t) => (
                        <span key={t} className="text-[9px] font-mono text-[var(--text-faint)] tracking-wider px-2 py-0.5 rounded-full border border-[var(--personal-border-subtle)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </a>

                {/* Footer: external icon left, read more right */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--personal-border-subtle)]">
                  {v.url && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--personal-accent)] hover:gap-2.5 transition-all"
                    >
                      <ExternalLink className="w-3 h-3" /> Visit
                    </a>
                  )}
                  <Link
                    href={`/ventures/${v.slug}`}
                    className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors ml-auto"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="warm-divider max-w-5xl mx-auto mt-16" />
    </section>
  );
}
