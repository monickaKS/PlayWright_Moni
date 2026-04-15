import { expect } from "@playwright/test";
import { text } from "stream/consumers";
export class Products{
constructor({page}){
    this.page = page;
    this.searchbox = page.locator("#twotabsearchtextbox");
    this.searcIcon = page.locator("[type='submit']");
    this.result = page.locator("h2:has-text('Results')")
    this.addToCart = page.locator('div[data-component-type="s-search-result"]')}

async gotoAmazonSite(){
    await this.page.goto("https://www.amazon.in/");
}

async searchProduct(Productname){
    await this.searchbox.fill(Productname);
    await this.searcIcon.click();
}

async VerifyProductResult(){

    await expect(this.result.first()).toBeVisible();

}

async addproductToCart(){
    const cart = await this.addToCart.filter({hastext:"Samsung Galaxy S24"});
    await cart.locator("[name ='submit.addToCart']").click();
}}







