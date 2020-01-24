class ToDoList {
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }

}

const MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}