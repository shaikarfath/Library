const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000');

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library');
    }); 

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Author')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Authors');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Title')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Titles');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Series')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Series');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Antiquarian')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Antiquarians');
    });
   
    

});