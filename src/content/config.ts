import { defineCollection } from "astro:content";
import { resumeSchema, blogSchema } from "../schemas";

const resumeCollection = defineCollection({schema: resumeSchema});
const blogCollection = defineCollection({schema: blogSchema});

export const collections = {
    'resume': resumeCollection,
    'blog': blogCollection
};
