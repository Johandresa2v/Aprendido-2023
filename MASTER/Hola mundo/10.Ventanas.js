'use strict'

//ALERTA
alert("esta es mi alerta");

//CONFIRMACIÓN
confirm("Alerta de confirmación sencilla");
//para ver el resultado de la respuesta se lo asignamos a una variable 
var respuesta = confirm("¿Si estabas seguro de la respuesta");
console.log(respuesta);

if(respuesta == true){
    console.log("Si ACEPTO");
}else{
    console.log("No ACEPTO");
}

//INGRESO DE DATOS 
var resultadoedad = prompt("¿Qué edad tienes", 18);
console.log("La edad que escribiste es: " + resultadoedad);