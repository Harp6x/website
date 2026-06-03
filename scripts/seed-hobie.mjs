#!/usr/bin/env node
/**
 * Focused seed: pushes only the "hobie" project to Sanity via createOrReplace.
 * Uses a stable _id ("project-hobie") and a fractional order (1.5) so it slots
 * right after the Cisco project without renumbering project-1..N.
 * Run: node scripts/seed-hobie.mjs
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const doc = {
  _id: "project-hobie",
  _type: "project",
  title: "hobie",
  category: "Product / Side Project",
  description:
    "A cozy hobby-tracking studio. roadmaps, quests, and focus timers that turn casual interest into real, visible progress.",
  thinking:
    "Most hobby apps are either rigid course platforms or empty timers. hobie sits in between. just enough structure to keep momentum, never enough to kill the joy.",
  tags: ["React", "Supabase", "Product Design", "Vite"],
  link: "https://myhobie.vercel.app",
  order: 1.5,
};

const res = await client.createOrReplace(doc);
console.log(`✅ Upserted ${res._id} (${res.title})`);
