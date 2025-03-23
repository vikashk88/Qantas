import { Page } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';
import { ProductsPage } from '../pageObject/productsPage';
import { CartPage } from '../pageObject/cartPage';
import { CheckoutPage } from '../pageObject/checkoutPage';
import { CheckoutCompletePage } from '../pageObject/CheckoutCompletePage';
import { addRandomProducts } from '../utils/helpers';

export class CheckoutFlow {
    constructor(private page: Page) { }

    async completeCheckoutFlow(username: string, password: string, count: number, userInfo: { firstName: string; lastName: string; postalCode: string }) {
        const login = new LoginPage(this.page);
        const products = new ProductsPage(this.page);
        const cart = new CartPage(this.page);
        const checkout = new CheckoutPage(this.page);
        const complete = new CheckoutCompletePage(this.page);

        await login.goto();
        await login.login(username, password);

        const { names, total } = await addRandomProducts(this.page, count);
        const badgeCount = await products.getCartCount();
        if (badgeCount !== names.length) throw new Error(`Cart badge mismatch: expected ${names.length}, got ${badgeCount}`);

        await products.goToCart();
        await cart.verifyItems(names);
        await cart.clickCheckout();

        await checkout.fillDetails(userInfo.firstName, userInfo.lastName, userInfo.postalCode);
        await checkout.verifyTotal(total);
        await checkout.finish();

        await complete.verifySuccess();
    }
}