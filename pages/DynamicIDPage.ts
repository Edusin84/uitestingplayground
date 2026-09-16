import { Page, Locator, expect } from '@playwright/test';

export default class DynamicIDPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;
    //Creamos variable del link Dinamic ID
    readonly dynamicIDButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.dynamicIDButton = page.getByRole('button', { name: 'Button with Dynamic ID' });
    }
    
    async clickDynamicIDButton() {
        // Press the button with dynamic ID
        await this.dynamicIDButton.click();

        await expect(this.dynamicIDButton).toBeFocused();
    }
}