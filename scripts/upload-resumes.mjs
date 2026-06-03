#!/usr/bin/env node
/**
 * One-off: upload the two resume PDFs to Sanity and attach them to the profile singleton.
 * Run: node scripts/upload-resumes.mjs
 */
import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { basename } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const FILES = {
  professionalResume:
    "/Users/udddas/Documents/Imp docs personal generated/resumes-and-career/Uddip Ranjan Das Resume (1).pdf",
  personalResume:
    "/Users/udddas/Documents/Imp docs personal generated/resumes-and-career/Travel Trek Resume Uddip Ranjan Das copy.pdf",
};

async function run() {
  const patch = {};
  for (const [field, path] of Object.entries(FILES)) {
    console.log(`  → Uploading ${field}: ${basename(path)}`);
    const buffer = readFileSync(path);
    const asset = await client.assets.upload("file", buffer, {
      filename: basename(path),
      contentType: "application/pdf",
    });
    patch[field] = { _type: "file", asset: { _type: "reference", _ref: asset._id } };
    console.log(`    ✓ asset ${asset._id}`);
  }
  await client.patch("profile-singleton").set(patch).commit();
  console.log("\n✅ Profile updated with both resumes.");
}

run().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});
