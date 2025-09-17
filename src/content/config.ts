import { defineCollection, z } from "astro:content";

const changelogSchema = z.object({
  title: z.string(),
  date: z.string(), // or z.date()
});

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
