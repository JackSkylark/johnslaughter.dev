import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.johnslaughter.dev',
  vite: {
    plugins: [vanillaExtractPlugin()]
  },
  integrations: [react(), mdx()]
});