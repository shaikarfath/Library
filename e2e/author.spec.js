const { browser } = require("protractor");

describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000/authors');

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Authors');
    }); 

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Anthony')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : cloud cookooo land');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Wright')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the man who lived underground richard wright');
    });
    
    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Fanonne')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the love songs of w.e.b. dubois');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Nelson')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : on freedom four songs of care and constraint');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Shipstead')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : great circle maggie shipstead');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('James')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : putting it together james lapine book');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Nathan')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the sweetness of water nathan harris');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Amor')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the lincoln highway amor towles');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Uwem')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : new york, my village');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Patricia')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : infinite country patricia engel');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Jonathan')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : crossroads jonathan franzen');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Powers')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : bewilderment richard powers');
    });
    
});