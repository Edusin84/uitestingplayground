import { Page, Locator } from '@playwright/test';

export default class ClassAttributePage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly button2ByClassAttribute: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.button2ByClassAttribute = page.locator('.btn-primary');
    }
    
}