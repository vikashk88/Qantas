import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillDetails(firstName: string, lastName: string, zip: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
    await this.page.click('.cart_button');
  }

  async verifyTotal(expected: number) {
    const totalText = await this.page.textContent('.summary_subtotal_label');
    const actual = parseFloat(totalText?.replace('Item total: $', '') || '0');
    expect(actual).toBeCloseTo(expected, 2);
  }

  async finish() {
    await this.page.click('.cart_button');
  }
}