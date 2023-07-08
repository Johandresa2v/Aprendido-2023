'use strict'

//FUNCIONES ANÓNIMAS es aquella que no tiene nombre
//UN CALLBACK es una función que se ejecuta dentro de otra 

//vemos una función dentro de una variable que no tiene nombre 
/*var pelicula = function(nombre){
    return "La película es: " +nombre;
}*/



//CALLBACK

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    
    return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es: ", dato); //esta función es sumaYMuestra
}, 
function(dato){
    console.log("La suma por dos es: ", (dato*2));// esta función es sumaPorDos

    
/*                         FUNCIÓN FLECHA
(dato)=>{ //función de flecha se le llama a esto => ademas es mas corta
    console.log("La suma por dos es: ", (dato*2));*/

});

