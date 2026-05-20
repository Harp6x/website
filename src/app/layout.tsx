import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
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
  title: "Uddip Ranjan Das — Building Resilient Systems",
  description:
    "Product thinker. Cybersecurity engineer. Explorer. 5+ years in threat intelligence, SOC operations, and security automation. Now building the intelligence layer at Cisco.",
  keywords: [
    "cybersecurity",
    "product owner",
    "threat intelligence",
    "security automation",
    "Uddip Ranjan Das",
    "harp6x",
  ],
  openGraph: {
    title: "Uddip Ranjan Das — Building Resilient Systems",
    description:
      "Product thinker. Cybersecurity engineer. Explorer. Security, automation, and meaningful living.",
    type: "website",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
