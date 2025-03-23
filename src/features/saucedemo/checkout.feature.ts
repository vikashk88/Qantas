import { test } from '@playwright/test';
import { WEB_CONFIG } from '../../utils/config';
import { checkoutUser } from '../../utils/testData';
import { CheckoutFlow } from '../../pageMethods/CheckoutFlow';

test('Checkout flow using feature abstraction', async ({ page }) => {
  const flow = new CheckoutFlow(page);
  await flow.completeCheckoutFlow(
    WEB_CONFIG.username,
    WEB_CONFIG.password,
    3,
    checkoutUser
  );
});