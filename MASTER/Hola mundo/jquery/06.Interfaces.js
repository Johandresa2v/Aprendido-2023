$(document).ready(function(){
    console.log("Gracias Dios")

    //Mover elementos por la pantalla al darle click presionado
    $(".elemento").draggable();
    //REDIMENSIONAR puede cambiar el tamaño del elemento   
    $(".elemento").resizable();
    //SELECCIONAR ELEMENTOS permite que los elementos puedan ser seleccionados
    $(".lista-seleccionable").selectable();
    //SELECCIONAR Y ORDENAR puedo cambiar el orden de la lista seleccionando con el click presionado y moviéndolo en la lista 
// forma basica    $(".lista-seleccionable2").sortable();
    $(".lista-seleccionable2").sortable({
        //Con update podría tomar la lista cambiada y guardarla en un array o hacer mas funciones diferentes
        update: function(event, ui){
            console.log("cambiaste el orden de la lista")
        }
    });
    //DROP
    $("#elemento-movido").draggable();
    $("area").droppable({
        drop: function(){//drop detecta cuando suelto el elemento dentro del otro elemento
            console.log("has soltado algo en el area");
        }
    });

    //EFECTOS
    $("#mostrar").click(function(){
        //Divide la elemento en cuadros y desaparece
        $(".caja-efectos").toggle("explode");
        //Se desliza hacia arriba
        $(".caja-efectos").toggle("slide");
        //Aparece desde la izquierda
        $(".caja-efectos").toggle("explode");
        //Aparece en zoon y se reduce hasta su tamaño
        $(".caja-efectos").toggle("puff");
        //Sacude el elemento de derecha a izquierda y le pongo la velocidad de 4segundos
        $(".caja-efectos").toggle("shake", 4000);
    });
    //Tooltip le pone un efecto especial y estilos al mensaje title que se muestra cuando posas el mouse encima
    $(document).tooltip();
    //Dialog muestrra un cuadro de dialogo flotante muy bonito
    //$("#popup").dialog();
    $("#mostrar-dialogo").click(function(){
        $("#popup").dialog();
    });
    //Datepicker
    $("#calendario").datepicker();
    //Tabs me crea unas pestañas con estilos css
    $("#pestanas").tabs();
});