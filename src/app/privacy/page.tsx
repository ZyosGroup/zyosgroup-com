import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zyos Group collects, uses, and protects information across zyosgroup.com, our assessments, and our advertising.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE = "June 8, 2026";

export default function PrivacyPage() {
  return (
    <Section>
      <p className="eyebrow mb-4">Legal</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-3xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-subtle text-sm mono">Effective {EFFECTIVE}</p>

      <div className="mt-10 max-w-prose space-y-8 text-ink/85 leading-relaxed text-[15px]">
        <p>
          This policy explains how Zyos Group (&quot;Zyos Group,&quot;
          &quot;we,&quot; &quot;us&quot;) collects, uses, and protects
          information when you visit {SITE.url}, complete one of our assessments,
          submit a form, or interact with our advertising. By using our site you
          agree to the practices described here.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Information we collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Information you provide.</strong> When you submit an
              intake, a Growth Audit request, an Opportunity Engine assessment,
              or a contact form, we collect details such as your name, work
              email, role, organization, organization size, and the responses
              you choose to share.
            </li>
            <li>
              <strong>Usage and device information.</strong> Like most sites, we
              automatically collect IP address, browser and device type, pages
              viewed, referring source, and similar analytics data through
              cookies and comparable technologies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Analytics and advertising technologies
          </h2>
          <p className="mb-3">
            We use third-party tools to understand site performance and to
            measure and improve our advertising. These tools may set cookies and
            collect usage data, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google Analytics</strong> for site traffic and behavior.
            </li>
            <li>
              <strong>Meta Pixel</strong> (Facebook and Instagram) and{" "}
              <strong>Google Ads</strong> tags to measure ad performance,
              attribute conversions such as completed assessments, and show
              relevant ads to people who have visited our site. This may involve
              sharing limited event data (for example, that a form was
              submitted) with Meta and Google.
            </li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information. You can opt out of
            personalized advertising through your{" "}
            <a
              href="https://www.facebook.com/adpreferences"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary underline underline-offset-4 hover:text-ink"
            >
              Meta ad preferences
            </a>{" "}
            and{" "}
            <a
              href="https://adssettings.google.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary underline underline-offset-4 hover:text-ink"
            >
              Google ad settings
            </a>
            , and you can control cookies through your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            How we use information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to your inquiries and deliver requested assessments and reports.</li>
            <li>To operate, secure, and improve our site and services.</li>
            <li>To measure, target, and optimize our marketing and advertising.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Service providers
          </h2>
          <p>
            We share information with vendors who process it on our behalf,
            including hosting and infrastructure, our customer relationship and
            email platforms, and the analytics and advertising providers named
            above. These providers are permitted to use the information only to
            provide services to us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Data retention and security
          </h2>
          <p>
            We keep personal information only as long as needed for the purposes
            described here or as required by law, and we use reasonable
            technical and organizational measures to protect it. No method of
            transmission or storage is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Your choices and rights
          </h2>
          <p>
            Depending on where you live, you may have rights to access, correct,
            or delete your personal information, or to object to certain
            processing. To make a request, contact us at the address below. You
            may also unsubscribe from marketing emails at any time using the link
            in those messages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. When we do, we will
            revise the effective date above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary tracking-tightish mb-3">
            Contact
          </h2>
          <p>
            Questions about this policy or your information? Email us at{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="text-primary underline underline-offset-4 hover:text-ink"
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
