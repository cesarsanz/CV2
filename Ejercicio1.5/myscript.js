var DNI = 03892058
var LDNI= 'S'

const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if(DNI < 0 &&  DNI > 99999999) {
    alert("Número proprocionado no válido");
  } else if (DNI > 0 &&  DNI < 99999999) {
      console.log('La letra asociada a tu DNI es=' + letra[DNI%23]);
      alert('La letra asociada a tu DNI es=' + letra[DNI%23]);
  }

  if(LDNI == letra[DNI%23]) {
    alert("Número y letra de DNI son correctos");
  } else if (LDNI !== letra[DNI%23]) {
      alert('La letra indicada no es correcta');
  }
