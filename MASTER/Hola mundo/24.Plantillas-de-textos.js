'use strict'

//PLANTILLAS DE TEXTOS

var nombres = prompt("Mete tus nombres");
var apellidos = prompt("Mete tus apellidos");

// manera clásica var texto = " Mi Nombre es: "+nombres+" mis apellidos son "+apellidos;

//Asi tenemos una plantilla de texto que solo se tendrá que cambiar la variable 
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombres}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3> `;
    


document.write(texto);