import { requestGists } from "@/src/models/requestGists.ts";

export interface BlogConfig {
  title: string;
  contents: string[];
}

export const fetchConfig = async (configId: string): Promise<BlogConfig> => {
  const gists = await requestGists([configId]);
  const filename = Object.keys(gists[0]["files"])[0];
  const configFile = gists[0]["files"][filename];
  const config = JSON.parse(configFile.content);
  return {
    title: config.title,
    contents: config.contents,
  };
};
