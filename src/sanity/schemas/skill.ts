import { defineType, defineField } from "sanity";

export default defineType({
  name: "skill",
  title: "Skills & Credentials",
  type: "document",
  fields: [
    defineField({
      name: "technical",
      title: "Technical Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "soft",
      title: "Soft Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "cert", title: "Certificate Name", type: "string" }),
          defineField({ name: "org", title: "Organization", type: "string" }),
        ],
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Skills & Credentials" }) },
});
