import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import VerifyTextPage from '../pages/VerifyTextPage';
import data from '../data/data.json';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase VerifyTextPage para poder usarla en los test
let verifyTextPage: VerifyTextPage;

test('text field can be found', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  verifyTextPage = new VerifyTextPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToVerifyTextPage();

  await verifyTextPage.verifyTextFieldIsVisible();



});


