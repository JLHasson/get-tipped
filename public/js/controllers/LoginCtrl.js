angular.module('LoginCtrl', [])
    .controller('LoginController', ['$scope', '$auth', function($scope, $auth) {

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };

    }]);
