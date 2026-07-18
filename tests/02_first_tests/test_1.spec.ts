import { test , expect} from "@playwright/test";

test("first test", async({page}) =>{

    await page.goto("https://app.vwo.com/#login");
    await page.fill("#login-username", "admin");
    await page.fill("#login-password", "pass123");
    await page.click("#js-login-btn");

    await expect(page).toHaveURL("/dashboard");

});