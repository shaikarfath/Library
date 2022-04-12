exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',

    chromeOptions: {
        args: [ "--disable-gpu" ]
    }
    },
    // Framework to use. Jasmine is recommended.
    useAllAngular2AppRoots: true,
    framework: 'jasmine',
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['e2e/*spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    }
};