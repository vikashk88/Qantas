import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItems(expectedNames: string[]) {
    const cartItems = await this.page.$$('.cart_item');
    const names = await Promise.all(
      cartItems.map(item => item.$eval('.inventory_item_name', el => el.textContent?.trim() || ''))
    );

    for (const name of expectedNames) {
      expect(names).toContain(name);
    }
  }

  async clickCheckout() {
    await this.page.click('.checkout_button');
  }
}
