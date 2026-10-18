// Función para calcular el sueldo según el turno y las horas trabajadas
function calcularSueldo() {
    // Obtener y normalizar los valores de los insumos
    const turnoInput = document.getElementById('turno').value.trim().toLowerCase();
    const horas = parseFloat(document.getElementById('horas').value) || 0;
    const pagoHora = parseFloat(document.getElementById('pagoHora').value) || 0;

    let tarifaFinal = pagoHora;

    // Aplicar las reglas del profesor
    if (turnoInput === 'matutino') {
        // Se paga la hora normal
        tarifaFinal = pagoHora;
    } else if (turnoInput === 'vespertino') {
        // Aumentar 3% al pago por hora
        tarifaFinal = pagoHora * 1.03;
    } else if (turnoInput === 'nocturno') {
        // Aumentar 100% al pago por hora (el doble)
        tarifaFinal = pagoHora * 2;
    } else {
        alert('Por favor ingresa un turno válido: matutino, vespertino o nocturno.');
        return;
    }

    // Cálculo total
    const sueldoTotal = horas * tarifaFinal;

    // Mostrar el resultado (con 2 decimales si aplica)
    document.getElementById('sueldo').value = sueldoTotal % 1 === 0 ? sueldoTotal : sueldoTotal.toFixed(2);
}

// Función para limpiar todos los campos del formulario
function limpiarFormulario() {
    document.getElementById('turno').value = '';
    document.getElementById('horas').value = '';
    document.getElementById('pagoHora').value = '';
    document.getElementById('sueldo').value = '';
}