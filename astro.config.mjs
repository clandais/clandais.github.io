import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import markdownConfig from "./markdown.config";


export default defineConfig({
  
  site: "https://clandais.github.io",

  markdown: markdownConfig,

  integrations: [
    mdx({
      ...markdownConfig,
      extendPlugins: false,
    }),
    sitemap(),
    tailwind(),
    icon()
  ],
});
