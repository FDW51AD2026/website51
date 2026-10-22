const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");

const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let caracter = inputCaracter.value;
    let dibujo = "";

    if (inputFigura.value == 1) {
        for (let alturaDibujo = 1; alturaDibujo <= altura; alturaDibujo++) {
            for (let baseDibujo = 1; baseDibujo <= alturaDibujo; baseDibujo++) {
                dibujo = dibujo + caracter;
            }
            dibujo = dibujo + "\n";
        }} 
        else {
        for (let alturaDibujo = 1; alturaDibujo <= altura; alturaDibujo++) {
            for (let baseDibujo = 1; baseDibujo <= base; baseDibujo++) {
                dibujo = dibujo + caracter;
            }
            dibujo = dibujo + "\n";
        }}

    resultado.value = dibujo;
});