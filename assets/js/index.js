const botaoMasculinoEl = document.querySelector('.btn-masculino')
const botaoFemininoEl = document.querySelector('.btn-feminino')
const botaoCalcularEl = document.querySelector('.btn-calcular')
const botaoAlertEl = document.querySelector('.btn-alert')
const botaoResultEl = document.querySelector('.btn-result')
const entradaIdadeEl = document.querySelector('.idade')
const entradaPesoEl = document.querySelector('.peso')
const entradaAlturaEl = document.querySelector('.altura')
const divCalculadoraEl = document.querySelector('.calculadora')
const divAlertEl = document.querySelector('.alert-idade')
const divResultadoAdultoEl = document.querySelector('.resultado-adulto')

function selecionarMasculino() {
    botaoMasculinoEl.style.border = "3px solid #74B324";
    botaoFemininoEl.style.border = "none";
}
function selecionarFeminino() {
    botaoFemininoEl.style.border = "3px solid #74B324";
    botaoMasculinoEl.style.border = "none";
}
function verficarIdade() {
    if (entradaIdadeEl.value < 19) {
        divCalculadoraEl.classList.add('hidden')
        divAlertEl.classList.remove('hidden')
    } else if (entradaIdadeEl.value > 65) {
        divCalculadoraEl.classList.add('hidden')
        divResultadoAdultoEl.classList.remove('hidden')
    } else {
        divCalculadoraEl.classList.add('hidden')
        divResultadoAdultoEl.classList.remove('hidden')
    }
}
function calcularImc (peso, altura) {
    verficarIdade()
    let calculoImc = parseFloat(peso) / (parseFloat(altura)* parseFloat(altura))
    return calculoImc.toFixed(2)
}
function mostrarImc () {
    const resultadoImc = calcularImc (entradaPesoEl.value, entradaAlturaEl.value)
}
function voltarInicio() {
    divResultadoAdultoEl.classList.add('hidden')
    divCalculadoraEl.classList.remove('hidden')
}
function voltarInicioAlert() {
    divAlertEl.classList.add('hidden')
    divCalculadoraEl.classList.remove('hidden')
}

botaoMasculinoEl.addEventListener('click', selecionarMasculino)
botaoFemininoEl.addEventListener('click', selecionarFeminino)
botaoCalcularEl.addEventListener('click', mostrarImc)
botaoAlertEl.addEventListener('click', voltarInicioAlert)
botaoResultEl.addEventListener('click', voltarInicio)