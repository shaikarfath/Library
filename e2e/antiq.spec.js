const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000/antiq');

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Antiquarians');
    }); 

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Wuthering Heights')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : wuthering heights');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Pride and Prejudice')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : Pride and Prejudice');
    });
    
    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('A Key to Uncle')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual("Amazon - A Key to Uncle Tom's Cabin: Presenting the Original Facts and Documents Upon Which the Story Is Founded: Stowe, Harriet Beecher: 0800759794829: Books");
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The Picture of Dorian Gray')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : The Picture of Dorian Gray Oscar Wilde');
    });

});