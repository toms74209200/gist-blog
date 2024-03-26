import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import ogImages from "lume/plugins/og_images.ts";
import metas from "lume/plugins/metas.ts";

const site = lume();

site.ignore("README.md");
site.use(jsx_preact());
site.use(tailwindcss());
site.use(postcss());
site.use(ogImages());
site.use(metas());

export default site;
