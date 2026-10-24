let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura");
let outputIMC = document.getElementById("imc");
let outputResultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function () {
  let peso = parseFloat(inputPeso.value);
  let altura = parseFloat(inputAltura.value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    outputIMC.value = "";
    outputResultado.value = "Sin clasificación";
    return;
  }

  let imc = peso / (altura * altura);
  outputIMC.value = imc.toFixed(1);

  if (imc < 18.5) {
    outputResultado.value = "Bajo Peso";
  } else if (imc <= 25) {
    outputResultado.value = "Peso Normal";
  } else {
    outputResultado.value = "Sin clasificación";
  }
});