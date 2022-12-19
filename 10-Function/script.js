'use strict';
const lofthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book : funcion (){}
  book(fightNum, name1) {
    console.log(
      `${name1} booked a saet on ${this.airLine} flight ${this.iataCode}${fightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${fightNum}`, name1 });
  },
};

lofthansa.book(239, 'Farzin Jimenez');
lofthansa.book(635, 'nizraf farzad');
console.log(lofthansa);

const eurowings = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
};
const book = lofthansa.book;

//call method
book.call(eurowings, 239, 'Yisel mosalavo');
console.log(eurowings);
book.call(lofthansa, 239, 'farzin nizraf');
console.log(lofthansa);

const swiss = {
  airLine: 'Siwss Air lines',
  iataCode: 'Xl',
  bookings: [],
};
book.call(swiss, 589, 'marjan khaksar');
console.log(swiss);

const flightData = [546, 'Yisel mosalave'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Biend method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lofthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven williams');

const bookEW23 = book.bind(eurowings, 23);

///////////////////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('farzin');
// greeterHey('Jimenez');

// greet('hello')('farzin');

// //chaleng
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('hello')('Farzin');

/////////////////////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // higher-order function

// const transformer = function (str, fn) {
//   console.log(`orginal string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`transformed by : ${fn.name}`);
// };
// transformer('javaScript is the best', upperFirstWord);
// transformer('javaScrip is the best!', oneWord);

// //Js uses callback all the time
// const high5 = function () {
//   console.log('🏆');
// };
// document.body.addEventListener('click', high5);

// ['jonas', 'farzin', 'yisel'].forEach(high5);

/////////////////////////

// const bookings = [];
// const creatBooking = function (
//   flightNum,
//   numPassengeres = 7,
//   price = 199 * numPassengeres
// ) {
//   //   numPassengeres = numPassengeres || 1;
//   //   price = price || 199;

//   const booking = { flightNum, numPassengeres, price };
//   console.log(booking);
//   bookings.push(booking);
// };
// creatBooking('LH123');
// creatBooking('LH123', 2, 800);
// creatBooking('LH123', 2);
// creatBooking('LH123', 4);
// creatBooking('LH123', 1000);
