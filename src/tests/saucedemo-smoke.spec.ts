import { expect, test } from '@playwright/test';
import { CheckoutCompletePage } from '../pageObject/CheckoutCompletePage';
import { LoginPage } from '../pageObject/loginPage';
import { ProductsPage } from '../pageObject/productsPage';
import { CartPage } from '../pageObject/cartPage';
import { CheckoutPage } from '../pageObject/checkoutPage';
import { addRandomProducts } from '../utils/helpers';
import '../features/saucedemo/checkout.feature';

test('End-to-End Checkout Flow using POM', { tag: ["@checkout", "@qantas"] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const completePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const { names, total } = await addRandomProducts(page, 3);
  const count = await productsPage.getCartCount();
  expect(count).toBe(names.length);

  await productsPage.goToCart();
  await cartPage.verifyItems(names);
  await cartPage.clickCheckout();

  await checkoutPage.fillDetails('Jane', 'Doe', '12345');
  await checkoutPage.verifyTotal(total);
  await checkoutPage.finish();

  await completePage.verifySuccess();
});
