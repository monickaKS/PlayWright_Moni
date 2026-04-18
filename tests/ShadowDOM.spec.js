import {test} from '../pages/fixtures';  
import { expect } from '@playwright/test';
test('ShadowDOM',async({WorkSpacePage})=>{
    await WorkSpacePage.verifyMainTitle();
 await WorkSpacePage.clickDom();
  await WorkSpacePage.verifyTitle();
  await WorkSpacePage.fillName("Monicka");
  //await WorkSpacePage.pause();
  
    
    


})