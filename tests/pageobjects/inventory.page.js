import { removeDollarSign } from '../helpers/diff.help.js';
import Page from './page.js';

class InventoryPage extends Page {
  constructor() {
    super();
    this.shoppingCartContainer = '.shopping_cart_container';
    this.shoppingCartBadge = '[data-test="shopping-cart-badge"]';
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.title = '[data-test="title"]';
  }

  async getProductContainerByItemTitleDataTest(page, dataTest) {
    return page.locator(`xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class, "inventory_item")]`);
  }

// async getProductDataByTitleDataTest(page, dataTest) {
//   const container = this.getProductContainerByItemTitleDataTest(page, dataTest);
//   await container.waitFor({ state: 'visible' });   
//   return {
//     name: await container.locator('.inventory_item_name').textContent(),
//     price: removeDollarSign(await container.locator('.inventory_item_price').textContent()),
//     addToCartBtn: container.locator('[data-test^="add-to-cart"]')
//   };
// }
async getProductDataByTitleDataTest(page, dataTest) {
  const container = page.locator(`xpath=//*[@data-test="${dataTest}"]/ancestor::div[contains(@class, "inventory_item")]`);
  return {
    container, // если тесту надо будет проверять
    name: await container.locator('.inventory_item_name').textContent(),
    price: removeDollarSign(await container.locator('.inventory_item_price').textContent()),
    addToCartBtn: container.locator('[data-test^="add-to-cart"]')
  };
}

  async getCartItemCount(page) {
    return page.locator(this.shoppingCartBadge).textContent();
  }

  async openCart(page) {
    await page.click(this.shoppingCartContainer);
  }

  async addItemToCart(page, dataTest) {
    const product = await this.getProductDataByTitleDataTest(page, dataTest);
    await product.addToCartBtn.click();
    return product;
  }

  async sortBy(page, value) {
    await page.locator(this.sortDropdown).selectOption(value);
  }

  async getAllPrices(page) {
    const priceEls = page.locator('.inventory_item_price');
    const count = await priceEls.count();
    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await priceEls.nth(i).textContent();
      prices.push(parseFloat(text.replace('$', '')));
    }
    return prices;
  }

  async getAllNames(page) {
    const nameEls = page.locator('.inventory_item_name');
    const count = await nameEls.count();
    const names = [];
    for (let i = 0; i < count; i++) {
      names.push(await nameEls.nth(i).textContent());
    }
    return names;
  }

  async open(page) {
    await super.open(page, 'inventory.html');
  }
}

export default new InventoryPage();