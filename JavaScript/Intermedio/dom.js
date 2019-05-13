'use strict'
// LAS ETIQUETAS SON ELEMENTOS DEL DOM
// EDITAR ETIQUETAS DESDE JS

//var caja = document.getElementById("micaja");
// CONSEGUIR ELEMENTOS CON ID UNICOS
var caja = document.querySelector("#micaja");

caja.innerHTML = "NUEVO MESAJE EN CAJA DESDE JS";

caja.style.padding = "30px";

// CONSEGUIR ELEMENTOS POR SU ETIQUETA O CLASS
 var todolosdivs = document.getElementsByTagName('div');
 todolosdivs[2].className = "SECOND";
 todolosdivs[3].style.background = "yellow";



var divrojo = document.getElementsByClassName('rojo');
var div;

for( div in divrojo ){
    if(divrojo[div].className == "rojo"){
        divrojo[div].style.background = "rojo";
    }
}
console.log(divrojo);

