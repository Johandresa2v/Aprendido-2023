'use strict'

//Condicional If 

var edad1 = 26;
var edad2 = 30;
var nombre = "SOL";

if(edad1 > edad2){
    console.log("La edad1 es mayor: " + edad1)
}else{
    console.log("La edad2 es mayor: " + edad2)
}

if(edad1 >= 18){
    console.log(nombre + " Usted es mayor de edad tiene " + edad1 )
    if(edad1 == 26){
    console.log(nombre + " usted es hermosa y bella tiene una edad de " + edad1 )
    }else if(edad1 >= 70){
    console.log(nombre + " siempre seras hermosa a cualquier edad y tienes " + edad1 )
    }else{
    console.log(nombre + " Te amare toda la vida tienes " + edad1 )
    }
}else{
    console.log(nombre + "Usted es menor de edad tiene " + edad1 )
}

/*Operadores logicos 
AND (Y): &&
OR (O): ||
NEGACIÓN: !
*/

var year = 2023;
//Negación 
if(year != 2022){
    console.log("El año si es " + year);
}

//AND (Y) &&
if( year >= 2020 && year <= 2030){
    console.log("La era actual ");
}else{
    console.log("La era es diferente ");
}

//OR (O) ||
if(year == 2020 || year >= 2023){
    console.log.("Si esta entre los años aceptados");
}else{
    console.log ("no esta entre los años seleccionados");
}