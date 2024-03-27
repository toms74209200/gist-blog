import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import ogImages from "lume/plugins/og_images.ts";
import metas from "lume/plugins/metas.ts";
import { downloadFont, loadFont } from "@/src/models/downloadFonts.ts";
import { FONT_URL, USE_FONT } from "@/src/models/fontSettings.ts";

await downloadFont({ url: FONT_URL, downloadDir: "." });
const fontBuf = await loadFont({ fontPath: `./${USE_FONT}.ttf` });

const site = lume(
  {
    location: new URL(Deno.env.get("LOCATION") || "http://localhost:3000"),
  },
);

site.ignore("README.md");
site.use(jsx());
site.use(tailwindcss());
site.use(postcss());
site.use(ogImages(
  {
    cache: true,
    satori: {
      width: 600,
      height: 400,
      fonts: [
        {
          name: USE_FONT,
          data: fontBuf,
        },
      ],
    },
  },
));
site.use(metas());

export default site;
