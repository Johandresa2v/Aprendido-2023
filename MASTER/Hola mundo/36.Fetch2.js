'use strict'

//Fetch (ajax) y peticiones a servicios / APIS REST


var usuarios = [];

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_janet = document.querySelector('#janet');

//A esto se le llama promesa

    
    getUsuarios()
    .then(data => data.json()) 
    .then(users =>{
        listadoUsuarios(users.data);
        return getInfo();
    })
    .then(data =>{
        div_profesor.innerHTML = data;
        

        return getJanet();// le digo que después de capturar el primer usuario agrega el usuario Janet
    })
    .then(data => data.json())//Encadenamos la promesa getJanet
    .then(user =>{
        mostrarJanet(user.data);

        return getInfo();
    })
//catch se utiliza para capturar un error 
    .catch(error =>{
        //Aquí se introduce la acción que tomara dependiendo del error
        console.log(error);
    });


//Funciones que devuelven una promesa, usuarios y usuario Janet
    function getUsuarios (){
        return fetch('2https://reqres.in/api/users?page=2');
    }

    function getJanet (){
        return fetch('https://reqres.in/api/users/2');
    }
// Creamos una promesa
    function getInfo(){
        var profesor = {
            nombre: 'Johan Andrés',
            apellidos: 'Almeida Velandia',
            url: 'johandres-development.com'
        };
//Se instancia como un objeto y esta compuesta por una respuesta y un rechazo de la llamada en caso de que falle
        return new Promise((resolve, reject) => {
            var profesor_string = JSON.stringify(profesor);

            //En esta función de callback le decimos que después de cierto tiempo retorne profesor _string
            setTimeout(function(){
                if(typeof profesor_string != 'string' || profesor_string == '') return reject('Error');
                return resolve(profesor_string);
            },3000);


            

            

        });   
        
        
    }

//Recorremos el array con esta función esta función muestra los usuarios 
    function listadoUsuarios(usuarios){
        usuarios.map ((users, i)  => {
            let nombre = document.createElement('h2');

            nombre.innerHTML = i + " " + users.first_name + " " + users.last_name;

            div_usuarios.appendChild(nombre);
            
        });
    }

    function mostrarJanet(user){
            console.log(user);
        
            let nombre = document.createElement('h4');
            let avatar = document.createElement('img');// creo la variable avatar y creo mi etiqueta img
            nombre.innerHTML = user.first_name + " " + user.last_name ;
            avatar.src = user.avatar; //uso la propiedad src para introducir la imagen 
            avatar.width = "100";// le doy un ancho de 100 NOTA no se puede poner px o % no funciona
            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);
        
    }

