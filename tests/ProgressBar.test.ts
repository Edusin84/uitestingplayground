import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import ProgressBarPage from '../pages/ProgressBarPage';
import data from '../data/data.json';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ProgressBarPage para poder usarla en los test
let progressBarPage: ProgressBarPage;

test('progress bar is stopped at 75%', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  progressBarPage = new ProgressBarPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToProgressBarPage();

  await progressBarPage.verifyElementsAreVisible();

  await progressBarPage.clickStartButton();

  await progressBarPage.waitforProgressBarToReach75();

  await progressBarPage.clickStopButton();

  await progressBarPage.verifyResultField();


});


