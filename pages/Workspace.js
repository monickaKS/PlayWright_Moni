import {expect} from '@playwright/test';
export class Workspace
{
constructor({page}){
    this.page = page;
    this.Dom = this.page.getByRole('link',{name :'DOM'});
    this.left = this.page.locator(".is-pulled-left");
    this.name = this.page.locator("#fname");
    

}
async verifyMainTitle(){
    await expect(this.page).toHaveTitle( "Workspace | LetCode with Koushik");
}
async clickDom(){
    await expect(this.Dom).toBeVisible();
    await this.Dom.click();
}
async verifyTitle(){
    await expect(this.left).toBeVisible();
}
async fillName(name){
    await this.name.fill(name);
}
} 