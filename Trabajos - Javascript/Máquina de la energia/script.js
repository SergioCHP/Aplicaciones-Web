function encender(){
    document.getElementById("maquina").style.backgroundColor="green";
    document.getElementById("titulo").innerHTML = "Máquina encendida" ;
    document.getElementById("mensaje").innerHTML = "La máquina está funcionando" ;
}

function apagar(){
    document.getElementById("maquina").style.backgroundColor="red";
    document.getElementById("titulo").innerHTML = "Máquina apagada" ;
    document.getElementById("mensaje").innerHTML = "La máquina está detenida" ;
}
    
function crearMensaje(){
    var maquina = document.getElementById("maquina");
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Mensaje extra";
    maquina.appendChild(nuevoParrafo);   
}

function borrarMensaje(){
    var maquina = document.getElementById("maquina");
    var parrafos = maquina.getElementsByTagName("p");

    if (parrafos.length > 1) {
        maquina.removeChild(parrafos[parrafos.length - 1]);
    }
    
}