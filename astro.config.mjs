import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import remarkToc from 'remark-toc';
import rehypeToc from "rehype-toc";


export default defineConfig({
  
  site: "https://clandais.github.io",

  markdown: {
  
    remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],
    rehypePlugins: [
      [
        rehypeToc,
        {
          headings: ["h1", "h2"],
          cssClasses: {
            toc: "toc-post", 
            link: "toc-link", 
          },
        },
      ],
    ],
  },

  integrations: [
    mdx({
      extendPlugins: false,
    }),
    sitemap(),
    tailwind(),
    icon()
  ],
});
