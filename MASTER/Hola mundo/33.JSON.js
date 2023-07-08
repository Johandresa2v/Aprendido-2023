'use strict'

//Event load
window.addEventListener('load', function(){

//JSON - JavaScript Object Notation

//Creamos un objeto 

var metas = {
    titulo: 'Dios gracias',
    year: '2023',
    pais: 'Colombia'
};
console.log(metas);

//Cambiar el valor de un atributo
metas.titulo = "Viviendo bendecido"
metas.year = "2024"
metas.pais = "Argentina"

console.log(metas);

//Arrays metas con JS
var metas = [
    {titulo: "Bendecido por Dios", year: 2024, pais: "Argentina"},
    metas
];
console.log(metas);


var caja_metas = document.querySelector("#metas");
var index;
for(index in metas){
    var p = this.document.createElement("p");
    p.append(metas[index].titulo + " - " + metas[index].year + " - " + metas[index].pais );
    caja_metas.append(p);
};




});//Event load end