import {test,expect} from '@playwright/test';
test('Slider validation',async({page})=>{
    await page.goto("https://letcode.in/");
    await page.getByText("Work-Space").click();
    await page.getByRole('link', { name: " AUI - 5 " }).click();
    
    const slider = page.locator("#generate");
    //await slider.fill("50");
   // await page.pause();

    //const slider = page.locator("#slider");

// Get slider position
//const box = await slider.boundingBox();

// Move mouse to slider
//await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);

// Click and hold
//await page.mouse.down();

// Move right (increase value)
//await page.mouse.move(box.x + box.width, box.y);
//await page.pause();
const box = await slider.boundingBox();

const min = 0;
const max = 50;
const value = 15;

// Step 1: convert value → percentage
const percent = (value - min) / (max - min);

// Step 2: convert percentage → pixels
const targetX = box.x + box.width * percent;

// Step 3: drag slider
await page.mouse.move(box.x, box.y);
await page.mouse.down();
await page.mouse.move(targetX, box.y);
await page.mouse.up();
//await page.pause();
await page.getByRole('button',{name:"Get Countries"}).click();
await page.waitForSelector('.has-text-primary-light');
const country = await page.locator(".has-text-primary-light").textContent();;
const CountryList = country.split("-")
;
console.log(CountryList.length);
console.log(country);
await expect(page.locator('.has-text-primary-light')).toContainText("Australia");

})