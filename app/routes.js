// Declare all routes for the app

var Nerd = require('./models/nerd');
var Todo = require('./models/todo');

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

    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {
            if (err)
                res.send(err);

            res.json(todos);
        })
    });

    app.post('/api/todos', function(req, res) {

        Todo.create({
            text : req.body.text,
            done : false
        }, function (err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            })
        });
    });

    app.delete('/api/todos/:todo_id', function(req, res) {

        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                res.json(todos);
            });
        });
    });

    //Frontend Routes ==========================================================
    //Angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

}
