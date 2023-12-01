// Exportacion Modulos:
const readline = require('readline-sync');
const {generarNumAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumUsuario = () => {
  return readline.question("Ingresa un numero: ");
};

const juegoAdivinanza = () => {
  const numSecreto = generarNumAleatorio();
  let numAdivinado = 0;

  console.log('¡Bienvenido a Adivina el número secreto!');
  console.log('Intenta adivinar el número del 1 al 100.\n');

  while (numAdivinado !== numSecreto) {
    numAdivinado = obtenerNumUsuario();
    verificarAdivinanza(numSecreto, numAdivinado);
  }
};

// Programa Principal
juegoAdivinanza();