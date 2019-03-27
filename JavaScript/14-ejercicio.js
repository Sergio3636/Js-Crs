 'use strict'
 // Mostrar numeros impares entre
 
 var numero1 = parseInt(prompt("Ingrese un numero",0));
 var numero2 = parseInt(prompt("Ingrese un numero",0));
 
 document.write("<h1> De "+numero1 +" a " +numero2+ " hay estos Numeros Impares </h1>");
 for(var i=numero1; i<=numero2; i++){
     if(i%2 == 1){
         document.write(i+"<br>");
     }
 }
 