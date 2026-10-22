/*referencias*/

const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("altura");
const inputBase = document.getElementById("base");
const contenedorBase = document.getElementById("contenedorBase");
const btnMostrar = document.getElementById("mostrar");
const divResultado = document.getElementById("resultadoFigura");

selectFigura.addEventListener("change", () => {
  if (selectFigura.value === "rectangulo") {
    contenedorBase.style.display = "block";
  } else {
    contenedorBase.style.display = "none";
  }
});

btnMostrar.addEventListener("click", () => {
  let tipo = selectFigura.value;
  let char = inputCaracter.value;
  let altura = parseInt(inputAltura.value);
  let dibujo = "";

  if (isNaN(altura) || altura <= 0) {
    alert("Por favor ingresar altura válida.");
    return;
  }

  if (tipo === "triangulo") {
    for (let i = 1; i <= altura; i++) {
      let renglon = "";
      for (let j = 1; j <= i; j++) {
        renglon += char;
      }
      dibujo += renglon + "\n";
    }
  } else if (tipo === "rectangulo") {
    let base = parseInt(inputBase.value);
    if (isNaN(base) || base <= 0) {
      alert("Por favor ingresa base válida.");
      return;
    }

    for (let i = 1; i <= altura; i++) {
      let renglon = "";
      for (let j = 1; j <= base; j++) {
        renglon += char;
      }
      dibujo += renglon + "\n";
    }
  }
  divResultado.textContent = dibujo;
});
