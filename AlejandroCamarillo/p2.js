function cambiarFigura() {
  var figura = document.getElementById("figura").value;
  var divBase = document.getElementById("divBase");

  if (figura === "rectangulo") {
    divBase.style.display = "block";
  } else {
    divBase.style.display = "none";
  }
  document.getElementById("resultado").textContent = "";
}

function mostrar() {
  var figura = document.getElementById("figura").value;
  var caracter = document.getElementById("caracter").value;
  var altura = parseInt(document.getElementById("altura").value);
  var base = parseInt(document.getElementById("base").value);
  var resultado = document.getElementById("resultado");
  var texto = "";

  if (caracter === "" || isNaN(altura) || altura < 1) {
    resultado.textContent = "Escribe un carácter y una altura válida.";
    return;
  }

  if (figura === "triangulo") {
    for (var i = 1; i <= altura; i++) {
      for (var j = 1; j <= i; j++) {
        texto += caracter;
      }
      texto += "\n";
    }
  } else {
    if (isNaN(base) || base < 1) {
      resultado.textContent = "Escribe una base válida.";
      return;
    }
    for (var i = 1; i <= altura; i++) {
      for (var j = 1; j <= base; j++) {
        texto += caracter;
      }
      texto += "\n";
    }
  }

  resultado.textContent = texto;
}