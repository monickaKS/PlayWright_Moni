import {expect} from '@playwright/test';
import { test } from '../pages/fixtures';
import { openNewWindow } from '../utils/playwrightUtils';
test('MultiWindow', async({WorkSpacePage})=>{

     await WorkSpacePage.page.getByRole('link',{name: "Tabs"}).click();
    await WorkSpacePage.page.getByRole('button',{name: "Muiltiple windows"}).click();
    /*const allpages = WorkSpacePage.context().pages();
    const newPage = allpages[1];
    await newPage.waitForLoadState();
    const title = await newPage.title();
    console.log(title); */
    const page1 = await openNewWindow(WorkSpacePage.page,WorkSpacePage.page.context(), WorkSpacePage.page.getByRole('button',{name: "Muiltiple windows"}));
    await expect(page1).toHaveTitle("Dropdowns | LetCode with Koushik");
    const title = await page1.title();
    console.log(title);
   await WorkSpacePage.page.goBack();
   await expect(WorkSpacePage.page).toHaveURL("https://letcode.in/test");
 });

