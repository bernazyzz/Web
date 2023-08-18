var num1 = parseFloat(prompt('Digite um número:'))
var operacao = prompt('Operação: soma | subtracao')
var num2 = parseFloat(prompt('Digite outro número:'))

function calculo(num1, num2, operacao) {
    var resultado = 0

    //num1 = parseFloat(num1);
    //num2 = parseFloat(num2);

    if (operacao == 'soma') {
        resultado = num1 + num2;
    } else if (operacao == 'subtracao') {
        resultado = num1 - num2;
    }

    return resultado
}

var res = calculo(num1, num2, operacao)

document.write('O resultado é: ' + res + '.')