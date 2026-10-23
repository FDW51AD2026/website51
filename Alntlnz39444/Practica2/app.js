
const inputFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputBase = document.getElementById("base");
const lblBase = document.getElementById("lblBase");
const brBase = document.getElementById("brBase");
const brBase2 = document.getElementById("brBase2");
const inputAltura = document.getElementById("altura");
const outputResultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");

inputFigura.addEventListener("change", () => {
    if (inputFigura.value === "rectangulo") {
        lblBase.hidden = false;
        inputBase.hidden = false;
        brBase.hidden = false;
        brBase2.hidden = false;
    } else {
        lblBase.hidden = true;
        inputBase.hidden = true;
        brBase.hidden = true;
        brBase2.hidden = true;
    }
});

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let resultado = "";

    if (figura === "triangulo") {
        // El ciclo for aqui va a imprimir el caracter repetido 'i' veces en cada renglon
        for (let i = 1; i <= altura; i++) {
            resultado += caracter.repeat(i) + "\n";
        }
    } 
    else if (figura === "rectangulo") {
        let base = parseInt(inputBase.value);

        // El ciclo for aqui recorre la altura y dibuja filas del tamaño de la base
        for (let i = 1; i <= altura; i++) {
            resultado += caracter.repeat(base) + "\n";
        }
    }

    outputResultado.innerText = resultado;
});