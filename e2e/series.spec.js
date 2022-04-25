const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000/series');

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Series');
    }); 

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('These Violent Delights')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : These Violent Delights (2 book series)');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The Gilded Wolves')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : THE GILDED WOLVES');
    });
    
    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The David Wolf Mystery Thriller Series')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com: The David Wolf Mystery Thriller Series: Books 1-4 (Audible Audio Edition): Jeff Carson, Sean Patrick Hopkins, Cross Atlantic Publishing: Books');
    });

});
