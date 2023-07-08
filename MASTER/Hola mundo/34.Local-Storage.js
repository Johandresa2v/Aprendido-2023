'use strict'

window.addEventListener('load', function(){

/*Local Storage - El objeto Storage (API de almacenamiento web) 
nos permite almacenar datos de manera local en el navegador y 
sin necesidad de realizar alguna conexión a una base de datos. 
En este artículo te mostraré cómo utilizarlo mediante JavaScript.*/

//Con esto comprobamos que el LocalStorage sea compatible 
if(typeof(Storage)!== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no esta disponible");
}

//Guardar datos en el LocalStorage
localStorage.setItem("titulo","DIOS es mi pastor nada me faltara");

//Recuperar elemento y guardarlo
console.log(localStorage.getItem("titulo"));
//Asi lo meto en el documento 
document.querySelector("#metas").innerHTML= localStorage.getItem("titulo");

//Guardar Objetos 
var usuario = {
    nombre: "Johan",
    email: "johandres.a2v@mail.com",
    web: "johandres-development.com.ar"
};
//debemos convertir los datos de JSON puro a un JSON String
//usamos el método JSON.stringify que realiza la conversión 
this.localStorage.setItem("usuario", JSON.stringify(usuario));


//Recuperar un objeto JSON string y volverlo un objeto JSON
//usamos JSON.parse que toma el JSON string y lo convierte en objeto JSON puro
var usuarioJS = JSON.parse(this.localStorage.getItem("usuario"));
console.log(usuarioJS);

//puedo mostrar por pantalla información del objeto que se ha recuperado
document.querySelector("#metas").append(usuarioJS.web);

//borrar los elementos del local storage
//Se usa .removeItem para 1 solo elemento esta comentado para ver los ejemplos de arriba
                //localStorage.removeItem("usuario");
//Se usa para borrar todos los elementos - esta comentado para ver lo anterior 
                //localStorage.clear("usuario");






});