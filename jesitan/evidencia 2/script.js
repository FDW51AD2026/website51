// Función para mostrar u ocultar la caja de texto 'Base' según la figura seleccionada
function cambiarFigura() {
    const figura = document.getElementById('figura').value;
    const grupoBase = document.getElementById('grupo-base');

    if (figura === 'rectangulo') {
        grupoBase.style.display = 'block';
    } else {
        grupoBase.style.display = 'none';
    }
    
    // Limpiar el resultado previo al cambiar de figura
    document.getElementById('resultado').textContent = '';
}

// Función encargada de construir y dibujar la figura
function dibujarFigura() {
    const figura = document.getElementById('figura').value;
    const caracter = document.getElementById('caracter').value || '*';
    const altura = parseInt(document.getElementById('altura').value) || 0;
    const base = parseInt(document.getElementById('base').value) || 0;
    const resultadoDiv = document.getElementById('resultado');

    let salida = '';

    if (altura <= 0) {
        resultadoDiv.textContent = 'Por favor ingresa una altura válida.';
        return;
    }

    if (figura === 'triangulo') {
        // Dibujar triángulo fila por fila
        for (let i = 1; i <= altura; i++) {
            salida += caracter.repeat(i) + '\n';
        }
    } else if (figura === 'rectangulo') {
        if (base <= 0) {
            resultadoDiv.textContent = 'Por favor ingresa una base válida.';
            return;
        }
        // Dibujar rectángulo (base x altura)
        for (let i = 0; i < altura; i++) {
            salida += caracter.repeat(base) + '\n';
        }
    }

    resultadoDiv.textContent = salida;
}