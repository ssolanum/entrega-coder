

// el user ingresa su eleccion de jugada
// en caso de no escribir una opcion valida, el prompt se va a repetir hasta que el imput sea valido
let eleccionJugador;
const VALIDOS = ["piedra", "papel", "tijeras"];
// contador de puntos
let puntajeJugador = 0;
let puntajeComputadora = 0;

for (let i = 0; i < 5; i++) {
    do {
        eleccionJugador = prompt("Por favor escribi tu eleccion de jugada (piedra, papel o tijeras)").toLowerCase();
    } while (!VALIDOS.includes(eleccionJugador));
    
    console.log("Elegiste " + eleccionJugador);
    
    // la pc elige un numero azar de 0 a 2
    // 0 equivale a piedra
    // 1 equivale a papel 
    // 2 equivale a tijeras
    
    let eleccionComputadora = Math.floor(Math.random() * 3);
    
    if (eleccionComputadora == 0) {
        eleccionComputadora = "piedra";
    } else if (eleccionComputadora == 1) {
        eleccionComputadora = "papel";
    } else {
        eleccionComputadora = "tijeras";
    };
    console.log("La computadora eligio " + eleccionComputadora);
    
    // comparacion de las elecciones y puntaje
    
    if (eleccionComputadora == eleccionJugador) {
        alert("Empate!");
    } 
    else if (eleccionComputadora == "piedra" && eleccionJugador == "tijeras" || eleccionComputadora == "papel" && eleccionJugador == "piedra" || eleccionComputadora == "tijeras" && eleccionJugador == "papel") {
        alert("Punto para la computadora");
        puntajeComputadora ++;
    } 
    else if (eleccionJugador == "piedra" && eleccionComputadora == "tijeras" || eleccionJugador == "papel" && eleccionComputadora == "piedra" || eleccionJugador == "tijeras" && eleccionComputadora == "papel") {
        alert("Punto para el jugador");
        puntajeJugador ++;
    };
}

if (puntajeComputadora == puntajeJugador) {
    alert("La partida quedo empatada");
} else if (puntajeComputadora > puntajeJugador) {
    alert("La computadora gana!");
} else {
    alert("El jugador gana!");
}



