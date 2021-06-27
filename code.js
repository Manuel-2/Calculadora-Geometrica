//calcular areas y perimetros de las sig figuras:
//  - Cuadrados
//  - Rectangulos
//  - Triangulos
//  - Circulos

//constantes
const pi = Math.PI;

const Perimeters = {
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
    //obtener la entrada
    let sideInput = document.getElementById("squareInput").value;
    //verificar errores
    if(sideInput <= 0){
        alert("eres un tonto >:) ,nadie nesesita calcular el area de 0 o de un numero negativo >:o")
        return;
    }
    //hacer los calculos
    let resultArea = Areas.Square(sideInput);
    let resultPerimeter = Perimeters.Square(sideInput);

    //finalmente mostrar los resultados
    let outputArea = document.getElementById("squareAreaResult");
    outputArea.innerText = `Área: ${resultArea}`;

    let oputPerimeter = document.getElementById("squarePerimeterResult");
    oputPerimeter.innerText = `Perimetro: ${resultPerimeter}`;

    console.log(sideInput);
}