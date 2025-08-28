import { test, expect } from '@playwright/test';
import inventoryPage from '../pageobjects/inventory.page.js';
import footerPage from '../pageobjects/footer.page.js';
import { loginData, footerIconScenarios } from '../fixtures/test.data.js';
import loginPage from '../pageobjects/login.page.js';

test.describe('Test Case Objective: Footer', () => {
  test.beforeEach(async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
    await expect(page.locator(inventoryPage.title)).toHaveText('Products');
    await expect(page).toHaveURL(/inventory/);
  });

  test('007 - footer social links should be opened in new tab', async ({ page, context }) => {
    for (const { name, action, expected } of footerIconScenarios) {
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        action(page, footerPage), // прокидываем page и сам footerPage
      ]);

      await newPage.waitForLoadState();
      const url = newPage.url();
      expect(expected.some(domain => url.includes(domain))).toBe(true);

      await newPage.close();
    }
  });
});