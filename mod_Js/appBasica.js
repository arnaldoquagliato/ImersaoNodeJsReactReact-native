
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var liElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        liElement.appendChild(todoText);
        liElement.appendChild(linkElement);

        listElement.appendChild(liElement);
    }
}



function addNovoTodo(){
    var inputText = inputElement.value;
    todos.push(inputText);
    inputElement.value = "";
    renderTodos();
    saveToStaorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStaorage();
}

buttonElement.onclick = addNovoTodo;
renderTodos();

function saveToStaorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
