// var listaConvidados = ['Moniz', 'Mantorras', 'Eduarda', 'Paulo', 'Ric']

var listaConvidados = Array()

listaConvidados['a'] = 'Moniz'
listaConvidados[10] = 'Mantorras'
listaConvidados['zebra'] = 'Eduarda'
listaConvidados[-1] = 'Paulo'
listaConvidados[true] = 'Ric'

console.log(listaConvidados)

for (var x in listaConvidados) {
    console.log('Índice ' + x + ' valor ' + listaConvidados[x])
}