// import inventoryPage from '../pageobjects/inventory.page.js'
// import { sortScenarios, } from '../fixtures/test.data.js';
// import { login } from '../helpers/diff.help.js';
// describe('Test Case Objective: Products', () => {
//     before(async () => login());

//     it('006 - sorting should work: A-Z, Z-A, 0-9, 9-0', async () => {
//         await expect(inventoryPage.title).toHaveText('Products');
//         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');

//         for (const { option, getData, sortFn } of sortScenarios) {
//             await inventoryPage.sortBy(option);
//             const actual = await getData();
//             const expected = sortFn(actual);
//             expect(actual).toEqual(expected);
//         }
//     });
// })

import { test, expect } from '@playwright/test';
import inventoryPage from '../pageobjects/inventory.page.js';
import { sortScenarios } from '../fixtures/test.data.js';
import loginPage from '../pageobjects/login.page.js';
import { loginData } from '../fixtures/test.data.js';

test.describe('Test Case Objective: Products', () => {
  test.beforeEach(async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
  });

  test('006 - sorting should work: A-Z, Z-A, 0-9, 9-0', async ({ page }) => {
    await expect(page.locator(inventoryPage.title)).toHaveText('Products');
    await expect(page).toHaveURL(/inventory/);

    for (const { option, getData, sortFn } of sortScenarios) {
      await inventoryPage.sortBy(page, option);
      const actual = await getData(page);
      const expected = sortFn(actual);
      expect(actual).toEqual(expected);
    }

    
  });
});