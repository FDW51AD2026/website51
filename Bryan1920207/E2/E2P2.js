const selectFigura = document.getElementById("Figura");
const grupoBase = document.getElementById("GrupoBase");
const inputBase = document.getElementById("Base");
const inputAltura = document.getElementById("Altura");
const inputCaracter = document.getElementById("Caracter");
const formFiguras = document.getElementById("FormFiguras");
const outputDibujo = document.getElementById("Dibujo");

function mostrarCampos() {
    if (selectFigura.value === "Rectangulo") {
        grupoBase.hidden = false;
        inputBase.required = true;
    }
    else {
        grupoBase.hidden = true;
        inputBase.required = false;
    }
}

selectFigura.addEventListener("change", mostrarCampos);

mostrarCampos();

formFiguras.addEventListener("click", e => {
    e.preventDefault();

    let Figura = selectFigura.value;
    let Caracter = inputCaracter.value;
    let Altura = parseInt(inputAltura.value);
    let Base = parseInt(inputBase.value);
    let Dibujo = "";

    if (Figura === "Triangulo") {
        for (let i = 1; i <= Altura; i++) {
            for (let j = 1; j <= i; j++) {
                Dibujo += Caracter;
            }

            Dibujo += "\n";
        }
    }
    else {
        for (let i = 1; i <= Altura; i++) {
            for (let j = 1; j <= Base; j++) {
                Dibujo += Caracter;
            }

            Dibujo += "\n";
        }
    }

    outputDibujo.textContent = Dibujo;
});