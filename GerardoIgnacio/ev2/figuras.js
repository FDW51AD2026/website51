
function cambiarFigura() {
    let figura = document.getElementById("figura").value;
    let divBase = document.getElementById("divBase");

    if (figura === "rectangulo") {
        divBase.style.display = "block"; // Muestra la caja
    } else {
        divBase.style.display = "none";  // Oculta la caja
    }
}


function dibujar() {
    let figura = document.getElementById("figura").value;
    let caracter = document.getElementById("caracter").value;
    let altura = parseInt(document.getElementById("altura").value);
    let resultado = "";

    if (!caracter) {
        alert("Por favor ingresa un carácter.");
        return;
    }

    if (figura === "triangulo") {
    
        for (let i = 1; i <= altura; i++) {
            resultado += caracter.repeat(i) + "\n";
        }
    } else if (figura === "rectangulo") {
        // Dibuja el rectángulo usando la base y altura
        let base = parseInt(document.getElementById("base").value);
        for (let i = 1; i <= altura; i++) {
            resultado += caracter.repeat(base) + "\n";
        }
    }

    
    document.getElementById("resultado").innerText = resultado;
}