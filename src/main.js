class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = () => this.addRepository(event);
    }

    addRepository(event){
        event.preventDefault();
        //preventDefault previne que o form recarregue a página como envio do post
        this.repositories.push({
            name:'Vitor',
            description:'Dev',
            avatar_url:'https://avatars1.githubusercontent.com/u/37985642?s=460&v=4',
            html_url:'https://github.com/vitortcmiranda/CursoEs6'
        });
        this.render();
        console.log(this.repositories)
    }
    render(){
        this.listEl.innerHTML='';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createElement(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',html_url);
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