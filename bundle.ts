import { bundle } from "emit";

const { code } = await bundle(
  new URL(import.meta.resolve("./src/main.ts")),
  {
    importMap: "deno.json",
  },
);
Deno.writeTextFile("./public/main.js", code);
