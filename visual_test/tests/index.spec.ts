import { expect, test } from "@playwright/test";

test("has h1", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  const h1 = page.locator("h1");
  await expect(h1).toBeTruthy();
});
