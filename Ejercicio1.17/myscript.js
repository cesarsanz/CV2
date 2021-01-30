class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
  }
  
  class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
  
  class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: "contado"
      };
  
      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.muestraTotal = function () {
        this.calculaTotal();
        alert("total = " + this.informacion.total + " euros");
      }
    };
  }
  
  var elCliente = new Cliente("Pepito", "Calle Conde", "tlf:987654321", "38795211");
  var losElementos = [new Elemento("elemento1", "25", "10"), new Elemento("elemento2", "20", "8")];
  var laFactura = new Factura(elCliente, losElementos);
  laFactura.muestraTotal();