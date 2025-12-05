/*1. Acceso a un sistema
Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:
• El nombre de usuario es "admin".
• La contraseña es "1234".
Si no cumple las dos condiciones, debe mostrar "Acceso denegado".
Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan
ambas condiciones?*/

// importamos el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();

//solicitamos el nombre de usuario y su contraseña
let usuario = prompt("ingrese su nombre de usuario por favor:")
let contraseña = prompt("ingrese su contraseña por favor:")

// hacemos una condicional, usamos el if si el usuario == admin y contraseña == 1234 se le permite el acceso al sistema y el else si usario no es igual a usuario y contraseña no es igual ala contraseña le imprime un mensaje de acceso denegado 
if (usuario == "admin" && contraseña == "1234"){ //&& sirve para evaluar dos o mas expresiones
    console.log("acceso permitido")
    console.log("bienvenido al sistema ")
}
else{
    console.log("acceso denegado")
    console.log("no puede acceder al sistema")

}