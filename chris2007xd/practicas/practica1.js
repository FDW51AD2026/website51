const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputIMC = document.getElementById("imc");
const outputResultado = document.getElementById("resul");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e =>{
    e.preventDefault();
    
    let Peso = parseInt(inputPeso.value);
    let Altura = parseFloat(inputAltura.value);
    
    let IMC = (Peso / (Altura ** 2)).toFixed(2);
    outputIMC.value = IMC;
    
    if(IMC < 18.5){
        outputResultado.value = (`Bajo peso`);
    }
    else if (IMC <= 25){
        outputResultado.value = (`Peso normal`);
    }
    else
        outputResultado.value = (`Sin clasificacion`)
});