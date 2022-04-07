const supertest = require('supertest')
const app = require('../index')

//import file with html

describe('Endpoints', () => {
    //home page
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

    //authors page 
    it('test2', async () => {
        try {
            await request.get("/authors");
            expect(res.text.indexOf("Authors")).toBe(5874);
            expect(res.text.indexOf("Popular Authors")).toBe(6893);
            expect(res.text.indexOf("COVID")).toBe(6991);
            expect(res.text.indexOf("2021")).toBe(7109);
            expect(res.text.indexOf("Anthony Doerr")).toBe(7543);
            expect(res.text.indexOf("Richard Wright")).toBe(7936);
            expect(res.text.indexOf("Honorée Fanonne Jeffers")).toBe(8322);
            expect(res.text.indexOf("Maggie Nelson")).toBe(8750);
            expect(res.text.indexOf("Maggie Shipstead")).toBe(9161);
            expect(res.text.indexOf("James Lapine")).toBe(9583);
            expect(res.text.indexOf("Nathan Harris")).toBe(10009);
            expect(res.text.indexOf("Amor Towles")).toBe(10436);
            expect(res.text.indexOf("Uwem Akpan")).toBe(10816);
            expect(res.text.indexOf("Patricia Engel")).toBe(11221);
            expect(res.text.indexOf("Jonathan Franzen")).toBe(11605);
            expect(res.text.indexOf("Richard Powers")).toBe(11980);
            expect(res.text.indexOf("Contact Us")).toBe(12800);
            
        } catch (err) {
        }
    });


    // for finding index of the strings - use this as a reference 
// it('test 1', async done => {
//         const request = supertest('http://localhost:3000');
//         await request.get("/authors")
//         .expect(200)
//         .end((err, res) => {
//             if(err) {
//                 throw err;
//             } else {
//                 //expect response to ,atch imported constnat
//                 //console.log("Titles");
//                 console.log(res.text.indexOf("Authors"));
//                 console.log(res.text.indexOf("Popular Authors"));
//                 console.log(res.text.indexOf("COVID"));
//                 console.log(res.text.indexOf("2021"));
//                 console.log(res.text.indexOf("Anthony Doerr"));
//                 console.log(res.text.indexOf("Richard Wright"));
//                 console.log(res.text.indexOf("Honorée Fanonne Jeffers"));
//                 console.log(res.text.indexOf("Maggie Nelson"));
//                 console.log(res.text.indexOf("Maggie Shipstead"));
//                 console.log(res.text.indexOf("James Lapine"));
//                 console.log(res.text.indexOf("Nathan Harris"));
//                 console.log(res.text.indexOf("Amor Towles"));
//                 console.log(res.text.indexOf("Uwem Akpan"));
//                 console.log(res.text.indexOf("Patricia Engel"));
//                 console.log(res.text.indexOf("Jonathan Franzen"));
//                 console.log(res.text.indexOf("Richard Powers"));
//                 console.log(res.text.indexOf("Contact Us"));
//                 //expect(res.text.indexOf("Authors")).toBe(6599);
//                 //expect(res.text).toEqual('none');
//                 done();
//             }
//         });
//     }, 60000)

    

})

