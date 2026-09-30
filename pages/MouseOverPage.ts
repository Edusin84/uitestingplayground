import { Page, Locator, expect } from '@playwright/test';

export default class MouseOverPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly clickMeButton: Locator;
    readonly linkButton: Locator;
    readonly clickCount: Locator;
    readonly clickButtonCount: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.clickMeButton = page.getByText('Click me');
        this.linkButton = page.getByText('Link Button');
        this.clickCount = page.locator('id=clickCount');
        this.clickButtonCount = page.locator('id=clickButtonCount');
    }

    // Funcion para esperar a que cargue el botón que aparece después de un delay
    async waitforElementsToAppear() {
        expect(this.clickMeButton.waitFor({ state: 'visible' }));
        expect(this.linkButton.waitFor({ state: 'visible'}));
        expect(this.clickCount.waitFor({ state: 'visible'}));  
        expect(this.clickButtonCount.waitFor({ state: 'visible'}));    
    }

    async clickClickMeButton() {
        await this.clickMeButton.click();
    }

    async verifyClickMeTimes(times: number) {
        await expect(this.clickCount).toHaveText( times.toString());
    }

    async verifyLinkButtonCount(times: number) {
        await expect(this.clickButtonCount).toHaveText(times.toString());
    }

    async clickLinkButton() {
        await this.linkButton.click();
    }
    
}