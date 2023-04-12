// Funções Anonimas 

/*

() => {}

1- Os parentese, que é por onde a função recebe os argumentos (assim como na função tradicional) 
2- 'seta' => responsavel pelo nome 'arrow'
3- E as chaves o bloco de codigo que representa o corpo da função 
*/

function somar(a, b){
    let total = a + b
    return console.log(total)
}

somar(10,30)

let subtrair = (valor1, valor2) =>{
    let total = valor1 - valor2
    console.log(total)
}

subtrair(50,30)


let numero = [1,3,5,10]

numero.map((item) =>{
    console.log(item)
})