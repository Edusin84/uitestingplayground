import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import SampleAppPage from '../pages/SampleAppPage';
import data from '../data/data.json'

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase VisibilityPage para poder usarla en los test
let sampleAppPage: SampleAppPage;

test('login flow', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  sampleAppPage = new SampleAppPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToSampleAppPage();

  await sampleAppPage.waitforElementsToAppear();

  await sampleAppPage.clickLoginbutton();

  await sampleAppPage.verifyInvalidCredentials();

  await sampleAppPage.enterUserName(data.data.userName);

  await sampleAppPage.enterPassword(data.data.password);

  await sampleAppPage.clickLoginbutton();

  await sampleAppPage.verifyLoginStatus(data.data.userName);

  await sampleAppPage.verifyLogoutButton();

  await sampleAppPage.clickLoginbutton();

  await sampleAppPage.verifyLogoutStatus();


});


