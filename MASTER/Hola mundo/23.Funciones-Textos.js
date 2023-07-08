'use strict'

//Métodos de transformación de textos de cadena 

var numero = 444;
var texto1 = "Bienvenido al curso de JAVASCRIPT";
var texto2 = "es muy bueno";


var dato = "El texto se convierte en minúscula: "+texto1.toLowerCase();
    dato = "El texto se convierte en mayúscula: "+texto2.toUpperCase();
var dato2 = "El número se convierte en String: "  +numero.toString();

console.log(dato);
console.log(dato2);


//Calcular la longitud

var nombre = "johan";
var apellidos = ["Almeida","Veladia"];

console.log("La Longitud es de nombre es:"+nombre.length);
console.log("También calcula la cantidad de elementos que es:"+apellidos.length);


//Concatenar textos - Unir textos

var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

console.log("concat------------")
var textoTotal2 = texto1.concat(" " + texto2);
console.log(textoTotal2);


//Métodos de búsqueda
var libro = "Esto es un texto de un libro necesito buscar 2 texto"
var busqueda = libro.indexOf("texto");
console.log("Lo que buscas esta en la posición inicial: " + busqueda);// me dirá que esta en la posición 14

//Con lasIndexOf buscara la palabra y si hay varias dirá donde esta la ultima
var busquedafinal = libro.lastIndexOf("texto");
console.log("Lo que buscas que esta la posición final: " + busquedafinal);//El ultimo texto esta en la posición 45

//BUSCAR
var busquedafinal = libro.search("texto");
console.log("   Lo que buscas(search) que esta la posición final:   " + busquedafinal);
var busquedafinal = libro.search("textooo");
console.log("Lo que buscas(search) textooo no existe: " + busquedafinal);// dirá -1 al no encontrarlo


//MATCH devuelve un array con las palabras y donde aparecen
var busquedafinal = libro.match(/texto/g);// /text/g asi nos busca la palabra
console.log(busquedafinal);


//charAt
var busquedafinal = libro.charAt(14);// busca el carácter en concreto  
console.log(busquedafinal);

//INCLUDES 
var busquedafinal = libro.includes("necesito");// Mira si palabra existe regresa un bolean true
console.log(busquedafinal);


//REPLACE
var busquedafinal = libro.replace("2", "A DIOS");// busca el carácter en concreto y lo reemplaza por lo que quiero.
console.log(busquedafinal);


console.log("SLICE----------")
//SLICE 
var busquedafinal = libro.slice(14,22);// busca el carácter en concreto y elimina los caracteres hasta esa posición
console.log(busquedafinal);


//SPLIT sirve para recortar una palabra y meterla en un array
var busquedafinal = libro.split();
console.log(busquedafinal);

var busquedafinal = libro.split("");// los separa por carácter
console.log(busquedafinal);


//TRIM recorta los espacios por delante y por detrás
var busquedafinal = libro.trim();
console.log(busquedafinal);