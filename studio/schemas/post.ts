import type { Rule } from "sanity";

// Blog post / LinkedIn Newsletter cross-post schema.
// Per content-engine-playbook §5 — we never republish in full to avoid
// splitting the entity; this schema carries a canonical URL so the published
// archive can link out rather than rehost.

export const post = {
  name: "post",
  title: "Post / Brief Issue",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (r: Rule) => r.required().min(8).max(140),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r: Rule) => r.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Paul Ruddy",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (r: Rule) => r.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Agentic AI",
          "Operating model",
          "Customer success",
          "Founder essay",
          "GEO + SEO",
          "Case study",
          "Product notes",
        ],
      },
    },
    {
      name: "summary",
      title: "Summary (Quick Answer)",
      type: "text",
      rows: 4,
      description: "40–80 words. LLMs lift this as the citation snippet.",
      validation: (r: Rule) => r.required().min(120).max(700),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL (for LinkedIn Newsletter cross-posts)",
      type: "url",
      description:
        "If this post is published canonically on LinkedIn / paulruddy.com / zyos.io, link here so we don't split the entity.",
    },
  ],
};
