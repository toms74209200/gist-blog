import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { graphql, PageProps } from "gatsby";
import type { Post } from "../models/posts";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const pathPrefix = process.env.PATH_PREFIX || "";

const PostPage = ({
  data,
  pageContext,
}: PageProps<GatsbyTypes.Query, Post & { siteTitle: string }>) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.title} | ${pageContext.siteTitle}`}</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${pageContext.title} | ${pageContext.siteTitle}`}
        />
        <meta
          property="og:url"
          content={`${data.site?.siteMetadata?.siteUrl}${pathPrefix}/${pageContext.slug}`}
        />
        <meta
          property="og:image"
          content={`${data.site?.siteMetadata?.siteUrl}${data.sitePageOgImage?.attributes?.publicURL}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
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

export const query = graphql`
  query OgImage {
    sitePageOgImage {
      attributes {
        publicURL
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
