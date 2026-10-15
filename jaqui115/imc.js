const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");

const outputIMC = document.getElementById("imc");
const outputResultado = document.getElementById("resultado");

const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e =>{
    e.preventDefault();

    let peso = parseFloat( inputPeso.value);
    let altura = parseFloat( inputAltura.value);

    let imc = peso / (altura ** 2);
    outputIMC.value = imc;

    if( imc < 18.5){
        outputResultado.value = ("Peso bajo");
    }
    else if(imc >= 18.5 && imc <=25){
        outputResultado.value = ("Peso normal");
    }
    else
        alert("Resultado sin clasificacion");

});