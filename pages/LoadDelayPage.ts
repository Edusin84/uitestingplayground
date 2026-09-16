import { Page, Locator, expect } from '@playwright/test';

export default class LoadDelayPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly button: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.button = page.getByRole('button', { name: 'Button Appearing After Delay' });
    }

    // Funcion para esperar a que cargue el botón que aparece después de un delay
    async waitforButtonToAppear() {
        expect(this.button.waitFor({ state: 'visible' }));
    }
    
}