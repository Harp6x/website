"use client";

import AnimatedSection from "./AnimatedSection";
import { Award, GraduationCap, Trophy } from "lucide-react";

const certs = [
  "Cybereason: Cyber Threat Intelligence Analyst",
  "Pentester Academy: Certified Red Team Professional",
  "D3 Security: SOC Analyst",
  "Innobuzz: Advanced InfoSec Diploma",
];

const achievements = [
  "Reverse Engineering. U.S. Department of Homeland Security",
  "SOC Core Skills. Wild West Hack Fest",
  "Top 1% on TryHackMe and Hack The Box",
  "Contributor to PolyX and Operation Chimera",
  "Intel 471 Intelligence Planning Workshop",
  "Flare Academy. Cybercrime Forums: Investigation and Intelligence Gathering",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[#10b981] font-mono text-sm mb-2 tracking-wider uppercase">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12">
            Certifications & Achievements
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <AnimatedSection delay={0}>
            <div className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] h-full">
              <GraduationCap className="w-8 h-8 text-[#10b981] mb-4" />
              <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[var(--text-primary)] text-sm font-medium">
                    Bachelor of Arts
                  </p>
                  <p className="text-[#71717a] text-xs">
                    Subharti University, New Delhi · 2020–2023
                  </p>
                </div>
                <div>
                  <p className="text-[var(--text-primary)] text-sm font-medium">
                    Senior Secondary (CBSE)
                  </p>
                  <p className="text-[#71717a] text-xs">
                    Indirapuram Public School, Ghaziabad · 2016–2017
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.1}>
            <div className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] h-full">
              <Award className="w-8 h-8 text-[#10b981] mb-4" />
              <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certs.map((cert) => (
                  <li
                    key={cert}
                    className="text-[#71717a] text-sm flex items-start gap-2"
                  >
                    <span className="text-[#10b981] mt-0.5 shrink-0">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Trainings & Achievements */}
          <AnimatedSection delay={0.2}>
            <div className="p-6 rounded-xl bg-[#111118] border border-[#1e1e2e] h-full">
              <Trophy className="w-8 h-8 text-[#10b981] mb-4" />
              <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
                Trainings & Achievements
              </h3>
              <ul className="space-y-2">
                {achievements.map((a) => (
                  <li
                    key={a}
                    className="text-[#71717a] text-sm flex items-start gap-2"
                  >
                    <span className="text-[#10b981] mt-0.5 shrink-0">›</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
