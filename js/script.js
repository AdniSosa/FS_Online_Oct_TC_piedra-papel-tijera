//PUNTO UNO
const opciones = ['piedra', 'papel', 'tijera'];

//PUNTO DOS Y TRES
let puntosUser = 0;
let puntosPc = 0;

//PUNTO CUATRO
const botones = document.querySelectorAll('.boton-jugada');
const resultDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

//Un forEach para pasar por cada botón, después del evento click se genere la jugada del ordenador,
//y se muestre un resultado.
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const jugadaUsuario = boton.dataset.jugada; //Se toma el dato del data.
        const jugadaOrdenador = generarJugadaOrdenador();
        const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador); //Se guarda el resultado en esta constante.
        //console.log(jugadaUsuario);
        mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
        actualizarPuntuacion(resultado);
    });
});

//Se toma un número al azar que será el índice en la matriz y elegir
//jugada del ordenador.
function generarJugadaOrdenador() {
    const ramdomNumb = Math.floor(Math.random() * opciones.length);
    return opciones[ramdomNumb];
}

//Se define las condiciones del juego.
function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
        return 'empate';
    } else if (
        (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
    ) { 
        return '¡Has ganado!';
    } else {
        return 'Has perdido.';
    }
}

//En el div se muestra el resultado de cada jugada.
function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
    resultDiv.innerHTML = `
        <p>Has elegido: ${jugadaUsuario}</p>
        <p>El ordenador ha elegido: ${jugadaOrdenador}</p>
        <p>Resultado: ${resultado}</p>
    `
        
}

//Los puntos que se van generando dependiendo del resultado de la jugada.
function actualizarPuntuacion(resultado) {
    if (resultado === '¡Has ganado!') {
        puntosUser++;
    }else if (resultado === 'Has perdido.') {
        puntosPc++;
    }
    //console.log(puntosUser);
    //console.log(puntosPc);
    contadorUsuario.textContent = puntosUser;
    contadorOrdenador.textContent = puntosPc;
}






