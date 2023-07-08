'use strict'


var ejercicio2 = [];
var persona2 = [];
var div_listapersonas = document.querySelector('#listapersonas');
var div_persona2 = document.querySelector('#persona2');

//Promesa y todo el código hecho en funciones.


fetch('https://reqres.in/api/users?page=2')
.then(informacion => informacion.json())
.then(datos => {
    //Extraemos los datos y los introducimos en el array ejercicio2
    ejercicio2 = datos.data;
    
    // Iteramos sobre el array y lo mostramos por el documento
    ejercicio2.map((person, i)=>{
        let persona = document.createElement('h1');
        persona.innerHTML = "Indice : " + i + " el nombre es " + person.first_name + " " + person.last_name + " el email es: " + person.email;
        div_listapersonas.appendChild(persona);

    }); 

});

//Ejercicio con un usuario simple

fetch('https://reqres.in/api/users/2')
.then(informacion2 => informacion2.json())
.then(usuario =>{
    persona2 = usuario.data;
    console.log("****persona 2*****")
    console.log(persona2);

    var datoperson2 = document.createElement('h3')
    datoperson2.innerHTML ="GRACIAS DIOS POR TU SABIDURÍA <br> ID: "+persona2.id + "<br>Email: " + persona2.email + "<br>Nombre: " + persona2.first_name + "<br>Apellido: " + persona2.last_name;
    div_persona2.append(datoperson2)
    
});









