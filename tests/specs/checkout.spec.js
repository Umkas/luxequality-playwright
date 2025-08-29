// // import inventoryPage from '../pageobjects/inventory.page.js'
// // import cartPage from '../pageobjects/cart.page.js'
// // import checkout1Page from '../pageobjects/checkout1.page.js'
// // import checkout2Page from '../pageobjects/checkout2.page.js'
// // import checkoutCompletePage from '../pageobjects/checkout-complete.page.js'
// // import { generateCustomer, itemDataTest, } from '../fixtures/test.data.js';
// // import { login } from '../helpers/diff.help.js';

// // describe('Test Case Objective: Checkout', () => {

// //     beforeEach(async () => login());

// //     it('008 - should complete checkout successfully with valid data', async () => {
// //         await expect(inventoryPage.title).toHaveText('Products');
// //         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');


// //         const product = await inventoryPage.addItemToCart(itemDataTest);

// //         await expect(inventoryPage.shoppingCartBadge).toBeDisplayed();
// //         await expect(await inventoryPage.getCartItemCount()).toBe('1');

// //         await inventoryPage.openCart();
// //         await expect(cartPage.title).toHaveText('Your Cart');
// //         await expect(await inventoryPage.getCurrentUrl()).toContain('/cart');

// //         const productInCart = await cartPage.getProductDataByTitleDataTest(itemDataTest);
// //         await expect(productInCart.name).toBe(product.name);

// //         await cartPage.goToCheckout1();
// //         await expect(checkout1Page.title).toHaveText('Checkout: Your Information');
// //         await expect(await checkout1Page.getCurrentUrl()).toContain('/checkout-step-one');

// //         const customer = generateCustomer();
// //         await checkout1Page.setFirstName(customer.firstName);
// //         await expect(checkout1Page.firstNameFld).toHaveValue(customer.firstName);

// //         await checkout1Page.setLastName(customer.lastName);
// //         await expect(checkout1Page.lastNameFld).toHaveValue(customer.lastName);

// //         await checkout1Page.setZip(customer.zip);
// //         await expect(checkout1Page.zipFld).toHaveValue(customer.zip);

// //         await checkout1Page.goToCheckOut2();
// //         await expect(checkout2Page.title).toHaveText('Checkout: Overview');
// //         await expect(await checkout2Page.getCurrentUrl()).toContain('/checkout-step-two');

// //         const productInOverview = await checkout2Page.getProductDataByTitleDataTest(itemDataTest);
// //         await expect(productInOverview.name).toBe(product.name);
// //         await expect(checkout2Page.itemTotalWOTax).toHaveText(`Item total: $${product.price}`);

// //         await checkout2Page.finishBtnClick();
// //         await expect(checkoutCompletePage.title).toHaveText('Checkout: Complete!');
// //         await expect(await checkoutCompletePage.getCurrentUrl()).toContain('/checkout-complete');
// //         await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');

// //         await checkoutCompletePage.backHomeBtnClick();
// //         await expect(inventoryPage.title).toHaveText('Products');
// //         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');
// //     });




// //     it('009 - Checkout without products. Should not allow checkout with empty cart', async () => {
// //         await expect(inventoryPage.title).toHaveText('Products');
// //         await expect(await inventoryPage.getCurrentUrl()).toContain('/inventory');

// //         await inventoryPage.openCart();
// //         await expect(cartPage.title).toHaveText('Your Cart');
// //         await expect(await inventoryPage.getCurrentUrl()).toContain('/cart');

// //         const items = await cartPage.cartItems;
// //         expect(items.length).toBe(0);

// //         await cartPage.goToCheckout1();
// //         await expect(cartPage.title).toHaveText('Your Cart');
// //         await expect(cartPage.errorMsg).toHaveTextContaining('Cart is empty');
// //     });

// // })
// import { test, expect } from '@playwright/test';
// import inventoryPage from '../pageobjects/inventory.page.js';
// import cartPage from '../pageobjects/cart.page.js';
// import checkout1Page from '../pageobjects/checkout1.page.js';
// import checkout2Page from '../pageobjects/checkout2.page.js';
// import checkoutCompletePage from '../pageobjects/checkout-complete.page.js';
// import { generateCustomer, itemDataTest, loginData } from '../fixtures/test.data.js';
// import loginPage from '../pageobjects/login.page.js';

// test.describe('Test Case Objective: Checkout', () => {
//   test.beforeEach(async ({ page }) => {
//     await loginPage.open(page);
//     await loginPage.login(page, loginData.valid.username, loginData.valid.password);
//     await expect(page).toHaveURL(/inventory/);
//   });

//   test('008 - should complete checkout successfully with valid data', async ({ page }) => {
//     await expect(page.locator(inventoryPage.title)).toHaveText('Products');
//     await expect(page).toHaveURL(/inventory/);

//     const product = await inventoryPage.addItemToCart(page, itemDataTest);
//     await expect(page.locator(inventoryPage.shoppingCartBadge)).toBeVisible();
//     await expect(await inventoryPage.getCartItemCount(page)).toBe('1');

//     await inventoryPage.openCart(page);
//     await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
//     await expect(page).toHaveURL(/cart/);

//     const productInCart = await cartPage.getProductDataByTitleDataTest(page, itemDataTest);
//     expect(productInCart.name).toBe(product.name);

//     await cartPage.goToCheckout1(page);
//     await expect(page.locator(checkout1Page.title)).toHaveText('Checkout: Your Information');
//     await expect(page).toHaveURL(/checkout-step-one/);

//     const customer = generateCustomer();
//     await checkout1Page.setFirstName(page, customer.firstName);
//     await expect(page.locator(checkout1Page.firstNameFld)).toHaveValue(customer.firstName);

//     await checkout1Page.setLastName(page, customer.lastName);
//     await expect(page.locator(checkout1Page.lastNameFld)).toHaveValue(customer.lastName);

//     await checkout1Page.setZip(page, customer.zip);
//     await expect(page.locator(checkout1Page.zipFld)).toHaveValue(customer.zip);

//     await checkout1Page.goToCheckOut2(page);
//     await expect(page.locator(checkout2Page.title)).toHaveText('Checkout: Overview');
//     await expect(page).toHaveURL(/checkout-step-two/);

//     const productInOverview = await checkout2Page.getProductDataByTitleDataTest(page, itemDataTest);
//     expect(productInOverview.name).toBe(product.name);
//     await expect(page.locator(checkout2Page.itemTotalWOTax)).toHaveText(`Item total: $${product.price}`);

//     await checkout2Page.finishBtnClick(page);
//     await expect(page.locator(checkoutCompletePage.title)).toHaveText('Checkout: Complete!');
//     await expect(page).toHaveURL(/checkout-complete/);
//     await expect(page.locator(checkoutCompletePage.completeHeader)).toHaveText('Thank you for your order!');

//     await checkoutCompletePage.backHomeBtnClick(page);
//     await expect(page.locator(inventoryPage.title)).toHaveText('Products');
//     await expect(page).toHaveURL(/inventory/);
//   });

//   test.skip('009 - Checkout without products. Should not allow checkout with empty cart', async ({ page }) => {
//     await expect(page.locator(inventoryPage.title)).toHaveText('Products');
//     await expect(page).toHaveURL(/inventory/);

//     await inventoryPage.openCart(page);
//     await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
//     await expect(page).toHaveURL(/cart/);

//     const count = await page.locator(cartPage.cartItems).count();
//     expect(count).toBe(0);

//     await cartPage.goToCheckout1(page);
//     await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
//     await expect(page.locator(cartPage.errorMsg)).toContainText('Cart is empty');
//   });
// });

import { test, expect } from '@playwright/test';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkout1Page from '../pageobjects/checkout1.page.js';
import checkout2Page from '../pageobjects/checkout2.page.js';
import checkoutCompletePage from '../pageobjects/checkout-complete.page.js';
import { generateCustomer, itemDataTest, loginData } from '../fixtures/test.data.js';
import loginPage from '../pageobjects/login.page.js';

test.describe('Test Case Objective: Checkout', () => {
    test.beforeEach(async ({ page }) => {
        await loginPage.open(page);
        await loginPage.login(page, loginData.valid.username, loginData.valid.password);
        await expect(page.locator(inventoryPage.title)).toHaveText('Products');
        await expect(page).toHaveURL(/inventory/);
    });

    test('008 - should complete checkout successfully with valid data', async ({ page }) => {
        const product = await inventoryPage.addItemToCart(page, itemDataTest);
        await expect(page.locator(inventoryPage.shoppingCartBadge)).toBeVisible();

        await inventoryPage.openCart(page);
        await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
        const productInCart = await cartPage.getProductDataByTitleDataTest(page, itemDataTest);
        expect(productInCart.name).toBe(product.name);

        await cartPage.goToCheckout1(page);
        await expect(page.locator(checkout1Page.title)).toHaveText('Checkout: Your Information');

        const customer = generateCustomer();
        await checkout1Page.setFirstName(page, customer.firstName);
        await checkout1Page.setLastName(page, customer.lastName);
        await checkout1Page.setZip(page, customer.zip);

        await checkout1Page.goToCheckOut2(page);
        await expect(page.locator(checkout2Page.title)).toHaveText('Checkout: Overview');

        const productInOverview = await checkout2Page.getProductDataByTitleDataTest(page, itemDataTest);
        expect(productInOverview.name).toBe(product.name);
        await expect(page.locator(checkout2Page.itemTotalWOTax)).toContainText(`$${product.price}`);

        await checkout2Page.finishBtnClick(page);
        await expect(page.locator(checkoutCompletePage.title)).toHaveText('Checkout: Complete!');
        await expect(page.locator(checkoutCompletePage.completeHeader)).toHaveText('Thank you for your order!');

        await checkoutCompletePage.backHomeBtnClick(page);
        await expect(page.locator(inventoryPage.title)).toHaveText('Products');
    });

    test('009 - Checkout without products. Should not allow checkout with empty cart', async ({ page }) => {
        await expect(page.locator(inventoryPage.title)).toHaveText('Products');
        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.openCart(page);
        await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
        await expect(page).toHaveURL(/cart/);

        const count = await page.locator(cartPage.cartItems).count();
        expect(count).toBe(0);

        await cartPage.goToCheckout1(page);
        await expect(page.locator(cartPage.title)).toHaveText('Your Cart');
        await expect(page.locator(cartPage.errorMsg)).toContainText('Cart is empty');
    });
});