import {test} from '../pages/fixtures';  
import { expect } from '@playwright/test';




test('example page title', async ({ WorkSpacePage }) => {
    await expect(WorkSpacePage).toHaveTitle( "Workspace | LetCode with Koushik");
  
});
