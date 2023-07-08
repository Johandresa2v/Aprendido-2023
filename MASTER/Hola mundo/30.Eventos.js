'use strict'

//EVENTOS 


/*Event load: cuando cargamos nuestro JS y no se aplica en el documento
porque todavía no ha cargado el body o  html, se usa este evento para
que así cuando se cargue todo se ejecute el código correctamente  
*/
//Inicio del event load
window.addEventListener('load', () => {
//aquí adentro va el código


//Eventos para el raton
var boton = document.querySelector('#boton');

function cambiarColor(){
    console.log("me has dado click");

    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green"
    }
    boton.style.padding = "10px";
    boton.style.boder= "1pc solid #ccc"
    return true;
}

var boton = document.querySelector('#boton');

//CLICK
/*Con addEventListener capturo el evento dar click en el boton y
 ejecuto la función cambiar color  */
boton.addEventListener('click',function(){ 
    cambiarColor();
    boton.style.border = "10px solid black";
});

//Mouse over cuando paso el mouse por encima cambia a gris
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//Mouseout ejecuta la función después de quitar el mouse de encima
boton.addEventListener('mouseout', function(){
    boton.style.background = "purple";
});

//Focus cuando estoy dentro de la casilla de texto
var input = document.querySelector("#campo_nombre");

input.addEventListener('focus', function(){
    console.log("Estas dentro del input focus");
});
//Blur cuando le doy fuera de la casilla de texto
input.addEventListener('blur', function(){
    console.log("Estas fuera del input blur");
});
//Keydown la tecla que presiono en ese momento
input.addEventListener('keydown', function(event){
    console.log("Estas pulsando una tecla keydown: ", String.fromCharCode(event.keyCode));
});
//Keypress captura el evento cuando presiono la tecla
input.addEventListener('keypress', function(event){
    console.log("Tecla presionada keypress:", String.fromCharCode(event.keyCode));
});
//Keyup captura el evento cuando levanto el dedo de la tecla
input.addEventListener('keypress', function(event){
    console.log("Tecla presionada keyup:", String.fromCharCode(event.keyCode));
});

});//end event load