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
    Triangle: (base,height) => {
        let c1 = (base/2)**2;
        let c2 = height**2;
        let h = Math.sqrt(c1+c2);
        let result = (h*2)+base;
        return result;
    },
    Circle: (radius) => radius*2*pi,
}
const Areas = {
    Square:(side) => side**2,
    Rectangle:(base,height) => base*height,
    Triangle:(base,height) => (base*height)/2,
    Circle:(radius) => (radius**2)*pi,
}

// --funcionamiento de la pagina--

//Calcular y mostrar informacion del Cuadrado
function SquareResults(){
    //obtener la entrada
    let sideInput = document.getElementById("squareInput").value;
    //verificar errores
    if(sideInput <= 0){
        inputNotValid();
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

//Calcular y mostrar informacion del triangulo
function TriangleResults(){
    //obtener la entrada
    let base = parseInt(document.getElementById("triangleInputBase").value);
    let height = document.getElementById("triangleInputHeight").value;

    //verificar errores
    if(base <= 0 || height <= 0){
        inputNotValid();
        return;
    }

    //hacer los calculos
    let resultArea = Areas.Triangle(base,height);
    let resultPerimeter = Perimeters.Triangle(base,height);

    //finalmente mostrar los resultados
    let outputArea = document.getElementById("trinagleAreaResult");
    outputArea.innerText = `Área: ${resultArea}`;

    let oputPerimeter = document.getElementById("trianglePerimeterResult");
    oputPerimeter.innerText = `Perimetro: ${resultPerimeter}`;
}


// -- funcion en caso de entrada no valida --
function inputNotValid(){
    alert("eres un tonto >:) ,nadie nesesita calcular el area de 0 o de un numero negativo >:o");
}