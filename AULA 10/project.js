// FIND - busacar alguam coisa ele vai trazer o primeiro da busca 
/*
let listagem = [5,3, 'Jose', 2, 'Matheus',]


let busca = listagem.find((item) =>{
    if(item === 'Jose'){
        return console.log('item encontrado com suceso '+ item)
    }
})

console.log(busca)*/

//FILTER - filtra palavras dentro de um array 

let palavras = ['gabriel', 'ricardo', 'ana', 'maria']

let resultado = palavras.filter((item) =>{
    return item.length <= 5
})

console.log(resultado)

