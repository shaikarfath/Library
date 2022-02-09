let express = require('express');
let bodyParser = require('body-parser');
let newsdata = null
const axios = require('axios').default;
var app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use( express.static( "public" ) );
const port = process.env.PORT || 3000;


app.get('/', function(request, response){
    response.render('main', {newsdata : newsdata});
});