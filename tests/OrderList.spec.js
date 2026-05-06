import {test, expect} from '@playwright/test';
import OrderID from '../testdata/OrderID.json';
test("Order List",async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("monicka0810@gmail.com");
    await page.locator("#userPassword").fill("Aaradhya@3101");
    await page.locator("#login").click();
    await page.locator(".blinkingText").waitFor();
  console.log(await page.locator(".blinkingText").textContent());

  await page.getByText("ORDERS").click();
  await page.getByText("Your Orders").waitFor();
  //await page.locator("tbody tr").waitFor();
  const Rows = page.locator("tbody tr");
  const Rcount= await Rows.count();
  console.log(Rcount);
 for (let i =0; i<Rcount;i++){
    const orderId = await Rows.nth(i).locator("th").textContent();
    console.log(orderId);   
    if (orderId.trim() === OrderID.ProductOrderId){
        await Rows.nth(i).getByRole("button", {name:"View"}).click();
        await console.log(await page.locator(".tagline").textContent());
        break;  
    }
}
//await page.pause();


  
})