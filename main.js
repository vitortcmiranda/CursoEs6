class List {

    constructor(){
        this.data= [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
   constructor(){
       //chamando o método constructor da classe pai com a propriedade super()
       super();
       this.usuario ='Vitor';
       this.idade ='24';
   }
   mostraUsuario(){
       console.log(this.usuario);
   }
}

const MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('a');
}

MinhaLista.mostraUsuario();