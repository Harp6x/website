"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { Profile } from "@/data/types";

const proLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Library", href: "/products" },
  { label: "Contact", href: "#contact" },
];

const personalLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Pillars", href: "#pillars" },
  { label: "Products", href: "/products" },
  { label: "Beyond", href: "#beyond" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

interface Props {
  variant?: "professional" | "personal";
  profile: Profile;
  showProducts?: boolean;
}

export default function Navbar({ variant = "professional", profile, showProducts = true }: Props) {
  const allLinks = variant === "professional" ? proLinks : personalLinks;
  const navLinks = showProducts ? allLinks : allLinks.filter((l) => l.href !== "/products");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-primary-translucent)] backdrop-blur-2xl border-b border-[var(--border)]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.2em] text-[var(--text-primary)] hover:text-[#d97706] transition-colors duration-300"
        >
          {profile.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            )
          )}
          {variant === "professional" ? (
            <Link
              href="/personal"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 tracking-wide"
            >
              Personal
            </Link>
          ) : (
            <Link
              href="/professional"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 tracking-wide"
            >
              Professional
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--text-primary)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bg-primary-translucent)] backdrop-blur-2xl border-b border-[var(--border)]/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              {variant === "professional" ? (
                <Link
                  href="/personal"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Personal
                </Link>
              ) : (
                <Link
                  href="/professional"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Professional
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
