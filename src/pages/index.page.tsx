import { getPosts } from "@/src/models/posts.ts";
import { contents } from "@/src/contents.ts";
import { PostCard } from "@/src/components/PostCard.tsx";

export const title = "test";
export const url = "/";
export const layout = "layout.tsx";

const BlogIndexPage = async () => {
  const posts = await getPosts(contents);
  return (
    <main>
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
};

export default BlogIndexPage;
