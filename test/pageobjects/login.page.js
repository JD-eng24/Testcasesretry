import { $ } from '@wdio/globals'
import Page from './page.js';
import {browser} from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[id="login-button"]');
    }

    get burger () {
        return $('button[id="react-burger-menu-btn"]');
    }

   get addCart () {
    return $('button[id="add-to-cart-sauce-labs-bike-light"]');
   }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
/**
 * function to ensure hamburger menu is visible 
 */
    async clickBurgerMenu() {
         await this.burger.waitForDisplayed();
         await this.burger.click();
         await browser.pause(2000);
    }
    
    /**
     * function to check if the add to cart button is working
     */
    async clickCartMenu() {
        await this.addCart.waitForDisplayed();
        await this.addCart.click();
        await browser.pause(4000);
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
