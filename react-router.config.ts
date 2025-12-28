import type { Config } from "@react-router/dev/config";
import { configId } from "./app/models/configId";
import { fetchConfig } from "./app/models/fetchConfig";
import { getPosts } from "./app/models/posts";

export default {
  async prerender() {
    const config = await fetchConfig(configId);
    const posts = await getPosts(config.contents);

    return ["/", ...posts.map((post) => `/${post.slug}`)];
  },
  ssr: true,
  basename: process.env.PATH_PREFIX || "/",
} satisfies Config;
