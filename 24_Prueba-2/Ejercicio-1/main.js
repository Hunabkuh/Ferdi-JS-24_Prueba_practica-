// 1.(2, 5 puntos) Tus seis familiares quieren entrar en el torneo de ping - pong de tu barrio.Hay algunos
// gastos de inscripción:
// - Adultos, pagan 10 euros, y menores de 18 años, pagan 5 euros
// Para cobrarles el ticket, el cajero pregunta la edad a los seis participantes.
// Crear un programa para preguntar y calcular el monto total de las seis inscripciones, que debes
// mostrar en pantalla o consola.

let edad = 0;
let precioTicket = 0;
let numEntradas = 0;
let totalEntradas = 0;
const cantidadParticipantes = []; //DECLARACION DE VARIABLES

let cantidadTicketsDeseados = parseInt(prompt("Por favor escriba la cantidad de tickets que desea: "));

while (numEntradas < cantidadTicketsDeseados) { //LLENADO DE ARRAY CON EDAD DE PARTICIPANTES

    let edad = parseInt(prompt("Por favor ingrese la edad del participante para calcular el precio del ticket: "));

    if (edad >= 5 && edad < 18) { //FILTRO DE EDAD 1
        precioTicket = 5;
        cantidadParticipantes.push(precioTicket);
        numEntradas++;
        totalEntradas += precioTicket;
    } else if (edad >= 18 && edad <= 80) { //FILTRO DE EDAD 2
        precioTicket = 10;
        numEntradas++;
        totalEntradas += precioTicket;
        cantidadParticipantes.push(precioTicket);
    } else { //FILTRO DE EDAD INCORRECTA
        alert("El torneo de Ping-Pong está reservado a participantes entre 5 y 80 años de edad. Por favor ingrese una edad entre este rango.");
    }

    console.log("Hay " + cantidadTicketsDeseados + " participantes.");
}

console.log("Array de edades : " + cantidadParticipantes); //REVISION ARRAY TOTAL

document.write("Has ingresado " + numEntradas + " participantes al torneo. El monto total a pagar es: " + totalEntradas + "€.");