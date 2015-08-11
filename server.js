// server.js

var express        = require("express");
var app            = express();
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var mongoose       = require("mongoose");

var session        = require("express-session");
var cookieParser   = require("cookie-parser");

//Get db info from config
var db = require('./config/db');
var secret = require('./config/secret');

var port = process.env.PORT || 8080; //set the port

// Connect to the database
mongoose.connect(db.url);


//Tell the app how to handle data
// app.set('views', __dirname + '/public/views');

// app.set('view engine', 'html');

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

//Passport
// app.use(session({ secret: secret.secret }));
//
// app.use(passport.initilize());
//
// app.use(passport.session());
//
// app.use(flash());


// routes
require('./app/routes')(app/*, passport*/); //configure routes

//Actually start the server listening on the port (8080)
app.listen(port);
console.log('Magic happens on port ' + port);

//expose the app
exports = module.exports = app;
