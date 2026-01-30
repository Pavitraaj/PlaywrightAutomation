import { test, expect } from '@playwright/test'
import { HomePage } from '../../PageObjects/HomePage'
import { LoginPage } from '../../PageObjects/LoginPage'
let homepage: HomePage
let loginpage: LoginPage
// this test suite is for Shedule Page
test.describe('Shedule Page', () => {
    test('Add a shift', async ({ page }) => {
    loginpage=new LoginPage(page)
    homepage=new HomePage(page)
    await loginpage.visit()
    await loginpage.login()
    await homepage.clickOnSchedule();
    expect(page).toHaveURL('https://test1234.planday.com/schedule')
    await homepage.addnewShift()
    await homepage.wait(3000)
    await expect(homepage.result).toHaveText('Führungskräfte')
})
})
