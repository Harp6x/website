"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  variant: "professional" | "personal";
}

export default function CrossPageNudge({ variant }: Props) {
  const isPro = variant === "professional";
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.6 }}
      className={`fixed top-0 bottom-0 z-40 hidden lg:flex items-center ${
        isPro ? "right-0" : "left-0"
      }`}
    >
      {/* Hover glow zone */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: isPro
            ? "linear-gradient(to left, rgba(194, 112, 58, 0.12) 0%, rgba(194, 112, 58, 0.04) 40%, transparent 100%)"
            : "linear-gradient(to right, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.03) 40%, transparent 100%)",
          width: "200px",
        }}
      />

      <Link
        href={isPro ? "/personal" : "/professional"}
        className={`group relative flex flex-col items-center gap-4 px-5 py-10 ${
          isPro ? "mr-2" : "ml-2"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`text-[12px] font-mono tracking-[0.18em] uppercase transition-all duration-400 ${
            isPro
              ? "text-[var(--text-faint)] group-hover:text-[#c2703a]"
              : "text-[var(--text-faint)] group-hover:text-[#dc2626]"
          } ${hovered ? "text-[13px] tracking-[0.2em]" : ""}`}
          style={{ writingMode: "vertical-rl" }}
        >
          {isPro ? "Explore my creative side" : "Visit my professional side"}
        </span>
        {isPro ? (
          <ArrowRight
            className={`w-4 h-4 transition-all duration-300 ${
              hovered
                ? "text-[#c2703a] translate-x-1"
                : "text-[var(--text-faint)]"
            }`}
          />
        ) : (
          <ArrowLeft
            className={`w-4 h-4 transition-all duration-300 ${
              hovered
                ? "text-[#dc2626] -translate-x-1"
                : "text-[var(--text-faint)]"
            }`}
          />
        )}
      </Link>
    </motion.div>
  );
}
