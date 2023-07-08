'use strict'


var ejercicio = [];
var div_persona = document.querySelector('#persona');

//Promesa
fetch('https://reqres.in/api/users/2')
.then(respuesta => respuesta.json())
.then(datos =>{
    ejercicio = datos.data;
    mostrar(ejercicio)
    console.log(ejercicio);   
});

function mostrar(person){
    let nombre = document.createElement('h3');
    nombre.innerHTML = "id: " + person.id + person.email + person.first_name;
    div_persona.appendChild(nombre)
}

