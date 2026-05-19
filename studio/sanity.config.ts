import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// Local Studio config for zyosgroup.com.
// Pass 2: studio scaffolds locally; NOT deployed to Sanity cloud yet.
// Run from /studio: `npm install && npx sanity dev` to launch on :3333.
//
// projectId + dataset placeholders — replace with real values when the
// Sanity cloud project is provisioned. Local Studio runs against an
// in-memory dataset until then.

export default defineConfig({
  name: "zyosgroup-com-studio",
  title: "Zyos Group · Content",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "placeholder-project",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
