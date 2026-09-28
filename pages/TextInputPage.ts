import { Page, Locator, expect } from '@playwright/test';
import data from '../data/data.json';

export default class TextInputPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly textInput: Locator;
    readonly button: Locator;
    readonly newButton: Locator;
    readonly dataTest = data.data;
    

    constructor(page:Page){
        this.page = page;
        this.button = page.getByRole('button', { name: 'Button That Should Change it\'s Name Based on Input Value' });
        this.textInput = page.getByPlaceholder('MyButton');
        this.newButton = page.getByRole('button', { name: this.dataTest.textField });
    }

    async fillTextInput(text: string) {
        await this.textInput.fill(text);
    }


    async clickButton() {
        await this.button.click();
    }

    async waitforButtonToAppear() {
        await expect(this.button).toBeVisible();
    } 
    
    async verifyNewButton() {
        await expect(this.newButton).toBeVisible();
    }
    
}