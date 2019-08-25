'use strict';
function TodoListController() {

}
// 应用组件之前必须定义module
angular.module('todoApp').component('todoList', {
    templateUrl: 'components/todoList.html',
    controller: TodoListController,
    bindings: {
        todo: '<'  // < 表示单向绑定, = 表示双向绑定
    }
});
