//REST Operator 


/*
function convidados(...nomes){
    console.log('seja bem vinso')
    console.log(nomes)
}

convidados('gabriel', 'daniel', 'lucas')*/

function sorteador(...numero){
    console.log(numero)

    const numeroGerado = Math.floor(Math.random() * numero.length)

    console.log('numero gerado foi:' + numero[numeroGerado])

}

sorteador(1,5,6,10,75,95,100)