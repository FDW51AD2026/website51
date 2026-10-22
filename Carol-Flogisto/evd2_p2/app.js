const inputFigura       = document.getElementById("fig");
const inputCaracter     = document.getElementById("car");
const inputAltura       = document.getElementById("alt");
const inputBase         = document.getElementById("base"); 
const outputFiguraCar   = document.getElementById("figcar");
const contenedorBase    = document.getElementById("contenedorBase");

const buttonMostrar = document.getElementById("btnMostrar");

// Ocultar o mostrar el campo "Base" según la figura seleccionada
inputFigura.addEventListener("change", () => {
    if (inputFigura.value === "2") {
        contenedorBase.style.display = "block"; 
    } else {
        contenedorBase.style.display = "none";  
    }
});
contenedorBase.style.display = "none";

buttonMostrar.addEventListener("click", e => {
    e.preventDefault();

    // 1. Limpiamos el resultado anterior y obtenemos los valores
    outputFiguraCar.textContent = "";
    let figuraString = "";
    
    let caracter = inputCaracter.value || '*';
    let altura = parseInt(inputAltura.value);

    if(inputFigura.value === "1"){
        // Lógica del Triángulo
        for (let f = 1; f <= altura; f++) {
            let fila = "";
            for (let i = 1; i <= f; i++) {
                fila += caracter;
            }
            figuraString += fila + "\n"; 
        }

    } else if(inputFigura.value === "2"){
        // Lógica del Rectángulo
        let base = parseInt(inputBase.value);
        for (let i = 0; i < altura; i++) {
            figuraString += caracter.repeat(base) + "\n";
        }
    }

    // 2. Mostramos el resultado en el <pre>
    outputFiguraCar.textContent = figuraString;
});