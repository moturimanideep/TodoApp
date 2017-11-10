var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var bodyParser = require('body-parser');
var mongo = require('mongodb');
var app = express();
app.use(cors());
const todo = require('./src/routers/routers');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('src'));
app.use('/', todo);
mongoose.connect("mongodb://manideep:mani123@ds155325.mlab.com:55325/todo");
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Do u wanna know port no: @' + app.get('port'))
})