'use strict'

//DOM - Document object Model

function cambiaColor(color){
    caja.style.background = color;
}


//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "cambio el texto de la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "clase";

console.log(caja);


//Como conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
//puedo selecionar el contenido del indice 2 y cambiar sus propiedades
/*
var contenidoIndice2 = todosLosDivs = todosLosDivs[2];
contenidoIndice2.innerHTML = "cambio información del indice 2";
contenidoIndice2.style.background = "blue";
contenidoIndice2.style.padding = "20px";
contenidoIndice2.style.color = "white";
contenidoIndice2.className = "clase2";
*/

/* ESTO DEL VIDEO 65 NO PUDE HACERLO NO ME FUNCIONO
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr")



//todosLosDivs.array.forEach((elemento, indice) => {
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("P");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto); 
        seccion.append(parrafo);
    }
}
seccion.append(hr);
//});

*/





//Como conseguir elementos por su clase CSS
var divsAmarillos = document.getElementsByClassName('amarillo');
var divsAzules = document.getElementsByClassName('azul');
var divsRojos = document.getElementsByClassName('rojo');

//hago un for que a cada div con su clase respectiva le asigne un estilo
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo" ){
        divsRojos[div].style.background = "red";
    }
}
for(div in divsAmarillos){
    if(divsAmarillos[div].className == "amarillo" ){
        divsAmarillos[div].style.background = "yellow";
    }
}
for(div in divsAzules){
    if(divsAzules[div].className == "azul" ){
        divsAzules[div].style.background = "blue";
        divsAzules[div].style.color = "white";
    }
}

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("hr");
console.log(etiqueta);



