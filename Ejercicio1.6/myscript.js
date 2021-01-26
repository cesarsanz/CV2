'use strict';
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
// Utilizando for:
let acc = 0;
for (let i = 0; i < notas.length; i++) {
  acc += notas[i];
};
console.log('Con el bucle FOR la puntuación final es ' + acc);
// Utilizando un for ... of:
let puntuacion = 0;
for (const nota of notas) {
  puntuacion += nota;
};
console.log('Con el bucle FOR OF la puntuación final es ' + puntuacion);