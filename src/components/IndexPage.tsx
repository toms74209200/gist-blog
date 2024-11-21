import { HeadFC, PageProps } from "gatsby";
import type { BlogConfig } from "../models/fetchConfig";
import type { Post } from "../models/posts";
import { PostCard } from "./PostCard";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const IndexPage = ({
  pageContext,
}: PageProps<{}, { posts: Post[]; config: BlogConfig }>) => {
  return (
    <Layout>
      <Helmet>
        <title>{pageContext.config.title}</title>
      </Helmet>
      <main className={"pt-16"}>
        <h1 className="text-5xl font-bold">{pageContext.config.title}</h1>
        <div className="mt-8">
          {pageContext.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Not found</title>;
