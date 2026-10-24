let selectFigura = document.getElementById("figura");
let inputCaracter = document.getElementById("caracter");
let inputBase = document.getElementById("base");
let inputAltura = document.getElementById("altura");
let divBase = document.getElementById("divBase");
let btnDibujar = document.getElementById("btnDibujar");
let outputResultado = document.getElementById("resultado");

selectFigura.addEventListener("change", function () {
  if (selectFigura.value === "rectangulo") {
    divBase.style.display = "block";
  } else {
    divBase.style.display = "none";
  }
  outputResultado.textContent = "";
});

btnDibujar.addEventListener("click", function () {
  let caracter = inputCaracter.value;
  let altura = parseInt(inputAltura.value);
  let base = parseInt(inputBase.value);
  let figura = "";

  if (caracter === "" || isNaN(altura) || altura <= 0) {
    outputResultado.textContent = "Datos incorrectos";
    return;
  }

  if (selectFigura.value === "triangulo") {
    for (let i = 1; i <= altura; i++) {
      figura += caracter.repeat(i) + "\n";
    }
  } else {
    if (isNaN(base) || base <= 0) {
      outputResultado.textContent = "Datos incorrectos";
      return;
    }
    for (let i = 0; i < altura; i++) {
      figura += caracter.repeat(base) + "\n";
    }
  }

  outputResultado.textContent = figura;
});