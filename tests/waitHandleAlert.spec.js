import {test,expect} from '@playwright/test';
test ('handle wait alert',async({WorkSpacePage}) =>{
    await expect(WorkSpacePage).toHaveTitle( "Workspace | LetCode with Koushik");
     await WorkSpacePage.getByRole('link',{name : ' Timeout '}).click();
   await WorkSpacePage.getByRole('button',{name: 'Simple Alert'}).click();
   const alert = await WorkSpacePage.waitForEvent('dialog');
    //await WorkSpacePage.pause();
    console.log(alert.message());   
    await alert.accept();
   
})