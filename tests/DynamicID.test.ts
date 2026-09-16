import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import DynamicIDPage from '../pages/DynamicIDPage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase DynamicIDPage para poder usarla en los test
let dynamicIDPage: DynamicIDPage;

test('button with a Dynamic ID', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  dynamicIDPage = new DynamicIDPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToDynamicIDPage();

  await dynamicIDPage.clickDynamicIDButton();
});


