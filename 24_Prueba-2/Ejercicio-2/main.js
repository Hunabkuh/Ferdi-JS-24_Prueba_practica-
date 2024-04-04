// 2.(2 puntos) Pedirle al usuario un tipo de mascota, y su nombre.Crear una función que reciba
// esos datos, e imprima en pantalla o consola un mensaje del tipo: “tu mascota es un(mascota
// introducida por usuario) y su nombre es(nombre introducido por usuario)”. No necesita return.

function listadoMascotas(tipo, nombre) {
    console.log("tu mascota es un/una " + tipo + " y su nombre es: " + nombre + ".");
}
do {
    let tipoMascota = prompt("Por favor, ingrese un tipo de mascota preferido para la lista: ");
    let nombreMascota = prompt("Ahora escribe el nombre de esa mascota");
    listadoMascotas(tipoMascota, nombreMascota);
    continuarListado = prompt("¿Desea continuar listando animales?:\n 1. Sí.\n 2. No.");
} while (continuarListado !== 2) {
    let tipoMascota = prompt("Por favor, ingrese un tipo de mascota preferido para la lista: ");
    let nombreMascota = prompt("Ahora escribe el nombre de esa mascota");
    listadoMascotas(tipoMascota, nombreMascota);
}