exports.config = {
    directConnect: true,

    capabilities: {
        browserName: 'chrome',

    chromeOptions: {
        args: [ "--disable-gpu" ]
    }
    },
    
    framework: 'jasmine',
    specs: ['e2e/*spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    }
};