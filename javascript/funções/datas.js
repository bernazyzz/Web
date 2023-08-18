/* 

    var data = new Date()

    // document.write(data.getDate() + ' / ' + (data.getMonth() + 1) + ' / ' + data.getFullYear())
    // 18 / 08 / 2023

    // adicionar / remover dias
    document.write(data.toString())
    data.setDate(data.getDate() + 720)
    document.write('<hr>')
    document.write(data.toString())
    document.write('<br> <br> <hr>')

    // adicionar / remover meses
    document.write(data.toString())
    data.setMonth(data.getMonth() + 1)
    document.write('<hr>')
    document.write(data.toString())
    document.write('<br> <br> <hr>')

    // adicionar / remover anos
    document.write(data.toString())
    data.setFullYear(data.getFullYear() - 1)
    document.write('<hr>')
    document.write(data.toString())

*/

    // 15/01/2023
    var data1 = new Date(2023, 0, 15)

    // 23/02/2023
    var data2 = new Date(2023, 1, 23)

    document.write(data1.toString())
    document.write('<hr />')
    document.write(data2.toString())

    document.write('<br /> <br /> <hr />')

    // converter datas para algo que possamos calcular
    document.write(data1.getTime())
    document.write('<hr />')
    document.write(data2.getTime())

    // 1 de janeiro de 1970

    document.write('<br /> <br /> <hr />')
    // encontrar a quantidade de milisseegundos entre data1 e data2
    var milisseegundos_entre_datas = Math.abs(data1.getTime() -data2.getTime())
    document.write(milisseegundos_entre_datas)

    // 1 dia tem 24h, cada hora tem 60 min, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos
    // então quantos milissegundis existem em um dia?
    var milisseegundos_por_dia = (1*24*60*60*1000)
    document.write(' 1 dia tem: ' + milisseegundos_por_dia + ' milissegundos' )

    document.write('<br /> <br /> <hr />')
    document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milisseegundos_entre_datas / milisseegundos_por_dia) + ' dia(s)')