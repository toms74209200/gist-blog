import { requestGists } from "@/src/models/requestGists.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
}

export const getPosts = async (contens: string[]): Promise<Post[]> => {
  const gists = await requestGists(contens);
  return gists.map(gistToPost);
};

export const getPost = async (slug: string): Promise<Post> => {
  const gist = await requestGists([slug]);
  return gistToPost(gist[0]);
};

export const gistToPost = (gist: any): Post => {
  const filename = Object.keys(gist.files)[0];
  const file = gist.files[filename];
  const content = file.content;
  const lines = content.replace("\n\n", "\n").split("\n");
  const title = lines[0].replace("#", "").trim();
  const publishedAt = new Date(gist.created_at);
  const snippet = lines[1].trim();
  const slug = gist.id;

  return {
    slug,
    title,
    publishedAt,
    snippet,
    content,
  };
};
