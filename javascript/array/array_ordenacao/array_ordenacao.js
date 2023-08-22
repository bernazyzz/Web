/*
var listas_frutas = Array()

listas_frutas[0] = 'Maçã'
listas_frutas[1] = 'Uva'
listas_frutas[2] = 'Banana'
listas_frutas[3] = 'Morango'

console.log(listas_frutas.sort())
*/

var listas_numeros = Array()

listas_numeros[0] = '12'
listas_numeros[1] = '40'
listas_numeros[2] = '3'
listas_numeros[3] = '7'
listas_numeros[4] = '19'
listas_numeros[5] = '1'

console.log(listas_numeros.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}