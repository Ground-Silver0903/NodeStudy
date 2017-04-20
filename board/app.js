var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var ejs = require('ejs');
var router = express.Router();
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('db connect success');
});

mongoose.connect('mongodb://localhost/info');
var User = require('./models/data');
app.use(express.static(path.join('semantic')));
app.use(express.static(path.join('public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var name = require('./routes/name')(router, User);
var result = require('./routes/result')(router, User);
var port = process.env.PORT || 3000;


app.use('/', name);
app.use('/result', result);

 app.listen(port, function(){
    console.log('server on! on' + port);
});

module.exports = app;