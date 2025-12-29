import { expect, test } from "vitest";
import { gistToPost } from "./posts";

test("gistToPost should return a post", () => {
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
  expect(actual.content).toBe("# Title\n\nSnippet");
  expect(actual.title).toBe("Title");
  expect(actual.publishedAt).toStrictEqual(new Date("2020-01-01T00:00:00Z"));
  expect(actual.snippet).toBe("Snippet");
  expect(actual.slug).toBe("a8d11539dbfa09a250ae89c8afbadabd");
});
