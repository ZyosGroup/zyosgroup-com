"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitIntakeAction, type IntakeState } from "./actions";
import { INDUSTRIES, COMPANY_SIZES } from "./intake-schema";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle2, Loader2 } from "lucide-react";

const initial: IntakeState = { status: "idle" };

function field(label: string, error?: string) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm font-medium text-primary">{label}</span>
      {error ? (
        <span className="text-xs text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function IntakeForm() {
  const [state, formAction] = useFormState(submitIntakeAction, initial);

  // Conversion: fire once when the intake succeeds. Pushes to the GTM
  // dataLayer; GTM forwards to GA4 as the `generate_lead` key event.
  useEffect(() => {
    if (state.status === "ok") {
      trackEvent("generate_lead", {
        form: "opportunity_engine",
        source: "zyosgroup.com-intake",
      });
    }
  }, [state.status]);

  if (state.status === "ok") {
    return (
      <div className="rounded-lg border border-accent/30 bg-white p-8">
        <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden />
        <h2 className="mt-4 text-2xl font-semibold text-primary tracking-tightish">
          Intake received. The diagnostic is in motion.
        </h2>
        <ol className="mt-5 space-y-3 text-[15px] text-ink/80">
          <li>
            <span className="mono text-xs text-accent mr-2">01</span>
            We&apos;re scoring your intake against the five-dimension readiness
            model right now.
          </li>
          <li>
            <span className="mono text-xs text-accent mr-2">02</span>
            You&apos;ll receive your diagnostic snapshot in your inbox within 60
            minutes.
          </li>
          <li>
            <span className="mono text-xs text-accent mr-2">03</span>
            A real-human-reviewed scoped proposal lands by next business day.
          </li>
        </ol>
        <p className="mt-6 text-sm text-subtle">
          The diagnostic could route you to an engagement, to conditions to
          address first, or to &ldquo;not yet, revisit&rdquo;. We disqualify when we should.
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values ?? {} : {};

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />

      <div>
        {field("Industry", errors.industry)}
        <select
          name="industry"
          defaultValue={(values.industry as string) ?? ""}
          required
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        >
          <option value="" disabled>
            Pick the closest match
          </option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        {field("Company size", errors.companySize)}
        <select
          name="companySize"
          defaultValue={(values.companySize as string) ?? ""}
          required
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        >
          <option value="" disabled>
            Pick the closest range
          </option>
          {COMPANY_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        {field("Current bottleneck", errors.bottleneck)}
        <textarea
          name="bottleneck"
          defaultValue={values.bottleneck ?? ""}
          required
          rows={5}
          placeholder="Where revenue leaks, where labor compounds, where data sits idle, where decisions are slow. A few sentences is plenty."
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          {field("Your name", errors.name)}
          <input
            type="text"
            name="name"
            defaultValue={values.name ?? ""}
            required
            autoComplete="name"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
          />
        </div>
        <div>
          {field("Company", errors.company)}
          <input
            type="text"
            name="company"
            defaultValue={values.company ?? ""}
            required
            autoComplete="organization"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
          />
        </div>
      </div>

      <div>
        {field("Work email", errors.email)}
        <input
          type="email"
          name="email"
          defaultValue={values.email ?? ""}
          required
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2.5 text-[15px] text-ink focus:border-primary"
        />
      </div>

      <SubmitButton />
      <p className="text-xs text-subtle">
        We&apos;ll only use this to deliver your diagnostic + proposal. No newsletter
        sign-up, no shared lists.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-ink transition-colors disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Sending intake…
        </>
      ) : (
        <>Send my intake</>
      )}
    </button>
  );
}
