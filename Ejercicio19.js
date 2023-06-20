let fecha=prompt("Dame tu fecha de nacimiento:(DD/MM/AAAA)");
let fechaDividida=fecha.split("/");
let dia=parseInt(fechaDividida[0]);
let mes=parseInt(fechaDividida[1]);
let anio=parseInt(fechaDividida[2]);

let anioActual= new Date();
let soloAnio=anioActual.getFullYear();
document.write("<p>Tu edad es de: "+(soloAnio-anio)+" años</p>");
