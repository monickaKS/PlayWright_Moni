import { test as base, expect } from '@playwright/test';
export const test = base.extend({

  LetcodePage: async ({ page }, use) => {
    await page.goto("/");
    await use(page);
  },

  WorkSpacePage: async ({ page }, use) => {
    await page.goto("/");
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await use(page);
  }

});

export { expect };
