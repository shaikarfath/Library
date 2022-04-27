const { browser, element } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);
   
    beforeEach(function() {
        browser.driver.get('http://localhost:3000/antiq');
    });

    it('should find correct title - antiqs', function () {
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Antiquarians');
    }); 
    

    it('should find correct title : wuthering heights', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/s?k=wuthering+heights&sprefix=wuthering+hei%2Caps%2C300&ref=nb_sb_ss_ts-doa-p_2_13"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : wuthering heights');
    });

    it('should find correct title : Pride and Prejudice', function () {
        browser.driver.sleep(1000)
        const book = element(by.partialLinkText('Pride and Prejudice'));
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : Pride and Prejudice');
    });
    
    it("should find correct title Amazon - A Key to Uncle Tom's Cabin:", function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/Key-Uncle-Toms-Cabin-Presenting/dp/0486794822/ref=sr_1_1?crid=2WQW4N4T35H52&keywords=a+key+to+uncle+tom%27s+cabin&qid=1649372703&sprefix=a+key+to+%2Caps%2C61&sr=8-1"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual("Amazon - A Key to Uncle Tom's Cabin: Presenting the Original Facts and Documents Upon Which the Story Is Founded: Stowe, Harriet Beecher: 0800759794829: Books");
    });

    it('should find correct title : The Picture of Dorian', function () {
        browser.driver.sleep(1000)
        const book = element(by.partialLinkText('Dorian'));
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon.com : The Picture of Dorian Gray Oscar Wilde');
    });

});