// var listaFuncionarios = ['Goku', 'Otávio', 'Moniz', 'Díaz', 'Saitama']

var listaFuncionarios = Array()

listaFuncionarios['x'] = 'Goku'
listaFuncionarios[false] = 'Otávio'
listaFuncionarios[3] = 'Moniz'
listaFuncionarios[27] = 'Díaz'
listaFuncionarios[-12] = 'Saitama'

var f = function(valor, indice) {
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)


/*
console.log(listaFuncionarios)
document.write(listaFuncionarios[2])

listaFuncionarios.forEach(function(valor, indice, array){
    // lógica
    console.log('índide ' + indice  + ' | valor: ' + valor)

    if (valor == 'Moniz') {
        array[indice] = 'Um novo valor'
    }

})

console.log(listaFuncionarios)
document.write('<br>' + listaFuncionarios[2])
*/