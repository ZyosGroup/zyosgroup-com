import type { Rule } from "sanity";

// Case study schema — see content-engine-playbook §3.C + showcase-brief §2.

export const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (r: Rule) => r.required().min(8).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r: Rule) => r.required(),
    },
    {
      name: "customer",
      title: "Customer name (display)",
      type: "string",
      description:
        "Use real name if permissioned; otherwise '[Anonymized: industry + region + size]'.",
    },
    {
      name: "permissioned",
      title: "Customer permission to publish",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
    },
    {
      name: "engagementModel",
      title: "Engagement model",
      type: "string",
      options: {
        list: [
          "Fixed Price",
          "Retainer",
          "Build & Operate Retainer",
          "AaaS",
          "GaaS",
        ],
      },
    },
    {
      name: "serviceLine",
      title: "Service line",
      type: "string",
      options: {
        list: [
          "Software & Data",
          "Digital Transformation",
          "Operations & Scaling",
          "Integrated Marketing",
          "Agent as a Service",
          "Growth as a Service",
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
      name: "situation",
      title: "Situation",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "approach",
      title: "What we did",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "outcome",
      title: "Outcome",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "metrics",
      title: "Quantified metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Hero number" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    },
    {
      name: "founderReflectionUrl",
      title: "Founder-on-camera reflection (Track A)",
      type: "url",
      description: "60–90s Paul-on-camera. Track A only on first ship.",
    },
    {
      name: "customerVideoUrl",
      title: "Customer-supplied video (Track B — only if separately permissioned)",
      type: "url",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
