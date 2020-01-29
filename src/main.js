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

    setLoading(loading = true){
        if(loading === true){
            let loading = document.querySelector('button[name=buscar]');
            //loading.setAttribute("disabled", "disabled");
            alert('Procurando repositório');
        }else{
            let buscarEl = document.getElementById('buscar');
            console.log('asdasdasdasd');
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        
        //preventDefault previne que o form recarregue a página como envio do post

        if(repoInput.length === 0){ return};
       
        
       this.setLoading();
       try {const response = await api.get(`${repoInput}/repos`);
        
        //Usando desestruturação
        response.data.forEach(element => {
            const{name, full_name,html_url, owner:{avatar_url}} = element;

            this.repositories.push({
                name,
                full_name,
                avatar_url,
                html_url,
            });
            
        });
        this.render();
    }catch(err){
        alert('O repositório não existe');
    }
    this.setLoading(false);
    }
    render(){
       if(this.listEl){this.listEl.innerHTML='';}
        

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));
           
            let full_nameEl = document.createElement('p');
            full_nameEl.appendChild(document.createTextNode(repo.full_name))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(full_nameEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

          
        });
    }
}
new App();