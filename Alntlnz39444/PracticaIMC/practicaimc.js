const calcularIMC = function() {
    let peso = Number(document.getElementById("Peso").value);
    let altura = Number(document.getElementById("Altura").value);

    let imc = peso / (altura * altura);
    document.getElementById("IMC").textContent = imc.toFixed(2);

    let resultado = document.getElementById("Resultado");

    if (imc < 18.5) {
        resultado.value = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 25) {
        resultado.value = "Peso Normal";
    } else {
        resultado.value = "Sin clasificación";
    }
};

document.getElementById("calcular").addEventListener("click", calcularIMC);