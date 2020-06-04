class usuario {
    obtener() {
        var name = document.getElementById("username").value;
        var pass = document.getElementById("password").value;

        this.captura(name,pass);
    
    }  

    captura = function(name,pass) {
        function validar() {

            if (name == ""){
                document.getElementById("username").focus();
                return;
            }

            if (pass == ""){
                document.getElementById("password").focus();
                return;
             }
                    
            if (name == "angela" && pass == "123") {
                alert("Hola bienvenid@: " + name);
                document.getElementById("username").value= "";
                document.getElementById("password").value= "";
                document.getElementById("username").focus();
            } 
            else alert("Datos Incorrectos, favor verifique...");
        }

        validar();
    };
}
var newuser = new usuario();
        
 
     