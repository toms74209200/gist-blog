import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.small.{test,spec}.?(c|m)[jt]s?(x)"],
    exclude: ["visual_test/**"],
    reporters: process.env.ENV ? ["verbose", "github-actions"] : ["verbose"],
  },
});
