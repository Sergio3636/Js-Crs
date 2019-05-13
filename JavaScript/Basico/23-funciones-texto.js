'use strict'

// Transformacion de textos cadenas
var numero = 44;
var texto1 = "Hola malditos madafakas";
var texto2 = "Probandos was wn loco wom";

var dato = texto2.toLowerCase();

 numero.toString(); // comvertir numero int a string
 console.log(typeof numero);


 document.write("<h1>"+ texto1.toUpperCase()+"</h1>");

 document.write("<h1>"+ dato+"</h1>");
 document.write("<h1>"+ dato.length+"</h1>");// length para contar

 // BUSCAR PALABRA EN UN STRING

 var busqueda = texto2.indexOf("wom");
 console.log(busqueda);

 // METODOS PARA BORRAR , REMPLAZAR O COLOCAR TEXTO
 // .TRIM() BORRA ESPACIOS INICIALES Y FINALES
 