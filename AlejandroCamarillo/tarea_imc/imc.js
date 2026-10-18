const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputImc = document.getElementById("imc");
const outputResultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    let imc = peso / (altura * altura);
    outputImc.value = imc.toFixed(2);

    if (imc < 18.5) {
        outputResultado.value = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 25) {
        outputResultado.value = "Peso normal";
    } else {
        outputResultado.value = "Sin clasificación";
    }
});