/*
var listas_frutas = Array()

listas_frutas[0] = 'Banana'
listas_frutas[1] = 'Maçã'
listas_frutas[2] = 'Morango'
listas_frutas[3] = 'Uva'

for (var y = 0; y < listas_frutas.length; y++) {
    document.write(listas_frutas[y] + '<br>')
}
*/

var y = 1

while (y <= 10) {
    var x = 1

    while (x <= 10) {
        document.write(y + ' x ' + x + ' = ' + (y*x) + '<br>')
        x++
    }
    
    document.write('<hr>')
    y++
}