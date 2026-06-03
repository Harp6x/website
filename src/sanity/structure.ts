import type { StructureResolver } from "sanity/structure";

/**
 * Custom Studio desk structure.
 *
 * Organized into clear groups separated by dividers:
 *   Site (singletons) · Professional · Personal · Products · Blog
 *
 * Singletons (Site Settings, Profile, Skills, Personal About) open a single
 * fixed document instead of a list, so there's never more than one.
 */

// Document types that are rendered as explicit list/folder items below and
// should therefore NOT also appear in the auto-generated root list.
const HANDLED_TYPES = [
  "siteSettings",
  "profile",
  "skill",
  "personalAbout",
  "experience",
  "project",
  "philosophy",
  "lifePillar",
  "journalTopic",
  "beyondWork",
  "product",
  "blogPost",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ─── Site ───
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(
          S.document().schemaType("profile").documentId("profile-singleton")
        ),

      S.divider(),

      // ─── Professional ───
      S.listItem()
        .title("Professional")
        .child(
          S.list()
            .title("Professional")
            .items([
              S.listItem()
                .title("Experience")
                .child(S.documentTypeList("experience").title("Experience")),
              S.listItem()
                .title("Projects")
                .child(S.documentTypeList("project").title("Projects")),
              S.listItem()
                .title("Skills")
                .child(
                  S.document()
                    .schemaType("skill")
                    .documentId("skills-singleton")
                ),
            ])
        ),

      // ─── Personal ───
      S.listItem()
        .title("Personal")
        .child(
          S.list()
            .title("Personal")
            .items([
              S.listItem()
                .title("Personal About")
                .child(
                  S.document()
                    .schemaType("personalAbout")
                    .documentId("personal-about-singleton")
                ),
              S.listItem()
                .title("Philosophy")
                .child(S.documentTypeList("philosophy").title("Philosophy")),
              S.listItem()
                .title("Life Pillars")
                .child(S.documentTypeList("lifePillar").title("Life Pillars")),
              S.listItem()
                .title("Journal Topics")
                .child(
                  S.documentTypeList("journalTopic").title("Journal Topics")
                ),
              S.listItem()
                .title("Beyond Work")
                .child(S.documentTypeList("beyondWork").title("Beyond Work")),
            ])
        ),

      S.divider(),

      // ─── Products ───
      S.listItem()
        .title("Products")
        .child(S.documentTypeList("product").title("Products")),

      S.divider(),

      // ─── Blog ───
      S.listItem()
        .title("Blog Posts")
        .child(S.documentTypeList("blogPost").title("Blog Posts")),

      // Any other (future) document types fall through here.
      ...S.documentTypeListItems().filter(
        (item) => !HANDLED_TYPES.includes(item.getId() ?? "")
      ),
    ]);
