const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
const campoImc = document.getElementById("imc");
const campoResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", () => {
  const pesoKg = Number(campoPeso.value);
  const alturaM = Number(campoAltura.value);

  if (pesoKg <= 0 || alturaM <= 0) {
    campoImc.value = "";
    campoResultado.value = "Datos no válidos";
    return;
  }

  const valorImc = pesoKg / (alturaM * alturaM);
  campoImc.value = valorImc.toFixed(2);

  if (valorImc < 18.5) {
    campoResultado.value = "Bajo peso";
  } else if (valorImc <= 25) {
    campoResultado.value = "Peso normal";
  } else {
    campoResultado.value = "Sin clasificación";
  }
});