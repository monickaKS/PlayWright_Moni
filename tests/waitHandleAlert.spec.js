import {test,expect} from '@playwright/test';
test ('handle wait alert',async({page}) =>{
    await page.goto("https://letcode.in/");
    await page.getByText("Work-Space").click();
   await page.getByRole('link',{name : ' Timeout '}).click();
   await page.getByRole('button',{name: 'Simple Alert'}).click();
   const alert = await page.waitForEvent('dialog');
    //await page.pause();
    console.log(alert.message());   
    await alert.accept();
   
})