'use strict';

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2.
// const [gk, ...fielplayer] = players1;
// console.log(gk, fielplayer);
// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'preiscic'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
const weekdays = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 23,
  },
};

const restaurant = {
  name_: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Oreder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///split & join
console.log('a+very+nice+string'.split('+'));
console.log('Farzin Jimenez'.split(' '));
const [fristName, lastName] = 'Farzin Jimenez'.split(' ');

// const newName = ['Mr.', fristName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🎄' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
//////////////////////////
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first = '', second = ''] = row.toLowerCase().trim().split(' ');
//     // console.log(row.toLowerCase().trim().split('_'));
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(`${output.padEnd(20)}${'📃'.repeat(i + 1)}`);
//   }
// });

// capitalizeName('jessica ann smit davis');
// capitalizeName('farzin jimenez');

// // Padding
// const massage = 'Go to gate 23!';
// console.log(massage.padStart(20, '+').padEnd(30, '+'));
// console.log('farzin'.padStart(20, '+').padEnd(30, '+'));

// const maskcridtcard = function (number) {
//   const str = number + ' ';
//   const last = str.slice(-4);

//   return last.padStart(str.length, '*');
// };

// console.log(maskcridtcard(4663225665566));
// console.log(maskcridtcard('123256335453665'));

// ///
// const massage2 = 'bad weather.. ALL Deparatues Delayed...';
// console.log(massage2.repeat(5));
// const planeInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🎃'.repeat(n)}`);
// };
// planeInLine(6);
// planeInLine(12);
// planeInLine(7);
// const airLine = 'TAP Air Portugal';

// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// const passenger = 'fArZiN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const name1 = 'fArZiN';
// console.log(name1.toLowerCase());

// const emial = 'hello@jonas.io';
// const loginEmail = 'Hello@Jonas.Io \n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(emial === normalizedEmail);

// // replacing
// const priceGB = '288.97*';
// const priceUS = priceGB.replace('*', '$').replace('.', ',');
// console.log(priceUS);

// const announcemen = 'all passengers come to bording door 23. bording door 23!';
// console.log(announcemen.replace('door', 'gate'));
// console.log(announcemen.replace(/door/g, 'gate'));
// // Bolean

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// ////practic exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gan')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('welcome aboard');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camer');
// checkBaggage('got some snacks and a gan for protection');

///////////////////////////////
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B120'[0]);

// console.log(airLine.length);
// console.log('B320'.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddlesSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('you got lucky');
// };

// checkMiddlesSeat('11B');
// checkMiddlesSeat('23C');
// checkMiddlesSeat('3E');

// console.log(new String('farzin'));
// console.log(typeof new String('farzin'));
// console.log(typeof new String('farzin').slice());

// const gameEvents = new Map([
//   [17, 'Goal⚽'],
//   [36, 'Substitution📃'],
//   [47, 'Goal⚽'],
//   [61, 'Substitution📃'],
//   [64, 'Yellow card 📙'],
//   [69, 'Red card🎈'],
//   [70, 'Substitution📃'],
//   [72, 'Substitution📃'],
//   [76, 'Goal⚽'],
//   [80, 'Goal⚽'],
//   [92, 'Yellow card 📙'],
// ]);
// //1.

// const event1 = [...new Set(gameEvents.values())];
// console.log(event1);

// //2.

// gameEvents.delete(64);
// console.log(gameEvents);

// //3.

// console.log(
//   `An event happend, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happend, on average, every ${time / gameEvents.size} minutes`
// );

// //4.
// for (const [min, event1] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event1}`);
// }

////////////////////////
// const question = new Map([
//   ['question', 'what is the best programming lenguage in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// /// convert map to arry
// console.log([...question]);

// console.log([...question.keys()]);
// console.log([...question.values()]);
////////////////////////////
//Map Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal').set(3, 'Farsi, Persia'));

// rest
//   .set('categoria', ['italian', 'farsi', 'pizzeria', 'vegetrania', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// //rest.clear
// console.log(rest.has('categoria'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];

// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

///////////////////////////////
// const ordersSet = new Set([
//   'Focaccia',
//   'Bruschetta',
//   'Garlic Bread',
//   'Caprese Salad',
// ]);
// console.log(ordersSet);
// console.log(new Set('farzin'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Focaccia'));
// console.log(ordersSet.has('far'));

// ordersSet.add('pizzzza');
// ordersSet.delete('Caprese Salad');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const saftt = ['farzin', 'godarz', 'farzad', 'farzad', 'sina', 'Farzin'];

// const safttUnique = [...new Set(saftt)];
// console.log(safttUnique);

// console.log(
//   new Set(['farzin', 'godarz', 'farzad', 'farzad', 'sina', 'Farzin']).size
// );

// console.log(new Set('Hola como estas').size);
///////////////////////////
//coding challenge#2

const game = {
  team1: 'farzin apache',
  team2: 'nizraf apache',
  players: [
    [
      'Neuer',
      'pavard',
      'Martinez',
      'alaba',
      'Davies',
      'coman',
      'mullar',
      'granby',
      'farzad',
      'kimmich',
      'lewandoski',
    ],
    [
      'Burki',
      'sachuz',
      'Hummels',
      'akaji',
      'Hakimi',
      'razi',
      'saadi',
      'weigl',
      'brandt',
      'Gotze',
      'brandon',
    ],
  ],
  score: '4:0',
  scored: ['lewandoski', 'granby', 'lewandoski', 'Hummels'],
  date: 'Nov 9th, 2020',
  odds: {
    team1: 1.23,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const proposit = Object.keys(openingHours);
// console.log(proposit);

// let openStr = `We are open on ${proposit.length} days: `;
// for (const day of proposit) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire objects

// const entries = Object.entries(openingHours);
// //console.log(entries);
// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }
// console.log(restaurant.order?.(0, 1) ?? 'method dors not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [];

// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//////////////////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'la Pizerra',
//   owner: 'Giovanni Rossi',
// };
//OR  assignment operator
// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignmant operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// //AND  assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.numGuests &&= '<ANONYMOUS>';
// rest2.numGuests &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
////////////////////////////////////////
// restaurant.numGuste = 0;
// const guests = restaurant.numGusts || 10;
// console.log(guests);

// const guestCorreect = restaurant.numGusts ?? 10;
// console.log(guestCorreect);

// console.log(3 || 'farzin');
// console.log('' || 'farzin');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 4 || 'far' || null);

// restaurant.numGuests = 7;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---AND---');
// console.log(0 && 'farzin');
// console.log(7 && 'farzin');
// console.log('FARZIN' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinsch');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinsch');

// const arr = [1, 2, 3, ...[3, 4]];
// const [a, b, c, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, c, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// restaurant.orderPizza('mushroom', 'onion', 'olvies', 'spinach');
// // restaurant.orderPizza('mashroom');

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 4, 2, 1);
// add(8, 9, 6, 3, 4, 2, 1, 7);

// const x = [23, 5, 9];
// add(...x);

/*
//////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; 
console.log(badNewArr);

const arr2 = [10, 55, 999, 5];
const arrfarzin = [arr2[2], arr2[1]];
console.log(arrfarzin);

const newArr = [1, 2, ...arr2];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'sabzipolobamahi'];
console.log(newMenu);
/// copy arraye
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
///////////Iterbles : arrays, strings, maps, sets. NOT objectos
const str = 'farzin';
const lettras = [...str, ' ', 'S.'];
console.log(lettras);
console.log(...str);

//Real-world example
const ingredients = [
  prompt('Let make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'resturante farsi';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//////////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'calle 51 #79-33',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'calle 51 #79-33',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
///////////////////
restaurant.orderDelivery({
  address: 'calle 51 #79-33',
  starterIndex: 1,
});

const { name_, openingHours, categories } = restaurant;
console.log(name_, openingHours, categories);
let a = 888;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
///////////////////////
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 1];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, f, [j, k]] = nested;
console.log(f, j, k);

const [g = 1, h = 1, l = 1] = [8, 9];
console.log(g, h, l);
*/
