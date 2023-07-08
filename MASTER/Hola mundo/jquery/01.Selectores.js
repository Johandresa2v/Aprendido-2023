'use strict'

$(document).ready(function(){
    console.log("Estamos listo");

//Selector de ID: con # puedo seleccionar algo en en html por su id
    var rojo = $("#rojo").css("background","red").css("color","white");
    var amarillo = $("#amarillo").css("background","yellow").css("color","black");
    var verde = $("#verde").css("background","green").css("color","white");

//Selector de clases: se usa . y el nombre de la clase
    var mi_clase = $('.zebra').css("padding","5px");
    console.log(mi_clase);
    //Una clase es como un array de los elementos que están dentro de y puedo seleccionarlo [] o con .eq()
    console.log("[ ] " + mi_clase[0]);
    console.log(".eq " + mi_clase.eq(1));

    $('.sin_borde').click(function(){
        console.log("Click dado!!");
        $(this).addClass("zebra");
    });
//Selectores por etiqueta: simplemente entre las comillas ponemos la etiqueta para seleccionarlo
    var parrafos = $('p').css("cursor","pointer");
/** $(this) esto es el elemento  */
    parrafos.click(function(){
        var texto = $(this);
        if(!texto.hasClass('texto-grande')){
            $(this).addClass('texto-grande');
        }else{
        $(this).removeClass('texto-grande');
        }

    });
//Selectores de atributo se usa $('[atributo="valor"]') de esta manera lo seleccionamos y realizamos cambios en el 
    $('[title="Google"]').css("background","blue").css("color","white");
    $('[title="SENA"]').css("background","red").css("color","white");

//Otros 
//FIND y PARENT se ponen entre comillas y separados por coma , lo que nos sirve para agregar cambios a varios elementos a la vez
    $('p,a').addClass('margen-superior');

    //Find busca dentro del div caja los elementos con la clase resaltado
    var busqueda = $("#caja").find('.resaltado');
    console.log("****FIND****")
    console.log(busqueda);
    //parent() lo que hace es salir del contenedor actual a una posición anterior se hace 2 parent para que se posicione en el li que tiene la clase .resaltado
    var busqueda2 = $("#elemento2").parent().parent().find('.resaltado');
    console.log("****PARENT****")
    console.log(busqueda2);
});