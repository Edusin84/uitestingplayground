import { Page, Locator, expect } from '@playwright/test';

export default class LandingPage {

    //Creamos variable de solo lectura para la pagina
    readonly page: Page;
    //Creamos variable del link Dinamic ID
    readonly dynamicIDLink: Locator;
    readonly classAttributeLink: Locator;
    readonly loadDelayLink: Locator;
    readonly clickLink: Locator;
    readonly textInputLink: Locator;
    readonly scrollbarsLink: Locator;
    readonly verifyTextLink: Locator;
    readonly progressBarLink: Locator;
    readonly visibilityLink: Locator;
    readonly sampleAppLink: Locator;

    constructor(page:Page){
        this.page = page;
        this.dynamicIDLink = page.getByRole('link', { name: 'Dynamic ID' });
        this.classAttributeLink = page.getByRole('link', { name: 'Class Attribute' });
        this.loadDelayLink = page.getByRole('link', { name: 'Load Delay' });
        this.clickLink = page.getByRole('link', { name: 'Click', exact: true });
        this.textInputLink = page.getByRole('link', { name: 'Text Input' });
        this.scrollbarsLink = page.getByRole('link', { name: 'Scrollbars' });
        this.verifyTextLink = page.getByRole('link', { name: 'Verify Text' });
        this.progressBarLink = page.getByRole('link', { name: 'Progress Bar' });
        this.visibilityLink = page.getByRole('link', { name: 'Visibility' });
        this.sampleAppLink = page.getByRole('link', { name: 'Sample App' });
    }
    
    async navigateToLandingPage() {
        await this.page.goto("http://www.uitestingplayground.com/");

        // Expect a title "to have" a substring.
        await expect(this.page).toHaveTitle(/UI Test Automation Playground/);
    }

    async navigateToDynamicIDPage() {
        // Press the link to the Dynamic ID page
        await this.dynamicIDLink.click();

        await expect(this.page).toHaveURL(/dynamicid/);
    }

    async navigateToClassAttributePage() {
        // Press the link to the Class Attribute page
        await this.classAttributeLink.click();

        await expect(this.page).toHaveURL(/classattr/);
    }

    async navigateToLoadDelayPage() {
        // Press the link to the Load Delay page
        await this.loadDelayLink.click();

        await expect(this.page).toHaveURL(/loaddelay/);
    }

    async navigateToClickPage() {
        // Press the link to the Click page
        await this.clickLink.click();

        await expect(this.page).toHaveURL(/click/);
    }

    async navigateToTextInputPage() {
        // Press the link to the Text Input page
        await this.textInputLink.click();

        await expect(this.page).toHaveURL(/textinput/);
    }

    async navigateToScrollbarsPage() {
        // Press the link to the Scrollbars page
        await this.scrollbarsLink.click();

        await expect(this.page).toHaveURL(/scrollbars/);
    }

    async navigateToVerifyTextPage() {
        // Press the link to the Verify Text page
        await this.verifyTextLink.click();

        await expect(this.page).toHaveURL(/verifytext/);
    }

    async navigateToProgressBarPage() {
        // Press the link to the Progress Bar page
        await this.progressBarLink.click(); 
        
        await expect(this.page).toHaveURL(/progressbar/);
    }

    async navigateToVisibilityPage() {
        // Press the link to the Visibility page
        await this.visibilityLink.click();

        await expect(this.page).toHaveURL(/visibility/);
    }

    async navigateToSampleAppPage() {
        // Press the link to the Sample App page
        await this.sampleAppLink.click();

        await expect(this.page).toHaveURL(/sampleapp/);
    }
}