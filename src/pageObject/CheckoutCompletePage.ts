import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) { }

  async verifySuccess() {
    const text = await this.page.textContent('.complete-header');
    expect(text).toContain('Thank you for your order');
  }
}
