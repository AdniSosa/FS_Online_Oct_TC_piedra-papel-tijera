//PUNTO UNO
const opciones = ['Papel', 'Tijera', 'Piedra'];

//PUNTO DOS Y TRES
let puntosuser = 0;
let puntospc = 0;

//PUNTO CUATRO
const botones = document.querySelectorAll('.boton-jugada');
const resultDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

console.log(botones);

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const jugadaUsuario = boton.dataset.jugada;
        const jugadaOrdenador = Math.floor(Math.random() * 3);
        console.log(jugadaOrdenador);
    })
})

