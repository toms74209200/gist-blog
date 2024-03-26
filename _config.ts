import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume(
  {
    location: new URL(Deno.env.get("LOCATION") || "http://localhost:3000"),
  },
);

site.ignore("README.md");
site.use(jsx_preact());
site.use(tailwindcss());
site.use(postcss());

export default site;
