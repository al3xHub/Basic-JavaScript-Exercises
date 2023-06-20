document.write("<h1>Ejercicios Básicos</h1>");

function aleatorio(numero) {
    return Math.floor(Math.random() * numero);

  }

  //document.write(aleatorio(10));

  let resultado;

  resultado=aleatorio(10);

  if(resultado%2==0)
  {
    document.write("<p> El número obtenido es "+resultado+" y es par</p>");
  }
  else
  {
    document.write("<p>El número obtenido es "+resultado+" y es impar</p>");
  }
