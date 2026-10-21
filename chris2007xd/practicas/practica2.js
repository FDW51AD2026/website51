const inputFigura = document.getElementById("fig");
const inputCaracter = document.getElementById("car");
const inputAltura = document.getElementById("alt");
const inputBase = document.getElementById("bas");
const buttonMostrar = document.getElementById("btnMostrar");

const contenedorBase = document.getElementById("contenedorBase");
const resultado = document.getElementById("resultado");

inputFigura.addEventListener("change", () => {
    contenedorBase.hidden = inputFigura.value !== "rectangulo";
});

buttonMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = inputFigura.value;
    let caracter = inputCaracter.value;
    let altura = Number(inputAltura.value);
    let base = Number(inputBase.value);
    let dibujo = "";
    let i = 1;

    if (figura === "triangulo") {
        while (i <= altura) {
            dibujo += caracter.repeat(i) + "\n";
            i++;
        }
    } 
    else {
        while (i <= altura) {
            dibujo += caracter.repeat(base) + "\n";
            i++;
        }
    }
    
    resultado.textContent = dibujo;
});
