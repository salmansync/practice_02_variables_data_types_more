// String
const firstName = 'Salman';

//  Number
const age = 30;
const temp = 98.0;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740311n;

// Reference Types
const numbers = [1, 2, 3, 4];

const person = {
  name: 'Salman',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
