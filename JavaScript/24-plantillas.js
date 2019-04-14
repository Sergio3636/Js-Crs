'use strict'

// Plantillas de texto

var nombe = prompt("INGRESE SU NOMBRE");
var apellidos = prompt("INGRESE SUS APELLIDOS");

var texto = `
    <h1>Hola a todos</h1>
    <h3>Mi nombre es : ${nombre}</h3>
    <h3>Mis apeliidos son : ${apeliidos}</h3>
    `;
document.write(texto);