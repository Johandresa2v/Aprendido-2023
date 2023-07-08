'use strict'

//BOM - Browser Object Model

//creo una función que me muestre la altura y el ancho

function getBoom (){
//Muestra la altura de la ventana
console.log(window.innerHeight);
//Muestra el ancho de la ventana
console.log(window.innerWidth);
}
getBoom();

//Ver la url que esta cargada
console.log(window.location.href);


//Creo una función que me redireccione a otra url
function redirect(url){
    window.location.href = url;
}

//Creo una función que abra una ventana
function abrirVentana(url){
    window.open(url,"","width=400px, height=300px");
}