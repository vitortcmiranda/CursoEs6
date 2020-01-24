"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.todos = [];
  }

  _createClass(ToDoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo Todo');
      console.log(this.todos);
    }
  }]);

  return ToDoList;
}();

var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodo();
};
