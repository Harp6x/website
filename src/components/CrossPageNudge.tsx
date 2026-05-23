"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  variant: "professional" | "personal";
}

export default function CrossPageNudge({ variant }: Props) {
  const isPro = variant === "professional";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.6 }}
      className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${
        isPro ? "right-6" : "left-6"
      }`}
    >
      <Link
        href={isPro ? "/personal" : "/professional"}
        className="group flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors duration-300"
          style={{ writingMode: "vertical-rl" }}
        >
          {isPro ? "Explore my creative side" : "Visit my professional side"}
        </span>
        {isPro ? (
          <ArrowRight className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors duration-300 group-hover:translate-x-0.5 transition-transform" />
        ) : (
          <ArrowLeft className="w-3.5 h-3.5 text-[var(--text-faint)] group-hover:text-[#d97706] transition-colors duration-300 group-hover:-translate-x-0.5 transition-transform" />
        )}
      </Link>
    </motion.div>
  );
}
