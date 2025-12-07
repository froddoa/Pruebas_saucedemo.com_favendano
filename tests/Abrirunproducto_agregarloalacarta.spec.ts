import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();


//validar que el usuario pudo iniciar sesion


await expect(page.getByText('Swag Labs')).toBeVisible();
await page.locator('[data-test="inventory-container"]').click();

//abrir un producto


await page.locator('[data-test="item-4-title-link"]').click();

//verificar que se abrio el producto


await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

//agregar al carrito


await page.locator('[data-test="add-to-cart"]').click();

//verificar que se agrego al carrito


await page.locator('[data-test="shopping-cart-link"]').click();
await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
await expect(page.locator('[data-test="cart-contents-container"]')).toBeVisible();

//test by Freddy avendaño

});