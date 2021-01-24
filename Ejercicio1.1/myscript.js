// base 16 * 23 cm
// altura 13 cm
const volumen = 16 * 23 * 13;
console.log('volumen', volumen + ' cm3');

// A = al + 2ab
const areaLateral = 23 *13;
const areaBase = 16*23;
const areaFrontal = 16*13;
const areaTotal = 2*areaLateral + 2*areaBase+2*areaFrontal;
console.log('areaTotal', areaTotal + ' cm2');

// Generalización
const base = 12;
const altura = 3;
const ancho = 12;
const volumen2 = base*altura*ancho;
console.log('volumenGEN', volumen2+'cm3');
const area2 = 2*base*altura + 2*base*ancho + 2*ancho*altura;
console.log('areaGEN', area2+'cm2');