describe('Spec | Test Login', function () {
    browser.driver.get('localhost:3000');

    it('should find correct title', function () {

        expect(browser.driver.getTitle()).toEqual('Open Library');
    });
    // it('Login', function () {
    //     //Email id
    //     console.log('Redirect successfully');
    //     element(By.model('loginFormData.login_user_id')).sendKeys('9999').then(function () {
    //         console.log('Email successful');
    //         browser.sleep(500);
    //     });

    //     //Password
    //     element(By.id('password')).sendKeys('123456').then(function () {
    //         console.log('Password successful');
    //         browser.sleep(500);
    //     });
    //     //Submit
    //     element(By.id("btn-login')]")).click().then(function () {
    //         console.log('Login Successful');
    //         browser.sleep(2000);
    //     });
    //     expect(browser.getTitle()).toEqual('Home | Service Hub CMS');
    // });
});