import {expect,test} from '@playwright/test';
test('ShadowDOM',async({page})=>{
  await page.goto('https://letcode.in/');
  await expect(page).toHaveTitle( "LetCode with Koushik");
  await page.getByRole('link',{name: 'Work-Space'}).click();
  await page.getByRole('link',{name :' DOM '}).click();
  await expect(page.locator(".is-pulled-left")).toBeVisible();
  await page.locator("#fname").fill("Monicka");
  await page.pause();
  
    
    


})