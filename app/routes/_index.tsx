import type { Route } from "./+types/_index";
import { getPosts } from "../models/posts";
import { configId } from "../models/configId";
import { fetchConfig } from "../models/fetchConfig";
import { PostCard } from "../components/PostCard";

export async function loader({}: Route.LoaderArgs) {
  const config = await fetchConfig(configId);
  const posts = await getPosts(config.contents);

  return { posts, config };
}

export function meta({ data }: Route.MetaArgs) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const ogImageUrl = `${base}/static/index.png`;

  return [
    { title: data?.config.title },
    { property: "og:type", content: "website" },
    { property: "og:title", content: data?.config.title },
    { property: "og:image", content: ogImageUrl },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return (
    <main className="pt-16">
      <h1 className="text-5xl font-bold">{loaderData.config.title}</h1>
      <div className="mt-8">
        {loaderData.posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
