// server.js

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Bear = require("./app/models/bear");

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/data');


//Configure bodyParser, lets us get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || process.env.IP; //set the port

//Routes for API
var router = express.Router();

//Happens everytime we get a request
router.use(function(req, res, next) {
  console.log("Words");
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'Horray! Welcome to our API!'});
});


//POST route for /api/bears
router.route('/bears')
  .post(function(req, res) {

    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear Created!'});

    });
  });

app.use('/api', router);


//Actually start the server listening on the port (8080)
app.listen(port);
console.log('Magic happens on port ' + port);