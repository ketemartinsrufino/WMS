var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var api        = require('./controllers');
var morgan     = require('morgan');
var cookiePar  = require("cookie-parser");
var methodOver = require('method-override');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(cookiePar());
app.use(methodOver());

//Use to log requests on console
app.use(morgan('dev'));

app.use ('/', api);

//static files
app.use(express.static(__dirname + '/www'));
app.get('/', function(request, response){
    response.sendfile('www/index.html');
});


//Isso aqui inicializar um server na porta 8080 e cofigura o express
var server = app.listen(4000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Running at http://%s:%s", host, port)

});