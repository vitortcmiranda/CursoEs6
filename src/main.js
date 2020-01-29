import apiLaravel from './apiLaravel';
import api from './api';



class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]')
        this.registerHandlers();
    }
    registerHandlers(){
        //this.formEl.onsubmit = () => this.addRepository(event);
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        
        //preventDefault previne que o form recarregue a página como envio do post

        if(repoInput.length === 0){ console.log('teste');};
        
        console.log(repoInput);

        const response = await api.get(`${repoInput}/repos`);
        const newArr = response;
        response.data.forEach(element => {
            console.log(`Nome do repositorio: ${element.name} link para acessar: ${element.html_url}`);
        });
        console.log(response.data);
        this.repositories.push({
            name:'Vitor',
            description:'Dev',
            avatar_url:'https://avatars1.githubusercontent.com/u/37985642?s=460&v=4',
            html_url:'https://github.com/vitortcmiranda/CursoEs6'
        });
        this.render();
    }
    render(){
        this.listEl.innerHTML='';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);


        });
    }
}
new App();