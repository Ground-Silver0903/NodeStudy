var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var User = require('./model/user');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('db connect success')
});

mongoose.connect('mongodb://localhost/board');

var router = require('./routes')(app, User);

var server = app.listen(port, function(){
    console.log('server on! on' + port);
});

