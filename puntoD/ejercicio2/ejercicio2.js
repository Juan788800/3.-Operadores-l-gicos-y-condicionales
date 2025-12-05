/*2. Calcular precio de entradas al cine
Un cine aplica las siguientes reglas:
• Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
• Si tiene entre 12 y 18 años, el valor es 8000.
• Si es mayor de 18, el valor es 10000.

GFPI-F-135 V04

• Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
al valor de la entrada.

Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if-
else if-else o switch? ¿Por qué?*/

// importamos el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

// solicitar la edad del cliente
const edad = parseInt(prompt("Ingrese la edad del cliente por favor: "));
// solicitar si el cliente es estudiante
const esEstudianteInput = prompt("¿El cliente es estudiante? (si/no): ");
const esEstudiante = esEstudianteInput === 'si';
let precioEntrada = 5000;

// determinar el precio base de la entrada según la edad
if (edad < 12) {
    precioEntrada;
} else if (edad >= 12 && edad <= 18) {
    precioEntrada = 8000;
} else {
    precioEntrada = 10000;
}
// aplicar descuento si el cliente es estudiante
if (esEstudiante) {
    precioEntrada *= 0.8; // aplicar un descuento del 20%
}
//imprimos el precio de la entrada
console.log("El precio de la entrada es: " + precioEntrada);