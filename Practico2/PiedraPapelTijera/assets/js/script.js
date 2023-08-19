/* USUARIO */

/* var nombre = document.getElementById(nombre); */
/* var apellido = document.getElementById(apellido); */
/* var edad = document.getElementById(edad); */

/* JUEGO  */
let jugadaUsuario = 0;
let victorias = 0;
let derrotas = 0;
let empate = 0;
let jugadasRealizadas = 0;
const limiteJugadas = 5;

/* Obtenemos la jugada del usuario y la misma se muesta en pantalla */
function obtenerJugadaUsuario(opcion) {
    jugadaUsuario = opcion
    document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: " + opcion
};

/* Obtener jugada de la PC*/
function obtenerJugadaComputadora() {
    let opciones = ["Piedra", "Papel", "Tijera"];
    let numeroRandom = Math.floor(Math.random() * 3);
    return opciones[numeroRandom];
};


/* DETERMINAR GANADOR */

function determinarGanador() {
    let jugadaComputadora = obtenerJugadaComputadora()
    console.log("usuario " + jugadaUsuario)
    console.log("pc " + jugadaComputadora)
    if (jugadaUsuario === 0) {
        alert("Debes elegir una opción antes de jugar");
    } else if (
        (jugadaComputadora === "Piedra" && jugadaUsuario === "Tijera") ||
        (jugadaComputadora === "Tijera" && jugadaUsuario === "Papel") ||
        (jugadaComputadora === "Papel" && jugadaUsuario === "Piedra")) {
        derrotas++
        jugadasRealizadas++
        /* console.log("Perdiste") */
        document.getElementById("Ganador").innerHTML = "Perdiste"

    } else if (
        (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra")) {
        victorias++
        jugadasRealizadas++
        /* console.log("Ganaste"); */
        document.getElementById("Ganador").innerHTML = "Ganaste"
    } else {
        empate++
        /* console.log("Empate") */
        document.getElementById("Ganador").innerHTML = "Empate";
    }
    console.log("victorias = " + victorias)
    console.log("derrotas = " + derrotas)
    console.log("empates = " + empate)
    console.log("jugadas realizadas = " + jugadasRealizadas)

    if (jugadasRealizadas === limiteJugadas) {
        document.getElementById("jugar").style.pointerEvents = "none"
        if (victorias > derrotas) {
            document.getElementById("ganadorGlobal").textContent = "Ganador Global: Jugador";
            alert("Ganador Global: Jugador");
        } else if (derrotas > victorias) {
            document.getElementById("ganadorGlobal").textContent = "Ganador Global: Computadora";
            alert("Ganador Global: Computadora");
        }

    }
}