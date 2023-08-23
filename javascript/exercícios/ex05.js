var objetos = Array('Cadeira', 'Impressora', 'Garfo')

console.log(objetos)

function adicionarElementos() {
    var valor = document.getElementById('texto').value
    
    if (valor === '') {

        alert('Informe um valor válido')

    } else if (objetos.indexOf(valor) !== -1) {

        alert('Objeto já foi adicionado')

    } else {
        objetos.push(valor)

        console.log(objetos)

        document.getElementById('texto').value = ''
    }
}

function ordenar() {
    objetos.sort()
    console.log(objetos)
}