'use strict'

//Event load
window.addEventListener('load', function(){
    console.log("Doom cargado");

    var formulario = document.querySelector("#formulario");
    //Llamo del DOM a dashed y lo oculto 
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombres = document.querySelector("#nombres").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        //VALIDACIÓN DE LOS DATOS
        if(nombres.trim() == null || nombres.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombres").innerHTML = "El nombre no es valido"
            return false;
        }else{
            document.querySelector("#error_nombres").style,display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no es valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad) ){
            alert("La edad no es valido");
            return false;
        }


        //Hago visible el dashed cuando envío el formulario 
        box_dashed.style.display = "block";

        /* Primera manera de visualizar los datos
        //Creo array con los datos del usuario 
        var datos_usuario = [nombres, apellidos, edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
        //Segunda manera de visualizar los datos 
        var p_nombres = document.querySelector("#p_nombres span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
        
        p_nombres.innerHTML = nombres;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        
    });

});//fin event load