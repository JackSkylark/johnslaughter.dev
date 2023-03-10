import { z } from "astro:content";

export const blogSchema = 
    z.object({
        isDraft: z.boolean(),
        title: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
    });
