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
 todolosdivs[2].className = "rojo";
 todolosdivs[3].style.background = "yellow";



var divrojo = document.getElementsByClassName('rojo');
var div;
var hr = document.createElement("hr");
//divrojo[1].append.innerHTML = "<hr></hr>";
//divrojo[1].innerHTML = ` <div>${textoeditar}</div>
//  <hr></hr>` ;
//textoeditar= textoeditar + "<hr> </hr> ";
//divrojo[2].document.write("<hr>");

/*for( div in divrojo ){
    if(divrojo[div].className == "rojo"){
        divrojo[div].style.background = "red";
    }
}*/
divrojo[0].append(hr);


