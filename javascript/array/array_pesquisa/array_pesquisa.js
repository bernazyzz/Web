var listas_frutas = Array()

listas_frutas[0] = 'Banana'
listas_frutas[1] = 'Maçã'
listas_frutas[2] = 'Morango'
listas_frutas[3] = 'Uva'

var auxiliar = listas_frutas.indexOf('Banana')

if (auxiliar === -1) {
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe e está na posição ' + auxiliar)
}