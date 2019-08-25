'use strict';
var todoServices = angular.module('todoServices', ['ngResource']);

// 自定义方法
// @see https://www.cnblogs.com/xyyz2014/p/4637598.html
todoServices.factory('Todo', ['$resource',
    function ($resource) {
        // api: $resource(url, [paramDefaults], [actions]);
        return $resource('todos/:todoId.json', {}, {
            // 这里todoId相当于请求的参数，{todoId: 'todos'} 表示 ...?todoId=todos
            query: {method: 'GET', params: {todoId: 'todos'}, isArray: true}
        });
    }]);
