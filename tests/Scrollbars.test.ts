import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import ScrollbarsPage from '../pages/ScrollbarsPage';
import data from '../data/data.json';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ScrollbarsPage para poder usarla en los test
let scrollbarsPage: ScrollbarsPage;

test('hiding button can be pressed', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  scrollbarsPage = new ScrollbarsPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToScrollbarsPage();

  await scrollbarsPage.verifyHidingbuttonIsVisible();

  await scrollbarsPage.clickHidingButton();

  await scrollbarsPage.verifyHidingButtonIsPressed();



});


