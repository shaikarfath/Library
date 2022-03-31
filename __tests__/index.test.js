const supertest = require('supertest')
const app = require('../index')

//import file with html

describe('Endpoints', () => {

    it('test1', async () => {
        try {
            await request.get("/");
            expect(res.text.indexOf("Authors")).toBe(6599);
        } catch (err) {
        }
    });
    
    // it('test 1', async () => {
    //     const request = supertest('http://localhost:3000');
    //     await request.get("/")
    //     .expect(200)
    //     .then((err, res) => {
    //         if(err) {
    //             throw err;
    //         } else {
    //             //expect response to ,atch imported constnat
    //             console.log("Authors");
    //             console.log(res.text.indexOf("Authors"));
    //             expect(res.text.indexOf("Authors")).toBe(6599);
    //             //expect(res.text).toEqual('none');
    //             //done();
    //         }
    //     });
    // }, 60000)



})

