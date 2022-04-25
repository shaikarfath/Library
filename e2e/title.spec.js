const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://localhost:3000/titles');

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Titles');
    }); 

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('People We Meet')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('People We Meet on Vacation: Henry, Emily: 9781984806758: Books: Amazon.com');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Malibu Rising')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Malibu Rising: A Novel: Jenkins Reid, Taylor: 9781524798659: Books');
    });
    
    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The Four Winds')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - The Four Winds: A Novel: Hannah, Kristin: 9781250178602: Books');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The Last Thing He Told Me')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('The Last Thing He Told Me: A Novel: Dave, Laura: 9781501171345: Books - Amazon');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Project Hail Mary')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - Project Hail Mary: A Novel: Weir, Andy: 9780593135204: Books');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Klara and the Sun')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Klara and the Sun: A novel: Ishiguro, Kazuo: 9780593318171: Books');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('The Push')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - The Push: A Novel: Audrain, Ashley: 9781984881663: Books');
    });

    it('should find correct title', function () {
        browser.driver.sleep(1000)
        element(by.partialLinkText('Beautiful World, Where Are You')).click();
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Beautiful World, Where Are You: A Novel: Rooney, Sally: 9780374602604: Books: Amazon.com');
    });

});