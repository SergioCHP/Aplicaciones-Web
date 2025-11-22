/*var usuario = prompt("Elige un nombre de usuario")
var pass = prompt("Hola " + usuario + " elige una contraseña")

 if (usuario == "admin" && pass == "1234") {
        alert("Bienvenido de nuevo, amigo")
    } else if (usuario != "admin") {
        alert("El usuario es incorrecto")
    } else {
        let i = 3
        while (i != 0 ) {
        
        
                i = i-1
            }
            alert("Te has equivocado al introducir la contraseña. Tienes "+i+" oportunidades mas")
    }
*/

    
        var usuario = prompt("Elige un nombre de usuario")
        var pass = prompt("Hola " + usuario + " elige una contraseña")
        
        
        if (usuario == "admin" && pass == "1234") {
            alert("Bienvenido de nuevo, amigo")
        } else if (usuario != "admin") {
            alert("El usuario es incorrecto")
        } else { 
            i=2
            do{      
                alert("Te has equivocado al introducir la contraseña. Tienes "+i+" oportunidades mas")
                i--
                var pass = prompt("Hola " + usuario + " elige una contraseña")
            }while(i!=0)
        }
        

   
    
