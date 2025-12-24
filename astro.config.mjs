// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://davidkoleczek.github.io",

  vite: {
    // @ts-ignore - Type conflict between Astro's bundled Vite types and @tailwindcss/vite
    plugins: [tailwindcss()],
  },
});
