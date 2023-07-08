'use strict'

//Tabla de multiplicar de un número introducido por pantalla

var number = parseInt(prompt("¿De que número quieres la tabla?"));

for(var i = 0; i <= 10; i++){
    document.write(i + " X " + number + " = " + (i*number) + "<br>");
    console.log(i*number);
}

//Todas las tablas de multiplicar 

for(var c = 0; c <= 10; c++){
    document.write(c + "<h1>De la tabla " + c + "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i+" X "+c+" = " + (i*c) + "<br>")
    }
}