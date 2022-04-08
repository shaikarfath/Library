describe('Spec | Test Login', function () {
    browser.driver.get('localhost:3000');

    it('should find correct title', function () {
        expect(browser.driver.getTitle()).toEqual('Open Library');
    });
   
});