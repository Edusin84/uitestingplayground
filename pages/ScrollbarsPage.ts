import { Page, Locator, expect } from '@playwright/test';
import data from '../data/data.json';

export default class ScrollbarsPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly hidingButton: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.hidingButton = page.getByRole('button', { name: 'Hiding Button' });

    }

    async clickHidingButton() {
        await this.hidingButton.click();
    }
    
    async verifyHidingButtonIsPressed() {
        await expect(this.hidingButton).toBeFocused;
    }

    async verifyHidingbuttonIsVisible() {
        await expect(this.hidingButton).toBeVisible();
    }
    
}