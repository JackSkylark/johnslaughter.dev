import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
    vite: {
        plugins: [vanillaExtractPlugin()]
    },
    integrations: [react()],
});
