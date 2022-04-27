const { browser } = require("protractor");


describe('Spec | Test Login', function () {
    browser.waitForAngularEnabled(false);

    beforeEach(function() {
        browser.driver.get('http://localhost:3000/titles');
    });

    it('should find correct title - titles', function () {
        browser.driver.sleep(3000)
        expect(browser.driver.getTitle()).toEqual('Open Library - Titles');
    }); 

    it('should find correct title: People We Meet on Vacation', function () {
        browser.driver.sleep(5000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/1984806750?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('People We Meet on Vacation: Henry, Emily: 9781984806758: Books: Amazon.com');
    });

    it('should find correct title : Malibu Rising: A Novel', function () {
        browser.driver.sleep(5000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/1524798657?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Malibu Rising: A Novel: Jenkins Reid, Taylor: 9781524798659: Books');
    });
    
    it('should find correct title : Amazon - The Four Winds', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/1250178606?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - The Four Winds: A Novel: Hannah, Kristin: 9781250178602: Books');
    });

    it('should find correct title : The Last Thing He Told Me', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/1501171348?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('The Last Thing He Told Me: A Novel: Dave, Laura: 9781501171345: Books - Amazon');
    });

    it('should find correct title : Amazon - Project Hail Mary', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/0593135202?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - Project Hail Mary: A Novel: Weir, Andy: 9780593135204: Books');
    });

    it('should find correct title : Klara and the Sun', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/Klara-Sun-novel-Kazuo-Ishiguro/dp/059331817X/?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Klara and the Sun: A novel: Ishiguro, Kazuo: 9780593318171: Books');
    });

    it('should find correct title : Amazon - The Push', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/1984881663?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Amazon - The Push: A Novel: Audrain, Ashley: 9781984881663: Books');
    });

    it('should find correct title : Beautiful World', function () {
        browser.driver.sleep(1000)
        const book = element(by.css('[href*="https://www.amazon.com/dp/0374602603?asc_campaign=commerce-pra&asc_refurl=https%3A%2F%2Fwww.businessinsider.com%2Fguides%2Flearning%2Fbest-books-2021-according-to-goodreads&asc_source=browser&tag=biauto-1656-20"]'))
        browser.executeScript('arguments[0].click();', book);
        browser.driver.sleep(1000)
        expect(browser.driver.getTitle()).toEqual('Beautiful World, Where Are You: A Novel: Rooney, Sally: 9780374602604: Books: Amazon.com');
    });

});