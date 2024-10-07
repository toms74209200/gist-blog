import { Post } from "@/src/models/posts.ts";
import { CSS, render } from "@deno/gfm";

export const PostPage = (post: Post) => {
  return (
    <>
      <head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </head>
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <time className="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <div
        className="mt-8 markdown-body"
        dangerouslySetInnerHTML={{ __html: render(post.content) }}
      />
    </>
  );
};
