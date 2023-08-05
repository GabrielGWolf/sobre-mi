// Función para realizar la suma
function suma(operando1, operando2) {
    return operando1 + operando2;
}

// Función para realizar la resta
function resta(operando1, operando2) {
    return operando1 - operando2;
}

// Función para realizar la multiplicación
function multiplicacion(operando1, operando2) {
    return operando1 * operando2;
}

// Función para realizar la división
function division(operando1, operando2) {
    if (operando2 === 0) {
        alerta("No se puede dividir por cero.");
        return;
    }
    return operando1 / operando2;
}

// Función para obtener el resultado de la operación seleccionada
function calculate() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var operador = document.getElementById("operador").value;
    var resultado = 0;

    switch (operador) {
        case "+":
            resultado = suma(operando1, operando2);
            break;
        case "-":
            resultado = resta(operando1, operando2);
            break;
        case "*":
            resultado = multiplicacion(operando1, operando2);
            break;
        case "/":
            resultado = division(operando1, operando2);
            break;
        default:
            alerta("Operador no válido");
            return;
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}