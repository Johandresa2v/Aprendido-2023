'user strict'

//usamos new Date() para que capture la fecha
var fecha = new Date();
//.getYear muestra el año capturado en fecha
var year = fecha.getFullYear();//Año
var mes = fecha.getMonth();//Mes
var dia = fecha.getDay();//Dia
var hora = fecha.getHours();//Año
console.log(dia);


var textoHora = 
    `El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}`
;

console.log(textoHora);

console.log(fecha);