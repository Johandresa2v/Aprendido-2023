$(document).ready(function(){
// MouseOver y MouseOut 

    var caja = $("#caja");
    var caja2 = $("#caja2");
    //mouseover cuando esta encima del elemento
    caja.mouseover(function(){
        $(this).css("background", "red");
    });
    //mouseout cuando sale del area del elemento
    caja.mouseout(function(){
        $(this).css("background", "green");
    });

    
    function color_blue(){
        $(this).css("background", "blue");
    };
    function color_gris(){
        $(this).css("background", "gray");
    };
//Hover este método realiza la misma función que mouseover y mouseout
    caja2.hover(color_blue,color_gris);

//Click, Doble click 
    caja.click(function(){
        $(this).css("background","black").css("color","white");
    });
    caja.dblclick(function(){
        $(this).css("background","white").css("color","black").css("border","2px solid black");
    });

//Focus y blur
    var nombre = $("#nombre")
    var datos = $("#datos")
    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", "2px solid transparent");
        $("#datos").text($(this).val()).show();//.tex introduce el valor escrito en el input .show hace visible el elemento div oculto
    });

//Mousedown es cuando presiono y mouseup cuando suelto el click
    datos.mousedown(function(){
        $(this).css("border-color", "red");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "blue");
    });

    //Mousemove - nota event esta en desuso 
    //con este código hago que el div sígueme siga el puntero 
    $(document).mousemove(function(){
        $("#sigueme").css("left", event.clientX).css("top", event.clientY);
    });
});