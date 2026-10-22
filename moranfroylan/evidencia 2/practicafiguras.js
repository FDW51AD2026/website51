const formulario = document.getElementById("formulario");
const figura = document.getElementById("figura");
const campoBase = document.getElementById("campoBase");
const entradaBase = document.getElementById("base");
const entradaAltura = document.getElementById("altura");
const entradaCaracter = document.getElementById("caracter");
const dibujo = document.getElementById("dibujo");
const mensaje = document.getElementById("mensaje");

function actualizarCampos() {
  const esRectangulo = figura.value === "rectangulo";
  campoBase.hidden = !esRectangulo;
  entradaBase.required = esRectangulo;
  dibujo.textContent = "";
  mensaje.textContent = "";
}

function dibujarTriangulo(caracter, altura) {
  const filas = [];

  for (let fila = 1; fila <= altura; fila++) {
    filas.push(caracter.repeat(fila));
  }

  return filas.join("\n");
}

function dibujarRectangulo(caracter, base, altura) {
  const fila = caracter.repeat(base);
  const filas = [];

  for (let numero = 0; numero < altura; numero++) {
    filas.push(fila);
  }

  return filas.join("\n");
}

function esMedidaValida(valor) {
  return Number.isInteger(valor) && valor >= 1 && valor <= 50;
}

figura.addEventListener("change", actualizarCampos);

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const altura = Number(entradaAltura.value);
  const base = Number(entradaBase.value);
  const caracter = entradaCaracter.value;
  const caracteres = Array.from(caracter);

  if (!esMedidaValida(altura)) {
    mensaje.textContent = "La altura debe ser un número entero entre 1 y 50.";
    dibujo.textContent = "";
    return;
  }

  if (caracteres.length !== 1 || caracter.trim() === "") {
    mensaje.textContent = "Escribe un solo carácter, por ejemplo: *.";
    dibujo.textContent = "";
    return;
  }

  if (figura.value === "rectangulo" && !esMedidaValida(base)) {
    mensaje.textContent = "La base debe ser un número entero entre 1 y 50.";
    dibujo.textContent = "";
    return;
  }

  if (figura.value === "triangulo") {
    dibujo.textContent = dibujarTriangulo(caracter, altura);
  } else {
    dibujo.textContent = dibujarRectangulo(caracter, base, altura);
  }

  mensaje.textContent = "";
});

formulario.addEventListener("reset", function() {
  window.setTimeout(function() {
    actualizarCampos();
  }, 0);
});

actualizarCampos();
