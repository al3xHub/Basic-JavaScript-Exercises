let matriz1 = new Array();
let matriz2 =new Array();
let suma= new Array();

for(i=0; i<10; i++)
{
    matriz1[i]= Math.round(Math.random()*9+1);
    matriz2[i]= Math.round(Math.random()*9+1);
    suma[i] = matriz1[i]+matriz2[i];

    document.write(matriz1[i]+ "+"+matriz2[i]+ " = " +suma[i]+"<br>");
}

