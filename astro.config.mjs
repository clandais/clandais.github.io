import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
 //  transformerRenderWhitespace, // optional
} from '@shikijs/transformers';

import markdownConfig from "./markdown.config.mjs";




export default defineConfig({
  
  site: "https://clandais.github.io",

  markdown: markdownConfig,

  integrations: [
    mdx({
      ...markdownConfig,
      syntaxHighlight: 'shiki',
      shikiConfig: 
      { 
        theme: 'dark-plus',
        transformers: [
          transformerNotationDiff(),
          transformerNotationHighlight(),
          transformerNotationWordHighlight(),
          transformerNotationFocus(),
          transformerNotationErrorLevel(),
          transformerMetaHighlight(),
          transformerMetaWordHighlight(),
         // transformerRenderWhitespace(), // optional
        ],
      },
      extendPlugins: false,
    }),
    sitemap(),
    tailwind(),
    icon()
  ],
});
