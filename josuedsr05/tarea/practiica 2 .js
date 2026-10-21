const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputAltura = document.getElementById("base");
const outputResultado = document.getElementById("resultado");
const button = document.getElementById("mostrar");

    selectFigura.addEventListener("change", function() {
      if (selectFigura.value === "rectangulo") {
        inputAltura.style.display = "flex";
      } else if (selectFigura.value === "triangulo") {
        inputAltura.style.display = "none";
      }
    });

    button.addEventListener("click", function() {
      outputResultado.replaceChildren();

      const alturaTexto = inputAltura.value;

      if (alturaTexto === "") {
        outputResultado.textContent = "Por favor, ingrese una altura válida.";
      } else if (alturaTexto !== "") {
        const altura = Number(alturaTexto);
        let fila = 1;

        if (selectFigura.value === "triangulo") {
          while (fila <= altura) {
            const linea = document.createElement("div");
            linea.textContent = (inputCaracter.value || "*").repeat(fila);
            outputResultado.appendChild(linea);
            fila++;
          }
        } else if (selectFigura.value === "rectangulo") {
          const baseTexto = inputPeso.value;

          if (baseTexto === "") {
            outputResultado.textContent = "Por favor, ingrese una base válida.";
          } else if (baseTexto !== "") {
            const base = Number(baseTexto);

            while (fila <= altura) {
              const linea = document.createElement("div");
              linea.textContent = (inputCaracter.value || "*").repeat(base);
              outputResultado.appendChild(linea);
              fila++;
            }
          }
        }
      }
    });