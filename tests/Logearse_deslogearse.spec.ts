import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // validar que se muestra el mensaje del home 'Swag Labs'


  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
 
  await expect(page.getByText('Swag Labs')).toBeVisible();


  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();


  // validar que se regresa a la pagina de login
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();


});