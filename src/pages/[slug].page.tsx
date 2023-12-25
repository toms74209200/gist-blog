import { getPosts } from "@/src/models/posts.ts";
import { contents } from "@/src/contents.ts";
import { PostPage } from "@/src/components/PostPage.tsx";
import { renderToString } from "preact-render-to-string";

export const layout = "layout.tsx";

async function* PostPages() {
  const posts = await getPosts(contents);
  const postPages = posts.map((post) => {
    return {
      title: post.title,
      url: `/${post.slug}.html`,
      content: renderToString(PostPage(post)),
    };
  });

  for (const postPage of postPages) {
    yield postPage;
  }
}

export default PostPages;
