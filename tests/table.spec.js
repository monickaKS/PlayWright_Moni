import {test,expect} from '@playwright/test';
test('table handling',async({page})=>{
    await page.goto("https://letcode.in/");
    await expect(page).toHaveTitle(" LetCode with Koushik ");
    await page.getByText("Work-Space").click();
    const iframe = page.frameLocator('iframe');
    const closebtn = iframe.locator("#dismiss-button-element")
    if (await closebtn.isVisible().catch(() => false)) {
   await closebtn.click();
        
    } 
        
    await page.getByRole('link',{name : " Advance table "}).click();
    const tableContents = await page.locator("tbody tr").allTextContents();
    for (const row of tableContents) {
        if (row.includes('University of Aberdeen')) {
            console.log(row);
            const website = row.split('//')[1].trim().replace('/','');
            console.log(website);
        }
    }

    
})