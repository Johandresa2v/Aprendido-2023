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

//Creo esta plantilla de texto para mostrar por documento
function mostrarElementos (elementos, textoCustom = ""){
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) =>{
        document.write("<li><strong>"+elemento+"</strong></li><br>");
} );
    document.write("</ul>");
}

//1. Pide 6 números
var numeros = [];

for(var i = 0; i <= 4; i++){
    numeros.push(parseInt(prompt("Introduce un numero")));
}
//2. Mostrar por consola
console.log(numeros);
//Mostrar por documento
mostrarElementos(numeros, "números como los introdujeron")
//3. Ordenarlos
var ordenado = numeros.sort();
mostrarElementos(ordenado,"Números Ordenados");
//4. invertir
var invertido = numeros.reverse();
mostrarElementos(ordenado,"Números Invertidos");
//5. Mostrar cantidad de elementos
document.write("<h1>La cantidad de números que hay es: " +numeros.length + "</h1>");
//6. Búsqueda 
var busqueda = parseInt(prompt("introduce un numero para buscar", 0));
var indice = numeros.findIndex(numero => numero == busqueda);

if(indice && indice != -1){
    document.write("<h1>ENCONTRADO "+ busqueda+"</h1>");
    document.write("<h1>Posición de la búsqueda: " + indice + "</h1>");
}else{
    document.write("<h1>No encontrado</h1>")
}
