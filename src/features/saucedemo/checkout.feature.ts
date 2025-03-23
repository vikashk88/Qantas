import { test } from '@playwright/test';
import { config } from '../../utils/config';
import { checkoutUser } from '../../utils/testData';
import { CheckoutFlow } from '../../pageMethods/CheckoutFlow';

test('Checkout flow using feature abstraction', async ({ page }) => {
  const flow = new CheckoutFlow(page);
  await flow.completeCheckoutFlow(
    config.users.standard.username,
    config.users.standard.password,
    3,
    checkoutUser
  );
});