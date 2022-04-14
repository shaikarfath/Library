const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000');

    it('should find correct title', function () {
        browser.driver.sleep(5000)
        expect(browser.driver.getTitle()).toEqual('Open Library');
    });

    it('should find correct title', function () {
        browser.driver.sleep(5000)
        element(by.partialLinkText('Author')).click();
        browser.driver.sleep(5000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Authors');
    });
   
});