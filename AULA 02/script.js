function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2

    if(media >= 7){
        console.log('voce foi aprovado com a nota ' + media)
    }else if(media < 7){
        console.log('voce foi reprovado com a nota ' + media)
    }
       
}

function aluno(nome, curso){
    var mensagem = 'seja bem vindo ' + nome + ' ao curso de ' + curso;
    console.log(mensagem)
}