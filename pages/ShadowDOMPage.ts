import { Page, Locator, expect } from '@playwright/test';

export default class ShadowDOMPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly textField: Locator;
    readonly generateButton: Locator;
    readonly copyButton: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.textField = page.locator('id=editField');
        this.generateButton = page.locator('id=buttonGenerate');
        this.copyButton = page.locator('id=buttonCopy');
    }

    // Funcion para esperar a que carguen los elementos
    async waitforElementsToAppear() {
        expect(this.textField.waitFor({ state: 'visible' }));
        expect(this.generateButton.waitFor({ state: 'visible' }));
        expect(this.copyButton.waitFor({ state: 'visible' }));
    }

    async clickGenerateButton() {
        await this.generateButton.click();

        await expect(this.textField.inputValue()).not.toBe('');
    }

    async saveUUID() {
        const UUID: string = (await this.textField.inputValue()) ?? '';
        console.log('UUID saved:', UUID);
        return UUID;
    }

    async copyUUID() {
        await this.copyButton.click();
    }

    async compareUUIDs(originalUUID: string) {
        const copiedUUID: string = await this.page.evaluate(() => navigator.clipboard.readText());
        console.log('Copied UUID:', copiedUUID);
        expect(copiedUUID).toBe(originalUUID);
    }
    
}