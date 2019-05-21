'use strict'

// EVENTOS DE RATON



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
})

//Mouse over captura envento al pasar por encima
boton.addEventListener('mouseover',function(){});

//Mouseout captura un evento despues de salir de un sitio con el mouse
boton.addEventListener('mouseout',function(){});

//FOCUS
var input = document.querySelector("#campo_nombe");
input.addEventListener('focus',function(){
    console.log("hola");
});

//Blur

//Keydown


//Keypress

//Keyup
