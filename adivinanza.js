const generarNumAleatorio = () => {
  return Math.floor(Math.random()*100) + 1;
};

const verificarAdivinanza = (numSecreto, numAdivinado) => {
  if (numAdivinado === numSecreto) {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numAdivinado > numSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

// Exportamos modulo
module.exports = {
    generarNumAleatorio, 
    verificarAdivinanza
};