angular.module('TodoService', [])
    .factory('Todo', ['$http', function($http) {

        return {

            get : function() {
                return $http.get('/api/todos');
            },
            create : function(formData) {
                return $http.post('/api/todos', formData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }

        }

}]);
