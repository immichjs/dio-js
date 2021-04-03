let mouseOver = document.getElementById('mouseover')
function button () {
    document.getElementById('thanks').innerHTML = '<b>Obrigado por clicar</b>'
}

document.querySelector('button').onclick = () => button()

function redirect () {
    window.open('https://google.com')
    window.location.href = 'https://netflix.com'
}

document.querySelector('.redirect').onclick = () => redirect()

function trade () {
    mouseOver.innerHTML = 'Você passou o mouse aqui rs'
}

function toBack () {
    mouseOver.innerHTML = 'Passe o mouse aqui'
}

mouseOver.onmouseover = () => trade()
mouseOver.onmouseout = () => toBack()


function load () {
    alert('Página carregada')
}

function change(element) {
    console.log(element.value)
}
