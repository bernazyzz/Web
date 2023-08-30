var largura = 0
var altura = 0

function ajustarTamanhoDoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustarTamanhoDoJogo()

function posicaoRandom() {

    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    
    console.log(posX, posY)
    
    // criar o elemnto html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    
    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
            
        case 1:
            return 'mosquito2'
            
        case 2: 
            return 'mosquito3'
            
    }
}
