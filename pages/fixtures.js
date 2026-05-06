import { test as base, expect } from '@playwright/test';
import { Workspace } from './Workspace';
//import { AuthSite } from './AuthSite';
export const test = base.extend({

  LetcodePage: async ({ page }, use) => {
    await page.goto("/");
    await use(LetcodePage);
  },

  WorkSpacePage: async ({ page }, use) => {
    await page.goto("/");
    await page.getByRole('link', { name: 'Work-Space' }).click();
    const workspace = new Workspace({ page });
    await use(workspace);
  },

  AuthSitePage: async({page}, use)=>{
    
    //const authsite = new AuthSite(page);
    await page.goto("/");
    await use(page);


  }

});

export { expect };
