'use strict'

/*Programa que pida dos números y que nos diga cual
es el mayor , el menor si son iguales*/

var num1 = parseInt(prompt("¿Cual es el numero 1?", 1));
var num2 = parseInt(prompt("¿Cual es el número 2?" ,1));

//Esta line de código no deja que se introduzca valores 0 o negativo y los 
//pide nuevamente.
while(num1 <= 0 || num2 <=0 || isNaN(num1) || isNaN(num2) ){
    num1 = parseInt(prompt("¿Cual es el numero 1?", 0));
    num2 = parseInt(prompt("¿Cual es el número 2?" ,0));
}


if(num1>num2){
    alert("El número 1 es mayor: " + num1);
}else if(num1==num2){
    alert("Los números son iguales: " + num1 + " = " + num2);
}else if(num1<num2){
    alert("El número 2 es mayor: " + num2);
}else{
    alert("Introduzca números no texto")
}

