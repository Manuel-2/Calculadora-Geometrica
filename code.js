//calcular areas y perimetros de las sig figuras:
//  - Cuadrados
//  - Rectangulos
//  - Triangulos
//  - Circulos

//constantes
const pi = Math.PI;
const Perimetros = {
    Cuadrado: (lado) => lado*4,
    Rectangulo: (base,altura) => (base*2)+(altura*2),
    Triangulo: (lado1,lado2,lado3) => lado1+lado2+lado3,
    Circulo: (radio) => radio*2*pi,
}
const Areas = {
    Cuadrado:(lado) => lado**2,
    Rectangulo:(base,altura) => base*altura,
    Triangulo:(base,altura) => (base*altura)/2,
    Circulo:(radio) => (radio**2)*pi,
}

let perimetro = Perimetros.Circulo(4);
let area = Areas.Circulo(4);

console.log(perimetro);
console.log(area);