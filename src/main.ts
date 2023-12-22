/// <reference lib="dom"/>
import { contents } from "./contents.ts";
import { requestGists } from "./requestGists.ts";
import { render } from "https://deno.land/x/gfm/mod.ts";
const main = async () => {
  const gists = await requestGists(contents);

  gists.forEach((gist) => {
    const files = gist.files;
    Object.keys(files).forEach((fileName) => {
      const fileContent = files[fileName].content;
      const contentElement = document.getElementById("content");
      contentElement!.innerHTML += render(fileContent);
    });
  });
};

main();
