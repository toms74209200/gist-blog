import { expect, test } from "vitest";
import { getPost, getPosts } from "./posts";

test("getPosts should return posts", async () => {
  const posts = await getPosts(["a8d11539dbfa09a250ae89c8afbadabd"]);
  expect(posts.length).toBe(1);
  expect(posts[0].title.length).greaterThan(1);
});

test("getPost should return a post", async () => {
  const posts = await getPost("a8d11539dbfa09a250ae89c8afbadabd");
  expect(posts.content.length).greaterThan(1);
});
