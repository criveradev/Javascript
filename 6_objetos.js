/* Objetos en JavaScript */

{/* Declaración de objetos */ }

let usuario = {
    nombre: "Claudio",
    edad: 35,
    ciudad: "Talca"
};

{/* Acceso a propiedades */ }

console.log(usuario.nombre); // "Claudio"
console.log(usuario["edad"]); // 35

{/* Métodos para recorrer objetos */ }

/***** for...in ******/
for (let propiedad in usuario) {
    console.log(propiedad); // "nombre", "edad", "ciudad"
    console.log(usuario[propiedad]); // "Claudio", 35, "Talca"
}

{/* Métodos para obtener información del objeto*/ }

/**** Object.keys() --> Devuelve un array con las claves del objeto *****/
Object.keys(usuario); // ["nombre", "edad", "ciudad"]

/**** Object.values() --> Devuelve un array con los valores del objeto *****/
Object.values(usuario); // ["Claudio", 35, "Talca"] 

/**** Object.entries() --> Devuelve un array de pares [clave, valor] *****/
Object.entries(usuario); // [["nombre", "Claudio"], ["edad", 35], ["ciudad", "Talca"]]

{/* Métodos para copiar o transformar objetos */ }

/***** Object.assign() --> Copia propiedades de un objeto a otro *****/
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objeto3 = Object.assign(objeto1, objeto2);
console.log(objeto3); // { a: 1, b: 2, c: 3, d: 4 } 

/***** Object.fromEntries —-> Convierte pares [clave, valor] en objeto *****/
const pares = [["nombre", "Claudio"], ["edad", 35], ["ciudad", "Talca"]];
const nuevoObjeto = Object.fromEntries(pares);
console.log(nuevoObjeto); // { nombre: "Claudio", edad: 35, ciudad: "Talca" }   

/***** structuredClone —-> Clona objetos profundamente *****/
const original = { nombre: "Claudio", detalles: { edad: 35, ciudad: "Talca" } };
const clon = structuredClone(original);
clon.detalles.edad = 40;

console.log(original.detalles.edad); // 35 (el objeto original no se ve afectado por el cambio en el clon)  

{/* Métodos para proteger objetos */ }

/**** Object.freeze() --> No permite modificar nada *****/
const congelado = Object.freeze({ nombre: "Claudio", edad: 35 });
congelado.edad = 40; // No tiene efecto, el objeto está congelado
console.log(congelado.edad); // 35

/**** Object.seal() --> No permite agregar/eliminar propiedades *****/
const sellado = Object.seal({ nombre: "Claudio", edad: 35 });
sellado.edad = 40; // Permite modificar la propiedad existente
sellado.ciudad = "Talca"; // No tiene efecto, no se pueden agregar nuevas propiedades
console.log(sellado); // { nombre: "Claudio", edad: 40 }    

/***** Object.preventExtensions -—> No permite agregar nuevas propiedades *****/
const sinExtensiones = Object.preventExtensions({ nombre: "Claudio", edad: 35 });
sinExtensiones.ciudad = "Talca"; // No tiene efecto, no se pueden agregar nuevas propiedades
console.log(sinExtensiones); // { nombre: "Claudio", edad: 35 } 

{/* Métodos para inspeccionar propiedades */ }

/**** Object.hasOwn() --> Verifica si una propiedad existe *****/
const persona = { nombre: "Claudio", edad: 35 };
Object.hasOwn(persona, "nombre"); // true
Object.hasOwn(persona, "ciudad"); // false

/***** Object.getOwnPropertyNames —-> Lista todas las propiedades ******/
Object.getOwnPropertyNames(persona); // ["nombre", "edad"]

/**** Object.getOwnPropertyDescriptor() --> Muestra detalles de una propiedad *****/
const descriptor = Object.getOwnPropertyDescriptor(persona, "nombre");
console.log(descriptor);

/***** spread --> copiar, combinar o agregar propiedades *****/
const personaDos = { nombre: "Claudio", edad: 35 };
const datos = { ...personaDos, ciudad: "Talca" };
const profesion = { profesion: "Desarrollador" };
const datosCompletos = { ...personaDos, ...profesion, ciudad: "Talca" };

console.log(datos);// { nombre: "Claudio", edad: 35, ciudad: "Talca" }
console.log(datosCompletos); // { nombre: "Claudio", edad: 35, profesion: "Desarrollador", ciudad: "Talca" }

/***** rest --> separar propiedades específicas y guardar el resto *****/
const usuarioDos = { id: 1, nombre: "Ana", rol: "admin", activo: true };

const { nombre, ...resto } = usuarioDos;

console.log(nombre); // "Ana"
console.log(resto);// { id: 1, rol: "admin", activo: true }
