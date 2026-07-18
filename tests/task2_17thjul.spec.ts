import { test, expect } from '@playwright/test';

test('First Terminated employee', async ({ page }) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.fill('[name="username"]', "admin");
    await page.fill('[name="password"]', "Awesomeqa@4321");
    await page.locator('[type$="submit"]').click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");

    await expect(page.locator(".oxd-table-body")).toBeVisible();

    const rows = page.locator('.oxd-table-body .oxd-table-row');
    const rowCount = await rows.count();
    console.log("Count = ", await rows.count());

    for (let i = 0; i < rowCount; i++) {
        const cellValues = await rows.nth(i).locator('.oxd-table-cell').allInnerTexts();
        const singleRowText = cellValues.join(' | ');
        if (singleRowText.includes('Terminated')) {
            console.log(`First Terminated Employee Found in Row ${i + 1}: ${singleRowText}`);
            break;
        }
    }
});