var largura = 0
var altura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    criaMosquitoTempo = 1000
} else if (nivel === 'nightmare') {
    //750
    criaMosquitoTempo = 750
}

function ajustarTamanhoDoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustarTamanhoDoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandom() {

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // console.log('elemento selecionado foi: v' + vidas)
        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'

        } else {

            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++

        }
    }

    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    
    console.log(posX, posY)
    
    // criar o elemnto html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
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


function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch(lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}