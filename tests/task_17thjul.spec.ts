import{test,expect} from '@playwright/test';

test('Task automate', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=addasda@adsd.com&password=dasdadasda&remember=yes#login-success");
    await page.locator("#email").clear();
    await page.fill("#email", "monami@gmail.com");
    await page.locator("#password").clear();
    await page.fill("#password", "monami");
    await page.locator('label').filter({ hasText: 'Remember me' }).click();
    await page.locator('.login-btn').click();
    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=monami%40gmail.com&password=monami&remember=yes#login-success");
})
