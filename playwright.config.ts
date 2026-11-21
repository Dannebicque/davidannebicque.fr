import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: 'http://localhost:3101',
    trace: 'off',
    launchOptions: { executablePath: process.env.PW_CHROMIUM_PATH || undefined }
  },
  webServer: {
    command: 'node scripts/serve.mjs',
    url: 'http://localhost:3101',
    reuseExistingServer: !process.env.CI
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
})
