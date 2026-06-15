import { seo } from "./objects/seo";
import { portableText } from "./objects/portable-text";
import blogPost from "./blogPost";
import siteSettings from "./siteSettings";
import profile from "./profile";
import experience from "./experience";
import project from "./project";
import skill from "./skill";
import beyondWork from "./beyondWork";
import philosophy from "./philosophy";
import journalTopic from "./journalTopic";
import personalAbout from "./personalAbout";
import lifePillar from "./lifePillar";
import product from "./product";
import venture from "./venture";

export const schemaTypes = [
  // Object types (must be registered before document types that use them)
  seo,
  portableText,
  // Document types
  blogPost,
  siteSettings,
  profile,
  experience,
  project,
  skill,
  beyondWork,
  philosophy,
  journalTopic,
  personalAbout,
  lifePillar,
  product,
  venture,
];
