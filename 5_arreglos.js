/* Arrays en JavaScript */

{/* Declaración de arrays */ }

let colores = ["rojo", "verde", "azul"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["texto", 42, true, null];

{/* Acceso a elementos */ }

console.log(colores[0]); // "rojo"
console.log(numeros[2]); // 3
console.log(mixto[1]);   // 42

{/* Métodos para recorrer arrays) */ }

/***** for ******/
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]); // "rojo", "verde", "azul"
}

/*** for...of ******/
for (let color of colores) {
    console.log(color); // "rojo", "verde", "azul"
}

/*** forEach() --> Ejecuta una función por cada elemento *****/
numeros.forEach(num => console.log(num));// 1, 2, 3
numeros.forEach((num, index) => console.log(`Índice ${index}: ${num}`)); // Índice 0: 1, Índice 1: 2, Índice 2: 3
numeros.forEach(num => console.log(num * 2));// 2, 4, 6

/**** map() --> Crea un nuevo array transformado *****/
[1, 2, 3, 4, 5].map(num => num * num); // [1, 4, 9, 16, 25]
["rojo", "verde", "azul"].map(color => color.toUpperCase()); // ["ROJO", "VERDE", "AZUL"]

/**** filter() --> Crea un nuevo array con elementos que cumplen condición *****/
[1, 2, 3, 4, 5].filter(num => num % 2 === 0); // [2, 4]
["rojo", "verde", "azul"].filter(color => color.includes("e"));// ["verde"]

/**** reduce() --> Reduce el array a un solo valor *****/
[1, 2, 3].reduce((acc, n) => acc + n, 0); // 6
[1, 2, 3].reduce((acc, n) => acc * n, 1); // 6
["rojo", "verde", "azul"].reduce((acc, color) => acc + color, ""); // "rojoverdeazul"

{/* Métodos que modifican el array (mutables) */ }

/***** push() --> Agrega al final *****/
numeros.push(3);// [1, 2, 3, 4, 5, 3]

/***** pop() --> Quita el último *****/
numeros.pop();// [1, 2, 3, 4, 5]

/***** unshift() --> Agrega al inicio *****/
numeros.unshift(0);// [0, 2, 3, 4, 5]

/***** shift() --> Quita el primero *****/
numeros.shift();// [2, 3, 4, 5]

/***** splice() --> Agrega, elimina o reemplaza *****/
numeros.splice(1, 0, 1.5);// [2, 1.5, 3, 4, 5] --> Inserta el elemento 1.5 en el índice 1 sin eliminar ningún elemento (0 elementos eliminados)
numeros.splice(1, 1);// [2, 3, 4, 5] --> Elimina el elemento en el índice 1 (1.5) y devuelve un array con el elemento eliminado

{/* Métodos que NO modifican el array (inmutables) */ }

/***** slice() --> Corta una parte *****/
mixto.slice(0, 3); // ["texto", 42, true] --> Corta una porción del array desde el índice 0 hasta el índice 3 (sin incluir el índice 3) y devuelve un nuevo array con los elementos cortados

/***** concat() Une arrays *****/
let mixtosDos = ['Rojo', 'Verde', 'Azul'];
let coloresMixtos = mixto.concat(mixtosDos); // ["texto", 42, true, null, "Rojo", "Verde", "Azul"]

{/* Métodos de búsqueda */ }

/***** indexOf() --> Índice del elemento *****/
["a", "b", "c", "d"].indexOf("c"); // 2

/***** includes() --> ¿Existe? *****/
["a", "b", "c", "d"].includes("b"); // true

/***** find() --> Primer elemento que cumpla condición *****/
[5, 10, 15, 20].find(num => num > 12); // 15

/***** findIndex() --> Índice del primer elemento que cumpla condición *****/
[5, 10, 15, 20].findIndex(num => num > 12); // 2

{/* Métodos de ordenamiento y transformación */ }

/**** sort() --> Ordena el array *****/
[3, 1, 4, 2].sort(); // [1, 2, 3, 4] 
["rojo", "verde", "azul"].sort(); // ["azul", "rojo", "verde"]

/**** reverse() --> Invierte el orden *****/
[1, 2, 3].reverse(); // [3, 2, 1]
["rojo", "verde", "azul"].reverse(); // ["azul", "verde", "rojo"]

/**** fill() —-> Rellena *****/
[1, 2, 3, 4].fill(0); // [0, 0, 0, 0]
[1, 2, 3, 4, 5, 6].fill(0, 1, 4); // [1, 0, 0, 0, 5, 6] --> Rellena con 0 desde el índice 1 hasta el índice 4 (sin incluir el índice 4) 

/***** copyWithin —-> Copia dentro del mismo array ******/
[1, 2, 3, 4].copyWithin(1, 3); // [1, 4, 3, 4] --> Copia el elemento del índice 3 (4) al índice 1, sobrescribiendo el valor original en el índice 1 (2)

{/* Métodos de conversión */ }

/**** join() --> Convierte a string *****/
["a", "b", "c"].join("-"); // "a-b-c"
["Hola", "mundo"].join(" ");// "Hola mundo"
[1, 2, 3].join("");// "123"
["🍎", "🍌", "🍇"].join(" | ");// "🍎 | 🍌 | 🍇"
["nombre", "edad", "ciudad"].join(",");// "nombre,edad,ciudad"

/**** toString() --> Convierte a cadena *****/
[1, 2, 3].toString(); // "1,2,3"
["rojo", "verde", "azul"].toString(); // "rojo,verde,azul"
[1, "hola", true].toString();// "1,hola,true"
console.log(new Date().toString()); // "Sat, 15 Jun 2024 12:00:00 GMT" (ejemplo de fecha actual en formato UTC)

/**** JSON.stringify() --> Convierte a JSON *****/
JSON.stringify({ nombre: "Juan", edad: 30 }); // '{"nombre":"Juan","edad":30}'    

/**** rest ******/
function sumar(...nums) {
    return nums.reduce((a, b) => a + b);
}

sumar(1, 2, 3, 4); // 10

/*** spread *****/
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

{/* Métodos para arrays anidados */ }

/**** flat() --> Aplana arrays anidados *****/
[1, [2, 3], [[4, 5]]].flat(); // [1, 2, 3, [4, 5]]
[1, [2, 3], [[4, 5]]].flat(2); // [1, 2, 3, 4, 5]

/**** flatMap() --> Combina map y flat *****/
[1, 2, 3].flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]
["rojo", "verde"].flatMap(color => color.split("")); // ["r", "o", "j", "o", "v", "e", "r", "d", "e"]
