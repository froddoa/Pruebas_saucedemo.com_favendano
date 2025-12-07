import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();


//capturar todos los precios de los productos en la página

await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

//filtrar productos por precio de mayor a menor


await page.getByText('Name (A to Z)Name (A to Z)').click();
await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

//verificar que los productos estén ordenados de mayor a menor precio

await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

  
});