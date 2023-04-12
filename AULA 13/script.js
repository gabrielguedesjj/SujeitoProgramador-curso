let listElement = document.querySelector('#app')

let post = []

function nutricao(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) =>{
        post = json

        post.map((item)=>{
            let liElemento = document.createElement('li')
            let titleElement = document.createElement('strong')
            let imgElement = document.createElement('img')
            let descricaoElemente = document.createElement('a')

            let titleText = document.createTextNode(item.titulo)
            titleElement.appendChild(titleText)
            liElemento.append(titleElement)

            imgElement.src = item.capa
            liElemento.appendChild(imgElement)

            let descricaoText = document.createTextNode(item.subtitulo)
            descricaoElemente.appendChild(descricaoText)
            liElemento.append(descricaoElemente)

            listElement.appendChild(liElemento)
        })
      
    })
    .catch(() =>{
        console.log('deu algum erro')
    })
}

nutricao()