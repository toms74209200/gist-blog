import { assert } from "https://deno.land/std/assert/assert.ts";
import { fetchConfig } from "@/src/models/fetchConfig.ts";

Deno.test("fetchConfig should return a BlogConfig", async () => {
  const config = await fetchConfig("de090a1f6adcb1d16519cb3cdf0711b7");
  assert(config.title.length > 1);
  assert(config.contents.length > 0);
});
