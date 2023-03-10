import type { AstroComponentFactory } from "astro/dist/runtime/server";
import type { CollectionEntry } from "astro:content";

export const unwrap = async <C extends "blog" | "resume", T>(
    entry: CollectionEntry<C>,
    selector: (entry: CollectionEntry<C>) => T
): Promise<{
    data: T,
    Content: AstroComponentFactory
}> =>
{
    const data = selector(entry);
    const render = await entry.render();

    return {
        data,
        Content: render.Content
    };
}
