const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const meseslargos = meses
  .filter(mes => mes.length > 7)
  .map(cambioescritomes => cambioescritomes.toUpperCase());

console.log(meseslargos);

const numerodemeses = meseslargos.length;
console.log(`Solo ${numerodemeses} meses`);