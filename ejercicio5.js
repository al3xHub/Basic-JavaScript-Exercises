document.write("<h1>Ejercicio 5</h1>")
document.write("<ul>");
function tablaDeMultiplicar(numero)
{
	for(i = 0;i<=10;i++){
		document.write("<li>");
		document.write(numero + "x " + i + "= " + numero * i);
		document.write("</li>");
	}
}
document.write("</ul>");
tablaDeMultiplicar(7);