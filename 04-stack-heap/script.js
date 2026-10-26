// Values are stored on the stack
const name = 'Salman';
const age = 22;

// Reference values are stored on the heap
const person = {
  name: 'Salman',
  age: 22,
};

let newName = name;
newname = 'Farsi';

let newPerson = person;
newPerson.name = 'Shadman';

console.log(name, newName);
console.log(person, newPerson);
