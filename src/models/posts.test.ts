import { assertEquals } from "https://deno.land/std/assert/assert_equals.ts";
import { assert } from "https://deno.land/std/assert/assert.ts";
import { getPost, getPosts, gistToPost } from "@/src/models/posts.ts";

Deno.test("getPosts should return posts", async () => {
  const posts = await getPosts(["a8d11539dbfa09a250ae89c8afbadabd"]);
  assertEquals(posts.length, 1);
  assert(posts[0].content.length > 1);
});

Deno.test("getPost should return a post", async () => {
  const posts = await getPost("a8d11539dbfa09a250ae89c8afbadabd");
  assert(posts.content.length > 1);
});

Deno.test("gistToPost should return a post", () => {
  const gist = {
    id: "a8d11539dbfa09a250ae89c8afbadabd",
    created_at: "2020-01-01T00:00:00Z",
    files: {
      "test.md": {
        content: "# Title\n\nSnippet",
      },
    },
  };

  const actual = gistToPost(gist);
  assertEquals(actual.content, "# Title\n\nSnippet");
  assertEquals(actual.title, "Title");
  assertEquals(actual.publishedAt, new Date("2020-01-01T00:00:00Z"));
  assertEquals(actual.snippet, "Snippet");
  assertEquals(actual.slug, "a8d11539dbfa09a250ae89c8afbadabd");
});
