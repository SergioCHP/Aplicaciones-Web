
function cambiarTexto(){
    var texto = document.getElementById("texto")
    texto.textContent = "¡El texto ha cambiado!";
}

function cambiarColor(){
    var caja = document.getElementById("caja")
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    caja.style.backgroundColor = color;
}

function crearParrafo(){
    var caja = document.getElementById("caja");
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo añadido";
    caja.appendChild(nuevoParrafo);
}

function borrarParrafo(){
    var caja = document.getElementById("caja");

    if (caja.children.length > 1) {
        caja.removeChild(caja.lastChild)
    }
}

function cambiarTitulo(){
    var titulo = document.getElementById("titulo")
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    titulo.textContent = "Viva el Panel mágico";
    titulo.style.color = color
}