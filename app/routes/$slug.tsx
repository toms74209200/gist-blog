import type { Route } from "./+types/$slug";
import { getPosts } from "../models/posts";
import { configId } from "../models/configId";
import { fetchConfig } from "../models/fetchConfig";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";

export async function loader({ params }: Route.LoaderArgs) {
  const config = await fetchConfig(configId);
  const posts = await getPosts(config.contents);
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) throw new Response("Not Found", { status: 404 });

  return { post, siteTitle: config.title };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data?.post.title} | ${data?.siteTitle}` },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: `${data?.post.title} | ${data?.siteTitle}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1 className="text-5xl font-bold">{loaderData.post.title}</h1>
      <time className="text-gray-500">
        {new Date(loaderData.post.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <div className="mt-8 markdown-body prose">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkGemoji]}
        >
          {loaderData.post.content}
        </Markdown>
      </div>
    </>
  );
}
