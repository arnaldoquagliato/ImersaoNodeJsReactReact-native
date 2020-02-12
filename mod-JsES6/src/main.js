import api from './api';

class App{
    constructor(){
        this.repositoires = [];

        this.formElement = document.getElementById('repo-form');
        
        this.inputElement = document.querySelector('input[name=repository]')
        
        this.listElem = document.getElementById('repo-list'); 


        this.registerHandlers();
    }

    registerHandlers(){
        this.formElement.onsubmit = event => this.addRepository(event);
    
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', loading);

            this.formElement.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputElement.value;

        if(repoInput.lengh === 0) 
            return ;   

        this.setLoading();

        try {
            
        const response = await api.get(`/repos/${repoInput}`); 

        const { name, description, html_url, owner:{ avatar_url} } = response.data;

        this.repositoires.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        
        this.inputElement.value = '';  
        
        this.render();            
        } catch (error) {
            alert('O repositório não existe');
        }


        this.setLoading(false);
    }

    render(){
        this.listElem.innerHTML='';

        this.repositoires.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');    
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url); 
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEL = document.createElement('li');

            listItemEL.appendChild(imgEl);
            listItemEL.appendChild(titleEl);
            listItemEL.appendChild(descriptionEl);
            listItemEL.appendChild(linkEl);

            this.listElem.appendChild(listItemEL)

        });


    }
    
}

new App();