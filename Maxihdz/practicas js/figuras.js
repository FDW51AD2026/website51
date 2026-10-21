const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const labelBase = document.getElementById("labelBase");
const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

function actualizarCampos() {
    if (selectFigura.value === "triangulo") {
        inputBase.style.display = "none";
        labelBase.style.display = "none";
    } else {
        inputBase.style.display = "inline";
        labelBase.style.display = "inline";
    }
}

selectFigura.addEventListener("change", actualizarCampos);
actualizarCampos();

btnMostrar.addEventListener("click", () => {
    let caracter = inputCaracter.value || "*";
    let altura = parseInt(inputAltura.value);
    let texto = "";

    if (selectFigura.value === "triangulo") {
        for (let i = 1; i <= altura; i++) {
            texto += caracter.repeat(i) + "\n";
        }
    } else {
        let base = parseInt(inputBase.value);
        for (let i = 1; i <= altura; i++) {
            texto += caracter.repeat(base) + "\n";
        }
    }

    resultado.textContent = texto;
});