//MAP = PERCORRE TODO UM ARRAY

/*
let lista = ['marcos', 'gabriel', 'edu', 'maria']

lista.map((item, index) =>{
    console.log(`passando: ${item} e está na posição ${index}`)
})

*/

//reduce

let numeros = [5,3,2,5];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} -total ate o moemnto`)
    console.log(`${numero} - valor atual`)
    console.log('----------')

    return acumulador += numero
})

console.log('total do reduce' + total)