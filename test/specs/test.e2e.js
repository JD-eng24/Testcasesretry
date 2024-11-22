import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
         await LoginPage.open()

        //  await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.logo).toBeExisting()
        await expect(SecurePage.logo).toHaveText('Swag Labs');
        //  await expect(LoginPage).toHaveTextContaining('You logged into a secure area!');
        // await LoginPage.open()
       });
});

describe('Hamburger Menu Test', () => {
    it('should show the hamburger menu and click it', async () => {
        //  await LoginPage.open();
        // await LoginPage.login('standard_user', 'secret_sauce')
        // Ensure the hamburger menu is visible and then click it
         await LoginPage.clickBurgerMenu();
    });
});

describe('Add cart button test', () => {
    it('Added item should be added.', async () => {
        // await LoginPage.open();
        // await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.clickCartMenu();
    })
})

describe('Cart Testing', () => {
    it('should be clickable to go to your cart menu', async () => {
        // await LoginPage.open();
        // await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.Wheelcarts();
    })
})