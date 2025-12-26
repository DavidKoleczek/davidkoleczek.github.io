import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const bio = defineCollection({
  loader: glob({ pattern: "bio.md", base: "./src/content" }),
});

const timeline = defineCollection({
  loader: file("src/content/timeline.yaml"),
  schema: z.object({
    id: z.string(),
    dateRange: z.string(),
    logo: z.string(),
    logoDark: z.string().optional(),
    logoAlt: z.string(),
    logoWidth: z.enum(["normal", "wide"]),
    title: z.string(),
    description: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  loader: file("src/content/portfolio.yaml"),
  schema: z
    .object({
      id: z.string(),
      date: z.string(), // ISO format for sorting (YYYY-MM-DD)
      dateDisplay: z.string().optional(), // Optional display override (e.g., "April 2024")
      categories: z.array(z.string()).min(1),
      title: z.string(),
      description: z.string(), // Markdown content
      link: z.string().url(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      authors: z.array(z.string()).optional(),
      venue: z.string().optional(),
    })
    .refine((data) => !data.image || data.imageAlt, {
      message: "imageAlt is required when image is provided",
    }),
});

export const collections = { bio, timeline, portfolio };
