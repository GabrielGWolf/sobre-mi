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
        alert("No se puede dividir por cero.");
        return;
    }
    return num1 / num2;
}

// Función para obtener el resultado de la operación seleccionada
function calcularResultado() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var Resultado = 0;

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

    document.getElementById("Resultado").textContent = "resultado: " + Resultado;
}