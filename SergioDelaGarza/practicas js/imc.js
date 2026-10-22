function calcular() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    document.getElementById("imc").value = imc.toFixed(2);
    var resultado = "";
    if (imc < 18.5) {
        resultado = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 25) {
        resultado = "Peso Normal";
    } else {
        resultado = "Sin clasificación";
    }
    document.getElementById("resultado").value = resultado;
}
