import type { Rule } from "sanity";

// Outcome catalog entry — see capability-showcases §7.

export const outcome = {
  name: "outcome",
  title: "Outcome catalog entry",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero number",
      type: "string",
      description: 'e.g. "+$340K ARR" — short and quantified.',
      validation: (r: Rule) => r.required().max(40),
    },
    {
      name: "context",
      title: "Context line",
      type: "string",
      description: 'e.g. "GaaS customer · 6 months"',
      validation: (r: Rule) => r.required().max(160),
    },
    {
      name: "customer",
      title: "Customer label",
      type: "string",
      description: 'Real name if permissioned; otherwise "[Anonymized: ...]"',
    },
    {
      name: "permissioned",
      title: "Customer permission to publish",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "type",
      title: "Outcome type",
      type: "string",
      options: {
        list: ["revenue", "cost", "risk", "time", "quality"],
      },
      validation: (r: Rule) => r.required(),
    },
    {
      name: "serviceLine",
      title: "Service line",
      type: "string",
    },
    {
      name: "engagementModel",
      title: "Engagement model",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
    },
    {
      name: "caseStudy",
      title: "Linked case study (optional)",
      type: "reference",
      to: [{ type: "caseStudy" }],
    },
  ],
};
