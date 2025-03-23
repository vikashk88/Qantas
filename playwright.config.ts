import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './src/tests',

  fullyParallel: true,
 
  forbidOnly: !!process.env.CI,
  /* Number of times to retry failed tests. */
  retries: process.env.CI ? 2 : 0,
  /* Number of workers to use. */
  workers: process.env.CI ? 1 : undefined,
  /* Whether to generate a report at the end of test run. */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60_000,

  use: {
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com/v1/',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // }, 
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],


});
