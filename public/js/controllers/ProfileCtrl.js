angular.module('ProfileCtrl', [])
    .controller('ProfileController', ['$scope', '$window', '$rootScope', '$auth', function($scope, $window, $rootScope, $auth) {

        $scope.isAuthenticated = function() {
            //Check if logged in
            return $auth.isAuthenticated();
        };

}]);
