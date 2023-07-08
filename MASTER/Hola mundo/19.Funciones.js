'use strict'

//Funciones 
//Es una agrupación de de instrucciones que puedes reutilizarlos 

//Defino la función
function calculadora(parametro1, parametro2){

    //Conjunto de instrucciones a ejecutar

    console.log("Suma: " + (parametro1+parametro2));
    console.log("Resta: " + (parametro1-parametro2));
    console.log("Multiplicación: " + (parametro1*parametro2));
    console.log("División: " + (parametro1/parametro2));
    console.log("********************************")
}

calculadora(12, 8);
calculadora(98, 2);

//Invocar una función

for(var i = 0; i < 10; i++ ){
    console.log(i);
    calculadora(i, 8);
}



//Parámetros opcionales si mostrar es true hace algo si no lo otro
function calculadora2(parametro3, parametro4, mostrar = false){

    //COnjunto de instrucciones a ejecutar
    if(mostrar == true){
        console.log("Suma: " + (parametro3+parametro4));
        console.log("Resta: " + (parametro3-parametro4));
        console.log("Multiplicación: " + (parametro3*parametro4));
        console.log("División: " + (parametro3/parametro4));
        console.log("------------true-------------");
    }else{
        document.write("Suma: " + (parametro3+parametro4)+ "<br>");
        document.write("Resta: " + (parametro3-parametro4)+ "<br>");
        document.write("Multiplicación: " + (parametro3*parametro4)+ "<br>");
        document.write("División: " + (parametro3/parametro4)+ "<br>");
        document.write("------------------false-----------------");
    }
}

calculadora2(2,4);
calculadora2(2,4, true)


//Función dentro de otra función

function mostrarPorConsola(parametro5, parametro6){
        console.log("Suma: " + (parametro5+parametro6));
        console.log("Resta: " + (parametro5-parametro6));
        console.log("Multiplicación: " + (parametro5*parametro6));
        console.log("División: " + (parametro5/parametro6));
        console.log("++++++++++dentrofunciontrue++++++++++++");
}

function mostrarPorPantalla(parametro5, parametro6){
    document.write("Suma: " + (parametro5+parametro6)+ "<br>");
        document.write("Resta: " + (parametro5-parametro6)+ "<br>");
        document.write("Multiplicación: " + (parametro5*parametro6)+ "<br>");
        document.write("División: " + (parametro5/parametro6)+ "<br>");
        document.write("++++++++++dentrofuncionfalse++++++++++");
}

function calculadoradentrofuncion(parametro5, parametro6, mostrarlo = false){
    if(mostrarlo == false){
        mostrarPorConsola(parametro5, parametro6);
    }else{
        mostrarPorPantalla(parametro5,parametro6);
    }
    return true;
}
calculadoradentrofuncion(4,8);
calculadoradentrofuncion(4,8, true);