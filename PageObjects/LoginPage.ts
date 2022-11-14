import { expect, Locator, Page } from '@playwright/test'
import UserAgent from 'user-agents';
import { testConfig } from '../tests/e2e/testConfig';
import { AbstractPage } from './AbstractPage';
import * as CryptoJS from 'crypto-js';


export class LoginPage extends AbstractPage{
    // Define selectors
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly loginForm: Locator
    readonly okButton: Locator

// Initialize selectors using constructor
constructor(page: Page) {
    super(page) 
    this.usernameInput = page.locator('#Username')
    this.passwordInput = page.locator('#Password')
    this.submitButton = page.locator('#MainLoginButton')
    this.errorMessage = page.locator('#Username-validation-error')
    this.loginForm = page.locator('.login-form')
    this.okButton = page.locator('#cookie-consent-button')
   

  }
  async visit(){
    await this.page.goto('https://test1234.planday.com/')
    await this.okButton.click()
   }
  
   async decipherPassword(): Promise<string>  {
    const key = `SECRET`;
    //ENCRYPT
   //  const cipher = CryptoJS.AES.encrypt('APItesting21',key);
   //  console.log(cipher.toString());
    return CryptoJS.AES.decrypt(testConfig.password, key).toString(CryptoJS.enc.Utf8);
  }
   async login(): Promise<void> {
    const decipherPassword = await this.decipherPassword();
    await this.usernameInput.type(testConfig.username)
    await this.passwordInput.type(decipherPassword)
    await this.submitButton.click() 
}

async incorrectlogin(): Promise<void> {
  await this.usernameInput.type(testConfig.incorrectusername)
  await this.passwordInput.type(testConfig.incorrectpassword)
  await this.submitButton.click() 
}

async assertElements(){
  await expect(this.loginForm).toBeVisible()
  await expect(this.usernameInput).toBeVisible()
  await expect(this.passwordInput).toBeVisible()
  await expect(this.loginForm).toBeVisible()
}
async assertErrorMessage() {
    //Assertion for message: Login and/or password are wrong.
    await expect(this.errorMessage).toContainText('The username or password is incorrect.')
  }
}