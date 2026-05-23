"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  variant?: "professional" | "personal";
  profile?: Profile;
}

export default function Hero({ variant = "professional", profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  const isPro = variant === "professional";

  const taglineParts = (isPro ? profile.tagline : "Exploring everything.").replace(/\.$/, "").split(" ");
  const lastWord = taglineParts.pop();
  const firstWords = taglineParts.join(" ");

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isPro ? 'topo-grid' : 'warm-topo-grid'}`}>
      {/* Ambient radial glow */}
      <div className={`absolute inset-0 ${isPro ? 'bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.06)_0%,transparent_50%)]' : 'bg-[radial-gradient(ellipse_at_top,var(--personal-glow)_0%,transparent_50%)]'}`} />
      <div className={`absolute inset-0 ${isPro ? 'bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.03)_0%,transparent_40%)]' : 'bg-[radial-gradient(ellipse_at_bottom_right,var(--personal-teal-glow)_0%,transparent_40%)]'}`} />

      {/* Horizontal accent line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "40%" }}
        transition={{ delay: 1.2, duration: 1.0, ease: "easeOut" }}
        className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-[#d97706]/20 to-transparent"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: Main content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.3em] uppercase mb-8">
                {isPro ? profile.heroKeywords : "Travel · Exploration · Philosophy"}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 ${isPro ? 'font-bold' : 'font-serif-heading font-semibold'}`}
            >
              <span className="text-[var(--text-primary)]">{firstWords}</span>
              <br />
              <span className={isPro ? 'text-[#d97706]' : 'text-[var(--personal-accent)]'}>{lastWord}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-[var(--text-secondary)] text-xl md:text-2xl max-w-lg leading-relaxed mb-10"
            >
              {isPro ? profile.subtitleLine1 : "Documenting the pursuit of a non-average life."}
              <br />
              <span className="text-[var(--text-muted)]">
                {isPro
                  ? profile.subtitleLine2
                  : "Travel, philosophy, vehicle builds, and the honest process of becoming."}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {isPro ? (
                <>
                  <a href="#experience" className="px-6 py-3 text-base font-medium bg-[#d97706] text-[var(--btn-text)] rounded hover:bg-[#b45309] transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                    View Work
                  </a>
                  <a href="#skills" className="px-6 py-3 text-base font-medium border border-[var(--border)] text-[var(--text-secondary)] rounded hover:border-[#d97706]/30 hover:text-[var(--text-primary)] transition-all duration-300">
                    Skills &amp; Tools
                  </a>
                  <a href="#contact" className="px-6 py-3 text-base font-medium text-[var(--text-muted)] hover:text-[#d97706] transition-colors duration-300">
                    Contact
                  </a>
                  {profile.professionalResumeUrl && (
                    <a
                      href={profile.professionalResumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-base font-medium text-[var(--text-muted)] hover:text-[#d97706] transition-colors duration-300"
                    >
                      Resume
                    </a>
                  )}
                </>
              ) : (
                <>
                  <a href="#philosophy" className="px-7 py-3.5 text-base font-medium bg-[var(--personal-accent)] text-white rounded-full hover:bg-[var(--personal-accent-soft)] transition-all duration-300 hover:shadow-[0_4px_24px_var(--personal-glow)]">
                    Philosophy
                  </a>
                  <a href="#pillars" className="px-7 py-3.5 text-base font-medium border border-[var(--personal-border)] text-[var(--text-secondary)] rounded-full hover:border-[var(--personal-accent)]/40 hover:text-[var(--text-primary)] transition-all duration-300">
                    Life Pillars
                  </a>
                  <a href="#contact" className="px-7 py-3.5 text-base font-medium text-[var(--text-muted)] hover:text-[var(--personal-accent)] transition-colors duration-300">
                    Contact
                  </a>
                  {profile.personalResumeUrl && (
                    <a
                      href={profile.personalResumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 text-base font-medium text-[var(--text-muted)] hover:text-[var(--personal-accent)] transition-colors duration-300"
                    >
                      Resume
                    </a>
                  )}
                </>
              )}
            </motion.div>
          </div>

          {/* Right: Minimal info column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="hidden lg:flex flex-col gap-8 text-right"
          >
            <div>
              <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">
                Based in
              </p>
              <p className="text-[var(--text-secondary)] text-sm">{profile.location}</p>
            </div>
            {isPro ? (
              <>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">Currently</p>
                  <p className="text-[var(--text-secondary)] text-sm">{profile.currentRole} {profile.currentCompany}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">Focus</p>
                  <p className="text-[var(--text-secondary)] text-sm">{profile.focus}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">Brands</p>
                  <p className="text-[var(--text-secondary)] text-sm">Harp6x · There Goes Uddip · Jimny Runs</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase mb-1">Platforms</p>
                  <p className="text-[var(--text-secondary)] text-sm">YouTube · Instagram · Substack</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-[var(--text-muted)] animate-bounce" />
      </motion.div>
    </section>
  );
}
