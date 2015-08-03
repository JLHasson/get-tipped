// Declare all routes for the app

var Nerd = require('./models/nerd');

module.exports = function(app) {

    //Server Routes ==========================================================
    //API GET request
    app.get('/api/nerds', function(req, res) {

        Nerd.find(function(err, nerds) {
            if (err)
                res.send(err);

            res.json(nerds);
        });

    });

    //Frontend Routes ==========================================================
    //Angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

}
