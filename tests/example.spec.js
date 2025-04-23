// @ts-check
import { test, expect } from '@playwright/test';

test('getByLabel on slotted content', async ({ page }) => {
  await page.goto('localhost:8080/');

  // This fails because content comes from a <slot>
  await expect(page.getByLabel("Checkbox With Slotted Content")).toBeVisible();
});

test('getByLabel on shadow root content', async ({ page }) => {
  await page.goto('localhost:8080/');
  await expect(page.getByLabel("Checkbox With Content In Shadow Root")).toBeVisible()
});

test("getByRole on slotted content", async ({ page }) => {
  await page.goto('localhost:8080/');
  // This surprisingly works.
  await expect(page.getByRole("checkbox", { name: "Checkbox With Slotted Content" })).toBeVisible();
})

test("getByRole on shadow root content", async ({ page }) => {
  await page.goto('localhost:8080/');
  await expect(page.getByRole("checkbox", { name: "Checkbox With Content In Shadow Root" })).toBeVisible()
})

