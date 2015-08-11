// Declare all routes for the app

var Todo = require('./models/todo');

module.exports = function(app) {

    //Server Routes ==========================================================

    // Todo API ==============================================================

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

    //Login Routes ===========================================================

    app.get('/login', function(req, res) {

        res.sendfile('login.html', { message: req.flash('loginMessage') });

    });

    //Signup Routes ==========================================================

    app.get('/signup', function(req, res) {

        res.sendfile('signup.html', { message: req.flash('signupMessage') });

    });

    // app.post('/signup'/*, passport stuff*/);

    //Profile Routes =========================================================

    app.get('/profile', isLoggedIn, function(req, res) {

        res.sendfile('profile.html', {
            user : req.user
        });

    });

    //Logout =================================================================

    app.get('/logout', function(req, res) {

        req.logout();
        res.redirect('/');

    });

    //Frontend Routes ========================================================
    //Angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');

}
