import { decompress } from "zip";
import { readAll } from "$std/io/read_all.ts";
import { download } from "download";

export const downloadFont = async (
  { url, downloadDir }: { url: string; downloadDir: string },
): Promise<string> => {
  const zipPath = "out.zip";
  await download(url, {
    dir: downloadDir,
    file: zipPath,
  }).catch((e) => {
    return Promise.reject(e);
  });
  const destination = await decompress(`${downloadDir}/${zipPath}`, downloadDir)
    .catch(
      (e) => {
        return Promise.reject(e);
      },
    );
  await Deno.remove(`${downloadDir}/${zipPath}`).catch((e) => {
    return Promise.reject(e);
  });
  return destination
    ? destination
    : Promise.reject("Failed to extract archive.");
};

export const loadFont = async (
  { fontPath }: { fontPath: string },
): Promise<Uint8Array> => {
  const fontFile = await Deno.open(fontPath).catch(
    (e) => {
      return Promise.reject(e);
    },
  );
  const fontBuf = await readAll(fontFile).catch((e) => {
    return Promise.reject(e);
  });
  fontFile.close();
  return fontBuf;
};
