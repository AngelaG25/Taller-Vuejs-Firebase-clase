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

                // llamar funcion asincrona
                getData();
            } 
            else alert("Datos Incorrectos, favor verifique...");
        }

        validar();
    };

    getData = async () => {
        try {
            const post = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/1"
              );
    
        } catch (e) {
          console.error(e);
        }
    };
}
var newuser = new usuario();
        
 
     