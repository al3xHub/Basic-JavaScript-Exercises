//Ejercicio1
let x=5;
let y=-3;
let resultado= x*y;

document.write("<h1>Ejercicico1</h1>")
document.write("El producto de " +x+ " y " +y+ " es igual a "+resultado);

//Ejercicio2
x= 2;
y= "azucar";
resultado= x*y;
document.write("<h1>Ejercicio2</h1>");
document.write("El producto de " +x+ " y " +y+ " es igual a "+resultado);

//Ejercicio3


//Ejercicio4


document.write("<h1>Ejercicio4</h1>");

document.write("<p>tirada: " +tirada()+ "</p>");

function tirada()
{
    let min= 1;
    let max= 6;
    let numeroAleatorio= Math.round(Math.random()*(max-min) +min)
    return numeroAleatorio;  
}






