import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.PATH_PREFIX ? `${process.env.PATH_PREFIX}/` : "/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  test: {
    include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    exclude: ["visual_test/**"],
    reporters: process.env.ENV ? ["verbose", "github-actions"] : ["verbose"],
  },
});
