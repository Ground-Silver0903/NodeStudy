var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var app = express();
var ejs = require('ejs');
var router = express.Router();
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;
// var User = require('./model/user');
// var index = require('./routes/index')(router, User);
var test = require('./routes/test')(router);

app.use('/test', test);
// app.use('/index', index);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('db connect success')
});

mongoose.connect('mongodb://localhost/board');


server.listen(port, function(){
    console.log('server on! on' + port);
});

module.exports = app;
