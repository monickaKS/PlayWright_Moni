export async function openNewWindow(page, context, locator){
     const [page1,page2] = await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        locator.click()
    ]);
    return [page1, page2];
}