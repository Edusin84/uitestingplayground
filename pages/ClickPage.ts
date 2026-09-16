import { Page, Locator } from '@playwright/test';

export default class ClickPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly buttonIgnoringDOM: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.buttonIgnoringDOM = page.locator('button:has-text("Button That Ignores DOM Click Event")');
    }
    
}