/*import {test,expect} from '@playwright/test';
import fs from 'fs';
import { parsePDF } from '../utils/pdfUtils';   
const pdf = require('pdf-parse');
test('File handling',async({page})=>{
    await page.goto("https://letcode.in/");
    await expect(page).toHaveTitle(" LetCode with Koushik ");
    await page.getByText("Work-Space").click();
    const iframe = page.frameLocator('iframe');
    const closebtn = iframe.locator("#dismiss-button-element")
    if (await closebtn.isVisible().catch(() => false)) {
   await closebtn.click();
        
    } 
        
    await page.getByRole('link',{name : "  File management "}).click();

  //  await page.locator("#pdf").click();
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#pdf").click()


    ])
     const filePath = `downloads/${download.suggestedFilename()}`;
    await download.saveAs(filePath);
   // const path = await download.path();
    //console.log(path);
    const buffer = fs.readFileSync(filePath);
     const data = await parsePDF(buffer); 
     console.log(data.text);
    expect(data.text).toContain("This is a small demonstration .pdf file");
    

    
}); */