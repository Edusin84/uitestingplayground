import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import ClickPage from '../pages/ClickPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ClickPage para poder usarla en los test
let clickPage: ClickPage;

test('button that ignores DOM click event', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  clickPage = new ClickPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToClickPage();

  await clickPage.buttonIgnoringDOM.click();

  await expect(clickPage.buttonIgnoringDOM).toHaveClass(/btn btn-success/);
});


