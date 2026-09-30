import { Page, Locator, expect } from '@playwright/test';

export default class sampleAppPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;

    readonly loginButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator
    readonly loginstatus: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.loginButton = page.locator('id=login');
        this.usernameInput = page.getByPlaceholder('User Name');
        this.passwordInput = page.getByRole('textbox', { name: '********' });
        this.loginstatus = page.locator('id=loginstatus');
    }

    // Funcion para esperar a que cargue el botón que aparece después de un delay
    async waitforElementsToAppear() {
        await expect(this.loginButton.waitFor({ state: 'visible' }));
        await expect(this.usernameInput.waitFor({ state: 'visible' }));
        await expect(this.passwordInput.waitFor({ state: 'visible' }));
        await expect(this.loginstatus.waitFor({state: 'visible'}));
    }

    async enterUserName(username: string) {
        await this.usernameInput.fill(username);

        await expect(this.usernameInput).toHaveValue(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);

        await expect(this.passwordInput).toHaveValue(password);
    }

    async clickLoginbutton() {
        this.loginButton.click();
    }

    async verifyInvalidCredentials() {
        await expect(this.loginstatus).toHaveText('Invalid username/password');
    }

    async verifyLoginStatus(username: string) {
        await expect(this.loginstatus).toContainText(username);
    }

    async verifyLogoutButton() {
        await expect(this.loginButton).toHaveText('Log Out');
    }

    async verifyLogoutStatus() {
        await expect(this.loginstatus).toHaveText('User logged out.');
    }

}