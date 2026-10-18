function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor ingresa un peso y altura válidos.");
        return;
    }

    let imc = peso / (altura * altura);
    document.getElementById('imc').value = imc.toFixed(2);

    let textoResultado = "";
    if (imc < 18.5) {
        textoResultado = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 25) {
        textoResultado = "Peso Normal";
    } else {
        textoResultado = "Sin clasificación";
    }

    document.getElementById('resultado').value = textoResultado;
}