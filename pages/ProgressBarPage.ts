import { Page, Locator, expect } from '@playwright/test';
import data from '../data/data.json';

export default class ProgressBarPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly progressBar: Locator;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly resultfield: Locator;
    readonly progressBarAt75: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.progressBar = page.getByRole('progressbar');
        this.startButton = page.getByRole('button', { name: 'Start' });
        this.stopButton = page.getByRole('button', { name: 'Stop' });
        this.resultfield = page.locator('#result');

    }

    async verifyElementsAreVisible() {
        await expect(this.progressBar).toBeVisible();
        await expect(this.startButton).toBeVisible();
        await expect(this.stopButton).toBeVisible();
        await expect(this.resultfield).toBeVisible();
    }

    async clickStartButton() {
        await this.startButton.click();
    }

    async clickStopButton() {
        await this.stopButton.click();
    }

    async waitforProgressBarToReach75() {
        //await expect(this.progressBar).toHaveText('75');
        await this.page.waitForFunction(() => {
            const progressBar = document.querySelector('[role="progressbar"]');
            return progressBar && progressBar.getAttribute('aria-valuenow') === '75';
        });
    }

    async verifyResultField() {
        // Cualquiera de las dos opciones siguientes valdría para verificar que el campo de resultado contiene el texto "Result: 0"
        await expect(this.resultfield).toContainText('Result: 0');
        //await expect(this.resultfield).toHaveText(/Result: 0/);
    }
    
}