import { PostCard } from "@/src/components/PostCard.tsx";
import { getPosts } from "@/src/models/posts.ts";
import { configId } from "@/src/models/configId.ts";
import { fetchConfig } from "@/src/models/fetchConfig.ts";

const config = await fetchConfig(configId);

export const title = config.title;
export const url = "/";
export const layout = "layout.tsx";
export const openGraphLayout = "og_image.tsx";

const BlogIndexPage = async () => {
  const posts = await getPosts(config.contents);
  return (
    <main className={"pt-16"}>
      <h1 className="text-5xl font-bold">{config.title}</h1>
      <div className="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
};

export default BlogIndexPage;
