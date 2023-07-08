'use strict'

//Event Load inicio
window.addEventListener('load', function(){


    //Metí el bucle en una función solo para llamarla en el botón start 
    function intervalo(){
        //Timers setInterval
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
            //Función que cambia el tamaño de la letra
            var encabezado = document.querySelector("h1")
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 3000); // Tiempo en el cual se ejecutara
        return tiempo;
    };
    var tiempo = intervalo(); //inicio la función de cambio de tamaño de la letra

    //Timers setTimeout solo se ejecuta una vez
    var tiempo2 = setTimeout(function(){
        console.log("Set interval ejecutado");
        //Función que cambia el tamaño de la letra
        var encabezado = document.querySelector("h2")
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
        }else{
            encabezado.style.fontSize = "50px";
        }
    }, 5000);

    //Con esta función detengo el bucle de tiempo
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("has parado el intervalo en bucle");
        clearInterval(tiempo);
    });
    //Con esta función inicio el bucle de tiempo
    var start = document.querySelector("#start");
    stop.addEventListener("click", function(){
        alert("has iniciado el intervalo en bucle");
        intervalo();//llamo la función de bucle
    });


});//Event load final