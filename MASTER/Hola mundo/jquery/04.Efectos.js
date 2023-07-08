$(document).ready(function(){

    //Animaciones 

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn("slow");//FadeIn oculta y slow muestra la animación lenta
        //$("#caja").fadeTo("slow",1);//FadeTo realiza las misma función pero tiene 2 estados el 1 es activo 
        //Si le pongo 0.8 en ves de 1 esto hará que se opaque y se puede graduar
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut("slow");//FadeOut hace visible y slow muestra la animación lenta
        //$("#caja").fadeTo("slow",0);//FadeTo realiza las misma función pero tiene 2 estados el 0 es inactivo
        
    });

    //toggle realiza ambos efectos de ocultar y visualizar
    //slideToggle realiza un efecto de arriba hacia abajo
    $("#todoenuno").click(function(){
        $("#caja2").toggle("fast");
    });

    $("#animar").click(function(){
        $("#caja2").animate({
                                marginLeft: "500px",//mueve el contenedor al centro
                                fontSize: "40px",
                                height: "115"
                            }, "slow")
                            .animate({
                                borderRadius: "900px",
                                marginTop: "80px"
                            }, "slow").animate({
                                borderRadius: "100px",
                                marginTop: "0px"
                            }, "slow")
    });
});