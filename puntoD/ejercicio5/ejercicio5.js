/*5. Sistema de calificaciones con condiciones lógicas
Un estudiante aprueba una materia si:
• Su nota final es mayor o igual a 60 y
• Su asistencia es mayor o igual al 80%.
Si no cumple ambas condiciones, debe mostrar "Reprobado".


Pregunta de análisis: ¿Qué operador lógico garantiza que ambas condiciones se
evalúen al mismo tiempo?*/


// importamos el módulo prompt-sync
import promptSync from 'prompt-sync';
// crear una instancia del prompt
const prompt = promptSync();
// solicitar la nota final del estudiante
const notaFinal = parseFloat(prompt("Ingrese la nota final del estudiante por favor (0-100): "));   
// solicitar el porcentaje de asistencia del estudiante
const asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia del estudiante por favor (0-100): "));
// verificar si el estudiante aprueba o reprueba según las condiciones dadas
if (notaFinal >= 60 && asistencia >= 80) { //&& operador lógico que garantiza que ambas condiciones se evalúen al mismo tiempo
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

