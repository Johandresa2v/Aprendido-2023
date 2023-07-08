'use strict'

/* EJERCICIOS CON ARRAYS
1.  Pida 6 números por pantalla y los meta en un array
2.  Mostrar el array entero (todos sus elementos) en el cuerpo de
    la pagina y por consola
3.  Ordenarlos y mostrarlos 
4.  Invertir su orden y mostrarlos
5.  Mostrar cuantos elementos tiene el Array
6.  Búsqueda de un valor introducido por el usuario, que nos dia
    si lo encuentre y su indice 
*/



//1. uso forEach para recorrer un array

var number = [45,56,78,26,96,12,35,91];
var nombres = ['DIOS','Sol','Miqueas','Emma','Johan','Patita'];

//forEach número
console.log("Los números que contiene mi array son: ")

number.forEach((elemento) => {
    console.log(parseInt(elemento));
});

//forEach nombres
document.write("<h1><strong> Estos son los datos de mi array nombres: </strong></h1>");

nombres.forEach((elemento,indice) => {
    document.write("<h3>El elemento del indice " + indice + " es: " + elemento + "</h3>");
});

//Ordenar 
document.write("<h1><strong> Estos son los datos de mi array nombres ORDENADOS: </strong></h1>");
nombres.sort();
nombres.forEach((elemento,indice) => {
    document.write("<h3>El elemento del indice " + indice + " es: " + elemento + "</h3>");
});

//Creo mi función para demorar menos tiempo
function verDocumento(nombres){
    nombres.forEach((elemento,indice) => {
        document.write("<h3>El elemento del indice " + indice + " es: " + elemento + "</h3>");
    });
}

//Orden invertido
nombres.reverse();
document.write("<h1>Orden Invertido</h1>");
verDocumento(nombres);

//Vuelvo mayúscula el string texto  
var texto1 = "Sin DIOS nada Sera Posible, Con el todo lo puedo AMÉN.";
var mayusculas = texto1.toUpperCase();
document.write(mayusculas);
console.log(mayusculas);

//Concat para concatenar textos
var texto2 = " ALABADO SEAS EN EL NOMBRE PODEROS DE JESUS";
texto1 = texto1.toUpperCase();
document.write("<h1>"+ texto1.concat(texto2)+"</h1>"); 

