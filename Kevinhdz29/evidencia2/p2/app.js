const inputFigura = document.getElementById("figura");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const inputCaracter = document.getElementById("caracter");
const buttonMostrar = document.getElementById("btnMostrar");
const buttonLimpiar = document.getElementById("btnLimpiar");
const divBase = document.getElementById("divBase");
const outputResultado = document.getElementById("resultado");


inputFigura.addEventListener("change", e => {
    if (inputFigura.value == "triangulo") {
        divBase.hidden = true;
        inputBase.value = ""; 
    }
    else {
        divBase.hidden = false;
    }
})

buttonMostrar.addEventListener("click", e => {
    e.preventDefault();
    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let fig = "";

    if (caracter == "") {
        caracter = "*"
    }
    if (inputAltura.value == "" || altura <=0) {
        altura = "0";
    }
    if (inputBase.value == "" || base <=0){
        base = "0";
    }

    if (figura == "triangulo") {
        for (let fila = 1; fila <=altura; fila = fila + 1) {
            for (let columna = 1; columna <=fila; columna = columna + 1) {
                fig += caracter;
            }
        fig = fig + "\n";
        }
    }
    else if (figura == "rectangulo") {
        for (let fila = 1; fila <= altura; fila = fila +1 ){
            for (let columna = 1; columna <= base; columna= columna+ 1){
                fig +=caracter;
            }
        fig = fig + "\n";
    }
}
    outputResultado.textContent = fig;
})










buttonLimpiar.addEventListener("click", e => {
    e.preventDefault();

    inputBase.value = "";
    inputAltura.value = "";
    inputCaracter.value = "";
    outputResultado.textContent = ""
});