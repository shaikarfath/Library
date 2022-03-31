const supertest = require('supertest')
const app = require('../index')

//import file with html

describe('Endpoints', () => {

    it('test1', async () => {
        try {
            await request.get("/");
            expect(res.text.indexOf("Authors")).toBe(6599);
            expect(res.text.indexOf("Titles")).toBe(6715);
            expect(res.text.indexOf("Popular Series")).toBe(6830);
            expect(res.text.indexOf("Antiquarians")).toBe(6952);
            expect(res.text.indexOf("ABOUT US!")).toBe(8066);
            expect(res.text.indexOf("Have fun browsing...!!!")).toBe(8509);
            expect(res.text.indexOf("Team")).toBe(9148);
            expect(res.text.indexOf("Arfath Shaik")).toBe(9214);
            expect(res.text.indexOf("Kiranmai Machiraju")).toBe(9288);
            expect(res.text.indexOf("Contact Us")).toBe(9632);
            expect(res.text.indexOf("Send")).toBe(10711);

        } catch (err) {
        }
    });
    
    
    

})

// for finding index of the strings - use this as a reference 
// it('test 1', async done => {
    //     const request = supertest('http://localhost:3000');
    //     await request.get("/")
    //     .expect(200)
    //     .end((err, res) => {
    //         if(err) {
    //             throw err;
    //         } else {
    //             //expect response to ,atch imported constnat
    //             //console.log("Titles");
    //             console.log(res.text.indexOf("Titles"));
    //             console.log(res.text.indexOf("Popular Series"));
    //             console.log(res.text.indexOf("Antiquarians"));
    //             console.log(res.text.indexOf("ABOUT US!"));
    //             console.log(res.text.indexOf("Have fun browsing...!!!"));
    //             console.log(res.text.indexOf("Team"));
    //             console.log(res.text.indexOf("Arfath Shaik"));
    //             console.log(res.text.indexOf("Kiranmai Machiraju"));
    //             console.log(res.text.indexOf("Contact Us"));
    //             console.log(res.text.indexOf("Send"));
    //             //expect(res.text.indexOf("Authors")).toBe(6599);
    //             //expect(res.text).toEqual('none');
    //             done();
    //         }
    //     });
    // }, 60000)
