// server.js

var express        = require("express");
var app            = express();
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var mongoose       = require("mongoose");

//Get db info from config
var db = require('./config/db');

var port = process.env.PORT || 8080; //set the port

// Connect to the database
mongoose.connect(db.url);


//Tell the app how to handle data
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));


// routes
require('./app/routes')(app); //configure routes

//Actually start the server listening on the port (8080)
app.listen(port);
console.log('Magic happens on port ' + port);

//expose the app
exports = module.exports = app;
