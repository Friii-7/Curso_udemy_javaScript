'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// const interface = 'Audio';
// const private = 534;

/*
///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
  }
  // calling / running / invoking function
  logger();
  logger();
  logger();
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  const num = Number('23');
  */

///////////////////////////////////////
// Function Declarations vs. Expressions
// Function declaration
/*
function calcAge1(brithYeah) {
    return 2022 - brithYeah;
}

const age1 = calcAge1(1991);

function calcRectArea(width, height) {
    return width * height;
  }
  
  console.log(calcRectArea(5, 6));
  // expected output: 30

// Function expression
const calcAge2 = function(brithYeah){
    return 2031 - brithYeah;
}

const age2 = calcAge2(1992);

console.log(age1, age2);

const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // expected output: 12
//////////////////////////////////////////////
*/
//Arrow Function
/*
const calcAge3 = brithYeah => 2037 -brithYeah;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement  = (brithYeah, fristName)=>{
    const age = 2037 - brithYeah;
    const retirement = 65 -age;
    // return retirement;
    return `${fristName} retires in ${retirement} years `;
}
console.log(yearsUntilRetirement(1991,'Farzin')); //Farzin retires in 19 years 
console.log(yearsUntilRetirement(1989,'Farzad')); //Farzad retires in 17 years 

*/
////////////////////////////

// function calling other function

/*const cutPieces = function (fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};
console.log(fruitProcessor(2,3));
*/
/*
function cutFruitPieces(fruit){
    return fruit * 16;
}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,4));
*/

//////////////////////
// Reviewing Functions
/*const calcAge = function (brithYeah) {
    return 2037 - brithYeah;
}
 const yearsUntilRetirement = function(fristName, brithYeah){
    const age = calcAge(brithYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${fristName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${fristName} has already retired`)
        ;
        return -1;
    }
}

console.log(yearsUntilRetirement('Farzin', 1991));
console.log(yearsUntilRetirement('Farzad', 1989));
*/

/////////////////////////////////////
// Coding Challenge #1

/*
const calcAverage = (a, b, c)=> (a + b + c)/ 3;
console.log(calcAverage(3, 4, 5));

//test1

let scoreDolphines = calcAverage(44, 23, 71);
let scoreKoales = calcAverage (49, 54, 65);
console.log(scoreDolphines,scoreKoales);

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win 🏆 ( ${avgDolphins} vs. ${avgKoalas})`);
    } 
    if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }
    if
     {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphines, scoreKoales);
checkWinner(111, 457);


//test 2

scoreDolphines = calcAverage(85, 54, 41);
scoreKoales = calcAverage(23, 34, 27);

console.log(scoreDolphines, scoreKoales);
checkWinner(scoreDolphines,scoreKoales);
*/

///////////////////////////////////////
// Basic Array Operations (Methods)
/*
const friend = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
//console.log(newLength);
friends.unshift('John');
console.log(friends);
/*
// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

*/
/*
const friend1 = 'Farzin';
const friend2 = 'Yisel';
const friend3 = 'Daniel';

const friends = ['Farzin', 'Yisel', 'Daniel'];
console.log(friends);


console.log(friends[2]);
friends.unshift('sara'[-1]);
console.log(friends);
*/

/*
const calaAge = function (brithYeah){
    return 2037 - brithYeah
}

const years =[1991, 1989, 1970, 1899];
const age1 = calaAge(years[0]);
const age2 = calaAge(years[2]);
const age3 = calaAge(years[years.lenght -1]);
console.log(age1, age2, age3);


const ages = [calaAge(years[0]), calaAge(years[1]), calaAge(years[years.length - 1])];
console.log(ages);
*/

///////////////////////////////////
/*
//Basic Array  Operation (methods)

const friends = ['Michel', 'Steven', 'Peter', 'koskesh'];
console.log(length[2]);
// add elements

const newLength = friends.push('sara');//(4)['Michel', 'Steven', 'Peter', 'sara']
console.log(friends);
console.log(newLength);

friends.unshift('Farzin');//(5) ['Farzin', 'Michel', 'Steven', 'Peter', 'sara']
console.log(friends);

//Remove
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('koskesh'));
console.log(friends.indexOf('Steven'));


console.log(friends);
*/

////////////////////////
//#2chaleng
/*
const calcTip =function(bill){
    return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

*/
////////////////////
/*
const farzinArray = [
    'Farzin',
    'Jimenez',
    2022 - 1992,
    'programmer',
    ['Yisel', 'Daniel', 'David']
];

const farzin = {
    fristName: 'Farzin',
    lastName:'Jimenez',
    age : 2022 -1992,
    job : 'programmer',
    friends: ['Yisel', 'Daniel', 'David']
};

const nameKey = 'Name';
console.log(farzin['frist' + nameKey]);
console.log(farzin['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Farzin? Choose beween');

console.log(farzin[interestedIn])



farzin.location = 'portugal';
farzin['twitter'] = '@jonasschmedtman';
console.log(farzin);


///////////////// 
//Chanleng 
console.log(`${farzin.fristName}, has ${farzin.friends.length} frineds, and his best friends, and his best friends is called ${farzin.friends[0]}`);

*/
/*function calcAge(fechanacimiento){
    return 2022 - fechanacimiento ;
}
const edad = calcAge(1992);
console.log(edad);

function calaAge1 (brithYeah){
    return 2030 - brithYeah;
}
const edad2 = calaAge1(1991);
console.log(edad2);


const car = ['toyota', 'citroen', 'bmw'];
 car [0] = 'volvo';
 car.push('audi');
 console.log(car);
 console.log(car[2]);
 
 const cars = ["Saab", "Volvo", "BMW"];

 */
/*
 const farzin = {
    fristName : 'Farzin',
    lastName : 'Jimenez',
    job : 'programador',
    age : 1992,
    friends: ['Yisel', 'Daniel', 'David'],
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2022 - this.age;
        return this.age;
    },
    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
 };

console.log(farzin.calcAge());
//console.log(farzin['calcAge'](1991));
*/
//challeng#3
/*
const leonardo = {
    fullName : 'leonardo morales ',
    mass : 84 ,
    height : 1.77 ,
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const farzin = {
    fullName : 'Farzin Jimenez',
    mass : 70 ,
    height : 1.80 ,
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

leonardo.calcBMI();
farzin.calcBMI();
console.log(leonardo.bmi, farzin.bmi);

if (leonardo.bmi > farzin.bmi) {
    console.log(`${leonardo.fullName}'S BMI ${leonardo.bmi}' is higher than ${farzin.fullName}'s BMI (${farzin.bmi})`)
}else if (farzin.bmi > leonardo.bmi){
    console.log(`${farzin.fullName}'S BMI ${farzin.bmi}' is higher than ${leonardo.fullName}'s BMI (${leonardo.bmi})`)
}


*/

///////////////
//Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
/*
for (let rep = 1; rep <= 10; rep++){
    
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  const types = [];
  // console.log(jonas[0])
  // console.log(jonas[1])
  // ...
  // console.log(jonas[4])
  // jonas[5] does NOT exist
  for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
  } 
   
   console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}

  console.log(types);
  const years = [1991, 2007, 1969, 2020];
  const ages = [];
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
*/

///////////////////////////////////////
// Looping Backwards and Loops in Loops
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

  // 0, 1, ..., 4
 // 4, 3, ..., 0


for (let i = jonas.length -1; i >= 0; i--){
    console.log(i, jonas[i]);
}
for  (let exercise = 1; exercise < 8; exercise++){
    console.log(`-------- Starting exercise ${exercise}`);

for ( let rep = 1; rep < 8; rep++){
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♀️ `);
}

}
*/

// The while Loop
/*
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♀️.`);
    rep++;
}

let dice = Math.random() * 6

console.log(dice);


while(dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
 
}
*/

//Coding Challenge #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
