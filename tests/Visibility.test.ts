import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import Visibility from '../pages/VisibilityPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase VisibilityPage para poder usarla en los test
let visibilityPage: Visibility;

test('buttons status', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  visibilityPage = new Visibility(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToVisibilityPage();

  await visibilityPage.buttonsToAppear();

  await visibilityPage.clickHideButton();

  await visibilityPage.verifyRemovedButtonIsNotVisible();

  await visibilityPage.verifyZeroWidthButtonIsNotVisible();

  await visibilityPage.verifyOverlappedButtonIsVisible();

  await visibilityPage.verifyOpacityButtonIsVisible();

  await visibilityPage.verifyVisibilityHiddenButtonIsNotVisible();

  await visibilityPage.verifyDisplayNoneButtonIsNotVisible();

  await visibilityPage.verifyOffscreenButtonIsVisible();


});


