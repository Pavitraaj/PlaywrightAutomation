import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: process.env.CI ? 2 : 0, // retry twice in CI
  testDir: 'tests/e2e',
  workers: process.env.CI ? 2 : undefined, // limit workers in CI
  use: {
    headless: process.env.CI ? true : false, // headless in CI
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: process.env.CI
    ? [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        },
      ]
    : [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        },
        {
          name: 'Firefox',
          use: { browserName: 'firefox' },
        },
        {
          name: 'Webkit',
          use: { browserName: 'webkit' },
        },
      ],
};

export default config;
