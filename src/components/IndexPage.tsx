import type { BlogConfig } from "../models/fetchConfig";
import type { Post } from "../models/posts";
import { PostCard } from "./PostCard";

interface IndexPageProps {
  config: BlogConfig;
  posts: Post[];
}

export const IndexPage = ({ config, posts }: IndexPageProps) => {
  <main className={"pt-16"}>
    <h1 className="text-5xl font-bold">{config.title}</h1>
    <div className="mt-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  </main>;
};
