"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail } from "lucide-react";

interface Props {
  variant?: "professional" | "personal";
}

export default function Newsletter({ variant = "personal" }: Props) {
  return (
    <section id="newsletter" className="section-padding px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <Mail className="w-6 h-6 text-[#d97706] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            {variant === "professional"
              ? "Stay in the loop."
              : "Follow the journey."}
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-10 leading-relaxed">
            {variant === "professional"
              ? "Occasional updates on cybersecurity, product thinking, and what I'm building next."
              : "Dispatches from the road, the workshop, and the notebook. No spam, just signal."}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            {/* harp6x Substack */}
            <div className="glass rounded-lg p-6">
              <p className="text-[var(--text-secondary)] text-sm font-mono mb-4">Harp6x</p>
              <iframe
                src="https://harp6x.substack.com/embed"
                width="100%"
                height="150"
                style={{ border: "none", background: "transparent" }}
                frameBorder="0"
                scrolling="no"
                title="harp6x newsletter"
              />
            </div>

            {variant === "personal" && (
              <div className="glass rounded-lg p-6">
                <p className="text-[var(--text-secondary)] text-sm font-mono mb-4">
                  There Goes Uddip
                </p>
                <iframe
                  src="https://theregoesuddip.substack.com/embed"
                  width="100%"
                  height="150"
                  style={{ border: "none", background: "transparent" }}
                  frameBorder="0"
                  scrolling="no"
                  title="There Goes Uddip newsletter"
                />
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>

      <div className="divider max-w-5xl mx-auto mt-32" />
    </section>
  );
}
