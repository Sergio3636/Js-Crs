'use strict'
// Resivir todos los datos de un array ... e imprimmirlos
function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
    console.log("Fruta1: ",fruta1);
    console.log("Fruta2: ",fruta2);
    console.log(resto_de_frutas)
}
var fruta = ["Melon","Banana"];
// ..fruta envia todos los datos del array a una variable
listadoFrutas(...fruta,"Sandia","Naranja");