import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import TextInputPage from '../pages/TextInputPage';
import data from '../data/data.json';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase TextInputPage para poder usarla en los test
let textInputPage: TextInputPage;

test('text field changes button text', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  textInputPage = new TextInputPage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToTextInputPage();

  await textInputPage.waitforButtonToAppear();

  await expect(textInputPage.button).toHaveText('Button That Should Change it\'s Name Based on Input Value');

  await textInputPage.fillTextInput(data.data.textField);

  await expect(textInputPage.textInput).toHaveValue(data.data.textField);

  await textInputPage.clickButton();

  await textInputPage.verifyNewButton();


});


