import {test, expect} from '@playwright/test';
import OrderID from '../testdata/OrderID.json';
test("Order List",async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("monicka0810@gmail.com");
    await page.locator("#userPassword").fill("Aaradhya@3101");
    await page.locator("#login").click();

//const checkBox = page.locator('div.ng-star-inserted:has-text("fashion")').locator('input[type="checkbox"]')
//await checkBox.check();

const checkbox = page.locator('div.form-group:has-text("fashion") input[type="checkbox"]').nth(0);;

await checkbox.check();
await expect(checkbox).toBeChecked();

})

