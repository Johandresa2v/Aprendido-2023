'use strict'
//video 45

//Parámetros REST y SPREAD

function listadoFrutas(fruta1, fruta2){
    console.log(fruta1);
    console.log(fruta2);
}
listadoFrutas("naranja","manzana");
console.log("----------REST-------------")


            /*REST*/
/*Al poner los 3 puntos ... puedo meter mas parámetros de los permitidos 
y los que sobran entraran en un array
*/
function listadoFrutas2(fruta3, fruta4, ...resto_de_frutas){
    console.log(fruta3);
    console.log(fruta4);
    console.log(resto_de_frutas);
}
listadoFrutas2("naranja","manzana","sandia","pera","uvas");



            /*SPREAD*/

function listadoFrutas3(fruta5, fruta6){
    console.log("lista 3 fruta 1 = "+fruta5);
    console.log("lista 3 fruta 2 = "+fruta6);
}
/*si ponemos la variable adelante como parámetro y le agregamos los ...3 puntos 
hará los mismo que el REST, se vuelve un parametro SPREAD */
var frutas = ["primero","segundo"];//un array va entre corchetes 
listadoFrutas3(...frutas,"mango","piña","mamon");


