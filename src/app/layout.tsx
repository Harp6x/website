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
    "Co-Founder of IndieRoam, Founder of BeforeMaps, CTO at MSPaulTherapies. Building automotive expeditions, travel ventures, and digital operating systems. Ex-Cisco.",
  keywords: [
    "Uddip Ranjan Das",
    "harp6x",
    "IndieRoam",
    "BeforeMaps",
    "MSPaulTherapies",
    "automotive expeditions",
    "founder",
    "builder",
    "CTO",
    "cybersecurity",
    "product owner",
  ],
  openGraph: {
    title: "Uddip Ranjan Das — Founder, Builder, Explorer",
    description:
      "Co-Founder at IndieRoam, Founder at BeforeMaps, CTO at MSPaulTherapies. Building automotive expeditions, independent travel ventures, and digital systems. Ex-Cisco.",
    type: "website",
    siteName: "Uddip Ranjan Das",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uddip Ranjan Das — Founder, Builder, Explorer",
    description:
      "Co-Founder at IndieRoam, Founder at BeforeMaps, CTO at MSPaulTherapies. Building automotive expeditions, independent travel ventures, and digital systems. Ex-Cisco.",
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
