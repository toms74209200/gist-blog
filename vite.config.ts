import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.PATH_PREFIX ? `${process.env.PATH_PREFIX}/` : "/",
  define: {
    'import.meta.env.VITE_LOCATION': JSON.stringify(process.env.LOCATION || 'http://localhost:8000'),
  },
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
