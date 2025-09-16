import { defineCollection, z } from "astro:content";

const changelog = defineCollection({
  schema: z.object({
    version: z.string(),
    date: z.string(),
    app: z.enum(["antler", "reader"]),
    type: z.string().optional()
  })
});

export const collections = {
  antler: defineCollection({ schema: changelogSchema }),
  reader: defineCollection({ schema: changelogSchema }),
};

