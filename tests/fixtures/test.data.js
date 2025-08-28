import { faker } from '@faker-js/faker';
import inventoryPage from '../pageobjects/inventory.page';
import footerPage from '../pageobjects/footer.page';

export const generateCustomer = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  zip: faker.location.zipCode('#####')
});

export const loginData = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'standarD_user',
    password: faker.internet.password()
  }
}

export const itemDataTest = "item-4-title-link";

export const EXPECTED_MENU = ['All Items', 'About', 'Logout', 'Reset App State'];

export const sortScenarios = [
  {
    option: 'az',
    getData: (page) => inventoryPage.getAllNames(page),
    sortFn: (arr) => [...arr].sort()
  },
  {
    option: 'za',
    getData: (page) => inventoryPage.getAllNames(page),
    sortFn: (arr) => [...arr].sort().reverse()
  },
  {
    option: 'lohi',
    getData: (page) => inventoryPage.getAllPrices(page),
    sortFn: (arr) => [...arr].sort((a, b) => a - b)
  },
  {
    option: 'hilo',
    getData: (page) => inventoryPage.getAllPrices(page),
    sortFn: (arr) => [...arr].sort((a, b) => b - a)
  }
];

export const footerIconScenarios = [
  { name: 'twitter', action: (page, footer) => footer.clickTwitter(page), expected: ['twitter.com', 'x.com'] },
  { name: 'facebook', action: (page, footer) => footer.clickFacebook(page), expected: ['facebook.com'] },
  { name: 'linkedin', action: (page, footer) => footer.clickLinkedin(page), expected: ['linkedin.com'] },
];