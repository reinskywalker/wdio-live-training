exports.config = {
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: './tsconfig.json'
        }
    },
    
    specs: [
        './tests/scenarios/**/*.ts',
        './tests/scenarios/*.ts'
    ],
    suites: {
        
    },
    exclude: [

    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--user-agent=Mozilla/5.0 (Linux; Android 12; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.61 Mobile Safari/537.36',
                '--enable-automation',
                '--start-maximized',
                '--disable-webgl=true',
                '--disable-3d-apis=true',
                '--disable-notifications=true'
            ],
        },
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    // baseUrl: 'https://demoqa.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'jasmine',
    reporters: [
        'spec',
        ['allure', 
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: false,
            }
        ]
    ],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {

        }
    },
    
    onPrepare: function (config, capabilities) {

    },
  
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
