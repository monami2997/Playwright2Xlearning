import { test, expect } from '@playwright/test';

test('basic page load', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
