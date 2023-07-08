'use strict'

//Hacer un programa que muestre todos los números entre dos números introducidos por el usuario

var num1 = parseInt(prompt("Introduzca un número", 0));
var num2 = parseInt(prompt("Introduzca otro número", 0));
//Muestro un encabezado con las 2 variables
document.write("<h1>De " + num1 + " a "+ num2 + " están estos números </h1>")
for(var i = num1; i<= num2; i++ ){10
    document.write(i +"<br>"); //va mostrando el número de 1 en uno 
}


console.log(num1);
console.log(num2);

