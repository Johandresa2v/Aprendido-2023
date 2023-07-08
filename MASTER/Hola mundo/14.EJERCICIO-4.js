'use strict'

//Números impares entre 2 números introducidos 

var num1 = parseInt(prompt("Introduce el primer número", 0)); 
var num2 = parseInt(prompt("Introduce el primer número", 0)); 

while(num1 < num2){
    num1++;

    if(num1%2 != 0){
        console.log("El " +  num1 + " es impar ")
    }

}