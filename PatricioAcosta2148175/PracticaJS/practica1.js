const inputPeso = document.getElementById("Peso");
const inputAltura = document.getElementById("Altura");
const outputIMC = document.getElementById("IMC");
const inputResultado = document.getElementById("Resultado");
const buttonCalcular = document.getElementById("calcular");

buttonCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  let peso = parseFloat(inputPeso.value);
  let altura = parseFloat(inputAltura.value);

  let IMC = peso / (altura * altura);

  outputIMC.value = IMC.toFixed(2);

  if (IMC < 18.5) {
    inputResultado.value = "Bajo Peso";
  } else if (IMC >= 18.5 && IMC <= 25) {
    inputResultado.value = "Peso Normal";
  } else {
    inputResultado.value = "Sin clasificación";
  }
});
