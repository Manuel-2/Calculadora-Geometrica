//calcular areas y perimetros de las sig figuras:
//  - Cuadrados
//  - Rectangulos
//  - Triangulos
//  - Circulos

//constantes
const pi = Math.PI;

const Perimetros = {
    Square: (side) => side*4,
    Rectangle: (base,height) => (base*2)+(height*2),
    Triangle: (side1,side2,side3) => side1+side2+side3,
    Circle: (radius) => radius*2*pi,
}
const Areas = {
    Square:(side) => side**2,
    Rectangle:(base,height) => base*height,
    Triangle:(base,height) => (base*height)/2,
    Circle:(radius) => (radius**2)*pi,
}

// --funcionamiento de la pagina--

//Calcular informacion del Cuadrado
function useSquareInfo(){
}