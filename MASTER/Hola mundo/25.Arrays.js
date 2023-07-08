'use strict'

//ARRAYS o también conocidas como arreglos, matrices

var nombre = "DIOS CONFIO EN TI PADRE AMADO";
var nombres = ["johan almeida", "miqueas", "sol", 2023, true]; //Array con muchos datos de diferentes tipos

console.log(nombre);
console.log(nombres);

//Creamos el arrays como un objeto
var lenguajes = new Array("PHP", "JS","HTML","CSS","REACT","Siii se PUEDEEE", "con DIOS podre aprender mas", "y ganar mas sustento para mi familia y crecer como persona");
console.log(lenguajes);
//sacamos un 1 elemento del array y lo mostramos por consola
console.log(lenguajes[5]);//mostrara Siii se PUEDEEE


//AVANZADO 
//Length para ver el numero de elementos que tiene
console.log("Tiene: "+lenguajes.length+" elementos");
//Pedimos un numero de elemento y lo mostraremos 
var elemento = parseInt(prompt("Que elemento quieres ver",5));
if(elemento >= lenguajes.length){
    alert("introduce un número desde 0 hasta " + lenguajes.length);
}else{
alert("El usuario seleccionado es: " + lenguajes[elemento]);
}

//Recorrer un array con FOR
document.write("<h1> Lenguajes de programación para la victoria en nombre de DIOS </h1>");

for(var i = 0; i < lenguajes.length; i++){
    document.write(i+" Es "+lenguajes[i]+"<br>");
}


document.write("foreach-----");


//Recorrer un array con ForEach, este nos itera y recorre el Array rápidamente 
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" el indice " + elemento + "</li>")

});
//el indice puede ser opcional
lenguajes.forEach((elemento)=>{
    document.write("<li>" + elemento + "</li>")

});
//si metemos el tercer parametro veremos la información
lenguajes.forEach((elemento, indice, array)=>{
    console.log("Array original----")
    console.log(array)
    document.write("<li>"+indice+" el indice " + elemento + "</li>")

});


document.write("FOR IN *******")
//Recorrer un Arrary con FOR IN
for(let lenguaje in lenguajes){
    document.write("<ul>"+lenguajes[lenguaje]+"</ul>");
}
