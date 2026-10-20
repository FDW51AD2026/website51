const inputPeso = document.getElementById("Peso");
const inputAltura = document.getElementById("Altura");
const inputIMC = document.getElementById("IMC");
const outputResul = document.getElementById("Resul");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();
    console.log("Se dio click al boton");

    let Peso = parseInt(inputPeso.value);
    let Altura = parseFloat(inputAltura.value);
    let IMC = Peso/Altura;

    if(IMC > 18.5 && IMC<25){
        Resul = "Peso normal"
    }
    else if(IMC < 18.5){
        Resul = "Bajo peso"
    }
    else{
        Resul = "Sin clasificacion"
    }
    outputResul.value=Resul;
})