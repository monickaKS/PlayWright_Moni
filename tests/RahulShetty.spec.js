import {test,expect} from '@playwright/test';
test ('Launch site @smoke',async({page})=>{
    await page.goto('');
    await page.fill('#username',process.env.TEST_USERNAME);
    await page.fill('#password',process.env.TEST_PASSWORD);
    await page.locator('#signInBtn').click();
    await page.pause();
    await expect(page).toHaveTitle("ProtoCommerce");
    
})