'use strict'

// EVENTOS DE RATON


window.addEventListener('load',function(){
    
    function cambiarColor(){

        console.log("Me has dado click");
        var bg = boton.style.background;

        if(bg == "green"){
            boton.style.background = "red";
        }
        else{
            boton.style.background = "green";
        }
        return true;
    }

    var boton = document.querySelector("#boton");


    // CLICK
    boton.addEventListener('click',function(){
        cambiarColor();
    });

    //Mouse over captura envento al pasar por encima
    boton.addEventListener('mouseover',function(){
    // cambiarColor();
    });

    //Mouseout captura un evento despues de salir de un sitio con el mouse
    boton.addEventListener('mouseout',function(){
    // cambiarColor();
    });

    //FOCUS
    var entradatxt = document.querySelectorAll("#campo_nombe");
    entradatxt.addEventListener('focus',function(){
        console.log("hola");
    });

    //Blur

    //Keydown


    //Keypress

    //Keyup
});