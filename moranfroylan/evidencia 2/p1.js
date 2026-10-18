function obtenerAumento(turno) {
  if (turno === "vespertino") {
    return 1.03;
  }

  if (turno === "nocturno") {
    return 2;
  }

  return 1;
}

function formatoDinero(cantidad) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(cantidad);
}

function calcularSueldo(horas, pagoHora, turno) {
  return horas * pagoHora * obtenerAumento(turno);
}

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const horas = Number(document.getElementById("horas").value);
  const pagoHora = Number(document.getElementById("pagoHora").value);
  const turno = document.getElementById("turno").value;

  if (!Number.isFinite(horas) || horas <= 0 ||
      !Number.isFinite(pagoHora) || pagoHora <= 0) {
    error.textContent = "Escribe las horas y el pago por hora con cantidades mayores que cero.";
    resultado.hidden = true;
    return;
  }

  const sueldo = calcularSueldo(horas, pagoHora, turno);
  const pagoBase = horas * pagoHora;
  const aumento = sueldo - pagoBase;

  document.getElementById("sueldo").textContent = formatoDinero(sueldo);
  document.getElementById("detalle").textContent =
    "Pago base: " + formatoDinero(pagoBase) +
    " | Aumento: " + formatoDinero(aumento);

  error.textContent = "";
  resultado.hidden = false;
});

formulario.addEventListener("reset", function() {
  error.textContent = "";
  resultado.hidden = true;
});
