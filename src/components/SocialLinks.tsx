"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profile from "@/data/profile";
import {
  Camera,
  Play,
  Briefcase,
  Code2,
  AtSign,
  Mail,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: Camera,
  YouTube: Play,
  LinkedIn: Briefcase,
  GitHub: Code2,
  "Twitter / X": AtSign,
  "Blog": BookOpen,
};

export default function SocialLinks() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="font-mono text-[11px] text-[var(--text-muted)] tracking-[0.3em] uppercase mb-10 text-center">
            Connect
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {profile.socials.map((social, i) => {
            const Icon = iconMap[social.label];
            return (
              <AnimatedSection key={social.label} delay={i * 0.06}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-3 px-5 py-4 rounded-lg border border-[var(--border-subtle)] hover:border-[#d97706]/25 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d97706]/0 to-[#d97706]/0 group-hover:from-[#d97706]/[0.03] group-hover:to-transparent transition-all duration-500" />

                  <div className="relative z-10 flex items-center gap-3 w-full">
                    {Icon && (
                      <Icon className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors duration-300" />
                    )}
                    <span className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {social.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--text-faint)] group-hover:text-[#d97706] ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </motion.a>
              </AnimatedSection>
            );
          })}

          {/* Email button */}
          <AnimatedSection delay={profile.socials.length * 0.06}>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-3 px-5 py-4 rounded-lg border border-[#d97706]/20 hover:border-[#d97706]/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d97706]/[0.03] to-transparent group-hover:from-[#d97706]/[0.06] transition-all duration-500" />
              <div className="relative z-10 flex items-center gap-3 w-full">
                <Mail className="w-4 h-4 text-[#d97706]/60 group-hover:text-[#d97706] transition-colors duration-300" />
                <span className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  Email
                </span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-faint)] group-hover:text-[#d97706] ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
