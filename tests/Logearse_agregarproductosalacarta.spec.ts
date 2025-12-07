import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
//seleccionar producto

await page.locator('[data-test="inventory-item-description"]').first().click();
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="inventory-item-description"]').nth(1).click();
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

//verificar carrito
await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('2');


});