# Sanity Studio for zyosgroup.com

This folder contains the Sanity Studio configuration for the zyosgroup.com case-study and outcomes catalog content models.

Pass 1 ships the schema definitions only — they are not yet wired into a deployed Studio. To stand up the Studio locally, install Sanity CLI in this subfolder:

```bash
cd studio
npm init -y
npm install sanity @sanity/vision @sanity/ui styled-components react react-dom
npx sanity init --bare
# point at the schemas in ./schemas
npx sanity dev
```

The schemas (`schemas/caseStudy.ts`, `schemas/outcome.ts`) are the canonical content models used by:

- `/case-studies` — the filterable outcomes catalog (Outcome type)
- `/case-studies/[slug]` — individual case study pages (CaseStudy type)
- Homepage outcomes preview (Outcome type, top 6)
- Per-practice-area outcome filtering (Outcome type, filtered by `serviceLine`)

Pass 2 wires the Studio + GROQ queries into the Next.js app.
