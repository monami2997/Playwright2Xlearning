import { test, expect } from '@playwright/test';

test('assertions example', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL(/example.com/);
    await expect(page.locator('h1')).toBeVisible();
});
