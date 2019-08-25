'use strict';
function TodoAppController(Todo) {
    // 调用了services/services.js中的Todo.query方法
    this.todoList = Todo.query();
    // 统计剩余的个数
    this.getRemaining = function () {
        var remainingTodo = 0;
        this.todoList.forEach(function (item, i, arr) {
            if (arr[i].done === false) {
                remainingTodo++;
            }
        });
        return remainingTodo;
    };
    // 删除
    this.remove = function () {
        var oldList = this.todoList;
        var self = this;
        this.todoList = [];
        angular.forEach(oldList, function (todo) {
            if (!todo.done) {
                self.todoList.push(todo);
            }
        });
    };
    // 添加todo
    this.finalAdd = function(todo) {
        this.todoList.push({
            "todoText": todo,
            "done":false
        });
    };
}
// 注入函数的变量名称
TodoAppController.$inject = ['Todo'];  // if I comment this  - change nothing
angular.module('todoApp').component('todoApp', {
    templateUrl: 'components/todoApp.html',
    controller: TodoAppController
});
