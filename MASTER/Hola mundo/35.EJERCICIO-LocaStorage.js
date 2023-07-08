'use strict'



var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    //Tomo el valor obtenido en el input y lo guardo en titulo
    var titulo = document.querySelector('#addpelicula').value;
    //Condicional para que no se guarde vacío
    if(titulo.length >= 1){
        //en el siguiente código le digo que tome el valor de titulo y lo guarde como key y como valor
        localStorage.setItem(titulo, titulo);
    } 
});

//Recorrer y mostrar todos los elementos del local storage
var ul = document.querySelector('#peliculas-list');
for (var i in localStorage){
    //Condicional si el dato que esta es un string se mostrara en el document
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        //Se añade a ul los li que son string
        ul.append(li);
    }
}

//Borrar película
var formulario = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener('submit', function(){
    //Tomo el valor obtenido en el input y lo guardo en titulo
    var titulo = document.querySelector('#borrarpelicula').value;
    //Condicional para que no se guarde vacío y solo elimine si tiene algo escrito
    if(titulo.length >= 1){
        //Elimina el elemento que contiene titulo 
        localStorage.removeItem(titulo);
    } 
});