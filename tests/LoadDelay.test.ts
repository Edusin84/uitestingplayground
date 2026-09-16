import { test, expect, Dialog } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import LoadDelayPage from '../pages/LoadDelayPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase LoadDelayPage para poder usarla en los test
let loadDelayPage: LoadDelayPage;

test('navigate to Load Delay page', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  loadDelayPage = new LoadDelayPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToLoadDelayPage();

  await page.waitForURL(/loaddelay/);

  await loadDelayPage.waitforButtonToAppear();


});



