import { getCollection } from 'astro:content';

export async function getRecentPosts() {
  const recentPosts = await getCollection('blog');
  console.log(recentPosts)
  return recentPosts.map(post => ({
    params: { id: post.id },
    props: { post },
  }));;
}

getRecentPosts();