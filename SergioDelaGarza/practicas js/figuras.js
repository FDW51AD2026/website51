// Muestra u oculta la caja de Base según la figura
function cambiarFigura() {
  var figura = document.getElementById("figura").value;
  var campoBase = document.getElementById("campoBase");

  if (figura === "rectangulo") {
    campoBase.style.display = "block";
  } else {
    campoBase.style.display = "none";
  }
  document.getElementById("resultado").textContent = "";
}

// Dibuja la figura al presionar Mostrar
function mostrar() {
  var figura = document.getElementById("figura").value;
  var caracter = document.getElementById("caracter").value;
  var altura = parseInt(document.getElementById("altura").value);
  var base = parseInt(document.getElementById("base").value);
  var texto = "";

  if (figura === "triangulo") {
    for (var i = 1; i <= altura; i++) {
      texto += caracter.repeat(i) + "\n";
    }
  } else {
    for (var j = 0; j < altura; j++) {
      texto += caracter.repeat(base) + "\n";
    }
  }

  document.getElementById("resultado").textContent = texto;
}