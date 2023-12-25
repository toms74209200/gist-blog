import { assertEquals } from "https://deno.land/std/assert/assert_equals.ts";
import { assert } from "https://deno.land/std/assert/assert.ts";
import { requestGists } from "@/src/models/requestGists.ts";

Deno.test("requestGists should return an array of gists", async () => {
  const result = await requestGists(["a8d11539dbfa09a250ae89c8afbadabd"]);
  assertEquals(result.length, 1);
  Object.keys(result[0]["files"]).forEach((file) => {
    assert(result[0]["files"][file]["content"].length > 1);
  });
});

Deno.test("requestGists with empty IDs should return empty list", async () => {
  const gists = await requestGists([]);
  assertEquals(gists.length, 0);
});
