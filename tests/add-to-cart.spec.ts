import { test, expect } from "@playwright/test";

test("can get to a product detail page", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("product-card-link").first().click();

  expect(page.url()).toContain("products");
});

test("can add product to cart", async ({ page }) => {
  await page.goto("/products/15");

  await page.getByRole("button").click();
  await page.getByRole("link", { name: "Go to cart" }).click();

  expect(page.url()).toContain("cart");

  const cartItem = await page.getByTestId("cart-item");

  expect(cartItem).toBeAttached();
});
