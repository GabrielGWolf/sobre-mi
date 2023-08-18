function cambiarColor() {
    const color = document.getElementById("color").value;
    switch (color) {
        case "rojo":
        document.body.style.backgroundColor = "red";
        break
        case "azul":
        document.body.style.backgroundColor = "blue";
        break
        case "amarillo":
        document.body.style.backgroundColor = "yellow";
        break
        case "verde":
        document.body.style.backgroundColor = "green";
        break
    }
}

document.getElementById("cambiar").addEventListener("click", cambiarColor);
