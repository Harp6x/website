"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  profile?: Profile;
}

export default function LandingHero({ profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 topo-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.04)_0%,transparent_70%)]" />

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="relative z-10 mb-16 text-center"
      >
        <p className="font-mono text-sm tracking-[0.3em] text-[#d97706] mb-4">
          {profile.name}
        </p>
        <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto">
          Cybersecurity professional turned product owner. Explorer. Builder.
        </p>
      </motion.div>

      {/* Split */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        {/* Professional */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="h-full"
        >
          <Link
            href="/professional"
            className="group flex flex-col h-full p-10 md:p-16 border border-[var(--border-subtle)] md:border-r-0 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:border-[#d97706]/20 transition-all duration-500 relative overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d97706]/0 to-transparent group-hover:from-[#d97706]/[0.03] transition-all duration-700" />

            <div className="relative z-10">
              <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.3em] uppercase mb-8">
                Professional
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                The work.
              </h2>

              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8 max-w-sm">
                Six years in cybersecurity. SOC, threat intel, detection
                engineering, and product ownership at Cisco.
              </p>

              <div className="text-[var(--text-faint)] text-xs font-mono space-y-1 mb-10">
                <p>{profile.currentRole} {profile.currentCompany}</p>
                <p>{profile.location}</p>
              </div>

              <div className="flex items-center gap-2 text-[#d97706] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                <span>Enter</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Personal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="h-full"
        >
          <Link
            href="/personal"
            className="group flex flex-col h-full p-10 md:p-16 border border-[var(--border-subtle)] md:border-l-[var(--border-subtle)] rounded-b-lg md:rounded-bl-none md:rounded-r-lg hover:border-[#d97706]/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#d97706]/0 to-transparent group-hover:from-[#d97706]/[0.03] transition-all duration-700" />

            <div className="relative z-10">
              <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.3em] uppercase mb-8">
                Personal
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                The world outside.
              </h2>

              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8 max-w-sm">
                Travel, exploration, philosophy, vehicle builds, and the
                documented pursuit of a life where work, creativity, and
                meaning are integrated.
              </p>

              <div className="text-[var(--text-faint)] text-xs font-mono space-y-1 mb-10">
                <p>Harp6x · There Goes Uddip · Jimny Runs</p>
                <p>YouTube · Instagram · Substack</p>
              </div>

              <div className="flex items-center gap-2 text-[#d97706] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="relative z-10 mt-16 text-center"
      >
        <p className="text-[var(--text-faint)] text-sm italic">
          {profile.subtitleLine1}
        </p>
      </motion.div>
    </section>
  );
}
