const inputFigura = document.getElementById("Figura")
const inputAltura = document.getElementById("Altura")
const inputCaracter = document.getElementById("Caracter")
const buttonMostrar = document.getElementById("btnMostrar")
const outputResultado = document.getElementById("Resultado")
buttonMostrar.addEventListener("click" , e => {
    e.preventDefault();
    let Figura = inputFigura.value;
    let Altura = parseInt(inputAltura.value);
    let Caracter = inputCaracter.value;
    let resultadoFigura = "";
    if (Figura  == "Triangulo") {
    
        for (let i = 1; i <= Altura; i++) {
        let linea = Caracter.repeat(i);
        resultadoFigura += linea + "\n";
}}
    else if (Figura=="Rectangulo"){
        let Ancho = Altura*2;
        for (let i = 1; i<=Altura; i++) {
            let linea=Caracter.repeat(Ancho);
            resultadoFigura +=linea + "\n";
        }
    }
outputResultado.value = resultadoFigura;
})
