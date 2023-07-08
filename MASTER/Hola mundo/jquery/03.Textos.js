$(document).ready(function(){

    reloadLinks();

//NOTA: podemos mezclar funciones jquery con javascript
    //Uso el evento click para capturar la información dentro del input y con .val lo introduzco en donde quiero
    $('#add_button').click(function(){
        $('#menu').append('<li><a href="' + $("#add_link").val() +'"></a></li>' );
        $("#add_link").val('');
        reloadLinks();
    });




    console.log($('a').length);//Cantidad de elementos con la etiqueta a

    function reloadLinks(){
    //:attr busca el atributo href y lo imprime por consola
    $('a').each(function(index){
        console.log($(this).attr("href"));
        //Creamos una variable that para no sobrecargar el dom con tanto this
        var that = $(this);
        var enlace = $(this).attr("href");
        that.attr('target','_blank');//Agrega el atributo target _blank lo que hace que se abra el enlace en otra pestaña
//.text introduce los enlaces en el html

        that.text(enlace)
        

    });;}







});