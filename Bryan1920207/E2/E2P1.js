const inputPeso = document.getElementById("Peso");
const inputAltura = document.getElementById("Altura");
const outputIMC = document.getElementById("IMC");
const outputResultado = document.getElementById("Resul");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let Peso = parseInt(inputPeso.value);
    let Altura = parseFloat(inputAltura.value);
    let IMC = Peso/Altura;

    if(IMC > 18.5 && IMC<25){
        Resultado = "Peso normal"
    }
    else if(IMC < 18.5){
        Resultado = "Bajo peso"
    }
    else{
        Resultado = "Sin clasificacion"
    }
})