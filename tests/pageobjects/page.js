import { expect } from '@playwright/test';

class Page {
  constructor() {
    this.burgerMenuBtn = '#react-burger-menu-btn';
    this.burgerCloseBtn = '#react-burger-cross-btn';
    this.menuList = '.bm-item-list';
    this.menuItems = '.bm-item-list a';

    this.menuAllItems = '#inventory_sidebar_link';
    this.menuAbout = '#about_sidebar_link';
    this.menuLogout = '#logout_sidebar_link';
    this.menuReset = '#reset_sidebar_link';
  }

  async openMenu(page) {
    await this.waitForElementDisplayed(page, this.burgerMenuBtn);
    await page.click(this.burgerMenuBtn);
    await expect(page.locator(this.menuList)).toBeVisible();
  }

  async closeMenu(page) {
    await page.click(this.burgerCloseBtn);
  }

  async getMenuItemTexts(page) {
    return await page.locator(this.menuItems).allTextContents();
  }

  async resetAppState(page) {
    await this.waitForElementDisplayed(page, this.menuReset);
    await page.click(this.menuReset);
  }

  async logout(page) {
    await this.waitForElementDisplayed(page, this.menuLogout);
    await page.click(this.menuLogout);
  }

  async waitForElementDisplayed(page, selector, timeout = 5000) {
    await expect(page.locator(selector)).toBeVisible({ timeout });
  }

  async open(page, path = '') {
    await page.goto(`/${path}`, { waitUntil: 'domcontentloaded' });
  }

  async getCurrentUrl(page) {
    return page.url();
  }
}

export default Page;