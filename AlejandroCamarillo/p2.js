function cambiarFigura() {
  const figura = document.getElementById("figura").value;
  const divBase = document.getElementById("divBase");

  if (figura === "rectangulo") {
    divBase.style.display = "block";
  } else {
    divBase.style.display = "none";
  }
  document.getElementById("resultado").textContent = "";
}

function mostrar() {
  const figura = document.getElementById("figura").value;
  const caracter = document.getElementById("caracter").value;
  const altura = parseInt(document.getElementById("altura").value);
  const base = parseInt(document.getElementById("base").value);
  const resultado = document.getElementById("resultado");
  let texto = "";

  if (caracter === "" || isNaN(altura) || altura < 1) {
    resultado.textContent = "Escribe un carácter y una altura válida.";
    return;
  }

  if (figura === "triangulo") {
    for (let i = 1; i <= altura; i++) {
      for (let j = 1; j <= i; j++) {
        texto += caracter;
      }
      texto += "\n";
    }
  } else {
    if (isNaN(base) || base < 1) {
      resultado.textContent = "Escribe una base válida.";
      return;
    }
    for (let i = 1; i <= altura; i++) {
      for (let j = 1; j <= base; j++) {
        texto += caracter;
      }
      texto += "\n";
    }
  }

  resultado.textContent = texto;
}