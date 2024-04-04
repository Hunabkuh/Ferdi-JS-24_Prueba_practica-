// 3.(2, 5 puntos) Tienes un array vacío ‘películas’. Pides al usuario que introduzca algunos títulos
// de película, que se irán añadiendo al array uno a uno. Para salir, que escriba ‘salir’. Debería evitarse
// que se añada el valor ‘salir’ a la lista de películas.

//Después:
// - Ordenar alfabéticamente los títulos(usar el método JS correspondiente)
// - Imprimir en consola o pantalla el array, pero cada título en una línea diferente.

const peliculas = [];

let cantidadPelis = prompt("Ingrese un número para indicar cuántas películas quiere que haya en la lista?");

for (let i = 0; i < cantidadPelis; i++) {

    let titulo = prompt('Por favor introduzca un título de película.\n Para salir del programa y mostrar su lista escriba "salir".');

    if (titulo !== "salir") {
        peliculas.push(titulo); // AGREGAR PELICULAS
    } else {
        i = cantidadPelis;

    }

}

console.log(peliculas.sort()); // ORDENAR PELICULAS EN CONSOLA





