import { Page, Locator, expect } from '@playwright/test';
import data from '../data/data.json';

export default class VerifyTextPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly textField: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.textField = page.getByText("Welcome UserName!").last();

    }

    async verifyTextFieldIsVisible() {
        await expect(this.textField).toBeVisible();
    }
    
}