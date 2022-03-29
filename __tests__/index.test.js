const supertest = require('supertest')
const app = require('../index')

//import file with html

describe('Endpoints', () => {
    
    fit('teast 1', async done => {
        const request = supertest('http://localhost:3000');
        await request.get("/")
        .expect(200)
        .end((err, res) => {
            if(err) {
                throw err;
            } else {
                //expect response to ,atch imported constnat
                expect(res.text).toEqual('none');
                done();
            }
        });
    }, 10000)



})

