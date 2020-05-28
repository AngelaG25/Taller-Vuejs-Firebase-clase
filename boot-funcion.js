
var datosu = "angela";
var datocon = 123;

var Captura= function ()  {
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("contra").value;

    if (usuario == ""){
        document.getElementById("usuario").focus();

    } else {

        if (contra == ""){
           document.getElementById("contra").focus();
        } else {
            
            if ((usuario == datosu) && (contra == datocon)){
                alert("Bienvenido: " + usuario);
                 document.getElementById("usuario").value= "";
                 document.getElementById("contra").value= "";
                 document.getElementById("usuario").focus();
            } else {
               alert("Usuario no válido, favor verifique...");
            } 
           
        }
    }

}   