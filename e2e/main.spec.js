const { browser, element } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);

    beforeEach(function() {
        browser.driver.get('http://localhost:3000');
    });

    it('should find correct title - main', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library');
    }); 

    it('should find correct title- authors', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Author')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Authors');
    });

    it('should find correct title - titles', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Title')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Titles');
    });

    it('should find correct title - series', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Series')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Series');
    });

    it('should find correct title - antiqs', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Antiquarian')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Antiquarians');
    });
   
    it('input search click google redirect', function(){
        browser.driver.sleep(3000)
        browser.executeScript("document.getElementById('keyword').value='wuthering'");
        element(by.css('.btn-success')).click()
        browser.driver.sleep(1000)
    })

    it('input search click modal', function(){
        browser.driver.sleep(3000)
        browser.executeScript("document.getElementById('keyword').value='wuthering'");
        element(by.css('.btn-success')).click()
        browser.driver.sleep(10000)
        const modal = element(by.buttonText('Book Description'));
        browser.executeScript('arguments[0].click();', modal);
        browser.driver.sleep(3000)
        element(by.css('.btn-close')).click()
        browser.driver.sleep(3000)
    })

});