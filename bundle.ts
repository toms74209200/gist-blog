import { bundle } from "https://deno.land/x/emit/mod.ts";

const { code } = await bundle(new URL(import.meta.resolve("./src/main.ts")));
Deno.writeTextFile("./public/main.js", code);
