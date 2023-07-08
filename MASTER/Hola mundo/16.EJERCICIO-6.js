'use strict'

/*QUe diga si el número  es par o impar 
1. Lo pida por ventana prompt
2.Si no es valido nos pida de nuevo el número
*/ 


var num = parseInt(prompt("Introduzca un numero ", 0));

while(isNaN(num)){10
    num = parseInt(prompt("Introduce un número ", 0));
}

if (num % 2 == 0){
    alert("Es un número par");
}else{
    alert("Es un número impar")
}