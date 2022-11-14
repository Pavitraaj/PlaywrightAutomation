import { test, expect } from '@playwright/test'
import { LoginPage } from '../../PageObjects/LoginPage'

test.describe('Login / Logout Flow', () => {
  let loginPage: LoginPage
  // Before Hook
  test.beforeEach(async ({ page }) => {
   //Initializing the object of classes
    loginPage = new LoginPage(page)
    await loginPage.visit()
  })

  // Negative Scenario
  test('Negative Scenario for login', async ({ page }) => {
    await loginPage.assertElements()
    await loginPage.incorrectlogin()
    await loginPage.assertErrorMessage()
  })

  // Positive Scenario 
  test('Positive Scenario for login', async ({ page }) => {
    await loginPage.login()
    await expect(page).toHaveURL('https://test1234.planday.com/home')  
  })
})