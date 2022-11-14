import { PlaywrightTestConfig } from "@playwright/test";

const config:PlaywrightTestConfig={
    timeout:60000,
    retries:0,
    testDir: 'tests/e2e',
    use:{
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout:15000, 
        ignoreHTTPSErrors: true, 
        video: 'off', 
        screenshot: 'off' 
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