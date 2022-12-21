var numproc = document.querySelector('#iprocess')
var recursos = document.querySelector('#irec')
var max = document.querySelector('#imax')
var result = document.querySelector('span')

function calcular () {
    var min = ((max.value) * (numproc.value) - (numproc.value) + 1)

    if (recursos.value >= min) {
        window.alert('Sistema seguro')
    } else {
        window.alert('Sistema inseguro. Precisaria de, no mínimo, ' + min + ' recursos para ser seguro.')
    }
}