const modal = document.querySelector('.modal')
const mascara = document.querySelector('.mascara-iframe')

function clicouNobotao() {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal() {
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'
}