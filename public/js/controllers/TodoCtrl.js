angular.module('TodoCtrl', [])
    .controller('TodoController', ['$scope', '$http', 'Todo', function($scope, $http, Todo) {

        $scope.formData = {};

        Todo.get()
            .success(function(data) {
                $scope.todos = data;
            });

        $scope.createTodo = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Todo.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.todos = data;
                    });

            }
        };
            // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            Todo.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                });
        };
}]);
