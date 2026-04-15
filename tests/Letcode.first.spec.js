import {test,expect} from '@playwright/test';

test('example page title', async ({ page }) => {
  await page.goto('https://letcode.in/');
  await expect(page).toHaveTitle( "LetCode with Koushik");
  await page.getByRole('link',{name: 'Work-Space'}).click();
  await page.getByRole('link',{name: ' Simple table'}).click();
});
