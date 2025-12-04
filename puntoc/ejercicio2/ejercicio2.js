/*4. Condicional múltiple
Un programa debe clasificar la velocidad de un vehículo:
• Si la velocidad es menor a 30 → “Muy lento”
• Entre 30 y 60 → “Velocidad moderada”
• Entre 61 y 100 → “Rápido”
• Mayor a 100 → “Muy rápido”*/

// importar el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

// solicitamos la velocidad
let velocidad = parseFloat(prompt("Ingrese la velocidad del vehículo por favor :"));
// hacemos una condicional múltiple para clasificar la velocidad
if (velocidad < 30) {    
    console.log("Muy lento");
} else if (velocidad >= 30 && velocidad <= 60) {
    console.log("Velocidad moderada");
} else if (velocidad >= 61 && velocidad <= 100) {
    console.log("Rápido");
} else {
    console.log("Muy rápido");
}