import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { sanityConfig } from "./config";
import { structure } from "./structure";

// Singletons: only ever one document of these types, edited in place.
const SINGLETON_TYPES = new Set([
  "siteSettings",
  "profile",
  "skill",
  "personalAbout",
]);

export default defineConfig({
  name: "portfolio-studio",
  title: "Portfolio CMS",
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
  basePath: "/studio",
  document: {
    // Hide singletons from the global "create new" menu.
    newDocumentOptions: (prev) =>
      prev.filter((opt) => !SINGLETON_TYPES.has(opt.templateId)),
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(({ action }) =>
            ["publish", "discardChanges", "restore"].includes(action ?? "")
          )
        : prev,
  },
});
