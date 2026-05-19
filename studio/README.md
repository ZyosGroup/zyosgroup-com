# Sanity Studio for zyosgroup.com

Local Studio for case studies, outcomes catalog, and posts (LinkedIn Newsletter cross-posts).

## Schemas

- `schemas/caseStudy.ts` — customer + permission status + service-component mix + situation / work / outcomes + quote / photo + body
- `schemas/outcome.ts` — quantified hero number + context line + outcome type + service-line + engagement-model + industry + case-study ref + permission status
- `schemas/post.ts` — title + slug + author + published-at + categories + body + canonical-URL (for LinkedIn Newsletter cross-posts, so we don't split the entity per content-engine-playbook §5)

## Run locally

```bash
cd studio
npm install
npx sanity dev
```

Studio runs on http://localhost:3333. Local dataset is in-memory until a real Sanity cloud project is provisioned.

## Pass 2 status

- Schemas drafted (3 types)
- Local config in place (`sanity.config.ts` + `sanity.cli.ts`)
- **NOT deployed to Sanity cloud yet** — by design. Pass 3 wires the cloud project + GROQ queries into Next.js.

When provisioning the real project:

1. Run `npx sanity@latest init` to create a cloud project (or attach to an existing one)
2. Set `SANITY_STUDIO_PROJECT_ID` + `SANITY_STUDIO_DATASET` env vars (or replace placeholders in `sanity.config.ts`)
3. `npx sanity deploy` to deploy the Studio (admin UI)
4. Wire the `next-sanity` client into `src/lib/sanity.ts` and convert OutcomeCard / case-studies to GROQ-fetched data

## Why local-only first

Per the pass 2 spec — case studies live as placeholder/permission-pending data; outcomes catalog runs from the seed list in `OutcomeCard.tsx`; full Sanity wiring defers to pass 3 when there's customer content to publish.
