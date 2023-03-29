import { z } from "astro:content";

export const blogSchema = 
    z.object({
        isDraft: z.optional(z.boolean()),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        image: z.optional(z.string())
    });
