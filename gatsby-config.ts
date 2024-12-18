import type { GatsbyConfig } from "gatsby";

const domain = process.env.LOCATION || "http://localhost:8000";
const pathPrefix = process.env.PATH_PREFIX || "";

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `gist-blog`,
    siteUrl: domain,
    pathPrefix: pathPrefix,
  },
  pathPrefix: pathPrefix,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-typegen",
  ],
};

export default config;
