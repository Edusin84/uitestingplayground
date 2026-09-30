import { Page, Locator, expect } from '@playwright/test';

export default class VisibilityPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly hideButton: Locator;
    readonly removedButton: Locator;
    readonly zeroWidthButton: Locator;
    readonly overlappedButton: Locator;
    readonly opacityButton: Locator;
    readonly visibilityHiddenButton: Locator;
    readonly displayNoneButton: Locator;
    readonly offscreenButton: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.hideButton = page.getByRole('button', { name: 'Hide' });
        this.removedButton = page.getByRole('button', { name: 'Removed' });
        this.zeroWidthButton = page.getByRole('button', { name: 'Zero Width' });
        this.overlappedButton = page.getByRole('button', { name: 'Overlapped' });
        this.opacityButton = page.getByRole('button', { name: 'Opacity 0' });
        this.visibilityHiddenButton = page.getByRole('button', { name: 'Visibility Hidden' });
        this.displayNoneButton = page.getByRole('button', { name: 'Display None' });
        this.offscreenButton = page.getByRole('button', { name: 'Offscreen' });
    }

    // Funcion para esperar a que carguen los botones
    async buttonsToAppear() {
        await expect(this.hideButton).toBeVisible();
        await expect(this.removedButton).toBeVisible();
        await expect(this.zeroWidthButton).toBeVisible();
        await expect(this.overlappedButton).toBeVisible();
        await expect(this.opacityButton).toBeVisible();
        await expect(this.visibilityHiddenButton).toBeVisible();
        await expect(this.displayNoneButton).toBeVisible();
        await expect(this.offscreenButton).toBeVisible();
    }
    
    async clickHideButton() {
        this.hideButton.click();

        await expect(this.hideButton).toBeFocused();
    }

    async verifyRemovedButtonIsNotVisible() {
        await expect(this.removedButton).not.toBeVisible();
    }

    async verifyZeroWidthButtonIsNotVisible() {
        await expect(this.zeroWidthButton).not.toBeVisible();
    }

    async verifyOverlappedButtonIsVisible() {
        await expect(this.overlappedButton).toBeVisible();
    }

    async verifyOpacityButtonIsVisible() {
        await expect(this.opacityButton).toBeVisible();
    }

    async verifyVisibilityHiddenButtonIsNotVisible() {
        await expect(this.visibilityHiddenButton).not.toBeVisible();
    }

    async verifyDisplayNoneButtonIsNotVisible() {
        await expect(this.displayNoneButton).not.toBeVisible();
    }

    async verifyOffscreenButtonIsVisible() {
        await expect(this.offscreenButton).toBeVisible();
    }
}