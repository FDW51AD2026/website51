const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputImc = document.getElementById("imc");
const outputResul = document.getElementById("resul");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value); 

    let imc = (peso / (altura ** 2)).toFixed(2);
    outputImc.value = imc;

    if(imc < 18.5) {
        outputResul.value = (`Bajo peso ${imc}`);
    }
    else if(imc <= 25 ) {
        outputResul.value = (`Peso normal ${imc}`);
    }
    else 
        outputResul.value = ("Sin clasificacion");
});