'use strict'

window.addEventListener("load",()=>{
    var tiempo = setInterval(()=>{
        console.log("Set interval ejecutado");
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px")  encabezado.style.fontSize = "300px";
        else encabezado.style.fontSize = "50px";
    },3000);
 
    });

    