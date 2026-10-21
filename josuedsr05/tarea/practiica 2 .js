const selectFigura = document.getElementById("Figura");
const inputCaracter = document.getElementById("Caracter");
const inputAltura = document.getElementById("Altura");
const button = document.getElementById("btnMostrar");
const outputResultado = document.getElementById("resultado");

button.addEventListener("click", function() {
  outputResultado.replaceChildren();

  const alturaTexto = inputAltura.value;

  if (alturaTexto === "") {
    outputResultado.textContent = "Por favor, ingrese una altura válida.";
  } else if (alturaTexto !== "") {
    const altura = Number(alturaTexto);
    let fila = 1;

    if (selectFigura.value === "Triangulo") {
      while (fila <= altura) {
        const linea = document.createElement("div");
        linea.textContent = (inputCaracter.value || "*").repeat(fila);
        outputResultado.appendChild(linea);
        fila++;
      }
    } else if (selectFigura.value === "Rectangulo") {
      while (fila <= altura) {
        const linea = document.createElement("div");
        linea.textContent = (inputCaracter.value || "*").repeat(altura);
        outputResultado.appendChild(linea);
        fila++;
      }
    }
  }
});