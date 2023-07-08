'use strict'

//ARRAYS MULTIDIMENSIONALES 

var categoria = ['Cristiana','Acción', 'Terror', 'Comedia'];
var peliculas = ['San Andres','Jackson','¿Qué paso ayer?','TE AMO DIOS'];

var cine = [categoria,peliculas];
console.log(cine);
//el primer [] es la columna y el segundo [] el elemento
console.log(cine[0][0]);
console.log(cine[1][3]);

//Añadir un elemento al array en JS se usa PUSH
peliculas.push("Batman");
console.log(peliculas);

/*Prompt para introducir elementos a un array

var elemento = prompt("");
do{
    elemento = prompt("introduce tu película");
    peliculas.push(elemento);
}while(elemento != "acabar");
    //.POP elimina el ultimo elemento del Array me servirá para eliminar la palabra acabar al final de la ejecución
peliculas.pop();
console.log(peliculas);

*/

//Eliminar un elemento del Array
//Primero debo buscar el indice 
var indice = peliculas.indexOf('Jackson');
if(indice > -1){//sera -1 en caso de que no lo encuentre 
    peliculas.splice(indice, 1);//splice para eliminar 
}
console.log(indice);
console.log("Debe faltar Jackson = " + peliculas)


// .JOIN convierte el arrays a un string de texto separado por una coma
var peliculasString = peliculas.join();
console.log("Peliculas string: " + peliculasString);


// .SPLIT convertir un string a un array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);



// .SORT me ordena los elementos del Array en orden alfabético
var abcdario = ['e','d','a','f','b','c'];
console.log(abcdario.sort());

//.reverse invierte el orden del array 
var abcdario2 = ['reverse','e','d','a','f','b','c'];
console.log(abcdario2.reverse());



document.write("FOR IN ****")
//Recorrer un Arrary con FOR IN
for(let indice in abcdario2){
    document.write("<ul>"+abcdario2[indice]+"</ul>");
}


//Busquedas
var busqueda = abcdario2.find(function(indice){
    return indice == "e";
});
console.log("la letra que buscabas si esta y es: " + busqueda);
//forma reducida
var busqueda = abcdario2.find(indice => indice =="a");
console.log("REDUCIDA la letra que buscabas si esta y es: " + busqueda);

//Buscar el índice se usa .finIndex
var busqueda = abcdario2.findIndex(indice => indice =="a");
console.log("El indice de la letra a es: " + busqueda);


var precios = [10, 20 , 30, 40, 50, 60, 70 , 80, 90, 100];
var buscarvalor = precios.some(precio => precio >= 50);
console.log(buscarvalor);


