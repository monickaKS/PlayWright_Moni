import { test as base } from '@playwright/test';
import { Products } from './amazon';
import { Webtable } from './LetcodeWebtable';
import testdata from '../testdata/testdata.json';

// Extend the base test with custom fixtures
export const test = base.extend({
  // Fixture for authenticated page (if needed for Amazon)
  authenticatedPage: async ({ page }, use) => {
    
    // await page.goto('https://amazon.com');
    // await page.fill('#email', process.env.AMAZON_EMAIL);
    // await page.fill('#password', process.env.AMAZON_PASSWORD);
    // await page.click('#signInSubmit');

    // For now, just navigate to Amazon
    await page.goto('https://amazon.com');
    await page.waitForLoadState('networkidle');

    await use(page);
  },

  // Fixture for Products page object
  productsPage: async ({ page }, use) => {
    const products = new Products(page);
    await use(products);
  },

  //Fixture for Letcode Site
  LetcodePage: async ({page},use) => {
    await page.goto("https://letcode.in/");
    await use(page);
  },

  WorkSpacePage: async({page},use)=>{
    await page.goto("https://letcode.in/");
    await page.getByRole('link',{name: 'Work-Space'}).click();
    await page.getByRole('link',{name: ' Simple table'}).click();
     // Set the page for Webtable fixture
    await use(page);
  },

  Webtable: async({WorkSpacePage},use)=>{
    const webtable = new Webtable({page: WorkSpacePage});
    await use(webtable);
  },
  // Fixture for test data
  testData: async ({}, use) => {
    await use(testdata);
  },

  // Fixture for API context
  apiContext: async ({ playwright }, use) => {
    const apiContext = await playwright.request.newContext({
      baseURL: 'https://api.amazon.com',
      extraHTTPHeaders: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });
    await use(apiContext);
    await apiContext.dispose();
  },

  // Fixture for custom browser context with specific settings
  customContext: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Custom User Agent',
      locale: 'en-US',
      timezoneId: 'America/New_York',
      // Add cookies, local storage, etc. if needed
    });
    await use(context);
    await context.close();
  },

  // Fixture for mobile context
  mobileContext: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...base.devices['iPhone 12'], // Use Playwright's built-in device
      // Or custom mobile settings
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
    });
    await use(context);
    await context.close();
  },

  // Fixture for authenticated API context
  authenticatedApi: async ({ playwright }, use) => {
    const apiContext = await playwright.request.newContext();

    // Login via API if needed
    // const loginResponse = await apiContext.post('/auth/login', {
    //   data: { username: process.env.USER, password: process.env.PASS }
    // });

    await use(apiContext);
    await apiContext.dispose();
  }

 
});