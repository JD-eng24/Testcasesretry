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
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]')
   }
    get Shoppingcart () {
        return $('a[class="shopping_cart_link"]');
    }
    get removeCart () {
        return $('button[class="btn btn_secondary btn_small cart_button"]');
    }
    get Allthings() {
        return  $('a#inventory_sidebar_link[data-test="inventory-sidebar-link"]');
    }
    get info() {
        return $('a[id="about_sidebar_link"]');
    }
    get logout() {
        return $('a[id="logout_sidebar_link"]');
    }
    get reset() {
        return $('a[id="reset_sidebar_link"]');
    }
    get exit() {
        return $('#react-burger-cross-btn');
    }
    get checkout() {
        return $('button[id="checkout"]');
    }
    get continue() {
        return $('button[data-test="continue-shopping"]');
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
        await this.exit.click();
    }  
    async openAboutAndLogin() {
        await this.burger.click();
        await this.info.waitForDisplayed();
        await browser.pause(3000);
        await this.info.click();
        await browser.url('https://www.saucedemo.com/');
        await this.inputUsername.setValue('standard_user');
        await this.inputPassword.setValue('secret_sauce');
        await this.btnSubmit.click();
        await this.exit.click();
    }

    async appStartover() {
        await this.addCart.click();
        await this.Shoppingcart.click();
        await this.burger.click();
        await this.reset.waitForDisplayed();
        await this.reset.click();
    }
        
    async shoppingMore() {
        await this.Shoppingcart.click();
        await this.continue.waitForDisplayed();
        await browser.pause(5000);
        // await this.continue.click();
        }

    async Xsign() {
        await this.burger.click();
        await this.exit.waitForDisplayed();
        await this.exit.click();
    }
    /**
     * function to check if the add to cart button is working
     */
    
    async clickCartMenu() {
        await this.addCart.waitForDisplayed();
        await this.addCart.click();
    }

    async openShoppingCart() {
        await this.Shoppingcart.waitForDisplayed();
        await this.Shoppingcart.click();
    }

    async removeItem() {
        await this.removeCart.waitForDisplayed();
        await this.removeCart.click();;
    }

    async clickAllItems() {
        await this.burger.click();
        await this.Allthings.waitForDisplayed();
        await browser.pause(3000);
        await this.Allthings.click();
    }

    async logoutAndLogin() {
        await this.burger.click();
        await this.logout.waitForDisplayed();
        await this.logout.click();
        await this.inputUsername.setValue('standard_user');
        await this.inputPassword.setValue('secret_sauce');
        await this.btnSubmit.click();
    }
    
        async Itemdone() {
        await this.Shoppingcart.click();
        await this.checkout.waitForDisplayed();
        await this.checkout.click();
        await this.burger.click();
        await this.info.click();
    }
    /**
     * overwrite specific options to adapt it to page object 
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
