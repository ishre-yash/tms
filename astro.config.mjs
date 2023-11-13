import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ishre-yash.github.io/",
  base: "/tms",
  integrations: [tailwind()],
});
