class FooterPage {
  constructor() {
    this.twitterIcon = '[data-test="social-twitter"]';
    this.facebookIcon = '[data-test="social-facebook"]';
    this.linkedinIcon = '[data-test="social-linkedin"]';
  }

  async clickTwitter(page) {
    await page.click(this.twitterIcon);
  }

  async clickFacebook(page) {
    await page.click(this.facebookIcon);
  }

  async clickLinkedin(page) {
    await page.click(this.linkedinIcon);
  }
}

export default new FooterPage();