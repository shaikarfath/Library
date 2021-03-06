let express = require('express');
let bodyParser = require('body-parser');
let booksdata = null
let length = 0
const axios = require('axios').default;
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = process.env.PORT || 3000;

app.get('/', function (request, response) {
    response.render('main', {booksdata : booksdata, length : length});
});

app.post('/', function(req,res){
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.keyword}`)
    .then(function(response){
        booksdata = response.data;      
        length = response.data.items.length;
                
         res.redirect('/');
    })
    .catch(function(error){
        console.log(error);
        res.redirect('/');
    })
 });

app.get('/authors', function (request, response) {
    response.render('authors');
});

app.get('/titles', function (request, response) {
    response.render('titles');
});

app.get('/series', function (request, response) {
    response.render('series');
});

app.get('/antiq', function (request, response) {
    response.render('antiq');
});

app.listen(port, function () {
    console.log('App is running on port 3000!')
})