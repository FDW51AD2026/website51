const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputImc = document.getElementById("imc");
const outputResultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("calcular");

buttonCalcular.addEventListener("click", () => {
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  
  if (peso <= 0 || altura <= 0) {
    outputImc.value = "";
    outputResultado.value = "Ingresa valores válidos";
    return;
  }

  const imc = peso / (altura * altura);

  outputImc.value = imc.toFixed(1);

  if (imc < 18.5) {
    outputResultado.value = "Bajo peso";
  } else if (imc < 25) {
    outputResultado.value = "Normal";
  } else if (imc < 30) {
    outputResultado.value = "Sobrepeso";
  } else {
    outputResultado.value = "Obesidad";
  }
});