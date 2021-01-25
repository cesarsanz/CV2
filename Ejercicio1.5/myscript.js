var DNI = 03892057

const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if(DNI < 0 &&  DNI > 99999999) {
    alert("Número proprocionado no válido");
  } else if (DNI > 0 &&  DNI < 99999999) {
      console.log('La letra asociada a tu DNI es=' + letra[DNI%23]);
      alert('La letra asociada a tu DNI es=' + letra[DNI%23]);
  }