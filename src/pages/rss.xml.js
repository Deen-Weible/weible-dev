import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const parser = new MarkdownIt();

function replacePhotoComponent(html) {
  // Remove the import statement for the Photo component
  html = html.replace('import Photo from "../../components/BlogPhoto.astro"', '');

  // Replace the Photo component with an img tag
  return html.replace(/<Photo alt="([^"]+)" src="([^"]+)"\/>/g, (match, alt, src) => {
    return `![${alt}](${src}.jpg)`;
  });
}

export async function GET(context) {
  const blog = await getCollection('blog');
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
    })),
  });
}
