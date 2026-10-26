// Ways to declare a variable
// var, let , const

let firsName = 'Salman';
let lastName = 'Farsi';

console.log(firsName, lastName);

let age = 22;

console.log(age);

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

console.log(arr);

arr.push(5);
console.log(arr);

const person = {
  name: 'Salman',
};

person.name = 'Farsi';
person.email = 'salmansycn.now@gmail.com';
console.log(person);

// Declare multiple value at once

let a, b, c;
const d = 10,
  e = 11,
  f = 12;
