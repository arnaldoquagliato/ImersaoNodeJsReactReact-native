var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button')
var listaElement = document.querySelector('div#app ul')

function renderizrLista (repositorios){
    for(repositori of repositorios){
        const textRep = document.createTextNode(repositorio.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textRep);
        listaElement.appendChild(liElement)

    }
}

function buscar(text){
    var userElement = inputElement.value;
    
    if(!userElement) return;

    axios.get('https://api.github.com/users/' + userElement + '/repos')
        .then(function(response){
            renderizrLista (response.data)
        })

    

}

buttonElement.onclick = buscar;