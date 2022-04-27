const { browser } = require("protractor");

describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);

    beforeEach(function() {
        browser.driver.get('http://localhost:3000/authors');
    });
    
    it('should find correct title - authors', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Authors');
    }); 

    it('should find correct title - cookooo', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=cloud+cookooo+land&sprefix=cloud+coo%2Caps%2C112&ref=nb_sb_ss_ts-doa-p_2_9"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : cloud cookooo land');
    });

    it('should find correct title - richard wright', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=the+man+who+lived+underground+richard+wright&sprefix=the+man+who+lived%2Caps%2C71&ref=nb_sb_ss_ts-doa-p_1_17"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the man who lived underground richard wright');
    });
    
    it('should find correct title : the love songs', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=the+love+songs+of+w.e.b.+dubois&sprefix=the+love+son%2Caps%2C85&ref=nb_sb_ss_ts-doa-p_1_12"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the love songs of w.e.b. dubois');
    });

    it('should find correct title : on freedom four songs', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=on+freedom+four+songs+of+care+and+constraint&crid=20NBKEY5LARHD&sprefix=on+freedom+%2Caps%2C82&ref=nb_sb_ss_ts-doa-p_4_11"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : on freedom four songs of care and constraint');
    });

    it('should find correct title : great circle maggie', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=great+circle+maggie+shipstead&sprefix=great%2Caps%2C89&ref=nb_sb_ss_ts-doa-p_1_5"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : great circle maggie shipstead');
    });

    it('should find correct title : putting it together', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=putting+it+together+james+lapine+book&sprefix=putthing+it%2Caps%2C100&ref=nb_sb_ss_sc_1_10"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : putting it together james lapine book');
    });

    it('should find correct title : the sweetness of water', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=the+sweetness+of+water+nathan+harris&sprefix=the+swee%2Caps%2C91&ref=nb_sb_ss_ts-doa-p_1_8"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the sweetness of water nathan harris');
    });

    it('should find correct title : the lincoln highway', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=the+lincoln+highway+amor+towles&sprefix=the+lincoln%2Caps%2C95&ref=nb_sb_ss_ts-doa-p_1_11"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : the lincoln highway amor towles');
    });

    it('should find correct title : new york, my village', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=new+york%2C+my+village&sprefix=new+york%2C+%2Caps%2C109&ref=nb_sb_ss_ts-doa-p_3_10"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : new york, my village');
    });

    it('should find correct title : infinite country', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=infinite+country+patricia+engel&sprefix=infinite+country+patricia%2Caps%2C54&ref=nb_sb_ss_ts-doa-p_1_25"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : infinite country patricia engel');
    });

    it('should find correct title : crossroads jonathan', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=crossroads+jonathan+franzen&sprefix=crossroa%2Caps%2C128&ref=nb_sb_ss_ts-doa-p_1_8"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : crossroads jonathan franzen');
    });

    it('should find correct title : bewilderment richard powers', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=bewilderment+richard+powers&sprefix=bewil%2Caps%2C108&ref=nb_sb_ss_ts-doa-p_1_5"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : bewilderment richard powers');
    });
    
});