import { test, expect } from "@playwright/test";

test("can get to a product detail page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link").first().click();

  expect(page.url()).toContain("products");
});

test("can add product to cart", async ({ page }) => {
  await page.goto("/products/15");

  await page.getByRole("button").click();

  // expect success message to show with go to cart link
});
