import { Post } from "@/src/components/posts.ts";
import { CSS, render } from "gfm";

export const PostPage = (post: Post) => {
  return (
    <>
      <head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </head>
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <div
        class="mt-8 markdown-body"
        dangerouslySetInnerHTML={{ __html: render(post.content) }}
      />
    </>
  );
};
