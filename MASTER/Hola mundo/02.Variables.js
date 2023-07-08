//Modo estricto no deja que se pueda definir una variable sin poner var
//cuando pongo esto el valor de país y antiguedad vuelve a ser la declarada con var 
//'use strict'



var pais = "Colombia";
var continente = "America";
var antiguedad = 2023;
//Concatenar en JS es con  +
var todo = pais + " " + continente + " " + antiguedad;
//asignar otro pais a la variable se cambiara a la ultima declarada 
pais = "argentina";
antiguedad = 2024;

let prueba = "hola";
alert(prueba);


console.log(pais, continente, antiguedad);
alert(todo);