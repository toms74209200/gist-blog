import { graphql, PageProps } from "gatsby";
import type { BlogConfig } from "../models/fetchConfig";
import type { Post } from "../models/posts";
import { PostCard } from "./PostCard";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const IndexPage = ({
  data,
  pageContext,
}: PageProps<GatsbyTypes.Query, { posts: Post[]; config: BlogConfig }>) => {
  const siteNodeId = data.allSitePage.nodes.find(
    (node) => node.path === "/"
  )?.id;
  const sitePageOgImage = data.allSitePageOgImage.nodes.find(
    (node) => node.parent?.id === siteNodeId
  );
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>{pageContext.config.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageContext.config.title} />
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
