import type { Profile } from "./types";

const profile: Profile = {
  name: "Uddip Ranjan Das",
  handle: "harp6x",
  email: "uddip9@gmail.com",
  location: "New Delhi, India",
  currentRole: "Product Owner",
  currentCompany: "(prev. Cisco)",
  focus: "Security & Product",
  tagline: "Building resilient systems.",
  subtitleLine1: "Product thinker. Cybersecurity engineer. Explorer.",
  subtitleLine2:
    "Six years in cybersecurity. From SOC analyst to threat intel to detection engineering to product owner at Cisco.",
  heroKeywords: "Security · Product · Systems",

  bio: [
    "I spent six years in cybersecurity, starting on the front lines of SOC operations, moving into threat intelligence and detection engineering, and eventually owning the product side at Cisco.",
    "At Cisco, I led the SAL Intelligence and Analytics product as Product Owner, turning raw network telemetry and security signals into decisions that actually matter for customers.",
    "The path was straightforward: understand the problem deeply first, then build the solution. That mindset took me from triaging alerts to defining what gets built next.",
  ],
  bioClosing:
    "Outside of work, I chase clarity on mountain roads, think about philosophy, build things with my hands, and try to live a life that still feels alive while doing serious work.",

  stats: [
    { label: "Years in Cybersecurity", value: "6" },
    { label: "As Product Owner", value: "1 yr" },
  ],

  socials: [
    { label: "YouTube", href: "https://youtube.com/@harp6x" },
    { label: "LinkedIn", href: "https://linkedin.com/in/harp6x" },
    { label: "GitHub", href: "https://github.com/harp6x" },
    { label: "Substack", href: "https://substack.com/@harp6x" },
  ],

  professionalEmails: [
    "uddip9@gmail.com",
    "uddipbuilds@gmail.com",
  ],

  personalBrands: {
    harp6x: {
      instagram: "https://instagram.com/harp6x",
      youtube: "https://youtube.com/@harp6x",
      substack: "https://substack.com/@harp6x",
      email: "harp6x@gmail.com",
    },
    theregoesuddip: {
      instagram: "https://instagram.com/theregoesuddip",
      youtube: "https://youtube.com/@theregoesuddip",
      substack: "https://substack.com/@theregoesuddip",
      email: "theregoesuddip@gmail.com",
    },
    jimnyruns: {
      instagram: "https://instagram.com/jimnyruns",
      youtube: "https://youtube.com/@jimnyruns",
    },
  },

  resumePath: "/Uddip_Ranjan_Das_CV.pdf",
};

export default profile;
