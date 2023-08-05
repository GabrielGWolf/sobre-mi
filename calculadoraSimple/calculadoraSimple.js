function calcularResultado() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var Resultado = 0;

    switch (operador) {
        //suma//
        case "+":
            Resultado = num1 + num2;
            break;
        //resta//
        case "-":
            Resultado = num1 - num2;
            break;
        //multiplicacion//
        case "*":
            Resultado = num1 * num2;
            break;
        //division//
        case "/":
            Resultado = num1 / num2;
            break;
        //default//
        default:
            alert("Operador no válido");
            return;
    }

    document.getElementById("Resultado").textContent = "Resultado = " + Resultado;
}
