/*
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false
    }
    isAdmin (){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha );

        this.admin = true;
    }
}

const usu = new Usuario('email@teste.com', 'senha123'); 
const admin = new Admin('email@teste.com', 'senha123');
console.log(usu.isAdmin()) // false
console.log(admin.isAdmin())  // true


const user = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 10, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }, 
];

const mapUser = user.map(item => item.idade)
console.log(mapUser);

const filterUser = user.filter(item => item.idade<18)
console.log(filterUser)

const findUser = user.find(item => item.empresa ==="Google")
console.log(findUser)

const concatUser = user.map((item) =>{
    return item.idade*2
})


const changeAge = user.filter((item) =>{
    item.idade = item.idade*2
    return item.idade<50
})
console.log(changeAge);

// 3.1 
const arr = [1, 2, 3, 4, 5]; 
console.log(arr.map(item => item + 10));


const usuario = { nome: 'Diego', idade: 23 }; 
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

const nome = "Diego"; 
const idade = 23; 
const mostraUsuario = (nome = 'Diego', idade = 18) => ({
    nome, 
    idade
});
      
console.log(mostraUsuario(nome, idade)); 
console.log(mostraUsuario(nome))

const promise = () => new Promise((resolve, reject) => resolve())

const empresa = {  
    nome: 'Rocketseat', 
     endereco: {   
          cidade: 'Rio do Sul',    
          estado: 'SC',  
        } 
    };

const {nome, endereco: {cidade, estado}} = empresa

console.log(nome);
console.log(cidade)
console.log(estado)


function mostraInfo({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos.`)
  }
  
  mostraInfo({ nome: "Diego", idade: 23 });


const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); 
console.log(y); 

function soma(...params){
    return params.reduce((item, next) => item+next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); 
console.log(soma(1, 2));

const usuario = {  
    nome: 'Diego',  
    idade: 23,  
    endereco: {    
        cidade: 'Rio do Sul',    
        uf: 'SC',    
        pais: 'Brasil',  
    } 
};

const usu2 = {...usuario, nome: "Gabriel"}
const usu3 = {...usuario, cidade: "Lontras"}
console.log(usu2);
console.log(usu3);


const usuario = 'Diego'; 
const idade = 23; 
console.log(`O usuário ${ usuario } possui ${ idade }anos`);


const nome = 'Diego'; 
const idade = 23; 
const usuario = {  
    nome,  
    idade,  
    cidade: 'Rio do Sul',
};

console.log(usuario)

/*

const arr = [1,2,3,4,5,5,6]

const newArr = arr.map((item) =>{
    return item*2
})

console.log(newArr);

const sum = newArr.reduce((total,next)=>{
    return total*next;
})

console.log(sum);

const filter = arr.filter((item)=>{
    return item % 2 === 0;
})

console.log(filter);

//DESESTRUTURAÇÃO


const usuario = {
    nome :'arnaldo',
    idade:19,
    endereco:{
        cidade: 'Fortaleza',
        estaco:'Ce',
    },
};

const {nome, idade, endereco: {cidade} } = usuario;

function mostrarNome({nome, idade}){
    console.log(nome, idade)
}

mostrarNome(usuario);

//RESTS


const user = {
    name :'arnaldo',
    idade:19,
    endereco:{
        cidade: 'Fortaleza',
        estaco:'Ce',
    },
};

const { name, ...resto} = user

console.log(nome);
console.log(resto);


const arrayN = [1,2,3,4,5,];
const [a,b,...c] = arrayN;
console.log(a)
console.log(b)
console.log(c)

function somatori(...params){
    return params.reduce((total, next) => total+next);
}

console.log(somatori(1,2,3,4));

//SPREAD
const arra1 = [1,2,3]
const arra2 = [3,4,5]
const arr3 = [...arra1, ...arra2]

const user1 = {
    nome: "Arnaldo",
    idade: 11,
    tec: "python"
}

const usur2 = {...user1, nome: "Quagliato"}
console.log(usur2)

//OBJECT SHORT SYNTAX:
const nome = arnaldo0;
const idade  = 20;

const user24 = {
    nome,
    idade,
    empresa : 'Ambev'
    //dessa maneira ele vai atribuir para nome e idade o foi dito acima;
}

console.log(user24)


import {soma} from './func'
console.log(soma(1,2))


/*import ClasseUsuario, {idade as IdadeUsuario} from './functions';

ClasseUsuario.info();
console.log(IdadeUsuario)

const minhaPromisse = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('OK')}, 2000);
})

async function executarPromisse(){
    const response = await minhaPromisse();
    console.log(response);
}

executarPromisse();


import axios from 'axios';

class api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            
        console.log(response);
        }catch{
            console.warn('Erro na API');
        }
    }
}

api.getUserInfo('arnaldoquagliato');
api.getUserInfo('arnaldoquagliatodfad1234fads');


const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

async function umPorSegundo(){
    await delay();
    console.log("1s")

    await delay();
    console.log("2s")

    await delay();
    console.log("3s")
}

umPorSegundo();

import axios from 'axios'; 
async function getUserFromGithub(user) {    
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response);
    }catch{
        console.warn('Usuario não existe');
    }
} 
getUserFromGithub('diego3g'); 
getUserFromGithub('diego3g124123');

import axios from 'axios'; 
class Github {  
    static async getRepositories(repo) {          
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)      
            
            console.log(response)
        } catch (error) {
            console.warn('Repositório não existe');
        }  
    } 
} 
Github.getRepositories('rocketseat/rocketseat.com.br'); 
Github.getRepositories('rocketseat/dslkvmskv');


    
async function buscaUsuario(user){  
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)    
        
        console.log(response);
    } catch (error) {
        console.warn('usuario nao existe');
    } 
} 
buscaUsuario('arnaldoquagliato')

*/