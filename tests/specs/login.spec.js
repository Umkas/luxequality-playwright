// import loginPage from '../pageobjects/login.page.js'
// import inventoryPage from '../pageobjects/inventory.page.js'
// import { loginData, EXPECTED_MENU } from '../fixtures/test.data.js';
// import test from '@playwright/test';

// test.describe('Test Case Objective: Login', () => {

//     test('001 - should login successfully with valid credentials', async () => {
//         await loginPage.open();
//         await loginPage.fillUserName(loginData.valid.username);
//         await expect(loginPage.inputUsername).toHaveValue(loginData.valid.username);
//         await loginPage.fillPassword(loginData.valid.password);
//         await expect(loginPage.inputPassword).toHaveAttribute('type', 'password');
//         await expect(loginPage.inputPassword).not.toHaveValue('');

//         await loginPage.clickLogin();
//         await expect(inventoryPage.title).toHaveText('Products');
//         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');
//     });

//     test('002 - should show error message with invalid password', async () => {
//         await loginPage.open();
//         await loginPage.fillUserName(loginData.valid.username);
//         await expect(loginPage.inputUsername).toHaveValue(loginData.valid.username);
//         await loginPage.fillPassword(loginData.invalid.password);
//         await expect(loginPage.inputPassword).toHaveAttribute('type', 'password');
//         await expect(loginPage.inputPassword).not.toHaveValue('');
//         await loginPage.clickLogin();

//         await expect(loginPage.errorBanner).toBeDisplayed();
//         await expect(loginPage.errorBanner)
//             .toHaveText('Epic sadface: Username and password do not match any user in this service');

//         await expect(loginPage.usernameXIcon).toBeDisplayed();
//         await expect(loginPage.passwordXIcon).toBeDisplayed();

//         await expect(browser).toHaveUrl(browser.options.baseUrl + '/');
//     });

//     test('003 - should show error message with invalid username', async () => {
//         await loginPage.open();
//         await loginPage.fillUserName(loginData.invalid.username);
//         await expect(loginPage.inputUsername).toHaveValue(loginData.invalid.username);
//         await loginPage.fillPassword(loginData.valid.password);
//         await expect(loginPage.inputPassword).toHaveAttribute('type', 'password');
//         await expect(loginPage.inputPassword).not.toHaveValue('');
//         await loginPage.clickLogin();

//         await expect(loginPage.errorBanner).toBeDisplayed();
//         await expect(loginPage.errorBanner)
//             .toHaveText('Epic sadface: Username and password do not match any user in this service');

//         await expect(loginPage.usernameXIcon).toBeDisplayed();
//         await expect(loginPage.passwordXIcon).toBeDisplayed();
//         await expect(loginPage.inputUsername).toHaveAttribute('class', expect.stringContaining('error'));
//         await expect(loginPage.inputPassword).toHaveAttribute('class', expect.stringContaining('error'));

//         await expect(browser).toHaveUrl(browser.options.baseUrl + '/');
//     });

//     test('004 - should redirect to login page after logout', async () => {
//         await loginPage.open();
//         await loginPage.login(loginData.valid.username, loginData.valid.password);
//         await expect(inventoryPage.title).toHaveText('Products');
//         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');

//         await inventoryPage.openMenu();
//         await expect(inventoryPage.menuItems).toBeElementsArrayOfSize(4);
//         for (const item of await inventoryPage.menuItems) {
//             await expect(item).toBeDisplayed();
//         }
//         const actual = await inventoryPage.getMenuItemTexts();
//         expect(actual).toEqual(EXPECTED_MENU);

//         await inventoryPage.logout()
//         await expect(browser).toHaveUrl(browser.options.baseUrl + '/');
//         await expect(loginPage.inputUsername).toHaveValue('');
//         await expect(loginPage.inputPassword).toHaveValue('');
//     });

// });

import { test, expect } from '@playwright/test';
import loginPage from '../pageobjects/login.page.js';
import { loginData } from '../fixtures/test.data.js';

test.describe('Test Case Objective: Login', () => {
  test('001 - should login successfully with valid credentials', async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
    await expect(page).toHaveURL(/inventory/);
  });

  test('002 - should show error message with invalid password', async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.invalid.password);
    await expect(page.locator(loginPage.errorBanner)).toBeVisible();
  });

  test('003 - should show error message with invalid username', async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.invalid.username, loginData.valid.password);
    await expect(page.locator(loginPage.errorBanner)).toBeVisible();
  });

  test('004 - should redirect to login page after logout', async ({ page }) => {
    await loginPage.open(page);
    await loginPage.login(page, loginData.valid.username, loginData.valid.password);
    await loginPage.openMenu(page);
    await loginPage.logout(page);
    await expect(page).toHaveURL('');
  });
});