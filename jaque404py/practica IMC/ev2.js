const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputImc = document.getElementById("imc");
const outputResul = document.getElementById("resultado");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    let imc = peso / (altura * altura);

    outputImc.value = imc;

    if (imc < 18.5) {
        outputResul.value = "Bajo Peso";
    } else if (imc <= 25) {
        outputResul.value = "Peso Normal";
    } else {
        outputResul.value = "Sin clasificación";
    }
});