import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class HomePage extends AbstractPage{

    readonly scheduleButton: Locator
    readonly result: Locator
    readonly employeeCount: Locator
    readonly addShift: Locator
    readonly fillTime: Locator
    readonly createButton: Locator
    readonly todayDate: Locator

constructor(page: Page) {
    super(page)
    this.scheduleButton = page.getByRole('link', { name: 'Schedule' })
    this.result= page.frameLocator('[data-testid="app-frame"]').getByText('Führungskräfte')  
    this.employeeCount=page.frameLocator('[data-testid="app-frame"]').getByText('0h 0m / 0 Shifts') 
    this.todayDate=page.frameLocator('[data-testid="app-frame"]').locator("div:nth-child(i)")  
    this.fillTime=page.frameLocator('internal:attr=[data-testid="app-frame"]').getByText('9.00 - 17.00')
    this.createButton=this.page.frameLocator('[data-testid="app-frame"]').locator("button:has-text(\"Create\")")
}
   async clickOnSchedule()
   {
    await this.scheduleButton.click()
    await this.employeeCount.first().waitFor();
    await expect(this.employeeCount).toHaveCount(3)
   }
    async addnewShift(){
    enum day {
        Monday = 2,
        Tuesday = 3,
        Wednesday = 4,
        Thursday = 5,
        Friday = 6,
        Saturday = 7,
        Sunday = 8
    }
    var currentDay = new Date().toLocaleDateString('en-us', {weekday:"long"});
    var dayNumber = day[currentDay];
    this.page.frameLocator('[data-testid="app-frame"]').locator('div:nth-child(2) > div:nth-child(' + dayNumber + ') > .board-slot').click();
    await this.fillTime.click();   
    await this.createButton.click(); 
   }  
}