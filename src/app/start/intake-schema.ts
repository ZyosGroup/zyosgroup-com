import { z } from "zod";

// Four-question Opportunity Engine intake — positioning architecture §3 + showcase brief §3.

export const INDUSTRIES = [
  "Professional services",
  "Software / SaaS",
  "Healthcare",
  "Financial services",
  "Legal",
  "Education",
  "Manufacturing",
  "Home services / trades",
  "Association / non-profit",
  "Other",
] as const;

export const COMPANY_SIZES = [
  "1–10 employees",
  "10–50 employees",
  "50–200 employees",
  "200–1000 employees",
  "1000+ employees",
] as const;

export const intakeSchema = z.object({
  industry: z.enum(INDUSTRIES, {
    errorMap: () => ({ message: "Pick the closest industry." }),
  }),
  companySize: z.enum(COMPANY_SIZES, {
    errorMap: () => ({ message: "Pick the closest range." }),
  }),
  bottleneck: z
    .string()
    .trim()
    .min(20, "Give us a couple of sentences so the diagnostic is useful.")
    .max(2000, "Keep it under 2000 characters."),
  name: z.string().trim().min(2, "Your name, please."),
  email: z.string().trim().email("That doesn't look like an email."),
  company: z.string().trim().min(2, "Company name, please."),
  // Honeypot — bots fill this, humans never see it.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type IntakeInput = z.infer<typeof intakeSchema>;
