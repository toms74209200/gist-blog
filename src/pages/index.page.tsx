import { getPosts, Post } from "@/src/components/posts.ts";
import { contents } from "@/src/contents.ts";

export const title = "test";
export const url = "/";
export const layout = "layout.tsx";

const BlogIndexPage = async () => {
  const posts = await getPosts(contents);
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
};

const PostCard = (props: { post: Post }) => {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
        </time>
        <div class="mt-4 text-gray-900">
          {post.snippet}
        </div>
      </a>
    </div>
  );
};

export default BlogIndexPage;
