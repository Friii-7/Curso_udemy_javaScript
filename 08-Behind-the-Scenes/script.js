'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Farzin';
//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'farzin';
// calcAge(1991);

// function razaDegato(nombre) {
//   console.log('la raza de mi gato es :' + nombre);
// }
// razaDegato('persaaaa');

// function comidaFavorito(nombre) {
//   console.log('mi comida favorito es :' + nombre);
// }
// comidaFavorito('chicharon');

// var x = 5;
// (function () {
//   var x = 10;
//   console.log('x:', x);
// })();
// const material = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(material.map(material => material.length));
// function far(a) {
//   return a + 100;
// }
// console.log(far(5));

// variables
//

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1991);
// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const farzin = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// farzin.calcAge();

// const matilda = {
//   year: 1989,
// };
// matilda.calcAge = farzin.calcAge;
// matilda.calcAge();
// const f = farzin.calcAge;
// f();
var fristName = 'matilda';
const farzin = {
  fristName: 'Farzin',
  year: 1991,
  claAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${fristName}`);
  },
};
farzin.greet();
farzin.claAge();

const addExper = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExper(5, 8);
addExper(5, 7, 8, 9, 1, 5);

var addArrow = (a, b) => a + b;

const me = {
  name: 'farzin',
  age: 30,
};
const friend = me;
friend.age = 21;

console.log('friend:', friend);

console.log('me:', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'farzin';
let oldLastName = lastName;
lastName = 'farzad';
console.log(lastName, oldLastName);

const jecica = {
  fristName: 'jecica',
  lastName: 'williams',
  age: 30,
};
const marriedJecica = jecica;
marriedJecica.lastName = 'farzad';

console.log('before marriage:', jecica);
console.log('after marriage:', marriedJecica);

const jecica2 = {
  fristName: 'jecica',
  lastName: 'williams',
  age: 30,
  familia: ['alice', 'bob'],
};
const jessicaCopy = Object.assign({}, jecica2);
jessicaCopy.lastName = 'david';

jessicaCopy.familia.push('mary');
jessicaCopy.familia.push('jecicacopy');

console.log('before marriage:', jecica2);
console.log('after marriage:', jessicaCopy);
