const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);

    beforeEach(function() {
        browser.driver.get('http://localhost:3000/series');
    });

    it('should find correct title- series', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Series');
    }); 

    it('should find correct title : These Violent Delights', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=These+Violent+Delights+%282+book+series%29&i=digital-text&crid=13Z4T4S6XAF23&sprefix=these+violent+delights+2+book+series+%2Cdigital-text%2C51&ref=nb_sb_noss"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : These Violent Delights (2 book series)');
    });

    it('should find correct title : THE GILDED', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=THE+GILDED+WOLVES&i=stripbooks&crid=1F7THUNA3IL3T&sprefix=the+gilded+wolves%2Cstripbooks%2C51&ref=nb_sb_noss_1"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : THE GILDED WOLVES');
    });
    
    it('should find correct title : The David Wolf', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/David-Wolf-Mystery-Thriller-Books/dp/B0776NGJXH/ref=sr_1_5?crid=3D5L0BXALGVO1&keywords=book+series&qid=1645742154&s=audible&sprefix=book+series+%2Caudible%2C71&sr=1-5"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com: The David Wolf Mystery Thriller Series: Books 1-4 (Audible Audio Edition): Jeff Carson, Sean Patrick Hopkins, Cross Atlantic Publishing: Books');
    });

});
