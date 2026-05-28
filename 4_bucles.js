/* Bucles en Javascript */

/***** for *****/
for (let i = 0; i < 5; i++) { // i es la variable de control, 0 es el valor inicial, 5 es la condición de continuación y i++ es el incremento
    console.log(i);
}

/***** while *****/
let x = 0;

while (x < 3) { // x es la variable de control, 0 es el valor inicial y 3 es la condición de continuación. El bloque de código se ejecuta mientras la condición sea verdadera.
    console.log("x vale:", x);
    x++;
}

/***** do-while *****/
let z = 0; // z es la variable de control, 0 es el valor inicial. El bloque de código se ejecuta al menos una vez y luego se verifica la condición (z < 3) para decidir si se repite o no.

do {
    console.log("Ejecutado una vez");
    z++;
} while (z < 3);

/***** for-of *****/
const frutas = ["manzana", "banana", "naranja"];

for (const fruta of frutas) { // fruta es la variable de control que toma el valor de cada elemento del array frutas en cada iteración.
    console.log(fruta);
}

/***** for-in *****/
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for (const clave in persona) { // clave es la variable de control que toma el valor de cada propiedad del objeto persona en cada iteración.
    console.log(clave + ": " + persona[clave]);
}   
