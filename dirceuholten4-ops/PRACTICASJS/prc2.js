const inputOpcion = document.getElementById("opcion");
const inputSimbolo = document.getElementById("simbolo");
const inputCantAltura = document.getElementById("cantAltura");
const divBase = document.getElementById("divBase");
const inputCantBase = document.getElementById("cantBase");
const btnGenerar = document.getElementById("btnGenerar");
const outputResultado = document.getElementById("resultado");

inputOpcion.addEventListener("change", e => {
    if (inputOpcion.value == 2) {
        divBase.hidden = false;
    } else {
        divBase.hidden = true;
    }
});

btnGenerar.addEventListener("click", e => {
    e.preventDefault();

    let figura = parseInt(inputOpcion.value);
    let char = inputSimbolo.value; 
    let altura = parseInt(inputCantAltura.value); 
    let base = parseInt(inputCantBase.value); 

    let dibujo = "";

    if (figura == 1) {
        divBase.hidden = true;

        for (let index = 1; index <= altura; index++) {
            for (let index2 = 1; index2 <= index; index2++) {
                dibujo += char;
            }
            dibujo += "\n";
        }
    } 
    else if (figura == 2) {
        divBase.hidden = false;

        for (let index = 1; index <= altura; index++) {
            for (let index2 = 1; index2 <= base; index2++) {
                dibujo += char;
            }
            dibujo += "\n";
        }
    }

    outputResultado.textContent = dibujo; 
});