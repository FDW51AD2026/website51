const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document .getElementById("altura");
const inputBase = document.getElementById("base");
const buttonMostrar = document.getElementById("btnMostrar")
const preResultado = document.getElementById("resultado")

buttonMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);
    let resultado = "";
    let espacios = altura - 1;
    let caracteres = 1;

    if (figura == "1") {
        inputBase.hidden = true;


        for (let fila = 1; fila <= altura; fila++) {
            let linea = "";

            for (let i = 0; i < espacios; i++) {
                linea += " ";
            }

            for (let i = 0; i < caracteres; i++) {
                linea += caracter;
            }

            resultado += linea + "\n";

            espacios--;
            caracteres += 2;
        }

        preResultado.textContent = resultado;
    }
    else if (figura == "2") {
        inputBase.hidden = false;

        let resultado = "";

        for (let fila = 0; fila < altura; fila++) {

            let linea = "";

            for (let columna = 0; columna < base; columna++) {
                linea += caracter;
            }

            resultado += linea + "\n";
        }

        preResultado.textContent = resultado;
        }
});