import Page from './page.js';

class CartPage extends Page {
    constructor() {
        super();
        this.title = '[data-test="title"]';
        this.checkOutBtn = '[data-test="checkout"]';
        this.inventoryItemName = '.inventory_item_name';
        this.cartItems = '.cart_item';
        this.errorMsg = '[data-test="error"]';
    }

    async getProductContainerByItemTitleDataTest(page, dataTest) {
        return page.locator(`xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class,"cart_item")]`);
    }

    // async getProductDataByTitleDataTest(page, dataTest) {
    //     const container = page.locator(`xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class, "inventory_item")]`);
    //     return {
    //         container,
    //         name: await container.locator('.inventory_item_name').textContent(),
    //         price: removeDollarSign(await container.locator('.inventory_item_price').textContent()),
    //         addToCartBtn: container.locator('[data-test^="add-to-cart"]')
    //     };
    // }

    async getProductDataByTitleDataTest(page, dataTest) {
        const container = page.locator(
            `xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class,"inventory_item") or contains(@class,"cart_item")]`
        );
        return {
            name: await container.locator('.inventory_item_name').textContent(),
            price: removeDollarSign(await container.locator('.inventory_item_price').textContent()),
            addToCartBtn: container.locator('[data-test^="add-to-cart"]')
        };
    }

    async goToCheckout1(page) {
        await page.click(this.checkOutBtn);
    }

    async getProductDataByName(page, name) {
        const container = page.locator('.cart_item', { hasText: name });
        return {
            name: await container.locator('.inventory_item_name').textContent(),
            price: removeDollarSign(await container.locator('.inventory_item_price').textContent())
        };
    }

    async open(page) {
        await super.open(page, 'cart.html');
    }
}

export default new CartPage();