var nombre = document.getElementById(nombre)
var apellido = document.getElementById(apellido)
var edad = document.getElementById(edad)

var JugadaActual = document.getElementById(JugadaActual)
var jugada = 

function obtenerJugadaUsuario(a) {
    jugada = a
}

/* Obtener jugada de la PC*/

function obtenerJugadaComputadora() {
    let opciones = ["Piedra", "Papel" , "Tijera"];
    let numeroRandom = Math.floor(Math.random() * 3);
    return opciones[numeroRandom];
};
let jugadaComputadora = obtenerJugadaComputadora()
console.log (jugadaComputadora)


/* DETERMINAR GANADOR */

/* function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (
        (jugadaComputadora === "Piedra" && jugadaUsuario === "Tijera") ||
        (jugadaComputadora === "Tijera" && jugadaUsuario === "Papel") ||
        (jugadaComputadora === "Papel" && jugadaUsuario === "Piedra")) {
        return contador = contador--
        console.log("Esta mano la gana la computadora")
    } else if (
        (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra")) {
        return contador = contador++
        console.log("Esta mano la gana el usuario");
    } else {
        return contador = contador
        console.log("Esta mano es un empate");
    }
}; */