import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import ShadowDOMPage from '../pages/ShadowDOMPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ScrollbarsPage para poder usarla en los test
let shadowDOMPage: ShadowDOMPage;
let UUID: string;
let copiedUUID: string;

test('generate and copy buttons', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  shadowDOMPage = new ShadowDOMPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToShadowDOMPAge();

  await shadowDOMPage.waitforElementsToAppear();

  await shadowDOMPage.clickGenerateButton();

  UUID = await shadowDOMPage.saveUUID();
  console.log('UUID generated:', UUID);

  await shadowDOMPage.copyUUID();

  await shadowDOMPage.compareUUIDs(UUID);
});


