'use strict';
function TodoFormController() {
    this.addTodo = function () {
        // 添加todo的内容，并且清空todo的内容
        this.mainAddTodo({fieldValue: this.fieldValue});  // 监听并将this.fieldValue赋值给fieldValue，最终被$ctrl.finalAdd函数给调用
        this.fieldValue = '';
    };
}
angular.module('todoApp').component('todoForm', {
    templateUrl: 'components/todoForm.html',
    controller: TodoFormController,
    bindings: {
        // 绑定mainAddTodo函数，并且作为component事件的回调函数
        // 在使用的时候，<todo-form main-add-todo="$ctrl.finalAdd(fieldValue)"></todo-form>
        mainAddTodo: '&'
    }
});
