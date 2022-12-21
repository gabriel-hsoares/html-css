var quad = document.querySelector('#quadrado')
var p = document.querySelector('p')

function mudarcor () {
    quad.style.background = 'red'
    p.innerHTML = 'Entrou'
}

function normal () {
    quad.style.background = 'black'
    p.innerHTML = ''
}