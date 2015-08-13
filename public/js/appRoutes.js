angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', '$authProvider', function($routeProvider, $locationProvider, $authProvider) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })

            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupController'
            })

            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileController'
            })

            .otherwise('/');

            $authProvider.loginURL = 'http://localhost:8080/auth/login';
            $authProvider.signupURL = 'http://localhost:8080/auth/signup';

            $authProvider.facebook({
                clientId: token.facebook
            });

            $authProvider.google({
                clientId: token.google
            });
            //
            // $authProvider.github({
            //     clientId: token.github;
            // });
            //
            // $authProvider.twitter({
            //     clientId: token.twitter;
            // });
            //
        $locationProvider.html5Mode(true);

}]);
