import { defineCollection, z } from "astro:content";

// Define the schema once
const changelogSchema = z.object({
  title: z.string(),
  date: z.string(), // or z.date() if you want real Date objects
});

// Export collections
export const collections = {
  antler: defineCollection({ schema: changelogSchema }),
  reader: defineCollection({ schema: changelogSchema }),
};

