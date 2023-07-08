'use strict'

//Fetch (ajax) y peticiones a servicios / APIS REST


var usuarios = [];

var div_ususarios = document.querySelector('#usuarios');
//A esto se le llama promesa
fetch('https://reqres.in/api/users?page=2')
    .then(data => data.json()) // Capturamos los datos y los metemos en data y lo convertimos a json con  .json
    .then(users =>{
        usuarios = users.data; //Cuando ya tenemos los datos recogidos lo pasamos a la variable array usuarios 
        console.log(usuarios);
        //Recorremos el array
        usuarios.map ((user, i)  => {
            let nombre = document.createElement('h2'); //crea una h2
            //introduce el indice i el .first_name que esta en el objeto y el .last_name son propiedades del objeto
            nombre.innerHTML = i + " " + user.first_name + " " + user.last_name; 
            // appendChild introduce en mi div usuario la información que contiene nombre y ls muestra por pantalla
            div_ususarios.appendChild(nombre);//
            
        });
    });

