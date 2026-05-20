import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "currentRole", title: "Current Role", type: "string" }),
    defineField({ name: "currentCompany", title: "Current Company", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "focus", title: "Focus Area", type: "string" }),
    defineField({
      name: "subtitleLine1",
      title: "Hero Subtitle Line 1",
      type: "string",
    }),
    defineField({
      name: "subtitleLine2",
      title: "Hero Subtitle Line 2",
      type: "text",
      rows: 2,
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
