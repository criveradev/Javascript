/* Funciones en Javascript */

// Declaración de una función
function saludar() {
    console.log("¡Hola, mundo!");
}

// Llamada a la función
saludar(); // ¡Hola, mundo!

// Función con parámetros
function saludarPersona(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludarPersona("Ana"); // ¡Hola, Ana!

// Función con parámetros y valor de retorno
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8

// Función anónima
let multiplicar = function (a, b) {
    return a * b;
};

console.log(multiplicar(4, 2)); // 8

// Arrow functions (funciones flecha)
let dividir = (a, b) => {
    return a / b;
};

console.log(dividir(10, 2)); // 5

// Función con un solo parámetro (sin paréntesis)
let elevarAlCuadrado = x => {
    return x * x;
};

console.log(elevarAlCuadrado(5)); // 25

// Función con un solo parámetro y retorno implícito (sin llaves)
let elevarAlCubo = x => x * x * x;

console.log(elevarAlCubo(3)); // 27

// Función con múltiples parámetros y retorno implícito
let calcularAreaRectangulo = (base, altura) => base * altura;

console.log(calcularAreaRectangulo(4, 5)); // 20                






