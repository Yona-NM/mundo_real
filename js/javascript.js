function captura(){
    var causaruc= document.getElementById("causaruc").value;
    var comuna= document.getElementById("comuna").value;
    var tribunal= document.getElementById("tribunal").value;
    var parte= document.getElementById("parte").value;
    var udenuncia= document.getElementById("udenuncia").value;
    var delito= document.getElementById("delito").value;
    var funcionario= document.getElementById("funcionario").value;
    var udiligencia= document.getElementById("udiligencia").value;
    var torden= document.getElementById("torden").value;
    var texbox= document.getElementById("texbox").value;

    if (causaruc=="") {
        alert("El numero de Causa es obligatorio");
        document.getElementById("causaruc").focus();
    
    }else {

        if (comuna=="") {
            alert("campo Comuna es obligatorio");
            document.getElementById("comuna").focus();
    }else {
        if (tribunal=="") {
            alert("campo tribunal es obligatorio");
            document.getElementById("tribunal").focus();
    } else{
        if (parte=="") {
            alert("campo Parte es obligatorio");
            document.getElementById("parte").focus();
    }

    else {
        if (udenuncia=="") {
            alert("campo Denuncia es obligatorio");
            document.getElementById("udenuncia").focus();
    }

    else {
        if (delito=="") {
            alert("campo delito  es obligatorio");
            document.getElementById("delito").focus();
    }

    else {
        console.log(causaruc+ "" + comuna + "" + tribunal + ""+ parte + "" + udenuncia + "" + delito + ""+ funcionario + "" + udiligencia + "" + torden + "" + texbox + "" );
        document.getElementById("causaruc").value="";
        document.getElementById("comuna").value="";
        document.getElementById("tribunal").value="";
        document.getElementById("parte").value="";
        document.getElementById("udenuncia").value="";
        document.getElementById("delito").value="";
        document.getElementById("funcionario").value="";
        document.getElementById("udiligencia").value="";
        document.getElementById("torden").value="";
        document.getElementById("texbox").value="";
        document.getElementById("causaruc").focus();
    }
    
}
}
 
}
}
}
}



function captura2(){
    var causasalida= document.getElementById("causasalida").value;
    var ofunidad= document.getElementById("ofunidad").value;
    var respuesta= document.getElementById("respuesta").value;

    if (causasalida=="") {
        alert("El numero de Causa es obligatorio");
        document.getElementById("causasalida").focus();
    
    }else {

        if (ofunidad=="") {
            alert("campo oficio es obligatorio");
            document.getElementById("ofunidad").focus();
    }else {
        if (respuesta=="") {
            alert("debes seleccionar respuesta");
            document.getElementById("respuesta").focus();
    }

    else {
        console.log(causasalida+ "" + ofunidad + "" + respuesta + "" );
        document.getElementById("causasalida").value="";
        document.getElementById("ofunidad").value="";
        document.getElementById("respuesta").value="";
        document.getElementById("causasalida").focus();
    }

}

}
}

function captura3(){
    var usuariologin, contraseñalogin;

    usuariologin = document.getElementById("usuariologin").value;
    contraseñalogin = document.getElementById("contraseñalogin").value;

    if (usuariologin == "yonathan" && contraseñalogin == "1234"){

        window.location="ingreso_oojj.html";

    }

    if (usuariologin == "yonathan" && contraseñalogin == "1234"){

        window.location="salida_oojj.html";

    }

    if (usuariologin=="") {
        alert("El nombre de usuario es obligatorio");
        document.getElementById("usuariologin").focus();
    
    }
    else {

        if (contraseñalogin=="") {
            alert("Ingrese contraseña porfavor");
            document.getElementById("contraseñalogin").focus();
    }
}
}