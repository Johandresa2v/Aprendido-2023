'use strict'

/*CALCULADORA
-pida 2 números por pantalla
-si metemos uno mal que no los vuelva a pedir 
-en el cuerpo de la pagina, una alerta y por la consola el 
resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/


var number1 = parseInt(prompt("Introduce el primer número", 0));
var number2 = parseInt(prompt("Introduce el segundo número", 0));

while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt("Introduce un número ", 0));
    number2 = parseInt(prompt("Introduce un número ", 0));
}


var suma = number1+number2;
var resta = number1-number2;
var multiplica = number1*number2;
var divide = number1/number2;

console.log("SUMA = "+suma);
console.log("RESTA = "+resta);
console.log("MULTIPLICACIÓN = "+multiplica);
console.log("DIVISIÓN = " +divide);

alert("SUMA = "+suma);
alert("RESTA = "+resta);
alert("MULTIPLICACIÓN = "+multiplica);
alert("DIVISIÓN = " +divide);

document.write("SUMA = "+suma);
document.write("RESTA = "+resta);
document.write("MULTIPLICACIÓN = "+multiplica);
document.write("DIVISIÓN = " +divide);


//FORMA CORTA

var resultado = "La suma es: "+(number1+number2)+"<br/>"+
                "La resta es: "+(number1-number2)+"<br/>"+
                "La multiplicación es: "+(number1*number2)+"<br/>"+
                "La división es: "+(number1/number2)+"<br/>";

var resultadoConsola = 
                "La suma es: "+(number1+number2)+" \n"+
                "La resta es: "+(number1-number2)+" \n"+
                "La multiplicación es: "+(number1*number2)+" \n"+
                "La división es: "+(number1/number2)+" \n";

document.write("Los resultados son: "+resultado);
alert("Los resultados son: "+resultadoConsola);