import {expect,test} from '@playwright/test';
//import { test } from '../pages/fixtures';
test('AuthSite',async({page}) =>{
    await page.goto("/web/index.php/dashboard/index");
      await expect(page.locator('h6.oxd-text')).toBeVisible();
const ListOfMenuItems =page.locator(".oxd-main-menu-item-wrapper")
const ListCount = await ListOfMenuItems.count();
console.log("Total Menu items are "+ListCount);

for (let i=0;i<ListCount;i++){
  
  //console.log(await ListOfMenuItems.nth(i).textContent());
  if (await ListOfMenuItems.nth(i).textContent()==="Time"){
    await ListOfMenuItems.nth(i).click();
  }

}
});
  
