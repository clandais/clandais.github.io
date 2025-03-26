import rehypeToc from "rehype-toc";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from "remark-gfm";

export default {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { 
            behavior: 'wrap',
            headings: ['h2', 'h3'],
             
        }],
        [rehypeToc, {
            headings: ['h2', 'h3'],
            cssClasses: ['toc'],
        }]
        
    ],
};