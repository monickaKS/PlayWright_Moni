import {test} from '../pages/fixtures';  
import { expect } from '@playwright/test';
test('ShadowDOM',async({WorkSpacePage})=>{
    await expect(WorkSpacePage).toHaveTitle( "LetCode with Koushik");
 await WorkSpacePage.getByRole('link',{name :' DOM '}).click();
  await expect(WorkSpacePage.locator(".is-pulled-left")).toBeVisible();
  await WorkSpacePage.locator("#fname").fill("Monicka");
  await WorkSpacePage.pause();
  
    
    


})