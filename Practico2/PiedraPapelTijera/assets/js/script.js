/* USUARIO */


function nombreJugador() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let Jugador = nombre + " " + apellido;
    if (nombre === "" || apellido === "") {
        document.getElementById("Mensajes").innerHTML = "Debes ingresar tu nombre y apellido para jugar";
    } else {
        document.getElementById("Mensajes").innerHTML = "";
        document.getElementById("Jugador").innerHTML = "Bienvenido " + Jugador;
        document.getElementById("columna2").style.display = "flex";
        document.getElementById("columna3").style.display = "grid";
    }
}

/* JUEGO  */
let jugadaUsuario = 0;
let victorias = 0;
let derrotas = 0;
let empate = 0;
let jugadasRealizadas = 0
const limiteJugadas = 5;

/* Obtenemos la jugada del usuario y la misma se muesta en pantalla */
function obtenerJugadaUsuario(opcion) {
    jugadaUsuario = opcion
    document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: " + opcion
    document.getElementById("jugar").style.pointerEvents = "auto"
};

/* Obtener jugada de la PC*/
function obtenerJugadaComputadora() {
    let opciones = ["Piedra", "Papel", "Tijera"];
    let numeroRandom = Math.floor(Math.random() * 3);
    return jugadaPc = opciones[numeroRandom];
};

/* DETERMINAR GANADOR */

function determinarGanador() {
    document.getElementById("jugar").style.pointerEvents = "none"
    let jugadaComputadora = obtenerJugadaComputadora()
    let pActual = 0
    document.getElementById("eleccionDelUsuario").innerHTML = ""
    console.log("usuario " + jugadaUsuario);
    console.log("pc " + jugadaComputadora);
    if (jugadaUsuario === 0) {
        document.getElementById("Mensajes").innerHTML = "Debes elegir una opción antes de jugar"
    } else if (
        (jugadaComputadora === "Piedra" && jugadaUsuario === "Tijera") ||
        (jugadaComputadora === "Tijera" && jugadaUsuario === "Papel") ||
        (jugadaComputadora === "Papel" && jugadaUsuario === "Piedra")) {
        derrotas++;
        jugadasRealizadas++;
        pActual = "Perdiste"
        /* console.log("Perdiste") */
        document.getElementById("Ganador").innerHTML = "Ganador de esta ronda: Computadora";
    } else if (
        (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra")) {
        victorias++;
        jugadasRealizadas++;
        pActual = "Ganaste"
        /* console.log("Ganaste"); */
        document.getElementById("Ganador").innerHTML = "Ganador de esta ronda: Jugador";
    } else {
        empate++
        pActual = "Empate"
        /* console.log("Empate") */
        document.getElementById("Ganador").innerHTML = "Esta ronda no hay ganador, es un empate. ¡¡Sigue jugando!!";
    }

    console.log("victorias = " + victorias);
    console.log("derrotas = " + derrotas);
    console.log("empates = " + empate);
    console.log("jugadas realizadas = " + jugadasRealizadas);

    if (victorias === 3 || derrotas === 3) {
        document.getElementById("jugar").style.pointerEvents = "none"
        document.getElementById("Piedra").style.pointerEvents = "none"
        document.getElementById("Papel").style.pointerEvents = "none"
        document.getElementById("Tijera").style.pointerEvents = "none"
        mostrarPopup()
        if (victorias > derrotas) {
            document.getElementById("ganadorGlobal").innerHTML = "¡Ganaste!";
            /* alert("Ganador Global: Jugador"); */
        } else if (derrotas > victorias) {
            document.getElementById("ganadorGlobal").innerHTML = "Lamentablemnte perdiste, ¡pero puedes intentarlo nuevamente!";
            /* alert("Ganador Global: Computadora"); */
        }
    }

    const tablaResultados = document.getElementById("tablaResultados");
    const nuevaFila = tablaResultados.insertRow();

    const celdaPartida = nuevaFila.insertCell(0);
    celdaPartida.textContent = jugadasRealizadas;

    const celdaEleccionUsuario = nuevaFila.insertCell(1);
    celdaEleccionUsuario.textContent = jugadaUsuario;

    const celdaEleccionPC = nuevaFila.insertCell(2);
    celdaEleccionPC.textContent = jugadaComputadora;

    const resultado = nuevaFila.insertCell(3);
    resultado.textContent = pActual;
}

function Limpiarjuego() {
    // Restablecer todas las variables a sus valores iniciales
    jugadaUsuario = 0;
    victorias = 0;
    derrotas = 0;
    empate = 0;
    jugadasRealizadas = 0;

    // Restablecer el contenido en la página
    document.getElementById("ganadorGlobal").innerHTML = "Juega de nuevo";
    document.getElementById("Mensajes").innerHTML = ""
    document.getElementById("Ganador").innerHTML = ""
    document.getElementById("eleccionDelUsuario").innerHTML = ""

/*     console.log("victorias = " + victorias)
    console.log("derrotas = " + derrotas)
    console.log("empates = " + empate)
    console.log("jugadas = " + jugadasRealizadas) */

    // Habilitar los botones nuevamente
    document.getElementById("jugar").style.pointerEvents = "auto"
    document.getElementById("Piedra").style.pointerEvents = "auto"
    document.getElementById("Papel").style.pointerEvents = "auto"
    document.getElementById("Tijera").style.pointerEvents = "auto";

    tablaResultados = document.getElementById("tablaResultados");
    while (tablaResultados.rows.length > 1) {
        tablaResultados.deleteRow(1);
    }
}

/* popup */

/* abrir popup */
function mostrarPopup() {
    document.getElementById("popup").style.display = "flex";
}

/* cerrar popup */
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}