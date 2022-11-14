import { PlaywrightTestConfig } from "@playwright/test";

const config:PlaywrightTestConfig={
    timeout:60000,
    retries:0,
    testDir: 'tests/e2e',
    use:{
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout:15000, //15 seconds //This is for Playwright commands (click(), type(), fill())
        ignoreHTTPSErrors: true, //This is to handle SSL certifications
        video: 'off', //To record videos of test execution
        //video: 'retain-on-failure',
        screenshot: 'off' //To take screenshots
        //screenshot: 'only-on-failure',
    },
    projects:[
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium'
            }
        },//Chromium
        {
            name: 'Firefox',
            use: {
                browserName: 'firefox'
            }
        },//Firefox
        {
            name: 'Webkit',
            use: {
                browserName: 'webkit'
            }
        },//Firefox
    ]
}
export default config