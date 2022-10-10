console.log('Hola mundo');

// ** ------ variables

/* JS es de debil tipado y dinámico.
 - Se puede asignar cualquier tipo de valor a una variable
 - Si asina un valor de string a una variable, fácilmente     puede volver a recibir un número y no presenta problema
 */

let firstName = 'Nico';
const lastName = 'Valencia'; // no podemos reasignar su valor
var edad = 26; // ya no es recomendable.

console.log(firstName);
firstName = 'Camilo'; // con let podemos reasignar el valor de esa variable
console.log(firstName);

{ // esto es un scope
  var scope1 = true; // esta var también puede ser accedida desde el scope global (Esto es un problema)
  let scope2 = true; // esta variable solo puede ser accedida desde este scope local
}

console.log(scope2); // undefined