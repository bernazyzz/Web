var altura = window.screen.availHeight
var largura = window.screen.availWidth

// document.write('A altura do navegador é: ' + altura + '<br>')

// document.write('Largura do navegador é: ' + largura)

if (largura < 500) {
    document.write('Lógica para impressão do menu versão smartphone')
} else {
    document.write('Lógica para impressão do menu versão web')
}