import {expect,test} from '@playwright/test';
test('playwright dev', async({page})=>{
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    await page.getByRole('link',{name:"Docs"}).click();
    const menu = await page.locator(".menu__list a").allTextContents();
    console.log(menu);
    for (let i=0;i<=2;i++){
    console.log(menu[i]);
  }
   // await expect(menu).toBeVisible();

})