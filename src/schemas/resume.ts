import { z } from "astro:content";

export const resumeSchema = z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    color: z.string().optional()
});
