import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async getCartCount(): Promise<number> {
    const badge = await this.page.textContent('.shopping_cart_badge');
    return Number(badge);
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
