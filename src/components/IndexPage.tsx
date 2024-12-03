import { graphql, PageProps } from "gatsby";
import type { BlogConfig } from "../models/fetchConfig";
import type { Post } from "../models/posts";
import { PostCard } from "./PostCard";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";

const pathPrefix = process.env.PATH_PREFIX || "";

const IndexPage = ({
  data,
  pageContext,
}: PageProps<GatsbyTypes.Query, { posts: Post[]; config: BlogConfig }>) => {
  return (
    <Layout>
      <Helmet>
        <title>{pageContext.config.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageContext.config.title} />
        <meta
          property="og:url"
          content={`${data.site?.siteMetadata?.siteUrl}${pathPrefix}`}
        />
        <meta
          property="og:image"
          content={`${data.site?.siteMetadata?.siteUrl}${data.sitePageOgImage?.attributes?.publicURL}`}
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
