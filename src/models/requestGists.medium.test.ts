import { expect, test } from "vitest";
import { requestGists } from "./requestGists";

test("requestGists should return an array of gists", async () => {
  const result = await requestGists(["a8d11539dbfa09a250ae89c8afbadabd"]);
  expect(result.length).toBe(1);
  Object.keys(result[0]["files"]).forEach((file) => {
    expect(result[0]["files"][file]["content"].length).toBeGreaterThan(1);
  });
});

test("requestGists with empty IDs should return empty list", async () => {
  const gists = await requestGists([]);
  expect(gists.length).toBe(0);
});
