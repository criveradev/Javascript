/* Condicionales en Javascript */

/***** if *****/
const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

/***** if-else *****/
const temperatura = 25;

if (temperatura > 30) {
    console.log("Hace mucho calor");
} else {
    console.log("La temperatura es agradable");
}

/***** else-if *****/
const nota = 85;

if (nota >= 90) {
    console.log("Sobresaliente");
} else if (nota >= 70) {
    console.log("Notable");
} else if (nota >= 50) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

/***** Switch *****/
const diaDos = 3;

switch (diaDos) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}

/***** Operador ternario *****/
const numero = 10;

const resultado = (numero % 2 === 0) ? "Número par" : "Número impar"; // condicon ? valorSiVerdadero : valorSiFalso
console.log(resultado);

/***** Operador ternario anidado *****/
let calificacion = 85;

let mensaje = (calificacion >= 90) ? "Sobresaliente" :
    (calificacion >= 70) ? "Notable" :
        (calificacion >= 50) ? "Aprobado" : "Reprobado";

console.log(mensaje);

/* Condicional con operadores lógicos */

/***** AND *****/
const usuario = "admin";
const password = "123456";

if (usuario === "admin" && password === "123456") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

/***** OR *****/
const dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
    console.log("Es fin de semana");
} else {
    console.log("Es un día laborable");
}

/***** NOT *****/
const esEstudiante = true;

if (!esEstudiante) {
    console.log("No eres estudiante");
} else {
    console.log("Eres estudiante");
}

   
