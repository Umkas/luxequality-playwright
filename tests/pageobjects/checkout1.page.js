// 


class Checkout1Page {
  constructor() {
    this.title = '[data-test="title"]';
    this.firstNameFld = '[data-test="firstName"]';
    this.lastNameFld = '[data-test="lastName"]';
    this.zipFld = '[data-test="postalCode"]';
    this.continueBtn = '[data-test="continue"]';
  }

  async setFirstName(page, value) {
    await page.fill(this.firstNameFld, value);
  }

  async setLastName(page, value) {
    await page.fill(this.lastNameFld, value);
  }

  async setZip(page, value) {
    await page.fill(this.zipFld, value);
  }

  async fillCustomerInfo(page, { firstName, lastName, zip }) {
    await this.setFirstName(page, firstName);
    await this.setLastName(page, lastName);
    await this.setZip(page, zip);
  }

  async goToCheckOut2(page) {
    await page.click(this.continueBtn);
  }

  async open(page) {
    await page.goto('/checkout-step-one.html');
  }
}

export default new Checkout1Page();