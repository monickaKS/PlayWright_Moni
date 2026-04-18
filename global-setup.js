import { chromium } from "@playwright/test";
export default async() => {
    const browser= await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.context().storageState({path:"state.json"});
    await browser.close();
}