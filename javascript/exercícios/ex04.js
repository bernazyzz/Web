function iniciaCor() {

    document.getElementById('foco').style.backgroundColor = 'yellow'
    
}

function mudaCor() {

    var valorCampo = document.getElementById('foco').value

    if (valorCampo.length < 3) {

        document.getElementById('foco').style.backgroundColor = 'red'

    } else {

        document.getElementById('foco').style.backgroundColor = 'green'

    }
}