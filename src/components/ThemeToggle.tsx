"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center hover:border-[var(--accent)] transition-all duration-300 shadow-lg"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-[var(--text-muted)]" />
      ) : (
        <Sun className="w-4 h-4 text-[var(--accent)]" />
      )}
    </motion.button>
  );
}
