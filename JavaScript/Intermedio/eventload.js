'use strict'
 window.addEventListener('load',()=>{
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
    if (typeof jQuery != 'undefined') {  
        // jQuery is loaded => print the version
        alert(jQuery.fn.jquery);
    }
    // CLICK
    boton.addEventListener('click',function(){
        cambiarColor();
    });
    var entrada = document.querySelector("#campoNombre");

    //Mouse over captura envento al pasar por encima
    boton.addEventListener('mouseover',()=>{
         cambiarColor();
    });

    //Mouseout captura un evento despues de salir de un sitio con el mouse
    boton.addEventListener('mouseout',function(){
    // cambiarColor();
    });

    //FOCUS Sigue sin funcionar
   /* input.addEventListener("focus",()=>{
        console.log("!FOCUS");

 },true);*/
});