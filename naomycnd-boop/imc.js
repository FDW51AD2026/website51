const inputPeso = document.getElementById("Peso")
const inputAltura = document.getElementById("Altura")
const outputIMC = document.getElementById("IMC")
const outputResultado = document.getElementById("Resultado")
const buttonCalcular = document.getElementById("btnCalcular")

buttonCalcular.addEventListener("click", e=> {
    let Peso = parseFloat(inputPeso.value);
    let Altura = parseFloat(inputAltura.value);
    let IMC = Peso/(Altura**2);
    outputIMC.value = IMC;

    if (IMC < 18.5 ) {
        outputResultado.value =  "Bajo peso"
    }
    else if (IMC > 18.6 && IMC < 25)
        outputResultado.value = "Peso normal"

    else
        outputResultado.value = "Sin clasificación"

})