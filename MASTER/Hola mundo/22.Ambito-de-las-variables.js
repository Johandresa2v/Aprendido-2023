'use strict'

//AMBITOS DE LAS VAIABLES

function holaMundo(texto){

    //esta variable no se puede llamar fuera de la función 
    var hola_mundo = "texto dentro de la función"


    console.log(texto);
    console.log(numero.toString());//Con .toString lo convierto a un string
    console.log(hola_mundo);
}

var numero = 30;//Esta variable se puede llamar dentro de la función holaMundo
var texto = "Hola mundo soy una variable global"
holaMundo(texto);

/* SI llamo la variable hola_mundo fuera de la función no se puede 
console.log(hola_mundo);  */