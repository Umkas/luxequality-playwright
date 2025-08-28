import Page from './page.js';

class LoginPage extends Page {
  constructor() {
    super();
    this.inputUsername = '[data-test="username"]';
    this.inputPassword = '[data-test="password"]';
    this.loginBtn = '[data-test="login-button"]';
    this.title = '[data-test="title"]';
    this.errorBanner = '[data-test="error"]';
    this.errorCloseBtn = '[data-test="error-button"]';
    this.usernameXIcon = 'xpath=//*[@data-test="username"]/following-sibling::*[contains(@class,"error_icon") or name()="svg" and contains(@class,"error_icon")]';
    this.passwordXIcon = 'xpath=//*[@data-test="password"]/following-sibling::*[contains(@class,"error_icon") or name()="svg" and contains(@class,"error_icon")]';
  }

  async login(page, username, password) {
    await page.fill(this.inputUsername, username);
    await page.fill(this.inputPassword, password);
    await page.click(this.loginBtn);
  }

  async fillUserName(page, username) {
    await page.fill(this.inputUsername, username);
  }

  async fillPassword(page, password) {
    await page.fill(this.inputPassword, password);
  }

  async clickLogin(page) {
    await page.click(this.loginBtn);
  }

  async open(page) {
    await super.open(page, '');
  }
}

export default new LoginPage();
