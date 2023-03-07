'use strict';
///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (fristName, birthYear) {
  // Instance properties
  this.fristName = fristName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const farzin = new Person('Farzin', 1992);
console.log(farzin);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilada', 2023);
const apachi = new Person('Apachi', 1991);
console.log(matilda, apachi);

console.log(apachi instanceof Person);

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

farzin.calcAge();
apachi.calcAge();

console.log(apachi.__proto__);
console.log(farzin.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(farzin));
console.log(Person.prototype.isPrototypeOf(apachi));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Home Boy';

console.log(farzin.species, matilda.species);

console.log(farzin.hasOwnProperty('fristName'));
console.log(apachi.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(farzin.__proto__);

console.log(farzin.__proto__);
console.log(farzin.__proto__.__proto__);
console.log(farzin.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
