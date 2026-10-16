/*
CAJA DE 
PESO
ALTURA
IMC
RESULTADO
    CALCULAR

CON 
    BAJO PESO < 18.5
    pESO NORMAL 18.5 A 25
    SIN CLASIFICACION


*/

const inputPESO = document.getElementById("PESO");
const inputALTURA = document.getElementById("ALTURA");
const outputIMC = document.getElementById("IMC");
const outputRESUL = document.getElementById("RESUL");
const buttonCalcular = document.getElementById("btnCalcular");


buttonCalcular.addEventListener("click",e => {
    e.preventDefault();

    let peso = parseFloat(inputPESO.value);
    let altura = parseFloat(inputALTURA.value);
    //let imc = peso * altura;
    let imc = peso / (altura*altura);
    outputIMC.value = imc;
    let resul = ""


    switch(true){
        case (imc < 18.5) :
            resul = "BAJO PESO";
            break;
        case (imc >= 18.5 && imc < 25):
            resul = "PESO NORMAL";
            break;
        
        default:
            resul = "Sin clasificacion";
    }

    outputRESUL.value = resul;

});
