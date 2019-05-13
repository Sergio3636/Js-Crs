'use strict'
var numero1 = parseInt(prompt("INGRESE UN NUMERO",0));
var numero2 = parseInt(prompt("INGRESE EL NUMERO 2"));

//IMPORTANTE CONCATENAR CON "+"
// contador de  numeros intermedios
document.write("<h1> De "+numero1 +" a " +numero2+ " hay estos Numeros</h1>");
for(var i = numero1 ; i <= numero2 ; i++){
    document.write(i+"<br>");
}