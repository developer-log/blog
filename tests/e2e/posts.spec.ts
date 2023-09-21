import selectors, { getDataSelector } from "@/tests/data-selectors";

import { expect, test } from "@playwright/test";

test.describe("Going to the post page", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);
  });

  test("Go to post page from home page", async ({ page }) => {
    const firstPost = page.locator(getDataSelector(selectors.compactPost.item)).first();
    const href = await firstPost.getAttribute("href");
    await firstPost.click();
    await expect(page).toHaveURL(href!);
  });

  test("Go to a post page from posts page", async({ page }) =>{
    // Go to the posts page
    await page.locator(getDataSelector(selectors.header.navigationItem), { hasText: "Articles" }).click();
    await page.waitForURL(/posts/);

    const postItem = page.locator(getDataSelector(selectors.fullPost.item)).first();
    const link = await postItem.getAttribute("href");
    await postItem.click();
    await expect(page).toHaveURL(link!);
  });
});
