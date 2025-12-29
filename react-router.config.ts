import type { Config } from "@react-router/dev/config";
import { configId } from "./app/models/configId";
import { fetchConfig } from "./app/models/fetchConfig";
import { getPosts } from "./app/models/posts";
import { generateOgImage } from "./app/models/generateOgp";
import fs from "node:fs";
import path from "node:path";

export default {
  async prerender() {
    const config = await fetchConfig(configId);
    const posts = await getPosts(config.contents);

    const outputDir = path.join(process.cwd(), "build/client/static");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(outputDir, "index.png"),
      await generateOgImage(config.title)
    );
    for (const post of posts) {
      fs.writeFileSync(
        path.join(outputDir, `${post.slug}.png`),
        await generateOgImage(config.title, post.title)
      );
    }

    return ["/", ...posts.map((post) => `/${post.slug}`)];
  },
  ssr: false,
  basename: process.env.PATH_PREFIX ? `${process.env.PATH_PREFIX}/` : "/",
} satisfies Config;
