import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import MouseOverPage from '../pages/MouseOverPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ProgressBarPage para poder usarla en los test
let mouseOverPage: MouseOverPage;

test('click on link that changes with the mouse over it', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  mouseOverPage = new MouseOverPage(page);

  let clickMeTimes: number = 0;
  let linkButtonTimes: number = 0;

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToMouseOverPage();

  await mouseOverPage.waitforElementsToAppear();

  await mouseOverPage.verifyClickMeTimes(clickMeTimes);

  for (let i = 0; i < 2; i++) {
    await mouseOverPage.clickClickMeButton();
    clickMeTimes += 1;
    console.log(clickMeTimes);
    await mouseOverPage.verifyClickMeTimes(clickMeTimes);
  }

  for (let i = 0; i < 2; i++) {
    await mouseOverPage.clickLinkButton();
    linkButtonTimes += 1;
    await mouseOverPage.verifyLinkButtonCount(linkButtonTimes);
  }


});


