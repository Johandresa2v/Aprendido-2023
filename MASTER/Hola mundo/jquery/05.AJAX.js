$(document).ready(function(){
    
    //Load ayuda a incrustar información

    //$("#datos").load("https://reqres.in/");

    //GET 
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>")
        });
    });

    //POST
    var usuario = {
        "name": "johan almeida",
        "empleo": "programador"
    }
    $.post("https://reqres.in/api/users?page=2", usuario, function(response){
        console.log(usuario);
    });

    //Usuario POST
    $("#formulario").submit(function(e){
        e.preventDefault();
    });
    var usuario22 = {
        "name: ": $('input[name="name"]').val(),//.val toma el dato escrito en html 
        "empleo: ": $('input[name="empleo"]').val()
    }
    console.log(usuario22)
    //Por POST desde el HTML
    $.post($(this).attr("action"), usuario22, function(response2){
        console.log(response2);
    }).done(function(){
        alert("datos agregados correctamente")
    });
//Con el método $.ajax puedo realizar muchas mas funciones de manera mas simple y limpio
    $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando usuario...");
        },
        success: function(response){
            console.log(response)
        },
        error: function(){
            console.log("A ocurrido un error");
        },
        timeout:10000
    })

    return false;
    
});