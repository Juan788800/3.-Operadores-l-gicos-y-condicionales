/*Crea un programa que pregunte la temperatura de una ciudad y muestre:
• “Hace calor” si la temperatura es mayor o igual a 30.
• “Clima agradable” en caso contrario.*/

// importar el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

// solicitamos la temperatura
let temperatura = parseFloat(prompt("Ingrese la temperatura de la ciudad por favor :"));

// hacemos una condicional simple si es mayor o igual a 30 imprime Hace calor si no imprime Clima agradable 
if (temperatura >= 30) {    
    console.log("Hace calor");
} else {
    console.log("Clima agradable");
}