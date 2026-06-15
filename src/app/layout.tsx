import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Uddip Ranjan Das — Founder, Builder, Explorer",
  description:
    "Founder of Before Maps, Co-founder of Ms Paul Therapies, Creator of Hobie. Building companies, products, and systems with AI. Ex-Cisco. Full-time founder.",
  keywords: [
    "Uddip Ranjan Das",
    "harp6x",
    "Before Maps",
    "Ms Paul Therapies",
    "Hobie",
    "founder",
    "builder",
    "AI",
    "cybersecurity",
    "product owner",
    "vibe coding",
  ],
  openGraph: {
    title: "Uddip Ranjan Das — Founder, Builder, Explorer",
    description:
      "Building three companies. Shipping with AI. Before Maps, Ms Paul Therapies, Hobie.",
    type: "website",
    siteName: "Uddip Ranjan Das",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uddip Ranjan Das — Founder, Builder, Explorer",
    description:
      "Building three companies. Shipping with AI. Before Maps, Ms Paul Therapies, Hobie.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          {children}
          <ThemeToggle />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
