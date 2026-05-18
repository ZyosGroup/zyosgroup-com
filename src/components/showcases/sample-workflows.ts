import type { AgentWorkflowCardProps } from "./AgentWorkflowCard";

// Six worked examples per zyosgroup-com-capability-showcases.md §2.
// Used on homepage (2 of 6) and on /solutions/agent-as-a-service (all 6, pass 2).

export const SAMPLE_WORKFLOWS: AgentWorkflowCardProps[] = [
  {
    area: "Sales",
    title: "Outbound + ABM Agent Workflow",
    outcome:
      "Discovery → enrichment → personalized outreach → reply triage → meeting booked → CRM updated → follow-up sequencing → human handoff.",
    variant: "Workflows",
    steps: [
      { label: "Discovery", trace: "Pulling target ICP cohort from CRM + intent feeds." },
      { label: "Enrichment", trace: "Resolving company firmographics + buying-committee signals." },
      { label: "Personalized outreach", trace: "Drafting and queuing tailored opener referencing customer's stage + pain." },
      { label: "Reply triage", trace: "Classifying replies into book-meeting / not-now / not-fit / route-to-human." },
      { label: "Meeting booked", trace: "Negotiating slot via shared availability + sending invite." },
      { label: "CRM updated", trace: "Writing prospect record with reasoning trace + next action." },
      { label: "Human handoff", trace: "Briefing AE with thread + diagnostic + recommended angle." },
    ],
    metric: {
      value: "6.2% reply rate",
      label: "vs ~1.8% industry baseline · sample engagement window",
    },
  },
  {
    area: "Marketing",
    title: "Content + Distribution Agent Workflow",
    outcome:
      "Topic research → keyword targeting → draft → editorial review → publish → social distribution → measurement → next-topic recommendation.",
    variant: "Workflows",
    steps: [
      { label: "Topic research", trace: "Mining GSC queries + LLM-citation gaps for this quarter's theme." },
      { label: "Keyword targeting", trace: "Selecting head + long-tail set with KD and intent ranking." },
      { label: "Draft", trace: "Producing playbook draft with Quick Answer block + entity stacking." },
      { label: "Editorial review", trace: "Routing to human reviewer with proposed edits flagged inline." },
      { label: "Publish", trace: "Pushing to CMS + validating JSON-LD + submitting to GSC." },
      { label: "Social distribution", trace: "Adapting to LinkedIn / Facebook native formats; scheduling." },
      { label: "Measurement", trace: "Tracking impressions + LLM citations + inbound from organic." },
    ],
    metric: {
      value: "1 piece / week shipped",
      label: "+ distribution per content-engine-playbook.md cadence",
    },
  },
  {
    area: "Customer Support",
    title: "Tier-1 Resolution Agent Workflow",
    outcome:
      "Ticket intake → classification → knowledge-base retrieval → resolution drafting → human review or auto-send → SLA tracking → escalation.",
    variant: "Lean",
    steps: [
      { label: "Ticket intake", trace: "Capturing inbound from email / portal / Postmark webhook." },
      { label: "Classification", trace: "Routing by topic + severity + customer tier." },
      { label: "KB retrieval", trace: "Resolving the matching playbook with confidence score." },
      { label: "Draft response", trace: "Composing reply grounded in retrieved docs + customer history." },
      { label: "Human review or auto-send", trace: "Sending if confidence > threshold; otherwise queueing for CSM." },
      { label: "SLA tracking", trace: "Logging response time against contractual SLA." },
      { label: "Escalation", trace: "Promoting to human owner with full context on miss or repeat." },
    ],
    metric: {
      value: "−42% TTFR",
      label: "Time-to-first-resolution · 9-week engagement window (anonymized)",
    },
  },
  {
    area: "Operations",
    title: "Process Anomaly Agent Workflow",
    outcome:
      "Monitoring → anomaly detection → root-cause hypothesis → notification → corrective action proposal → outcome measurement.",
    variant: "Systems",
    steps: [
      { label: "Monitoring", trace: "Watching KPIs against baseline windows." },
      { label: "Anomaly detection", trace: "Flagging deviations beyond control limits." },
      { label: "Root-cause hypothesis", trace: "Joining signals across systems to propose explanation." },
      { label: "Notification", trace: "Posting to the right owner with context bundle." },
      { label: "Corrective action proposal", trace: "Drafting proposed change with expected value-impact." },
      { label: "Outcome measurement", trace: "Tracking whether the change closed the gap." },
    ],
    metric: {
      value: "$180K / yr saved",
      label: "Process-anomaly catch rate · 4-month engagement (anonymized)",
    },
  },
  {
    area: "Finance",
    title: "Reconciliation + Forecast Agent Workflow",
    outcome:
      "Ingestion → categorization → reconciliation against bank / ERP → variance flagging → forecast adjustment → CFO summary.",
    variant: "Insights",
    steps: [
      { label: "Ingestion", trace: "Pulling transactions from connected accounts." },
      { label: "Categorization", trace: "Classifying with customer-tuned chart of accounts." },
      { label: "Reconciliation", trace: "Matching against bank statements + ERP records." },
      { label: "Variance flagging", trace: "Highlighting differences over threshold with reasoning." },
      { label: "Forecast adjustment", trace: "Updating cash + P&L forecast with new variance." },
      { label: "CFO summary", trace: "Composing month-end summary + open items." },
    ],
    metric: {
      value: "3 days saved / mo",
      label: "Close cycle · finance team time reclaimed (anonymized)",
    },
  },
  {
    area: "HR",
    title: "Onboarding + Knowledge Agent Workflow",
    outcome:
      "Hire detection → personalized onboarding plan → access provisioning → progress tracking → check-ins → 30/60/90 surveys.",
    variant: "Workflows",
    steps: [
      { label: "Hire detection", trace: "Listening on HRIS for new-hire events." },
      { label: "Onboarding plan", trace: "Tailoring 30/60/90 plan by role + manager preferences." },
      { label: "Access provisioning", trace: "Requesting accounts and tooling with audit trail." },
      { label: "Progress tracking", trace: "Logging milestones + flagging blocked owners." },
      { label: "Check-ins", trace: "Scheduling manager + HR touch-points + capturing notes." },
      { label: "Surveys", trace: "Running 30/60/90 surveys + summarizing themes to HR." },
    ],
    metric: {
      value: "+18 NPS",
      label: "New-hire onboarding NPS over 3-month engagement (anonymized)",
    },
  },
];
