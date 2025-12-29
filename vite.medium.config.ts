import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["app/**/*.medium.{test,spec}.?(c|m)[jt]s?(x)"],
    exclude: ["visual_test/**"],
    reporters: process.env.ENV ? ["verbose", "github-actions"] : ["verbose"],
  },
});
