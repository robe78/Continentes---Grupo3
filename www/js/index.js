$(document).ready(function(){  

/*
$(function(){
marcar = function(elemento){
elemento = $(elemento);
elemento.prop("checked", true);
}

desmarcar = function(elemento){
elemento = $(elemento);
elemento.prop("checked", false).checkboxradio("refresh");
}
});
*/

  $(".btn").click(function(){
        
    var dato1,dato2,dato3;
        var result="";
    if ($('#checkbox-1a').is(':checked')) {
        dato1="<img src='img/spain.png' alt='spain' height='200'><br><p>España</p><br>";
        result=dato1;
        $("#checkbox-1a").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca

    }
    if ($('#checkbox-2a').is(':checked')) {
        dato2="<img src='img/francia.png' alt='francia' height='200'><br><p>Francia</p><br>";
        result+=dato2;
        $("#checkbox-2a").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-3a').is(':checked')) {
        dato3="<img src='img/inglaterra.png' alt='inglaterra' height='200'><br><p>Inglaterra</p><br>";
        result+=dato3;
        $("#checkbox-3a").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }

    if ($('#checkbox-1b').is(':checked')) {
        dato1="<img src='img/marruecos.png' alt='marruecos' height='200'><br><p>Marruecos</p><br>";
        result=dato1;
        $("#checkbox-1b").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-2b').is(':checked')) {
        dato2="<img src='img/camerun.png' alt='camerun' height='200'><br><p>Camerun</p><br>";
        result+=dato2;
        $("#checkbox-2b").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-3b').is(':checked')) {
        dato3="<img src='img/senegal.png' alt='senegal' height='200'><br><p>Senegal</p><br>";
        result+=dato3;
        $("#checkbox-3b").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }

    if ($('#checkbox-1c').is(':checked')) {
        dato1="<img src='img/china.png' alt='china' height='200'><br><p>China</p><br>";
        result=dato1;
        $("#checkbox-1c").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-2c').is(':checked')) {
        dato2="<img src='img/japon.png' alt='japon' height='200'><br><p>Japon</p><br>";
        result+=dato2;
        $("#checkbox-2c").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-3c').is(':checked')) {
        dato3="<img src='img/tailandia.png' alt='tailandia' height='200'><br><p>Tailandia</p><br>";
        result+=dato3;
        $("#checkbox-3c").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }

    if ($('#checkbox-1d').is(':checked')) {
        dato1="<img src='img/usa.png' alt='usa' height='200'><br><p>USA</p><br>";
        result=dato1;
        $("#checkbox-1d").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-2d').is(':checked')) {
        dato2="<img src='img/brasil.png' alt='brasil' height='200'><br><p>Brasil</p><br>";
        result+=dato2;
        $("#checkbox-2d").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-3d').is(':checked')) {
        dato3="<img src='img/mejico.png' alt='mejico' height='200'><br><p>Mejico</p><br>";
        result+=dato3;
        $("#checkbox-3d").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    
    if ($('#checkbox-1e').is(':checked')) {
        dato1="<img src='img/australia.png' alt='australia' height='200'><br><p>Australia</p><br>";
        result=dato1;
        $("#checkbox-1e").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-2e').is(':checked')) {
        dato2="<img src='img/samoa.png' alt='samoa' height='200'><br><p>Samoa</p><br>";
        result+=dato2;
        $("#checkbox-2e").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    if ($('#checkbox-3e').is(':checked')) {
        dato3="<img src='img/nuevaz.png' alt='nueva zelanda' height='200'><br><p>Nueva Zelanda</p><br>";
        result+=dato3;
        $("#checkbox-3e").prop("checked", false).checkboxradio( "refresh" ); // para quitar la marca
    }
    



    document.getElementById("resultado").innerHTML=result;
    result="";
    });
}); 


