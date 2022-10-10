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


// ------- Tipos de datos primitivos

// son inmutables

let numb = 1;
let str = 'Hola';
let bool = true || false; 
let und = undefined; 
let nl = null; 

//no son tan importantes:
let Bent = BigInt;
let smb = Symbol; 

// mutables

let obj = Object;
let arr = Array; 


// todo en JS es un objeto
const firstName2 = 'Miguel'; 
// ya podemos acceder a varios metodos como: 
const firstNameToUpperCase = firstName2.toUpperCase(); // no funciona porque el tipo string no se puede mutar. 
// No se puede modificar un string. Se pueden crear otros strings a partir de uno. 
console.log(firstNameToUpperCase); // ahora si el string me lo devuelve en mayúscula porque creó uno nuevo a partir de otro. 


const list = []; // con const no se puede reasignar pero su valor si puede cambiar
list.push(1); // aquí el valor del array ha cambiado (Ha mutado/cambiado su valor)
console.log(list);

console.log(list[0]); // Para acceder al primer elemento siempre se accede desde el Cero. 

// para hacer arrays inmutables creamos uno nuevo a partir de otro: 
const anotherList = list.concat(2);
console.log(anotherList);


// ------- Objetos

const persona = {
  name: 'orlando',
  lastName: 'Valenc',
  twitter: '@nicovale',
  edad: 28,
  isDeveloper: true
}

// accedemos por notación de punto: 
const CompleteName = `${persona.name} ${persona.lastName}`;
console.log(CompleteName);

const field = 'twitter';
console.log(persona[field]); // esto eqivale a persona.twitter
// output : @nicovale



//----- funciones 

//Reciben parámetros y al darles valor se convierten en argumentos de esa función

// las funciones "son ciudadanos de primera clase"


//function expression
const sumar = (operando1, operando2) => { 
  console.log(operando1)
  console.log(operando2)
  return operando1 + operando2
}

// con funciones expresivas no tenemos problemas de hoisting

console.log(sumar(2, 6)); 

// se pueden mandar también variable como parámetros:
let num1 = 4; 
let num2 = 8; 

console.log(sumar(num1, num2));

//Declarative function
function restar(a, b) {
  return a - b
}

restar(10, 5); 
// esta función se puede llavar desde la línea 1 ya que Javascript aplica Hoisting

console.log(restar(8, 4));


