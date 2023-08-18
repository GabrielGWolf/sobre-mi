// Función para realizar la suma
function suma(num1, num2) {
    return num1 + num2;
}

// Función para realizar la resta
function resta(num1, num2) {
    return num1 - num2;
}

// Función para realizar la multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función para realizar la división
function division(num1, num2) {
    if (num2 === 0) {
        window.alert("No se puede dividir por cero, utilice el botón 'limpiar' e inicie nuevamente.");
        return;
    }
    return num1 / num2;
}

// Función para obtener el resultado de la operación seleccionada
function calcularResultado() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let Resultado = 0;

    // validación de datos numericos - ambos campos deben estar completos para que la calculadora funcione

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Por favor, Ingrese valores numéricos válidos en ambos campos.");
        return;
    }

    // eleccion de la función de acuerdo al operador
    switch (operador) {
        case "+":
            Resultado = suma(num1, num2);
            break;
        case "-":
            Resultado = resta(num1, num2);
            break;
        case "*":
            Resultado = multiplicacion(num1, num2);
            break;
        case "/":
            Resultado = division(num1, num2);
            break;
        default:
            alert("Operador no válido");
            return;
    }
    /* Limitar los resultados a un máximo de 20 caracteres */
    if (Resultado > 99999999999999999999 || Resultado < -9999999999999999999) {
        alert("El resultado es demasiado largo para mostrarse en pantalla - el máximo resultado que puede mostrar esta calculadora es de 20 caracteres")
        Resultado = 0
    }

    document.getElementById("Resultado").textContent = "Resultado = " + Resultado;
}

// Función para limpiar la calculadora y poder utilizarla nuevamente sin tener que recargar la pagina
function limpiarCalculadora() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("Resultado").textContent = "Resultado = " + 0;
}