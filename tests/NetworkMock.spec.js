import {test,expect} from '@playwright/test';

const FakePayload = {data:[],message:"No Orders"};
test("Netwrok Mocking", async ({page}) => {

   
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", 
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(FakePayload);
            await route.fulfill({ 
                response,
                body,
        })
        })

     await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("monicka0810@gmail.com");
    await page.locator("#userPassword").fill("Aaradhya@3101");
    await page.locator("#login").click();
   // await page.waitForLoadState('networkidle');
    //await page.waitForSelector(".card-body b").first();
   await expect(page.locator(".card-body b").first()).toBeVisible();

   await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
  console.log(await page.locator(".mt-4").textContent());

  await page.locator(".blinkingText").waitFor();
  console.log(await page.locator(".blinkingText").textContent());

  await page.getByRole("link", {name:"ORDERS"}).click();
  await page.locator("tbody tr").waitFor();
  const Rows = page.locator("tbody tr");
  console.log(await Rows.count());

    });
 

