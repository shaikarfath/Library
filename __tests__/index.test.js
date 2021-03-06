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


    //series page
    it('test4', async () => {
        try {
            await request.get("/series");
            expect(res.text.indexOf("Popular Series")).toBe(6656);
            expect(res.text.indexOf("Most popular book series!!!!")).toBe(6943);
            expect(res.text.indexOf("THESE VIOLENT DELIGHTS")).toBe(7706);
            expect(res.text.indexOf("BY CHLOE GONG")).toBe(7750);
            expect(res.text.indexOf("THE GILDED WOLVES")).toBe(8134);
            expect(res.text.indexOf("BY ROSHANI CHOKSHI")).toBe(8172);
            expect(res.text.indexOf("The David Wolf Mystery Thriller Series")).toBe(8611);
            expect(res.text.indexOf("BY Jeff Carson")).toBe(8671);
            expect(res.text.indexOf("Team")).toBe(9115);
            expect(res.text.indexOf("Arfath Shaik")).toBe(9165);
            expect(res.text.indexOf("Kiranmai Machiraju")).toBe(9223);
            expect(res.text.indexOf("Contact Us")).toBe(9471);
            expect(res.text.indexOf("Send")).toBe(10257);
        } catch (err) {
        }
    });


    //antiq page
    it('test5', async () => {
        try {
            await request.get("/antiq");
            expect(res.text.indexOf("Antiquarians")).toBe(569);
            expect(res.text.indexOf("Antiquarian books!!!!!")).toBe(6952);
            expect(res.text.indexOf("1900s and 1800s.")).toBe(7070);
            expect(res.text.indexOf("Wuthering Heights")).toBe(7357);
            expect(res.text.indexOf("The Wonderful Wizard of Oz")).toBe(7535);
            expect(res.text.indexOf("Team")).toBe(8006);
            expect(res.text.indexOf("Arfath Shaik")).toBe(8056);
            expect(res.text.indexOf("Kiranmai Machiraju")).toBe(8114);
            expect(res.text.indexOf("Contact Us")).toBe(8362);
            expect(res.text.indexOf("Send")).toBe(9148);
        } catch (err) {
        }
    });






    
})

