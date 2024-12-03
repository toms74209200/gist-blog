import { expect, test } from "vitest";
import { fetchConfig } from "./fetchConfig";

test("fetchConfig should return a BlogConfig", async () => {
  const config = await fetchConfig("de090a1f6adcb1d16519cb3cdf0711b7");
  expect(config.title.length).toBeGreaterThan(1);
  expect(config.contents.length).toBeGreaterThan(0);
});
