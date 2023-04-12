var area = document.getElementById('area') // pegar o elementp area do html 

function entrar(){
    var nome = prompt('Digite seu nome') 

    if(nome === '' || nome === null){ // se nome for vasio ou nulo aparecerá 
        area.innerHTML = 'Clique no botão para acessar'
    }else{// caso contrario aparecerá 
        area.innerHTML = 'Bem vindo ' + nome + " "

        let botaoSair = document.createElement('button') // criar um botão sair 
        botaoSair.innerText =  'Sair da Pagina' // com o texto sair da pagina
        area.appendChild(botaoSair) //acrecentar o botão 
        botaoSair.onclick = Sair // adicionar a função sair no botão onclick
    }
}

function Sair(){
    alert('você saiu')
    area.innerHTML = 'Você saiu' // na area aparecer o ...
}


