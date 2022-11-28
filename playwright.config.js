const { devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [ ['html'] ],
  use: {
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 0,
    headless: false,  
  },


  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
      },
    },
  ],
};

module.exports = config;