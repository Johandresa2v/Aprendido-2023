'use strict'
//Pruebas con Let y Var

//Prueba con Var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero); //valor 50

//Prueba con Let

var texto = "Gracias DIOS";
console.log(texto);

if(true){
    let texto = "TE AMO DIOS";
    console.log(texto);
}
console.log(texto)
