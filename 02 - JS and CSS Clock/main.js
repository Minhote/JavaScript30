// Variables
let hour = document.querySelector('.hour-hand')
let min = document.querySelector('.min-hand')
let sec = document.querySelector('.second-hand')
let todos = document.querySelectorAll('.hand')
let segundero = document.styleSheets[0].cssRules[7]
let minutero = document.styleSheets[0].cssRules[6]
let horero = document.styleSheets[0].cssRules[5]

// Obtener Hora Actual
let H = new Date().getHours()
let M = new Date().getMinutes()
let S = new Date().getSeconds()


function s() {
    console.log(H,M,S);
    console.log(posicionInicialSec)
    console.log(posicionInicialMin)
    console.log(posicionInicialHor)
}

// Acumuladores de grados por segundo
let accS = 6
let accM = 0.1
let accH = 0.00833333333

// Definir la posicion inicial del reloj segun la hora actual
let posicionInicialSec = S*accS+90
let posicionInicialMin = (M*6+90)+(S*accM)
let posicionInicialHor = (H*30+90)+(((M*60)+S)*accH)

// Definimos Funciones
function moverSec() {
    let señalar = posicionInicialSec + accS
    segundero.style.transform = `rotate(${señalar}deg)`
    accS +=  6
}

function moverMin() {
    let señalar = posicionInicialMin + accM
    minutero.style.transform = `rotate(${señalar}deg)`
    accM += 0.1
}


function moverHor() {
    let señalar = posicionInicialHor + accH
    horero.style.transform = `rotate(${señalar}deg)`
    accH +=  0.00833333333
}

// Mover Señaladores por Segundo
setInterval(moverSec, 1000)
setInterval(moverMin, 1000)
setInterval(moverHor, 1000)
