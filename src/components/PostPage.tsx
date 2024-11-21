import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { PageProps } from "gatsby";
import type { Post } from "../models/posts";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const PostPage = ({
  pageContext,
}: PageProps<{}, Post & { siteTitle: string }>) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.title} | ${pageContext.siteTitle}`}</title>
      </Helmet>
      <h1 className="text-5xl font-bold">{pageContext.title}</h1>
      <time className="text-gray-500">
        {new Date(pageContext.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <Markdown
        className="mt-8 markdown-body prose"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkGemoji]}
      >
        {pageContext.content}
      </Markdown>
    </Layout>
  );
};

export default PostPage;
