import { test, expect, Dialog } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import ClassAttributePage from '../pages/ClassAttributePage';

// Creamos variable de la clase LandingPage para poder usarla en los test
let landingPage: LandingPage;
// Creamos variable de la clase ClassAttributePage para poder usarla en los test
let classAttributePage: ClassAttributePage;

test('navigate to Class Attribute page', async ({ page }) => {
  
  landingPage = new LandingPage(page);
  classAttributePage = new ClassAttributePage(page);

  await landingPage.navigateToLandingPage();

  await landingPage.navigateToClassAttributePage();

  await page.waitForTimeout(3000);

  // Configurar listener de la notificación (diálogo) que aparece al hacer click en el botón
  page.once('dialog', async (dialog: Dialog) => {
    // Verificar el mensaje de la notificación
    expect(dialog.message()).toBe('Primary button pressed');
    await page.waitForTimeout(3000);
    // Aceptar la notificación
    await dialog.accept();
  });

  await classAttributePage.button2ByClassAttribute.click();


});



