import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import type { Post } from "../models/posts.ts";

export const PostPage = (post: Post) => {
  return (
    <>
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <time className="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <Markdown
        className="mt-8 markdown-body"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkGemoji]}
      >
        {post.content}
      </Markdown>
    </>
  );
};
