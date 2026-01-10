
function cambiarColor(){
    var parrafo1 = document.getElementById("parrafo1");
    if ( parrafo1.style.backgroundColor == "yellow") {
        parrafo1.style.backgroundColor = "white";
    } else {parrafo1.style.backgroundColor = "yellow";}
}

function ocultarParrafo(){
    var parrafo2 = document.getElementById("parrafo2");
    parrafo2.style.display="none";
}

function muestraParrafo(){
    var parrafo2 = document.getElementById("parrafo2");
    parrafo2.style.display="";
}