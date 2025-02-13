import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';


// Create a new instance of MarkdownIt for parsing Markdown content
const parser = new MarkdownIt();

// Function to replace the Photo component with an <img> tag in HTML content
function replacePhotoComponent(html) {
  // Remove the import statement for the Photo component
  html = html.replace('import Photo from "../../components/BlogPhoto.astro"', '');

  // Replace the Photo component with an img tag
  return html.replace(/<Photo alt="([^"]+)" src="([^"]+)"\/>/g, (match, alt, src) => {
    return `![${alt}](${src}.jpg)`;
  });
}

// Export a GET function to handle requests for the RSS feed
export async function GET(context) {
  try {
    const blog = await getCollection('blog');
    if (!blog || blog.length === 0) {
      throw new Error('No blog posts found.');
    }

    return rss({
      title: 'The Weible Weblog',
      description: 'All the good stuff from my brain to yours.',
      site: context.site,
      items: blog.map((post) => ({
        link: `/blog/${post.id}/`,
        content: sanitizeHtml(parser.render(replacePhotoComponent(post.body)), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
        ...post.data,
        pubDate: post.data.date,
      })),
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
