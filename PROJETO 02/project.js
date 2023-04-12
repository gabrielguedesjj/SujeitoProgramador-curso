let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")


let tarefas = JSON.parse(localStorage.getItem('@listaTarefa')) || []

//2º
function renderTarefas(){ 
    listElement.innerHTML = ''  // adicionar um elemento na lista html em branco 

    tarefas.map((todo)=>{
        let liElement = document.createElement('li')  // nova variavel crear uma lista 
        let textTarefa = document.createTextNode(todo) // nova variavel colocar o novo elemento html na lista 

        let linkElement = document.createElement('a')  // nova variavel criar um link 
        linkElement.setAttribute('href', '#') // criar um linkElemente do tipo 'href' atrelado ao link

        let linkText = document.createTextNode('Excluir') // nova variavel excluir 
        linkElement.appendChild(linkText) // anexar a variavel excluir 

        let posicao = tarefas.indexOf(todo) // variavel q pega a posiçaõ no array e devolve 

        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`) // link de elementos que pegam atributos clicar e deletar tarefas

        liElement.appendChild(textTarefa) //anexar mna nova lista criada 
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}

renderTarefas()

//1º
function adicionarTarefas(){
    if(inputElement.value === ""){ //se o elemento tiver vasil chamar o alert
        alert('Digete a tarefa')
        return false
    }else{// caso ñ chamar nova variavel liagada ao elemento input 
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa) //adicionar uma nova tarefa no array 
        inputElement.value = ''  //depois o campo input fica limpo 

        renderTarefas() // retorna a função adicionar tarefa (renderTarefas)
        salvarDados()
    }
}

buttonElement.onclick = adicionarTarefas

//3º
function deletarTarefa(posicao){ // chama o atributo posição 
    tarefas.splice(posicao, 1) // limpar a posição que foi chamada 
    renderTarefas() // chamar a gunção renderTarefas
    salvarDados()
}

function salvarDados(){
    localStorage.setItem('@listaTarefa', JSON.stringify(tarefas))
}