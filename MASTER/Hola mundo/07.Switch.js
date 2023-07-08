'use strict'

//CONDICIONAL SWITCH

var edad = 18;
var imprime = "";

switch(edad){
    case 18: 
        imprime = "acabas de cumplir la mayoría de edad tienes 18";
    break;
    case 25:
        imprime = "ya eres mas adulto tienes mas de 25";
    break;
    case 40:
        imprime = "ya tienes mas de 40";
    break;
    case 75:
        imprime = "Ya tienes mas de 75";
    break;
    default:
        imprime = "tu edad es ";
        break;
}

console.log(imprime);