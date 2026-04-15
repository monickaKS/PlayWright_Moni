import {test,expect} from '../pages/fixtures';  




test('example page title', async ({ WorkSpacePage }) => {
    await expect(WorkSpacePage).toHaveTitle( "LetCode with Koushik");
  
});
