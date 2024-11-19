import path from "path";
import { GatsbyNode } from "gatsby";
import { fetchConfig } from "./models/fetchConfig";
import { configId } from "./models/configId";
import { getPosts } from "./models/posts";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  const config = await fetchConfig(configId);
  const posts = await getPosts(config.contents);

  posts.forEach((post) => {
    createPage({
      path: `/${post.slug}`,
      component: path.resolve("./src/components/PostPage.tsx"), // `gatsby-node.ts` からの相対パス
      context: {
        slug: post.slug,
        title: post.title,
        publishedAt: post.publishedAt,
        snippet: post.snippet,
        content: post.content,
      },
    });
  });

  createPage({
    path: "/",
    component: path.resolve("./src/components/IndexPage.tsx"), // `gatsby-node.ts` からの相対パス
    context: {
      posts,
      config,
    },
  });
};
