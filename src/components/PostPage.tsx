import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { graphql, PageProps } from "gatsby";
import type { Post } from "../models/posts";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const PostPage = ({
  data,
  pageContext,
}: PageProps<GatsbyTypes.Query, Post & { siteTitle: string }>) => {
  const siteNodeId = data.allSitePage.nodes.find((node) =>
    node.path.includes(pageContext.slug)
  )?.id;
  const sitePageOgImage = data.allSitePageOgImage.nodes.find(
    (node) => node.parent?.id === siteNodeId
  );
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>{`${pageContext.title} | ${pageContext.siteTitle}`}</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${pageContext.title} | ${pageContext.siteTitle}`}
        />
        <meta
          property="og:url"
          content={[
            data.site?.siteMetadata?.siteUrl ?? "",
            data.site?.siteMetadata?.pathPrefix ?? "",
          ].join("")}
        />
        <meta
          property="og:image"
          content={[
            data.site?.siteMetadata?.siteUrl ?? "",
            sitePageOgImage?.attributes?.publicURL ?? "",
          ].join("")}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1 className="text-5xl font-bold">{pageContext.title}</h1>
      <time className="text-gray-500">
        {new Date(pageContext.publishedAt).toLocaleDateString("ja-JP")}
      </time>
      <div className="mt-8 markdown-body prose">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkGemoji]}
        >
          {pageContext.content}
        </Markdown>
      </div>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query OgImage {
    allSitePage {
      nodes {
        id
        path
      }
    }
    allSitePageOgImage {
      nodes {
        attributes {
          publicURL
        }
        parent {
          id
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        pathPrefix
      }
    }
  }
`;
