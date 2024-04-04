// 4.(3 puntos) Interacción con el DOM de HTML, y con el estilo de CSS.En un campo input se
// pregunta en qué medio quieres viajar, pide que se introduzca la palabra “barco”, “bicicleta” o “locomotora”
// (u otros). Según la respuesta:
// - Mostrar en pantalla un mensaje y una imagen adecuados a cada caso
// - Cambiar el color de fondo de la página(tres colores diferentes según la respuesta).


function cambiadorMedios() {
    let medio = document.getElementById("seleccion-medio").value;
    document.getElementById("ocultador").style = "display: none";

    switch (medio) {
        case "barco":
            document.getElementById("fondobody").style = "background-color: yellow";
            document.getElementById("barco").style = "visibility: visible";
            document.getElementById("locomotora").style = "display: none";
            document.getElementById("bicicleta").style = "display: none";
            break;

        case "locomotora":
            document.getElementById("fondobody").style = "background-color: blue";
            document.getElementById("locomotora").style = "visibility: visible";
            document.getElementById("barco").style = "display: none";
            document.getElementById("bicicleta").style = "display: none";
            break;

        case "bicicleta":
            document.getElementById("fondobody").style = "background-color: red";
            document.getElementById("bicicleta").style = "visibility: visible";
            document.getElementById("locomotora").style = "display: none";
            document.getElementById("barco").style = "display: none";
            break;

        default:

            break;
    }
}