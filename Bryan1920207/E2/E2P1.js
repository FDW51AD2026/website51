const inputPeso = document.getElementById("Peso");
const inputAltura = document.getElementById("Altura");
const outputIMC = document.getElementById("IMC");
const outputResul = document.getElementById("Resul");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", e => {
    e.preventDefault();
    console.log("Se dio click al boton");

    let Peso = Number(prompt("Introduce Peso: "));
    let Altura = Number(prompt("Introduce altura: "));
    let IMC = Peso/Altura;
    outputIMC.value = IMC;

    if(IMC < 18.5){
        Resul = "Bajo peso";
    }
    else if(IMC<= 25){
        Resul = "Peso normal";
    }
    else{
        Resul = "Sin clasificacion";
    }
    console.log(IMC);
    console.log(Resul);
});