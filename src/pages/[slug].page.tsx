import { renderToString } from "preact-render-to-string";
import { PostPage } from "@/src/components/PostPage.tsx";
import { getPosts } from "@/src/models/posts.ts";
import { fetchConfig } from "@/src/models/fetchConfig.ts";
import { configId } from "@/src/models/configId.ts";

export const layout = "layout.tsx";
export const openGraphLayout = "og_image.tsx";

async function* PostPages() {
  const config = await fetchConfig(configId);
  const posts = await getPosts(config.contents);
  const postPages = posts.map((post) => {
    return {
      title: `${post.title} | ${config.title}`,
      url: `/${post.slug}.html`,
      content: renderToString(PostPage(post)),
    };
  });

  for (const postPage of postPages) {
    yield postPage;
  }
}

export default PostPages;
