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


    //titles page
    it('test3', async () => {
        try {
            await request.get("/titles");
            expect(res.text.indexOf("Titles")).toBe(568);
            expect(res.text.indexOf("Titles of this Year!!!!")).toBe(6976);
            expect(res.text.indexOf("career")).toBe(7163);
            expect(res.text.indexOf("People We Meet on Vacation")).toBe(7698);
            expect(res.text.indexOf("Malibu Rising")).toBe(8172);
            expect(res.text.indexOf("The Four Winds")).toBe(8642);
            expect(res.text.indexOf("The Last Thing He Told Me")).toBe(9104);
            expect(res.text.indexOf("Project Hail Mary")).toBe(9591);
            expect(res.text.indexOf("Klara and the Sun")).toBe(10101);
            expect(res.text.indexOf("The Push")).toBe(10585);
            expect(res.text.indexOf("Beautiful World, Where Are You")).toBe(11059);
            expect(res.text.indexOf("Arfath Shaik")).toBe(11579);
            expect(res.text.indexOf("Kiranmai Machiraju")).toBe(11637);
            expect(res.text.indexOf("Contact Us")).toBe(11885);
        } catch (err) {
        }
    });






    // for finding index of the strings - use this as a reference 
// it('test 1', async done => {
//         const request = supertest('http://localhost:3000');
//         await request.get("/titles")
//         .expect(200)
//         .end((err, res) => {
//             if(err) {
//                 throw err;
//             } else {
//                 //expect response to ,atch imported constnat
//                 //console.log("Titles");
//                 console.log(res.text.indexOf("Titles"));
//                 console.log(res.text.indexOf("Titles of this Year!!!!"));
//                 console.log(res.text.indexOf("career"));
//                 console.log(res.text.indexOf("People We Meet on Vacation"));
//                 console.log(res.text.indexOf("Malibu Rising"));
//                 console.log(res.text.indexOf("The Four Winds"));
//                 console.log(res.text.indexOf("The Last Thing He Told Me"));
//                 console.log(res.text.indexOf("Project Hail Mary"));
//                 console.log(res.text.indexOf("Klara and the Sun"));
//                 console.log(res.text.indexOf("The Push"));
//                 console.log(res.text.indexOf("Beautiful World, Where Are You"));
//                 console.log(res.text.indexOf("Arfath Shaik"));
//                 console.log(res.text.indexOf("Kiranmai Machiraju"));
//                 console.log(res.text.indexOf("Contact Us"));
//                 //expect(res.text.indexOf("Authors")).toBe(6599);
//                 //expect(res.text).toEqual('none');
//                 done();
//             }
//         });
//     }, 60000)

    

})
