// import Page from './page.js';
// import { removeDollarSign } from '../helpers/diff.help.js';

// class Checkout2Page extends Page {

//     get title() { return $('[data-test="title"]'); }
//     get finishBtn() { return $('[data-test="finish"]'); }
//     get itemTotalWOTax() { return $('[data-test="subtotal-label"]'); }

//     async getProductContainerByItemTitleDataTest(dataTest) {
//         return $(`//*[@data-test="${dataTest}"]/ancestor::div[contains(@class,"cart_item_label")]`);
//     }

//     async getProductDataByTitleDataTest(dataTest) {
//         const container = await this.getProductContainerByItemTitleDataTest(dataTest);

//         return {
//             name: await container.$('.inventory_item_name').getText(),
//             price: removeDollarSign(await container.$('.inventory_item_price').getText()),
//         };
//     }

//     async finishBtnClick() {
//         await this.finishBtn.waitForClickable();
//         await this.finishBtn.click();
//     }

//     open() {
//         return super.open('checkout-step-two');
//     }
// }

// export default new Checkout2Page();

import { removeDollarSign } from '../helpers/diff.help.js';

class Checkout2Page {
    constructor() {
        this.title = '[data-test="title"]';
        this.finishBtn = '[data-test="finish"]';
        this.itemTotalWOTax = '[data-test="subtotal-label"]';
    }

    async getProductContainerByItemTitleDataTest(page, dataTest) {
        return page.locator(`xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class,"cart_item_label")]`);
    }

    async getProductDataByTitleDataTest(page, dataTest) {
        const container = page.locator(
            `xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class, "inventory_item")]`
        );
        return {
            name: await container.locator('.inventory_item_name').textContent(),
            price: removeDollarSign(await container.locator('.inventory_item_price').textContent()),
            addToCartBtn: container.locator('[data-test^="add-to-cart"]')
        };
    }



    async finishBtnClick(page) {
        await page.click(this.finishBtn);
    }

    async open(page) {
        await page.goto('/checkout-step-two.html');
    }
}

export default new Checkout2Page();