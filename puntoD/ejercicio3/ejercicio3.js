/*3. Clasificación de números
Crea un programa que pida un número entero y muestre:
• "Número positivo" si el número es mayor que 0.
• "Número negativo" si es menor que 0.
• "Cero" si es igual a 0.
Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
número es par o impar?*/

// importamos el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

// solicitar un número entero al usuario
const numero = parseInt(prompt("Ingrese un numero entero por favor: "));
// verificar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("Numero positivo");
} else if (numero < 0) {
    console.log("Numero negativo");
}
else {
    console.log("Cero");
}
// extension verificar si el número es par o impar
if (numero !== 0) { 
    if (numero % 2 === 0) { 
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}
