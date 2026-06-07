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
  const message = `Industry: ${data.industry}\nCompany size: ${data.companySize}\n\nCurrent bottleneck:\n${data.bottleneck}`;
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

  // Deliver the lead to HubSpot (creates the contact + ties page-view history
  // via the hubspotutk cookie). Logged either way so nothing is silently lost.
  const hutk = cookies().get("hubspotutk")?.value;
  const delivered = await submitToHubSpot(parsed.data, hutk);

  // eslint-disable-next-line no-console
  console.log("[zyosgroup-intake]", {
    receivedAt: new Date().toISOString(),
    source: "zyosgroup.com-intake",
    deliveredToHubSpot: delivered,
    company: parsed.data.company,
    email: parsed.data.email,
  });

  return { status: "ok", submittedAt: new Date().toISOString() };
}
