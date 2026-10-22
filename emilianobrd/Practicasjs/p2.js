const inputFigura = document.getElementById("figura");
const inputChar = document.getElementById("char");
const inputAltura = document.getElementById("altura");
const ocultBase = document.getElementById("ocultBase");
const inputBase = document.getElementById("base");
const btnMostrar = document.getElementById("btnMostrar");
const outputResul = document.getElementById("resul");

inputFigura.addEventListener("change", e => {
    if (inputFigura.value == 2) {
        ocultBase.hidden = false;
    } else {
        ocultBase.hidden = true;
    }
});

btnMostrar.addEventListener("click", e => {
    e.preventDefault();

    let figura = parseInt(inputFigura.value);
    let char = (inputChar.value); 
    let altura = parseInt(inputAltura.value); 
    let base = parseInt(inputBase.value); 

    let texto = "";

    if(figura == 1) {
        ocultBase.hidden = true;

        for( let index = 1; index <= altura; index++) {
            for (let index2 = 1; index2 <= index; index2++) {
                texto+= char;
            }
            texto += "\n";
        }
    }
    else if(figura == 2) {
        ocultBase.hidden = false;

        for (let index = 1; index <= altura; index++) {
            for (let index2 = 1; index2 <= base; index2++) {
                texto += char; 
            }
            texto += "\n";
        }
    }

    outputResul.textContent = texto; 
});