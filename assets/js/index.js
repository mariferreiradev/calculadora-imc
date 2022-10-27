const botaoMasculinoEl = document.querySelector('.btn-masculino')
const botaoFemininoEl = document.querySelector('.btn-feminino')
const entradaIdadeEl = document.querySelector('.idade')
const entradaPesoEl = document.querySelector('.peso')
const entradaAlturaEl = document.querySelector('.altura')
const botaoCalcular = document.querySelector('.btn-calcular')

function selecionarMasculino() {
    botaoMasculinoEl.style.border = "3px solid #74B324";
    botaoFemininoEl.style.border = "none";
}
function selecionarFeminino() {
    botaoFemininoEl.style.border = "3px solid #74B324";
    botaoMasculinoEl.style.border = "none";
}
function idade() {
    if (entradaIdadeEl.value < 19) {
        alert ('Esta calculadora mede o IMC de pessoas acima de 18 anos, crianças e adolescentes devem consultar um profissional de saúde especializado')
    } else if (entradaIdadeEl.value > 65) {

    } else {

    }
}
function calcularImc (peso, altura) {
    let calculoImc = parseFloat(peso) / (parseFloat(altura)* parseFloat(altura))
    return calculoImc.toFixed(2)
}
function mostrarImc (){
    const resultadoImc = calcularImc (entradaPesoEl.value, entradaAlturaEl.value)
}

botaoMasculinoEl.addEventListener('click', selecionarMasculino)
botaoFemininoEl.addEventListener('click', selecionarFeminino)
botaoCalcular.addEventListener('click', mostrarImc)