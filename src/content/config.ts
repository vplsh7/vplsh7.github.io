import { defineCollection, z } from "astro:content";

// Define schema for changelogs
const changelogSchema = z.object({
  title: z.string(),
  date: z.string(), // you can switch to z.date() if you want Date objects
});

// Export collections
export const collections = {
  antler: defineCollection({
    type: "content",
    schema: changelogSchema,
  }),
  reader: defineCollection({
    type: "content",
    schema: changelogSchema,
  }),
};
