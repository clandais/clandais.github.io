import rehypeToc from "rehype-toc";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from "remark-gfm";

export default {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
        // First add IDs to all headings (required for TOC to work)
        rehypeSlug,
        
        // Then generate TOC with those IDs
        [rehypeToc, {
            headings: ['h2', 'h3'],
            cssClasses: {
                toc: 'toc',
                list: 'toc-list',
                listItem: 'toc-item',
                link: 'toc-link'
            },
        }],
        
        // Finally, selectively add autolinking to specific headings if needed
        // This is optional and can be configured to target only specific headings
        [rehypeAutolinkHeadings, { 
            behavior: 'prepend',
            properties: {
                className: ['anchor-link'],
                'aria-hidden': 'true'
            },
            content: {
                type: 'element',
                tagName: 'span',
                properties: {
                    className: ['anchor-icon'],
                },
                children: [
                    {
                        type: 'text',
                        value: '#'
                    }
                ]
            },
            // Only target h2 headers in certain sections, or none at all
            test: (headingElement) => {
                // Return false to disable autolinking completely
                return false;
                
                // Or use more complex logic if needed:
                // const {tagName, properties} = headingElement;
                // return tagName === 'h2'; // Only h2 elements
            }
        }]
    ],
};