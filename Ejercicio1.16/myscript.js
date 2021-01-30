class Rectangulo {
    constructor(side) {
      this.perimeter = side * 4;
      this.area = side * side;
  
      console.log(`Este cuadrado tiene ${side} cm de lado, su perímetro es ${this.perimeter} cm y su área ${this.area} cm3`);
    }
  };
  
  const pequeño = new Rectangulo(2);
  const mediano = new Rectangulo(5);
  const grande = new Rectangulo(10);