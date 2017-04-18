var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var ejs = require('ejs');
var router = express.Router();
var http = require('http');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var name = require('./routes/name')(router);
var port = process.env.PORT || 3000;

app.use('/', name);


var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('db connect success');
});
mongoose.connect('mongodb://localhost/info');

var User = require('./models/data.js');
 app.listen(port, function(){
    console.log('server on! on' + port);
});

module.exports = app;