'use strict';
// const tavalod = {
//   dia: 7,
//   mess: 'junio',
//   año: 1992,
//   booking: [],

//   //foncion
//   book(name, happy) {
//     console.log(
//       `${name} el dia  ${this.dia} en el ${this.mess} de año  ${this.año} es fecha nacimien: ${happy} `
//     );
//     this.booking.push({
//       start: `${name} naci el dia ${this.dia} es de ${happy}`,
//     });
//   },
// };
// tavalod.book('farzin', 'cumpleaños');
// tavalod.book('apachi', 'cumpleaños');
// console.log(tavalod);

// const nizraf = {
//   dia: 10,
//   mess: 'julio',
//   año: 1991,
//   booking: [],
// };
// const book = tavalod.book;
// book.call(nizraf, 'farzad', 'tavalodesh');
// console.log(nizraf);
/////////////////////////////////////////////////////////////////

// const lofthansa = {
//   airLine: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book : funcion (){}
//   book(fightNum, name1) {
//     console.log(
//       `${name1} booked a saet on ${this.airLine} flight ${this.iataCode}${fightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${fightNum}`, name1 });
//   },
// };

// lofthansa.book(239, 'Farzin Jimenez');
// lofthansa.book(635, 'nizraf farzad');
// console.log(lofthansa);

// const book = lofthansa.book;

// const eurowings = {
//   airLine: 'eurowings',
//   iataCode: 'LH',
//   bookings: [],
// };

// //call method
// book.call(eurowings, 239, 'Yisel mosalavo');
// console.log(eurowings);
// book.call(lofthansa, 239, 'farzin nizraf');
// console.log(lofthansa);

// const swiss = {
//   airLine: 'Siwss Air lines',
//   iataCode: 'Xl',
//   bookings: [],
// };
// book.call(swiss, 589, 'daniel marquez');
// console.log(swiss);

// const flightData = [546, 'Yisel mosalave'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Biend method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lofthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'steven williams');

// const bookEW23 = book.bind(eurowings, 44);

// bookEW23('steven williams');
// bookEW23('marta copper');
// ////////////////////////////////////
// //with Event Listener

// lofthansa.planes = 300;
// lofthansa.buyPlane = function () {
//   console.log(this);
// };
// this.planes++;
// console.log(this.planes);

// document
//   .querySelector('.buy')
//   .addEventListener('click', lofthansa.buyPlane.bind(lofthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAt = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));
// ///////////
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

////////////////////////
// const poll = {
//   question: 'what is your favorite programing language?',
//   options: ['0: javaScript', '1: Paython', '2: Rust', '3: c++'],
//   //this genarates [0, 0, 0, 0]. more in the next section
//   answers: new Array(4).fill(0),
//   registarNewAnsewer() {
//     //get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // console.log(this.answers);
//     // Registar answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registarNewAnsewer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
/////////////////////////////////////////////////////
// IIFE : Expersion de funcion ejecutada inmediamente
// Immediately Invoked Function Expressions (IIFE)

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE
// (function () {
//   console.log('this will never run again');
//   const isPrivate = 30;
// })();
// // console.log(isPrivate);

// (() => console.log('This will also never run'))();
////////////////////////////////////////////

// const secoreBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengeres`);
//   };
// };
// const booker = secoreBooking();

// booker();
// booker();
// booker();

// console.dir(booker);
////////////////////////////////////////////////////////

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// //
// h();
// f();
// console.dir(f);
// //example 2
// const boardPassengers = function (n, wait) {
//   // const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are 3 groupo , each with ${perGroup} passenger`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} segundo`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);
///////////////////////////////////////////////
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
////////////////////////////////////////////////////
///////////////*************************//////////////////////////////////

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
