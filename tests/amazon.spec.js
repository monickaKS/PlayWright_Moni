import {test,expect} from '@playwright/test';
import { Products } from '../pages/amazon';
import testdata from '../testdata/testdata.json';


test('Search and add Product', async({page})=>{
const products = new Products({page});
await products.gotoAmazonSite();
await products.searchProduct(testdata.amazonSearch.productName);
await products.VerifyProductResult();
await products.addproductToCart();

await page.pause();

}

)