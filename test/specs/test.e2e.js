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

describe('X button exit', () => {
    it('should exit you out of the hamburger page', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.Xsign();
    })
})

describe('Add cart button test', () => {
    it('Added item should be added.', async () => {
        // await LoginPage.open();
        // await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(10000); 
        // await LoginPage.Xsign.click();
        await LoginPage.clickCartMenu();
    })
})

describe('Cart Testing', () => {
    it('should be clickable to go to your cart menu', async () => {
        // await LoginPage.open();
        // await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.openShoppingCart();
    })
})

describe('Removing item test', () => {
    it('should remove the item from your cart', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.removeItem();
    })
})


describe('info testing', () => {
    it('should see what the about is all about in saucedemo', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.logoutAndLogin();
    })
})

describe('sign out test', () => {
    it('should sign you out from the website', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.logoutAndLogin();
    })
})

describe('Reset test', () => {
    it('should reset the app state on saucedemo', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.appStartover();
    })
})


describe('Continuing shop test', () => {
    it('should return to the home page to add more items to your cart', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.shoppingMore();
    })
})

describe('checkout test', () => {
    it('should checkout you out and info added before you buy it', async () => {
        // await LoginPage.open();
       // await LoginPage.login('standard_user', 'secret_sauce')
       await LoginPage.Itemdone();
    })
})
