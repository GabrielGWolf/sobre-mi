function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;

    /* validamos */
    /* si no es numero */
    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
            alert("Error: Por favor, Ingrese valores numéricos válidos en todos los campos.");
            return;
    }

    /* si es menor a 0 */

    if (d1<= 0 || m1 <=0 || y1 <= 0) { 
        alert("Error: Por favor, Ingrese valores numéricos mayores a 0 en todos los campos.");
        return;
    }
    
    
    var date = new Date();
    var d2 = date.getDate();
    console.log(d2)
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    /* validar año 
    if (y1 > y2) { 
        alert("Error: Por favor, Ingrese valores numéricos mayores a 0 en todos los campos.");
        return;
    } */


    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML =
        "Tenes " + y + " años y " + m + " meses con " + d + " días de Edad.";
}
