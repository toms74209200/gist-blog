import { Link } from "react-router";
import type { Post } from "../models/posts";

export const PostCard = (props: { post: Post }) => {
  const { post } = props;
  return (
    <div className="my-4 py-4 border-t border-gray-200 hover:bg-white hover:opacity-75">
      <Link className="block sm:col-span-2" to={`/${post.slug}`}>
        <h3 className="text-3xl text-gray-900 font-bold">{post.title}</h3>
        <time className="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
        </time>
        <div className="mt-4 text-gray-900">{post.snippet}</div>
      </Link>
    </div>
  );
};
