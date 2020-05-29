class usuario {
    obtener() {
        var name = document.getElementById("username").value;
        var pass = document.getElementById("password").value;

        this.captura(name,pass);
    
    }  

    captura = function(name,pass) {
        function validar() {
                    
            if (name == "angela" && pass == "123") {
                alert("Bienvenido: " + name);
            } 
            else alert("Usuario Incorrecto, verifique...");
        }

        validar();
    };
}
var newuser = new usuario();
        
 
     