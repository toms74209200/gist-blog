import { expect, test } from "@playwright/test";

test("has h1", async ({ page }) => {
  await page.goto("http://localhost:8000/gist-blog/");

  // Expect a title "to contain" a substring.
  const h1 = page.locator("h1").filter({
    hasNotText: "[object Object]",
  });
  await expect(h1).toBeVisible();
});
