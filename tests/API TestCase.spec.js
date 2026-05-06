import{test,expect,request} from '@playwright/test';

const payLoad = {userEmail:"monicka0810@gmail.com",userPassword:"Aaradhya@3101"}
const payloadCart={
    _id: "69eb20fdf86ba51a65825589",
    product: {
        _id: "6960eae1c941646b7a8b3ed3",
        productName: "ADIDAS ORIGINAL",
        productCategory: "electronics",
        productSubCategory: "mobiles",
        productPrice: 11500,
        productDescription: "Apple phone",
        productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg",
        productRating: "0",
        productTotalOrders: "0",
        productStatus: true,
        productFor: "women",
        productAddedBy: "admin",
        __v: 0
    }
}

test("API test case", async({page})=>{
     
    const apiContextLogin= await request.newContext();
    const LoginResponse = await apiContextLogin.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data: payLoad})
    expect(LoginResponse.ok()).toBeTruthy();
    const LoginJson = await LoginResponse.json();
    console.log(LoginJson);
    const token = await LoginJson.token;
    console.log("Login Token is: " + token);
   
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("monicka0810@gmail.com");
    await page.locator("#userPassword").fill("Aaradhya@3101");
    await page.locator("#login").click();
    //expect(page.getByText(" Add To Cart").first()).toBeVisible();
    //await page.getByText(" Add To Cart").first().click();
    const apiContextCart = await request.newContext({extraHTTPHeaders: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
    });
    const apiResponseCart = await apiContextCart.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
    {data: payloadCart})
    expect(apiResponseCart.ok()).toBeTruthy();
    const cartJsonResponse = await apiResponseCart.json();
    console.log(cartJsonResponse);
    //await page.pause();


})

