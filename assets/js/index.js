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
const divImcEl = document.querySelector('.imc')
const divClassificacaoEl = document.querySelector('.classificacao')

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
        mostrarClassificacaoImc()
        divCalculadoraEl.classList.add('hidden')
        divResultadoAdultoEl.classList.remove('hidden')
    } else {
        mostrarClassificacaoImc()
        divCalculadoraEl.classList.add('hidden')
        divResultadoAdultoEl.classList.remove('hidden')
    }
}
function mostrarClassificacaoImc () {
    if (entradaIdadeEl.value > 18 && entradaIdadeEl.value <= 65) {
        classificacaoImcAdulto()
    }
    else if (entradaIdadeEl.value > 65) {
        classificacaoImcIdoso()
    }
}
function classificacaoImcAdulto (imc) {
    if (imc < 18.5) {
        divClassificacaoEl.innerText = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        divClassificacaoEl.innerText = 'Peso normal'
    } else if (imc >= 25.0 && imc <= 29.9) {
        divClassificacaoEl.innerText = 'Excesso de peso'
    } else if (imc >= 30.0 && imc <= 34.9) {
        divClassificacaoEl.innerText = 'Obesidade de Classe 1'
    } else if (imc >= 35.0 && imc <= 39.9) {
        divClassificacaoEl.innerText = 'Obesidade de Classe 2'
    } else if (imc >= 40) {
        divClassificacaoEl.innerText = 'Obesidade de Classe 3'
    }
}
function classificacaoImcIdoso (imc) {
    if (imc <= 22) {
        divClassificacaoEl.innerText = 'Baixo peso'
    } else if (imc > 22 && imc < 27) {
        divClassificacaoEl.innerText = 'Adequado ou eutrófico'
    } else if (imc >= 27) {
        divClassificacaoEl.innerText = 'Sobrepeso'
    }
}
function calcularImcAdulto (peso, altura) {
    let calculoImc = parseFloat(peso) / (parseFloat(altura)* parseFloat(altura))
    divImcEl.innerText = calculoImc.toFixed(2)
    classificacaoImcAdulto (calculoImc)
}
function calcularImcIdoso (peso, altura) {
    let calculoImc = parseFloat(peso) / (parseFloat(altura)* parseFloat(altura))
    divImcEl.innerText = calculoImc.toFixed(2)
    classificacaoImcIdoso (calculoImc)
}
function mostrarImc () {
    verficarIdade()
    if (entradaIdadeEl.value > 18 && entradaIdadeEl.value <= 65) {
        calcularImcAdulto (entradaPesoEl.value, entradaAlturaEl.value)
    }
    else if (entradaIdadeEl.value > 65) {
        calcularImcIdoso (entradaPesoEl.value, entradaAlturaEl.value)
    }
}
function voltarInicio() {
    divAlertEl.classList.add('hidden')
    divResultadoAdultoEl.classList.add('hidden')
    divCalculadoraEl.classList.remove('hidden')
}

botaoMasculinoEl.addEventListener('click', selecionarMasculino)
botaoFemininoEl.addEventListener('click', selecionarFeminino)
botaoCalcularEl.addEventListener('click', mostrarImc)
botaoAlertEl.addEventListener('click', voltarInicio)
botaoResultEl.addEventListener('click', voltarInicio)
