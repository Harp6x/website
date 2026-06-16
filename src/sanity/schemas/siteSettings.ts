import { defineType, defineField } from "sanity";

const tagArray = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    description,
    type: "array",
    group: "options",
    of: [{ type: "object", fields: [defineField({ name: "value", type: "string", title: "Value", validation: (r) => r.required() })], preview: { select: { title: "value" } } }],
  });

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "general", title: "General", default: true },
    { name: "pages", title: "Page Visibility" },
    { name: "options", title: "Dropdown Options" },
  ],
  fields: [
    // ── General ──
    defineField({ name: "currentRole", title: "Current Role", type: "string", group: "general" }),
    defineField({ name: "currentCompany", title: "Current Company", type: "string", group: "general" }),
    defineField({ name: "location", title: "Location", type: "string", group: "general" }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "general" }),
    defineField({ name: "focus", title: "Focus Area", type: "string", group: "general" }),
    defineField({ name: "subtitleLine1", title: "Hero Subtitle Line 1", type: "string", group: "general" }),
    defineField({ name: "subtitleLine2", title: "Hero Subtitle Line 2", type: "text", rows: 2, group: "general" }),
    defineField({
      name: "navigation",
      title: "Navigation Links",
      type: "array",
      group: "general",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string", title: "Label" },
          { name: "href", type: "string", title: "URL" },
        ],
      }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      group: "general",
      fields: [
        { name: "github", type: "url", title: "GitHub" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "youtube", type: "url", title: "YouTube" },
        { name: "substack", type: "url", title: "Substack" },
        { name: "email", type: "string", title: "Email" },
      ],
    }),
    defineField({ name: "footerText", title: "Footer Text", type: "text", rows: 2, group: "general" }),
    defineField({ name: "seo", title: "Default SEO", type: "seo", group: "general" }),

    // ── Page Visibility Toggles ──
    defineField({ name: "enableProfessionalPage", title: "Enable Professional Page", type: "boolean", initialValue: true, group: "pages", description: "Toggle the Professional page on/off." }),
    defineField({ name: "enablePersonalPage", title: "Enable Personal Page", type: "boolean", initialValue: true, group: "pages", description: "Toggle the Personal page on/off." }),
    defineField({ name: "enableProductsPage", title: "Enable Products Page", type: "boolean", initialValue: true, group: "pages", description: "Toggle the Products page on/off." }),
    defineField({ name: "enableBlogPage", title: "Enable Blog Page", type: "boolean", initialValue: true, group: "pages", description: "Toggle the Blog page on/off." }),

    // ── Dropdown Options (CMS-editable tag lists) ──
    tagArray("blogCategories", "Blog Categories", "Options for the Blog category dropdown (e.g. Cybersecurity, Travel, Philosophy)"),
    tagArray("projectCategories", "Project Categories", "Options for the Project category dropdown (e.g. Security, Product, AI)"),
    tagArray("journalCategories", "Journal Categories", "Options for the Journal Topic category dropdown"),
    tagArray("productThemes", "Product Themes", "Options for the Product theme dropdown (e.g. AI & Automation, Cybersecurity)"),
    tagArray("productTypes", "Product Types", "Options for the Product type dropdown (e.g. Template, eBook, Course)"),
    tagArray("ventureStatuses", "Venture Statuses", "Options for the Venture status dropdown (e.g. active, building, paused)"),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
