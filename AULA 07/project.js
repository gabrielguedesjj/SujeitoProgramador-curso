// descontruindo Objeto
/*
let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Guedes',
    empresa: 'novaFarma',
    cargo: 'Gerente'
}*/
/*
let nome = 'teste'

const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

console.log('Nome da pessoa ' + nomePessoa)
console.log(sobrenome)
console.log(empresa) 
console.log(cargo)*/


//Desconstruindo  Arrey

/*let nome = ['gabriel', 'nobrega', 'guedes']

let[primeiro, segundo, terceiro] = nome

console.log(primeiro)
console.log(terceiro)*/


//Spred Operation 

/*let primeiro = [1, 2, 3,]

let numeros = [...primeiro, 4, 5, 6]
console.log(numeros)*/

/*
let pessoa1 = {
    nome: 'gabriel',
    idade: 20,
    cargo: 'RH'
}

let novaPessoa = {
    ...pessoa1, 
    status:' ativos',
    telefone: '888888888'
}

console.log(novaPessoa)
*/

function novoUsuario(info){
    let dados = {
        ...info,
        status: 'ativo',
        inicio: '20/11/22',
        codigo: '1234'
    }

    console.log(dados)
}

novoUsuario({nome:'gabriel', sobreNome:'guedes', cargo:'gerente'})