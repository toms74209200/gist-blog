import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";
import React from "react";
import OgImage from "../components/OgImage";

const OGP_WIDTH = 600;
const OGP_HEIGHT = 400;

export async function generateOgImage(siteTitle: string, title?: string) {
  const fontPath = path.join(process.cwd(), "BIZUDPGothic-Regular.ttf");
  const fontData = fs.readFileSync(fontPath);

  const element = React.createElement(OgImage, { siteTitle, title });

  const svg = await satori(element, {
    width: OGP_WIDTH,
    height: OGP_HEIGHT,
    fonts: [
      {
        name: "BIZUDPGothic-Regular",
        data: fontData,
        weight: 400,
        style: "normal",
      },
    ],
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
}
