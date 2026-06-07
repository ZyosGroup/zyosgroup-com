"use server";

import { cookies } from "next/headers";
import { intakeSchema, type IntakeInput } from "./intake-schema";
import { SITE, ANALYTICS } from "@/lib/site";

// Deliver the lead to HubSpot via the Forms Submission API. Creates/updates the
// contact (portal 6624575) and, via the hubspotutk cookie, ties the contact to
// their page-view history. Requires HUBSPOT_FORM_GUID (a HubSpot form's GUID) in
// the env; if unset, the lead is logged but not delivered.
async function submitToHubSpot(data: IntakeInput, hutk?: string): Promise<boolean> {
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  const portalId = ANALYTICS.hubspotPortalId;
  if (!formGuid) {
    // eslint-disable-next-line no-console
    console.warn("[zyosgroup-intake] HUBSPOT_FORM_GUID not set — lead NOT delivered to HubSpot");
    return false;
  }
  const parts = data.name.trim().split(/\s+/);
  const firstname = parts[0] ?? data.name;
  const lastname = parts.slice(1).join(" ") || firstname;
  const message = `Segment: ${data.segment}\nIndustry: ${data.industry}\nCompany size: ${data.companySize}\n\nCurrent bottleneck:\n${data.bottleneck}`;
  const body = {
    fields: [
      { name: "email", value: data.email },
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "company", value: data.company },
      { name: "message", value: message },
    ],
    context: {
      ...(hutk ? { hutk } : {}),
      pageUri: `${SITE.url}/start`,
      pageName: "Opportunity Engine intake",
    },
  };
  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    );
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error("[zyosgroup-intake] HubSpot submit failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[zyosgroup-intake] HubSpot submit error", e);
    return false;
  }
}

// Email the lead via Resend (REST API, no SDK dependency). Sends to RESEND_TO
// (or the site contact email), reply-to the prospect so you can reply directly.
// Env-gated on RESEND_API_KEY.
async function emailLead(data: IntakeInput): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // eslint-disable-next-line no-console
    console.warn("[zyosgroup-intake] RESEND_API_KEY not set — lead NOT emailed");
    return false;
  }
  const from = process.env.RESEND_FROM || "Zyos Group <noreply@zyosgroup.com>";
  const to = (process.env.RESEND_TO || SITE.contactEmail)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const text = [
    "New Opportunity Engine intake — zyosgroup.com",
    "",
    `Name:         ${data.name}`,
    `Email:        ${data.email}`,
    `Company:      ${data.company}`,
    `Segment:      ${data.segment}`,
    `Industry:     ${data.industry}`,
    `Company size: ${data.companySize}`,
    "",
    "Current bottleneck:",
    data.bottleneck,
  ].join("\n");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        reply_to: data.email,
        subject: `New intake: ${data.company} · ${data.industry}`,
        text,
      }),
    });
    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error("[zyosgroup-intake] Resend failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[zyosgroup-intake] Resend error", e);
    return false;
  }
}

export type IntakeState =
  | { status: "idle" }
  | { status: "ok"; submittedAt: string; segment: IntakeInput["segment"]; optIn: boolean }
  | { status: "error"; errors: Partial<Record<keyof IntakeInput, string>>; values?: Partial<IntakeInput> };

export async function submitIntakeAction(
  _prev: IntakeState,
  formData: FormData
): Promise<IntakeState> {
  const optIn = formData.get("optIn") === "on";
  const raw = {
    segment: formData.get("segment"),
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
        segment: raw.segment as IntakeInput["segment"],
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
    return { status: "ok", submittedAt: new Date().toISOString(), segment: parsed.data.segment, optIn };
  }

  // Deliver the lead: email via Resend (primary) + HubSpot if configured.
  // Both are env-gated and run in parallel; logged either way so nothing is lost.
  const hutk = cookies().get("hubspotutk")?.value;
  const [emailed, deliveredToHubSpot] = await Promise.all([
    emailLead(parsed.data),
    submitToHubSpot(parsed.data, hutk),
  ]);

  // eslint-disable-next-line no-console
  console.log("[zyosgroup-intake]", {
    receivedAt: new Date().toISOString(),
    source: "zyosgroup.com-intake",
    emailed,
    deliveredToHubSpot,
    company: parsed.data.company,
    email: parsed.data.email,
    segment: parsed.data.segment,
    optIn,
  });

  return { status: "ok", submittedAt: new Date().toISOString(), segment: parsed.data.segment, optIn };
}
