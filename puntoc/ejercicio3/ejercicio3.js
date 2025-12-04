/*Un programa debe mostrar el mes del año según el número ingresado (1 al 12).
Ejemplo: 1 → Enero, 2 → Febrero, ..., 12 → Diciembre.*/

// importar el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear la  instancia del prompt
const prompt = promptSync();
// solicitamos el número del mes
let mes = parseInt(prompt("Ingrese un número del 1 al 12 para saber el mes correspondiente :"));
// hacemos una condicional múltiple para mostrar el mes correspondiente
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8: 
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;  
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Número inválido. Por favor ingrese un número del 1 al 12.");
        break;
}

