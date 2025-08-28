import { test, expect } from '@playwright/test';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import { itemDataTest, loginData, EXPECTED_MENU } from '../fixtures/test.data.js';

test.describe('Test Case Objective: Cart', () => {
  test.beforeEach(async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
  });

  test('005 - should save the cart after logout', async ({ page }) => {
    await expect(page.locator(inventoryPage.title)).toHaveText('Products');
    await expect(page).toHaveURL(/inventory/);

    const product = await inventoryPage.addItemToCart(page, itemDataTest);
    await expect(page.locator(inventoryPage.shoppingCartBadge)).toBeVisible();
    await expect(await inventoryPage.getCartItemCount(page)).toBe('1');

    await inventoryPage.openMenu(page);
    const items = await page.locator(inventoryPage.menuItems).allTextContents();
    expect(items).toEqual(EXPECTED_MENU);

    await inventoryPage.logout(page);
    await expect(page).toHaveURL('/');
    await expect(page.locator(loginPage.inputUsername)).toHaveValue('');
    await expect(page.locator(loginPage.inputPassword)).toHaveValue('');

    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
    await expect(page.locator(inventoryPage.title)).toHaveText('Products');
    await expect(page).toHaveURL(/inventory/);

    await expect(page.locator(inventoryPage.shoppingCartBadge)).toBeVisible();
    await expect(await inventoryPage.getCartItemCount(page)).toBe('1');
  });
});