"use server";

import { intakeSchema, type IntakeInput } from "./intake-schema";

export type IntakeState =
  | { status: "idle" }
  | { status: "ok"; submittedAt: string }
  | { status: "error"; errors: Partial<Record<keyof IntakeInput, string>>; values?: Partial<IntakeInput> };

export async function submitIntakeAction(
  _prev: IntakeState,
  formData: FormData
): Promise<IntakeState> {
  const raw = {
    industry: formData.get("industry"),
    companySize: formData.get("companySize"),
    bottleneck: formData.get("bottleneck"),
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    website: formData.get("website") ?? "",
  };

  const parsed = intakeSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Partial<Record<keyof IntakeInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof IntakeInput | undefined;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      errors,
      values: {
        industry: raw.industry as IntakeInput["industry"],
        companySize: raw.companySize as IntakeInput["companySize"],
        bottleneck: typeof raw.bottleneck === "string" ? raw.bottleneck : "",
        name: typeof raw.name === "string" ? raw.name : "",
        email: typeof raw.email === "string" ? raw.email : "",
        company: typeof raw.company === "string" ? raw.company : "",
      },
    };
  }

  // Honeypot — pretend success without doing anything if filled.
  if (parsed.data.website) {
    return { status: "ok", submittedAt: new Date().toISOString() };
  }

  // TODO: wire to ZyosApp /api/intake per showcase-brief §3 + §7.
  // For first ship we log the intake. ZyosApp work — one new Resend
  // template + one new prospect source tag — is queued separately.
  // eslint-disable-next-line no-console
  console.log("[zyosgroup-intake]", {
    receivedAt: new Date().toISOString(),
    source: "zyosgroup.com-intake",
    industry: parsed.data.industry,
    companySize: parsed.data.companySize,
    bottleneck: parsed.data.bottleneck.slice(0, 200) + (parsed.data.bottleneck.length > 200 ? "…" : ""),
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
  });

  return { status: "ok", submittedAt: new Date().toISOString() };
}
