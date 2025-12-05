/*Un cajero automático presenta el siguiente menú:
1. Consultar saldo
2. Retirar dinero
3. Depositar dinero
4. Salir
Crea un programa con switch que muestre la acción correspondiente según el número
ingresado.
Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1
y 4?*/

// importamos el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

// mostrar el menú al usuario
console.log("Menú del cajero automático:");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");
// solicitar al usuario que ingrese una opción
const opcion = parseInt(prompt("Ingrese una opcion (1-4): "));
// usamos switch para determinar la acción q hace el usuario según la opción ingresada
switch (opcion) {
    case 1:
        console.log("Has seleccionado: Consultar saldo");
        break;
    case 2:
        console.log("Has seleccionado: Retirar dinero");    
        break;
    case 3:
        console.log("Has seleccionado: Depositar dinero");
        break;
    case 4:
        console.log("Has seleccionado: Salir");
        break;
    default:
        console.log("Opción no valida. Por favor, ingrese un numero entre 1 y 4");
        break;
}