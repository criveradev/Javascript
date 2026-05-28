/* Operadores en Javascript */

/***** Aritméticos *****/
let a = 10;
let b = 5;

console.log(a + b); // Imprime: 15
console.log(a - b); // Imprime: 5
console.log(a * b); // Imprime: 50
console.log(a / b); // Imprime: 2
console.log(a % b); // Imprime: 0   
console.log(a ** b); // Imprime: 100000

/***** Asignación *****/
let c = 10;

c += 5; // c = c + 5
console.log(c); // Imprime: 15

c -= 3; // c = c - 3
console.log(c); // Imprime: 12

c *= 2; // c = c * 2
console.log(c); // Imprime: 24

c /= 4; // c = c / 4
console.log(c); // Imprime: 6

c %= 4; // c = c % 4
console.log(c); // Imprime: 2

c **= 3; // c = c ** 3
console.log(c); // Imprime: 8   

/***** Comparación *****/
let x = 10;
let y = 5;

console.log(x == y); // Imprime: false
console.log(x != y); // Imprime: true
console.log(x > y);  // Imprime: true
console.log(x < y);  // Imprime: false
console.log(x >= y); // Imprime: true
console.log(x <= y); // Imprime: false

/***** Lógicos *****/
let p = true;
let q = false;

console.log(p && q); // Imprime: false
console.log(p || q); // Imprime: true
console.log(!p);     // Imprime: false
console.log(!q);     // Imprime: true

/***** Incremento y decremento *****/
let i = 10;

console.log(i++);
console.log(i); // Imprime: 11

console.log(++i); // Imprime: 12
console.log(i--); // Imprime: 12

console.log(i); // Imprime: 11
console.log(--i); // Imprime: 10    



/**
 * ! Tabla de verdad del operador lógico AND (&&) ¡
 *
 * A     B     A && B
 * -----------------
 * true  true  true
 * true  false false
 * false true  false
 * false false false
 */

/**
 * ! Tabla de verdad del operador lógico OR (||) ¡
 *
 * A     B     A || B
 * -----------------
 * true  true  true
 * true  false true
 * false true  true
 * false false false
 */

/**
 * ! Tabla de verdad del operador lógico NOT (!) ¡
 *
 * A     !A
 * --------
 * true  false
 * false true
 */
